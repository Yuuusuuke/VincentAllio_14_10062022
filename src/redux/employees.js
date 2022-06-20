import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

export const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        table: [],
        size: 0
    },
    reducers:{
        addEmployee: (state, action) => {
            console.log(action);
        }
    }
})

export const {addEmployee} = employeesSlice.actions;

export default employeesSlice.reducer;