import React,{useState} from 'react'

import './TodoList.css'

export default function TodoList() {
    const [inputValue,setInputValue] = useState('');
    const [itemsValue,setItemsValue] = useState([]);

    const handleAdd = () => {
        const items = {
            id : Math.floor(Math.random()*1000),
            value : inputValue
        }
        setItemsValue(oldItem => [...oldItem,items]);
        setInputValue('');
    }
    const handleDelete = (id) => {
        const newArr = itemsValue.filter(item => item.id!==id);
        setItemsValue(newArr);
    }
  return (
    <div className='App'>
        <h1>Todo List App Test</h1>
        <input type="text" value = {inputValue} onChange={(e)=>(setInputValue(e.target.value))}/>
        <button onClick={() => handleAdd()}>add</button>
        <ul>
            {itemsValue.map((item,index)=>(
                <li key={index}>{item.value} <button onClick={()=>handleDelete(item.id)}>X</button></li>
            ))}
        </ul>
    </div>
  )
}
