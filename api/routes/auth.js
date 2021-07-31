const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models");
// eslint-disable-next-line no-unused-vars
const { validateToken } = require("../middlewares");

router.post("/register", (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch(next);
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(400).json({ msg: "Usuario no encontrado" });
  }

  const validate = await user.validatePassword(password);

  if (!validate) {
    return res.status(401).json({ msg: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id }, "branchSecretP5");

  return res.status(200).json({ token });
});

router.get("/logout", (req, res, next) => {
  req.user = null;
  res.status(200).json({});
});

//ESTA RUTA ES PARA PROBAR TOKENS
// router.get("/prueba", validateToken, (req, res, next) => {
//   console.log(req.user);
//   res.status(200).json("HOLA ESTA ES UNA RUTA DE PRUEBA");
// });

module.exports = router;
