import {createSlice, nanoid} from '@reduxjs/toolkit'


const initialState = {
    todos: [
        {state: false}
    ],
    data:[{
        status: false,
        userData: null
    }],
    sesstion:[]
}

export const TodoSlice = createSlice(
    {
        name: "todo",
        initialState,
        reducers:{
            addTodo: (state, action) =>{
                state.todos[0].state = action.payload;
                return state;
            },
            selectTodo: (state, action)=>{
                state.todos.map((todo)=>{
                    if(todo.id == action.payload){
                        todo.state = !todo.state 
                    }
                })
            },
            userData:(state, action)=>{
                return {
                  ...state,
                  data: {
                    ...state.data,
                    status: true,
                    userData: action.payload
                  }
                };
              },
            addSettion:(state, action)=>{
                const addSec={
                    secData: action.payload
                }
                state.sesstion.push(addSec)
            }
        }
    }
)

export const {addTodo, selectTodo, userData, addSettion} = TodoSlice.actions

export default TodoSlice.reducer