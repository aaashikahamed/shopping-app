import Users from '../db_models/users.js';
import bcryptjs from 'bcryptjs'
import { errHandler } from '../utilities/err.js';
import jwt from 'jsonwebtoken'


{ /* Handle Signup*/ }
export const signUp = async (request, response, next) => {
    try {
        const { email, password } = request.body;
        // check for empty field
        if (!email || !password || email === '' || password === '') {
            next(errHandler(400, 'All fields are required'))
        }
    
        
        // hashing the password using bcrypt
        const cryptedPassword = bcryptjs.hashSync(password, 10);
        // create User object with email and hashed password
        const newUser = new Users({ email, password: cryptedPassword });
        // save to the database
        await newUser.save()
    
        const {password: pass, ...rest} = newUser._doc;
    
        response.status(200).json(rest)
        
    } catch (err) {
        //  will check for existing email
        if (err.code === 11000) {
            next(errHandler(403, 'Email already exists!'))
        } else {
            next(err)
        }
    }
};


export const signIn = async (request, response, next) => {
    try {
        // extract email and password
        const { email, password } = request.body;
        // check for empty field
        if (!email || !password || email === '' || password === '') {
            next(errHandler(400, 'All fields are required!'))
        }
        // check for  user whether the email is in the database or not
        const checkUser = await Users.findOne({email});

        // if there is no user with that email throw an err
        if (!checkUser) 
            return next(errHandler(404, 'User not found!'));
        
        // compare the provided password with the hashed password in the database
        const checkPassword = bcryptjs.compareSync(password, checkUser.password)
        // if they don't match it will throw an err
        if (!checkPassword) 
            return next(errHandler(404, 'Invalid password!'))
        
        // assign jwt token
        const token = jwt.sign({ id: checkUser._id, isAdmin: checkUser.isAdmin }, process.env.JWT_KEY);
        const {password: pass, ...rest} = checkUser._doc;
        response.cookie('access_token', token, {httpOnly: true}).status(200).json(rest);

    } catch (err) {
        next(err)
    }
};



export const signout = async (request, response, next) => {
    try {
        response.clearCookie('access_token').status(200).json('Successfully signed out!');
    } catch (err) {
        next(err)
    }
};