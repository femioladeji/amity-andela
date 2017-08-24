export const respond = (res, statusCode, message) => {
    const status = (statusCode === 200 || statusCode === 201) ? true : false;
    return res.status(statusCode).json({ status, message });
}