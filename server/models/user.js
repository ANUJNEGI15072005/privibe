const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false, 
  },
  address: {
    type: String,
    required: false, 
  },
  manifestList: [
    {
      image: { type: String },
      price: { type: String },
      title: { type: String },
      status: { type: String },
      style: { type: String },
      color: { type: String },
      id: String,
    },
  ],
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
