import Users from "../db_models/users.js";
import { errHandler } from "../utilities/error.js";



export const deleteUser = async (request, response, next) => {
    if ( request.user.id !== request.params.userId && !response.user.isAdmin) {
        return next(errHandler(401, 'You can\'t delete this account'));
    }
    try {
        await Users.findByIdAndDelete(request.params.userId);
        response.clearCookie('access_token').status(200).json('User is deleted');
    } catch (error) {
        next(error)
    }
}