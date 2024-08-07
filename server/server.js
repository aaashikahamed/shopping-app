import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();
const __dirname = path.resolve();


const app = express();

app.use(express.json());
app.use(cookieParser());


app.use(express.static(path.join(__dirname, '/client/dist')));


app.listen(3001, () => {
    console.log("Listening on port 3000");
});
