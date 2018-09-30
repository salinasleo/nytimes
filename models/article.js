const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date, required: true }
});

const nytreact = mongoose.model("nytreact", articleSchema);

module.exports = nytreact;
