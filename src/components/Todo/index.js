import React, { useEffect, useState } from 'react'
import { Container } from './style.js'
import axios from '../../axios'
import Form from '../Form/index.js'
import TodoList from '../TodoList/index.js'
import Key from '../Key/index.js'
import Author from '../Author/index.js'

function Todo() {
    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])

    const fetchData = async () => {
        try{
            const response = await axios.get('/todos')
            setTodos(response.data)
        } catch(err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const addTodo = async (e) => {
        e.preventDefault()

        if(input.length === 0) return null
        await axios.post('/todos', [
            {
                ...todos,
                text: input,
                completed: false
            }
        ])
        fetchData()
        setInput('')

    }

  

  return  <Container>
    <h2>List of Todos</h2>
    <Form input = {input} setInput = {setInput} addTodo={addTodo} />
    <TodoList todos={todos} fetchData={fetchData} />
    <Key />
    <Author />
  </Container>
  
}

export default Todo