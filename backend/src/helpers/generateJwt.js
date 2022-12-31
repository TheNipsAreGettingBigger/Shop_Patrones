const jwt = require("jsonwebtoken");

const generateJWT = (user) => {
  return new Promise((resolve, reject) => {
    const payload = { user };
    jwt.sign(
      payload,
      "S3CR3T0",
      {
        expiresIn: "24h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        }
        resolve(token);
      }
    );
  });
};

module.exports = {
  generateJWT,
};
