const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categorySchema = new schema({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})

exports.Category = mongoose.model("Category", categorySchema);