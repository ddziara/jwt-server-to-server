const config = require("../../config");

const defaultSignOptions = {
  expiresIn: 15 * 60, // expires in 15min
  issuer: config.serverName,
  audience: `${config.partnerServerHost}:${config.partnerServerPort}`,
};

const hmacSignOptions = {
  algorithm: "HS256",
  ...defaultSignOptions,
};

const hmacVerifyOptions = {
  algorithm: ["HS256"], // only allow HS256 (HMAC with SHA256)
};

const rsaSignOptions = {
  algorithm: "RS256",
  ...defaultSignOptions,
};

const rsaVerifyOptions = {
  algorithm: ["RS256"], // only allow RSA + SHA256
};

function getSigningConfig(subject) {
  if (config.rsaPrivateKey) {
    return {
      options: { ...rsaSignOptions, subject },
      secret: config.rsaPrivateKey,
    };
  } else {
    return {
      options: { ...hmacSignOptions, subject },
      secret: config.tokenSecret,
    };
  }
}

function getVerifyConfig() {
    if (config.rsaPrivateKey) {
      return {
        options: rsaVerifyOptions,
        secret: config.partnerRSAPublicKey,
      };
    } else {
      return {
        options: hmacVerifyOptions,
        secret: config.tokenSecret,
      };
    }
  }
  
  module.exports = {
    getSigningConfig,
    getVerifyConfig,
  }