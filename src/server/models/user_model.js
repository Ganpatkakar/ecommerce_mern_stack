let mongoose = require('mongoose');
let Schema = mongoose.Schema;

export const userSignUpSchema = new Schema({
    firstName : {type : String, require : true},
    lastName : {type : String, require : true},
    email: {type : String, require : true, unique : true},
    password : {type : String, require : true},
    role: {type: String, require: true}
});