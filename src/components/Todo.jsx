import { useSelector } from "react-redux";
import AddForm from "./addForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo(){
    const todos = useSelector((state)=> state.todos)
    console.log(todos)
    const dispatch = useDispatch();

    const handleDelete = (id)=>{
        dispatch(deleteTodo(id));
    }

    const handleDone = (id)=>{
        dispatch(markAsDone(id))
    }

    return(
        <>
         <AddForm/>
        <h2>Todos</h2>       
        <ul>
            {todos.map((todo)=> <li key={todo.id} >
               {todo.isDone? <span style={{textDecoration:"line-through"}}>{todo.task}</span>:<span>{todo.task}</span>} 
                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
                <button onClick={()=>handleDone(todo.id)}>Mark as Done</button>
            </li>)}
        </ul>
        </>
    );
}