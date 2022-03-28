
module.exports = async (req, res, next) => {
  // TODO: Check req.user to ensure the user's email is 'admin'

  try {
    if (!req.user || req.user.email !== 'admin')
      throw new Error('You do not have access to view this page');


    next();

  } catch (error) {
    //if not logged in make error message more descriptive to match test
    error.message = 'You do not have access to view this page';
    error.status = 403;
    next(error);
  }

};
