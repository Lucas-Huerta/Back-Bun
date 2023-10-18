export const checkAuthorization = async (handler) => {
  try {
    if (!handler.cookie.access_token) {
      handler.status = 401;
      return {
        success: false,
        message: "Unauthorized",
        data: null,
      };
    }
    // Get the token from the Authorization header
    const token = handler.cookie.access_token;

    // Verify the token in cookies
    const decodedToken = await handler.jwt.verify(token);

    // If the token is invalid, return an error
    if (!decodedToken) {
      handler.set.status = 401;
      return { message: 'Invalid token!', status: 401 };
    }
  } catch (error) {
    console.error(error);
    handler.set.status = 500;
    return { message: 'Unable to verify token!', status: 500 };
  }
};