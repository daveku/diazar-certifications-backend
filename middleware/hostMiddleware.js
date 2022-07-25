const protect = (req, res, next) => {
  if (req.hostname === process.env.HOSTNAME) {
    next();
  } else {
    throw new Error("Unauthorized");
  }
};

module.exports = protect;
