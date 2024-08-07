import { errHandler } from './err.js'
import jwt from 'jsonwebtoken';

export const tokenVerify = (request, response, next) => {
    const token = request.cookies.access_token;

    if (!token) {
        return next(errHandler(401, 'Unauthorized!'));
    }

    jwt.verify( token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return next(errHandler(401, 'Unauthorised'));
        }

        request.user = user;
        next()
    })
    
}