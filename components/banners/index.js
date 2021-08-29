const url = require("url");
const express = require("express");
const productHandler = require("@app/models/banner/handlers");

const router = express.Router();

async function getBanners(request, response) {
  try {
    const queryObject = url.parse(request.url, true).query;
    const banners = await productHandler.getBanners(queryObject);
    response.send(banners);
  } catch (error) {
    response.status(500).send(error);
  }
}

async function putBanners(request, response) {
  try {
    const { body } = request;
    const { banners } = body;
    const data = await productHandler.putBanners(banners);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
}

router.put("/banners", putBanners);
router.get("/banners", getBanners);
module.exports = router;
