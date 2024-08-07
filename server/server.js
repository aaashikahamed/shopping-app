import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';


import userRoute from './routes/user.js';
import authenticationRoute from './routes/auth.js';
import productRoute from './routes/product.js';
import categoriesRoute from './routes/category.js';
import cartRoute from './routes/cart.js';


dotenv.config();
const __dirname = path.resolve();


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/server/user', userRoute);
app.use('/server/auth', authenticationRoute);
app.use('/server/product', productRoute);
app.use('/server/categories', categoriesRoute);
app.use('/server/cart', cartRoute);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '/client/dist/index.html'));
})


app.listen(3001, () => {
    console.log("Listening on port 3000");
});


app.use((err, request, response, next ) => {
    const code = err.code || 500;
    const msg = err.msg || "Server Error";
    response.status(code).json({
        success: false,
        code,
        msg
    })
})