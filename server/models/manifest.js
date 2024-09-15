const mongoose = require('mongoose');

const manifestSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  manifestList: [
    {
      id: {type:String},
      title: {type:String},
      image: {type:String},
      price: {type:String},
      type: {type:String},
    },
  ],
});

const manifest = mongoose.model('manifest', manifestSchema);

module.exports = manifest;
