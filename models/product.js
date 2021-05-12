const mongoose = require('mongoose');
const schema = mongoose.Schema;

// # 1 Как описать схему
// # 2 Как связать модельки, refId
// # 3 Как подключится к монге 
// # 4 Как создать документ

const productSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    default: '0'
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: true
  },
  rate: {
    type: Number,
    default: 0
  },
  picture: String
});

exports.Product = mongoose.model('Product', productSchema);