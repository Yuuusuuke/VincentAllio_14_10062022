import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "./employees";

export default configureStore({
    reducer: {
        employees: employeesReducer
    }
})