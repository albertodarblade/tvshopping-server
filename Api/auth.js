const axios = require("axios");
const config = require("@app/config");

const api = axios.create({
  baseURL: config.AUTH_URL,
});

function authentication(payload) {
  return api.post("/authentication", payload);
}

function validate(token) {
  return api.get("validate", {
    params: {
      token,
    },
  });
}

module.exports = {
  api,
  authentication,
  validate,
};
