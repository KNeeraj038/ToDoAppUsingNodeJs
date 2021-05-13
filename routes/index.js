const express = require('express');
const todoSchema = require('../models/todo');

const router = express.Router();

router.get("/", async(req, res)=>{
    const allTodo  = await todoSchema.find();
    console.log(allTodo);
    res.render("index", {todo: allTodo});
});

module.exports = router;