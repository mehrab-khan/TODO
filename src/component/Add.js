import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from './Card'
export default function Add() {
    const [name, setName] = useState('')
    const [todo,setTodo] = useState([])


    useEffect(()=>{
    const PrevData = JSON.parse(localStorage.getItem('todo')) || [] 
    setTodo(PrevData)
    },[])
    function AddTodo(){
     
    if(name){
        let data = {name : name}
        const newData = [...todo,data]
        localStorage.setItem('todo',JSON.stringify(newData))
        setName('')
    }
    }
    
    function handleDelete(index){
        const updatedTodo = todo.filter((_, i) => i !== index);
        setTodo(updatedTodo)
        localStorage.setItem('todo',JSON.stringify(updatedTodo))
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)} />
      <button onClick={AddTodo}>Add</button>
      {
        todo.map((data,index)=>(
                <Card key={index} onDelete={handleDelete} index={index} name={data.name}/>  
        ))
      }
    </div>
  )
}
