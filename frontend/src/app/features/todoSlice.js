import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTodo = createAsyncThunk('todo/fetchTodo', async() => {
        const res = await axios.get(`/api/todo/`);
        return res.data.data

})

export const addTodo = createAsyncThunk('todo/addTodo', async({enteredData},{rejectWithValue}) => {
    try{
        const res = await axios.post(`/api/todo/`, enteredData);
        return res.data.data
    }catch(error){
        return rejectWithValue(error.response.message)
    }

})

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async({id},{rejectWithValue}) => {
    try{
        const res = await axios.delete(`/api/todo/${id}`);
        if (res.status === 200){
            return id
        }
        throw new Error('Request failed')
    }catch(error){
        console.log(error)
        return rejectWithValue(error.response.message)
    }

})
export const updateTodo = createAsyncThunk('todo/updateTodo', async({editId, enteredData},{rejectWithValue}) => {
    try{
        const res = await axios.put(`/api/todo/${editId}`, enteredData);
        return res.data.data
    }catch(error){
        console.log(error)
        return rejectWithValue(error.response.message)
    }

})


const todoSlice = createSlice({
    name:'todo',
    initialState: {
        todoList: [],
        populateData: null
    },
    reducers: {
        populateDataToForm(state, action){
            state.populateData = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodo.fulfilled, (state, action) => {
                state.todoList = action.payload
                // console.log(action.payload)
            })
            .addCase(fetchTodo.rejected, (state, action) => {
                console.log(action)
            })

            .addCase(addTodo.fulfilled, (state, action) => {
                state.todoList = [...state.todoList, action.payload]
            })
            .addCase(addTodo.rejected, (state, action) => {
                // console.log(action)
            })


            .addCase(deleteTodo.fulfilled, (state, action) => {
                const id = action.payload
                state.todoList = state.todoList.filter(item => item.id !== id)
            })
            .addCase(deleteTodo.rejected, (state, action) => {
                console.log(action)
            })

            .addCase(updateTodo.fulfilled, (state, action) => {
                const id = action.payload.id
                state.todoList = state.todoList.map((item) => {
                    if (item.id === id) {
                        return action.payload
                    }else{
                        return item
                    }
                })
            })
            .addCase(updateTodo.rejected, (state, action) => {
                console.log(action)
            })
    }
})

export const {populateDataToForm}  = todoSlice.actions
export default todoSlice.reducer
