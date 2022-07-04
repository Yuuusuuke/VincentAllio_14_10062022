import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        table: [],
        size: 0
    },
    reducers:{
        addEmployee: (state, action) => {
            state.table.push({
                "firstName": action.payload[0],
                "lastName" : action.payload[1],
                "birthdate": action.payload[2],
                "startdate": action.payload[3],
                "street": action.payload[4],
                "city": action.payload[5],
                "state": action.payload[6],
                "zipcode": action.payload[7],
                "department": action.payload[8]
         });
         state.size++;
        }
    }
})

export const {addEmployee} = employeesSlice.actions;

export default employeesSlice.reducer;