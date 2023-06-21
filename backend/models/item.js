const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imagen: { type: String, required: true },
  anio: { type: Number, required: true },
  genero: { type: String, required: true },
});

module.exports = mongoose.model('Item', itemSchema);
