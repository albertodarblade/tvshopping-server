const axios = require("axios");
const config = require("@app/config");

const api = axios.create({
  baseURL: config.IMG_URL,
});

function uploadImage(payload) {
  console.log('Consuming API', payload);
  const body = {
    key: config.IMG_KEY,
    image: payload 
  }

  return api.post('', body, {
    headers: {
    "content-type": "multipart/form-data",
    },
  });
}

module.exports = {
  api,
  uploadImage
};
