const express = require("express");
const router = express.Router();
const TodoModel = require("../models/TodoModel");


router.get("/", (req, res) => {
    TodoModel.find().then((resultat) => res.send(resultat));
});


router.post("/", (req, res) => {
    const data = req.body;


    const newTodo = new TodoModel(data);


    newTodo.save().then(() => res.send("Your data is saved"));
});


router.delete("/delete-todo/:id", async (req, res) => {
    try {
	await TodoModel.findByIdAndDelete(req.params.id);


	const todoLeft = await TodoModel.find();


	res.status(200).json({
	    msg: "The todo has been deleted",
	    todos: todoLeft,
	});
    } catch (error) {
	res.status(500).json({
	    err: error,
	});
    }
});
