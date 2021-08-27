const mongoose = require('mongoose');
const { MONGO_CONNECT } = require('../config');

module.exports = {
  connect: async function () {
    try {
      await mongoose.connect(MONGO_CONNECT)
      console.info('SUCCESSFULL CONNECTION WITH MONGO DB');
    } catch(error) {
      console.error('CONNECTION ERROR MONGO DB', error);
    }
  }
};