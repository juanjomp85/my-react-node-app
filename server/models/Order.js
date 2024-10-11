const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ 
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: Number 
  }],
  total: Number,
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Order', orderSchema);
