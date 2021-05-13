const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
    todo: {
        type:String,
        require:true,
    }
});


module.exports = new mongoose.model("Todo", ToDoSchema);