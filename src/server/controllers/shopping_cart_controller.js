import mongoose from 'mongoose';
import {shoppingCartSchema} from "../models/shoping_cart_model";

const shoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

export const shoppingCartController = (req, res) => {
    let cartDataBody = {
        dateCreated: req.body.date,
        userId: req.body.userId,
        cartData: [
            {
                productID: req.body.productID,
                productName: req.body.productName,
                productCategory: req.body.productCategory,
                productSubCategory: req.body.productSubCategory,
                count: req.body.count
            }
        ]
    };
    const newShoppingCart = new shoppingCart(cartDataBody);

    shoppingCart.findOne({userId: req.body.userId}, (err, cartPresent) => {
        if (err) {
            console.log("Error while searching userid in the cart::", err);
            return res.status(401).json({
                title: 'Error while searching userid in the cart',
                error: err
            });
        }
        if (!cartPresent) {
            console.log('user is not present add item to cart directly');
            newShoppingCart.save((err, cart) => {
                if (err) {
                    console.log("error occured while adding product to cart::", err);
                    return res.status(401).json({
                        title: "Error while saving data to cart",
                        error: err
                    })
                }
                res.send(cart);
            });
        } else {
            let flagProdcutPresent = false;
            for (let product of cartPresent.cartData) {
                if (product.productID === req.body.productID) {
                    console.log("user is present and product is also present in user cart");
                    flagProdcutPresent = true;
                    product.count = req.body.count;
                }
            }
            if (flagProdcutPresent) {
                console.log("user is present and product is also present in user cart Save::", cartPresent);
                cartPresent.save((err, cart) => {
                    if (err) {
                        console.log("error occured while updating product count to cart::", err);
                        return res.status(401).json({
                            title: "error occured while updating product count to cart",
                            error: err
                        })
                    }
                    res.send(cart);
                });
            } else {
                console.log("user is present but product is not present in user cart");
                cartPresent.cartData.push(cartDataBody.cartData[0]);
                cartPresent.save((err, cart) => {
                    if (err) {
                        console.log("error with adding product for present user::", err);
                        return res.status(401).json({
                            title: "error with adding product for present user",
                            error: err
                        })
                    }
                    res.send(cart);
                });
            }
        }
    });
};

export const getShoppingCartController = (req, res) => {
    console.log("req user params::", req.params.userId);
    //res.send("request received");
    shoppingCart.findOne({userId: req.params.userId}, (err, cart) => {
        if (err) {
            console.log("Error while searching for a userId in Shopping cart::", err);
            return res.status(401).json({
                title: "Error while searching for a userId in Shopping cart",
                error: err
            });
        }
        res.send(cart.cartData);
    });
};

export const removeProductShoppingCart = (req, res) => {
    shoppingCart.findOne({userId: req.body.userId}, (err, cartPresent) => {
        if (err) {
            console.log("Error with Shopping cart userId::", err);
            return res.status(401).json({
                title: "Error with Shopping cart userId",
                error: err
            });
        }
        if (!cartPresent) {
            res.send("No Cart found for user");
        } else {
            let flagProdcutPresent = false;
            for (let a = cartPresent.cartData.length - 1; a >= 0; a--) {
                if (cartPresent.cartData[a].productID === req.body.productID) {
                    flagProdcutPresent = true;
                    cartPresent.cartData.splice(a, 1);
                    break;
                }
            }
            if (flagProdcutPresent) {
                console.log("user is present and product is also present in user cart Save::", cartPresent);
                cartPresent.save((err, cart) => {
                    if (err) {
                        console.log("error occured while updating product count to cart::", err);
                        return res.status(401).json({
                            title: "error occured while updating product count to cart",
                            error: err
                        })
                    }
                    res.send(cart);
                });
            } else {
                res.send("Product is not found in cart")
            }
        }
    });
};
