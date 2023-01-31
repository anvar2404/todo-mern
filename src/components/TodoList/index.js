import React from 'react'
import axios from '../../axios'
import {ListContainer, Row, Text, DeleteIcon} from './style'

function TodoList({todos, fetchData}) {

const updateTodo = async (id) => {
    try{
        const response = await axios.put(`/todos/${id}`, {
            id
        })
        fetchData()
        return response.data.json
    }catch(err){
        console.error(err.message);
    }
}

const deleteTodo = async (id) => {
    try{
        const response = await axios.delete(`/todos/${id}`, {
            id
        })
        fetchData()
        return response.data.json
    }catch(err){
        console.error(err.message);
    }
}

  return (
    <div>
        <ListContainer>
            {todos?.map((el) => (
                <Row key={el._id}>
                    <Text onClick={() => updateTodo(el._id)} isCompleted={el.completed}>
                        {el.text}
                    </Text>
                    <DeleteIcon onClick={() => deleteTodo(el._id)}>
                        X
                    </DeleteIcon>
                </Row>
            ))}
        </ListContainer>
    </div>
  )
}

export default TodoList