import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const shoppingCartSchema = new Schema({
    dateCreated: {type: String, require: true},
    userId: {type: String, require: true},
    cartData: [
        {
            productID: {type: String},
            productName: {type: String},
            productCategory: {type: String},
            productSubCategory: {type: String},
            count: {type: Number}
        }
    ]
});