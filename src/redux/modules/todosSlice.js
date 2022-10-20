import { createSlice } from "@reduxjs/toolkit";

// initial State
const initialState = {
    todos: [
      {
        id: 1,
        title: "오늘의 할일",
        name: "rtan",
        content: "끝내주게 놀기",
      }
    ]
  }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers : {
        createTodo : (state, action) => {
            state.todos =[...state.todos, action.payload]
        },

        deleteTodo : (state, action) => {
            state.todos =[...state.todos.filter(todo => {
              return todo.id !== action.payload
            })]
        },
        editTodo2 : (state, action) => 
        {
          const Index = state.todos.findIndex((todo)=>todo.id ===Number(action.payload.id))
          const test = {...state.todos[Index], content : action.payload.target}
          const newTodos = state.todos.map((todo)=> todo.id === Number(action.payload.id)? (state.todos[Index] = test):(todo))

            state.todos =[...newTodos]
        }
    }
})
export const { createTodo, deleteTodo, editTodo2} = counterSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default counterSlice.reducer;