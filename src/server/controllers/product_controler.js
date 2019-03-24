import mongoose from 'mongoose';
import {productSchema, productCategorySchema} from "../models/product_model";

const Product = mongoose.model('Product', productSchema);
const uniqueValidator = require('mongoose-unique-validator');
productCategorySchema.plugin(uniqueValidator);
const Category = mongoose.model('Category', productCategorySchema);

export const productInsertController = (req, res) => {
  let newProduct = new Product(req.body);

  newProduct.save((err, product)=>{
      if(err){
          console.log('error occurred while inserting product::', err);
          return res.status(401).json({
              title: 'product insertion failed',
              error: err
          });
      }
      res.send(product);
  });
};

export const productGetController = (req, res) => {
  Product.find({}, (err, response) => {
      if(err){
          console.log("error while retriving products::", err);
          return res.status(401).json({
              title: 'product reteriving error',
              error: err
          });
      }
      res.send(response);
  })
};

export const categoryAndSubCategoryInsertController = (req, res) => {
  let newCategory = new Category({
      category: req.body.category,
      subCategory: [req.body.subCategory]
  });

    Category.findOne({category: req.body.category}, (err, foundCategory) => {
        if(err){
            console.log("error while finding category::", err);
            return res.status(401).json({
                title: 'Find Product category error',
                error: err
            });
        }
        console.log(foundCategory);
        if(!foundCategory) {
            console.log("category didn't found so insert category directly");
            newCategory.save(function (err, response) {

                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred while inserting category',
                        error: err
                    });
                }

                return res.status(201).json({
                    message: 'category submitted',
                    success: true
                });
            });
        } else {
            console.log("category found", foundCategory.subCategory.indexOf(req.body.subCategory));
            if (foundCategory.subCategory.indexOf(req.body.subCategory) === -1) {
                foundCategory.subCategory.push(req.body.subCategory);
                foundCategory.save();
                return res.status(201).json({
                    message: 'category updated',
                    success: true
                });
            }
            return res.status(400).json({
                message: 'Category and Subcategory already present',
                success: false
            });
        }
    })

};

export const categorySearch = (req, res) => {
    Category.find({}, (err, category)=>{
        if(err){
            console.log('error while searching category');
            return res.status(401).json({
                title: 'Category search error',
                error: err
            });
        }
        res.send(category);
    })
};