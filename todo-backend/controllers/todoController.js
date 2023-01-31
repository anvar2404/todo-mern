const mongoose = require('mongoose')
const Todos = require('../dbTodos')


//get todos list
const getTodos = async (req,res) => {
    try{
const allTodos = await Todos.find({}).sort({ createdAt : -1})
res.status(200).send(allTodos)
    }
    catch(err){
        res.status(400).send(err.message)
    }
}
//create a new todo
const createTodo = async (req,res) => {
    const dbTodo = req.body
    try{
const newTodo = await Todos.create(dbTodo)
res.status(201).send(newTodo)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

//update a todo
const updateTodo = async (req,res) => {
    const {id} = req.params
    try{
        //check the id for validity
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send(`There is no todo with id of ${id}`)
        }
        
const todoId = {_id: id}
const update = {completed: true}        
const updateTodo = await Todos.findOneAndUpdate(todoId, update)
if(!updateTodo){
    return res.status(404).send(`There is no todo with id of ${id}`)
}
res.status(200).send(updateTodo)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

//delete a todo
const deleteTodo = async (req,res) => {
    const {id} = req.params
    try{
        //check the id for validity
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).send(`There is no todo with id of ${id}`)
        }       
const deleteTodo = await Todos.findOneAndDelete({_id: id})
res.status(200).send(deleteTodo)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}
