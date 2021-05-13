const router = require('express').Router();
const todoSchema = require('../models/todo');

router.post('/addItem', (req,res) =>{
    // const todo = req.body.todo;
    const {todo} = req.body;
    
    const newTodoSchema = new todoSchema({
        todo
    });

    newTodoSchema.save()
    .then(()=> {
        console.log("successfully added to list");
        res.redirect("/");
    }).catch((err)=>{
        console.log("Error: "+err)
    });
    
    // res.write("index");
    // res.end();
})

.get("/deleteItem/:id",async(req, res) => {
    // const {_id} = req.params;
    console.log("recahed asf")
    const a1 = await todoSchema.findByIdAndDelete(req.params.id)
    // todoSchema.deleteOne({_id})
    .then(()=>{
        console.log("successfully added to list");
        res.redirect("/");
    }).catch((err)=>{
        console.log("Error: "+err)
    })
});

module.exports = router;