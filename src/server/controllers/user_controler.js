import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import {userSignUpSchema} from "../models/user_model";
const uniqueValidator = require('mongoose-unique-validator');
userSignUpSchema.plugin(uniqueValidator);
const Registration = mongoose.model('Registration', userSignUpSchema);

export const userSignUpController = (req, res) => {
    const newUserSignup = new Registration({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email: req.body.email,
        password : bcrypt.hashSync(req.body.password),
        role: "user"
    });
    console.log(newUserSignup);

    newUserSignup.save((err, user) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        res.status(201).json({
            message: 'User created',
            success: true
        });
    });
};

export const userSignInController = (req, res) => {
    console.log(req.body.email);

    Registration.findOne({email: req.body.email}, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        if (!user) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid User Credentials'}
            });
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid User Credentials'}
            })
        }

        let token = jwt.sign({user: user}, "secureKakar", {expiresIn: 7200});
        res.status(200).json({
            title: 'Login Success Full',
            token: token,
            userEmail: user.email,
            userName: user.firstName
        });
    });
};