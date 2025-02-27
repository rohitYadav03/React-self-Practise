import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

function TodoList(){
const [text, setText] = useState("");
const [todo, setTodo] = useState([]);

function addTodo (){
    if (text.length === 0) {
        alert("write something")
        return;
    }
   setTodo([...todo,text]);
   setText("");

   
}

function remove (curTodo) {
    
   setTodo(todo.filter((current) => current !== curTodo))
}
    return(
        <>
        <h1>TODO LIST</h1>
         <input value={text} onChange={(event) =>setText(event.target.value)}></input>
        <button onClick={addTodo}>ADD</button>
        <ul>
       {todo.map((curTodo,index) => <li key={index} >{curTodo} <button onClick={() =>remove(curTodo)}>Remove</button></li> )}
        </ul>
        </>
    )
}
root.render(<TodoList />)

