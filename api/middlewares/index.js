const jwt = require("jsonwebtoken");
const { User } = require("../models");

const validateToken = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, "branchSecretP5", (err, data) => {
    if (err) next(err);
    req.user = { id: data.id };
    next();
  });
};

const isAdmin = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "branchSecretP5", (err, data) => {
    if (err) next(err);

    User.findByPk(data.id)
      .then((user) => {
        if (!user.isAdmin) {
          return res.status(401).json({ msg: "Invalid credentials" });
        }
        req.user = user;
        next();
      })
      .catch(next);
  });
};

module.exports = {
  validateToken,
  isAdmin,
};
