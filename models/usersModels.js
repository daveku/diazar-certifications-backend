const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  ext: { type: String },
});

module.exports = mongoose.model("User", userSchema);
