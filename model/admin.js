const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
    required: true,
  },
  password: { type: String, required: true },
  token: String,
});

const admin = mongoose.model("admin", adminSchema);
module.exports = admin;
