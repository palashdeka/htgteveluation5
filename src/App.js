import React,{useState} from "react";
import Header from "./components/Header";
import Form from "./components/form";
import TodosList from "./components/TodosList";
import "./App.css"

const App=()=>{

  const [input,setInput]=useState("");
  const[todos,setTodos]=useState([]);
  const[editTodo,setEditTodo]= useState(null);
  return <div className="container">
    <div className="todo">
      <Header/>
    </div>
    <div>
      <Form 
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      editTodo={editTodo}
      setEditTodo={setEditTodo}
      />
    </div>
    <div>
      <TodosList todos={todos} setTodos={setTodos} 
      setEditTodo={setEditTodo} />
    </div>
  </div>
}

export default App;
