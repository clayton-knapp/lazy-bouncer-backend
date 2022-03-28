const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */

  try {
    //get the value from the cookie
    const { session } = req.cookies;
    //verify the jwt
    const payload = jwt.verify(session, process.env.JWT_SECRET);
    //send the contesnt of the JWT as a resp
    req.user = payload;
    next();

  } catch (error) {
    next(error);
  }
};
