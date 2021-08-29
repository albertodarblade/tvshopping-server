const Model = require("./model");

async function putBanners(banners) {
  await Model.deleteMany({});
  const response = await Model.insertMany(banners);
  return response;
}

async function getBanners() {
  return Model.find();
}

module.exports = {
  putBanners,
  getBanners,
};
