const url = require('url');
const express = require("express");
const productHandler = require("@app/models/product/handlers");

const router = express.Router();

async function getProducts(request, response) {
  try {
    const queryObject = url.parse(request.url, true).query;
    const products = await productHandler.getProducts(queryObject);
    response.send({ products });
  } catch (error) {
    response.status(500).send(error);
  }
}

async function getProductById(request, response) {
  try {
    const { params } = request;
    const product = await productHandler.getProductById(params.productId);
    response.send({ product });
  } catch (error) {
    response.status(500).send(error);
  }
}

async function postProduct(request, response) {
  try {
    const { body } = request;
    const product = await productHandler.postProduct(body);
    response.send({ product });
  } catch (error) {
    response.status(500).send(error);
  }
}

async function putProduct(request, response) {
  try {
    const { body } = request;
    const product = await productHandler.putProduct(body);
    response.send({ product });
  } catch (error) {
    response.status(500).send(error);
  }
}

async function deleteProduct(request, response) {
  try {
    const { params } = request;
    await productHandler.deleteProduct(params.productId);
    response.send({ deleted: true });
  } catch (error) {
    response.status(500).send(error);
  }
}

router.post("/products", postProduct);
router.put("/products", putProduct);
router.get("/products", getProducts);
router.get("/products/:productId", getProductById);
router.delete("/products/:productId", deleteProduct);
module.exports = router;
