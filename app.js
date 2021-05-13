const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Mongoose Config.
mongoose.connect("mongodb://localhost/ToDoAppNode",{
    useNewUrlParser:true,
    useUnifiedTopology :true,
});


// Middleware
app.use(express.urlencoded({
    extended:true
}));


app.use(express.static("public"));


app.use(require("./routes/index"));

// Todo router
const todoRouter  = require('./routes/todo');
app.use('/todo', todoRouter);

// app.use(require("./routes/todo"));


// setting templating engine.
app.set("view engine", "ejs");

//Server config.
app.listen(3000, () =>{
    console.log("Server running @ port 3000");
});
