import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface TodoState {
  id: string;
  text: string;
  completed: boolean;
  userId: string;
}

// const initialState = {
//   id: "",
//   text: "",
//   completed: false,
//   userId: "",
// } as TodoState;

// export const TodoSlice = createSlice({
//   name: "Todo",
//   initialState,
//   reducers: {},
// });

// // export const { loginTodo, registerTodo } = TodoSlice.actions;

// export const selectTodo = (state: RootState) => state.Todo.value;

// export default TodoSlice.reducer;
