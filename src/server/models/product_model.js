import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const productSchema = new Schema({
    title : {type: String, require: true},
    price: {type: Number, require:true},
    category: {type: String, require: true},
    subCategory: {type: String, require: true},
    image: {type: String, require: true}
});

export const productCategorySchema = new Schema({
    category: {type: String, require: true},
    subCategory:[{type: String, require: true, unique: true}]
});