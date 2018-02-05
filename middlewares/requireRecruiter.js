module.exports = (req, res, next) => {
  if (req.user.recruiter !== true) {
    return res
      .status(401)
      .send({ error: 'You do not have permission to access this.' });
  }

  next();
};
