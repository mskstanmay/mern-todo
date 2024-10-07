const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
      //  ref:'user',
    },
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  description: {
    type: String,
    required: false,
  },
  dueDate: {
    type: Date,
    required: false,
  },
  priority: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
    default: 3,
  },
  tags: {
    type: [String],
    required: false,
  },
});

module.exports = mongoose.model("todo",todoSchema);