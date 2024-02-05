const mongoose = require("mongoose");

const ideaSchema = new mongoose.Schema({
  category: {
    type: String,
    require: false,
  },
  coordinates: {
    type: { lng: Number, lat: Number },
  },
  name: {
    type: String,
    require: false,
  },

  year: {
    type: String,
    require: false,
  },

  architects: {
    type: String,
    require: false,
  },
  description: {
    type: String,
    require: false,
  },

  links: {
    type: String,
    require: false,
  },
  feedback: {
    type: String,
    require: false,
  },
});

module.exports = mongoose.model("idea", ideaSchema);
