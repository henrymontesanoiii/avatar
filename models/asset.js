const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetSchema = new Schema({
 
});

//const Asset = mongoose.model("asset", assetSchema);
const Asset = mongoose.model("books", assetSchema);

module.exports = Asset;