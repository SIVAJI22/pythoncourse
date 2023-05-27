const { Number } = require("mongoose");
const mongoose = require("mongoose");
const usersSchema = mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
    unique: true,
    require:true,
  },
  Password: {
    type:String,
    unique: true,
    require:true,
  },
  Mobile: {
    type: Number,
  },
 
});

const users =mongoose.model("users", usersSchema);
module.exports = users;
