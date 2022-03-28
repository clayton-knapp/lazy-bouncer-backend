const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */

  try {
    //get the value from the cookie
    // const { session } = req.cookies;
    const cookie = req.cookies[process.env.COOKIE_NAME];
    
    // Check the httpOnly session cookie for the current user
    if (!cookie) throw new Error('You must be signed in to continue');

    //verify the jwt
    const payload = jwt.verify(cookie, process.env.JWT_SECRET);
    //send the contents of the JWT as a resp
    req.user = payload;

    next();

  } catch (error) {
    //if not logged in make error message more descriptive to match test
    // error.message = 'You must be signed in to continue';
    error.status = 401;
    next(error);
  }
};
