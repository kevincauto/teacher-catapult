module.exports = (req, res, next) => {
  if (req.user.admin !== true) {
    return res
      .status(401)
      .send({ error: 'You do not have permission to access this.' });
  }

  next();
};