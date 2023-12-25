module.exports = {
  muntipleMongooseToObject: function (array) {
    array = array.map((item) => {
      return item.toObject();
    });
    return array;
  },
  simpleMongooseToObject: function (item) {
    return item.toObject();
  },
};
