const { generateJWT } = require("../helpers/generateJwt");
const {
  EmailAuthentication,
  UsernameAuthentication,
} = require("../models/AuthStrategy");

const AuthController = {
  login: async (req, res) => {
    const { method, password, user } = req.body;
    if (!password.length || !user.length || !method.length) {
      return res.json({
        msg: "El usuario/password son incorrectos o verificar la estrategia",
      });
    }
    const strategy =
      method == "email" ? EmailAuthentication : UsernameAuthentication;
    const isMatch = await strategy.verify(user, password);
    if (isMatch == null || !isMatch) {
      return res.json({
        msg: "El usuario/password son incorrectos o verificar la estrategia",
      });
    }
    const token = await generateJWT(user);
    return res.json({
      user,
      token,
    });
  },
};

module.exports = AuthController;
