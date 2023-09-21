const tokenConfig = require("./token-config");
const jwt = require("jsonwebtoken");

function buildToken(subject, payload = {}) {
  const { options, secret } = tokenConfig.getSigningConfig(subject);
  return jwt.sign(payload, secret, options);
}

function verifyToken(token) {
  const { options, secret } = tokenConfig.getVerifyConfig();

  try {
    return jwt.verify(token, secret, options);
  } catch (err) {
    console.log(err);
    return null;
  }
}

module.exports = {
  buildToken,
  verifyToken,
};
