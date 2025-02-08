import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }],
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: { //state,action
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            //in react we hade to do [...todos,newTodo], but here we are directly pushing the object
            state.todos.push(newTodo); // Direct Mutation
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true };
                }else{
                    return todo;
                }
            })
        }
    }
})

export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;//redux toolkit automatically creates action objects
export default todoSlice.reducer;