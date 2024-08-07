import Users from "../db_models/users.js";
import { errHandler } from "../utilities/error.js";


{ /* Delete user account */ }
export const deleteUser = async (request, response, next) => {
    {/*  function to check if the request to delete an account from admin or that accoun's owner
            if not it will throw error
    */}
    if ( request.user.id !== request.params.userId && !response.user.isAdmin) {
        return next(errHandler(401, 'You can\'t delete this account'));
    }

    // delete user
    try {
        await Users.findByIdAndDelete(request.params.userId);
        response.clearCookie('access_token').status(200).json('User is deleted');
    } catch (error) {
        next(error)
    }
}