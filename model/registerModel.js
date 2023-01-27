const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newUserSchema = new Schema({
  surname: {
    type: String,
    required: [true, "Овогоо оруулна уу?"],
  },
  username: {
    type: String,
    required: [true, "Нэрээ оруулна уу"],
  },
  password: {
    type: Number,
    required: [true, "Нууц үгээ оруулна уу?"],
  },
  confirmPassword: {
    type: Number,
    required: [true, "Нууц үг таарахгүй байна"],
  },
});

module.exports = mongoose.model("users", newUserSchema);
