const mongoose = require("mongoose");

const eNotesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("user", eNotesSchema);
