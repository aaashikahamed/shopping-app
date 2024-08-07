export const errHandler = (code, msg) => {
    const error = new Error();
    error.code = code;
    error.msg = msg;
    return error;
}
