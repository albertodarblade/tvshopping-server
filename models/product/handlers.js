const Model = require("./model");

async function postProduct(payload) {
  const {
    name,
    description,
    price,
    images,
    categories,
    lastPrice,
    spent,
    comingSoon,
  } = payload;
  const product = new Model({
    name,
    description,
    price,
    images,
    categories,
    lastPrice,
    spent,
    comingSoon,
  });

  return product.save();
}

async function putProduct(payload) {
  const {
    _id,
    name,
    description,
    price,
    images,
    categories,
    lastPrice,
    spent,
    comingSoon,
  } = payload;

  const properties = {
    name,
    description,
    price,
    images,
    categories,
    lastPrice,
    spent,
    comingSoon,
  };

  return Model.findByIdAndUpdate(_id, properties, { new: true });
}

async function getProducts() {
  const products = await Model.find();
  return products;
}

async function getProductById(id) {
  const product = await Model.findById(id);
  return product;
}

async function deleteProduct(id) {
  return Model.findByIdAndDelete(id);
}

module.exports = {
  postProduct,
  putProduct,
  getProductById,
  getProducts,
  deleteProduct,
};
