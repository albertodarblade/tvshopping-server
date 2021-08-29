const Model = require("./model");

function convertQueryParams(queryParams) {
  const validQueries = {};
  if(queryParams.name) {
    validQueries.name = new RegExp(queryParams.name, 'i');
  }

  if(queryParams.description) {
    validQueries.description = new RegExp(queryParams.description, 'i');
  }

  return validQueries;
}

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

async function getProducts(queryParams = {}) {
  const findQuery = convertQueryParams(queryParams);
  const products = await Model.find(findQuery);
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
