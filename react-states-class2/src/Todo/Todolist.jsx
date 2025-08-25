import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
 

export default function TodoList() {
    let [todos, setTodos] = useState([{task : "sample task", id : uuidv4(), isDone : false}]);
    let [newTodo, setNewTodo] = useState("");

    let addTodo = () => {
        setTodos((prevTodo)=>{
            return [...prevTodo,{task : newTodo, id:uuidv4(),isDone:false}]
        });
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id)=>{
     setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id != id));
        
    }

   let upperCaseAll = ()=>{
   setTodos((prevTodos)=>(prevTodos.map((todo)=>{
        return {
            ...todo,
            task : todo.task.toUpperCase()
        };
    })
    ))
   }

   let upperCaseOne = (id)=>{
    setTodos((prevTodos)=>(prevTodos.map((todo)=>{
        if(todo.id === id){
             return {
            ...todo,
            task : todo.task.toUpperCase()
        };
        }
        else{
            return todo;
        }
    })
    ))
   }



   let taskDone = (id)=>{
    setTodos((prevTodos)=>(prevTodos.map((todo)=>{
        if(todo.id === id){
             return {
             ...todo,
           isDone : true,
        };
        }
        else{
            return todo;
        }
    })
    ))
   }


    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} /><br />
            <button onClick={addTodo}>Add Task</button>
            <br/><br/>
            <br/><br/>
            <br/><br/>


            <hr /><hr />
            <h1>Todo List</h1>
            <ul>
                {
                    todos.map((todo)=>(
                          <li key={todo.id}>
                           <span style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>{todo.task}</span>
                           &nbsp;&nbsp;&nbsp;
                           <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                           <button onClick={()=>upperCaseOne(todo.id)}>UpperCase One</button>
                           <button onClick={()=>taskDone(todo.id)}>Done</button>
                            </li>
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>UpperCase All</button>
             
        </div>
    );
}