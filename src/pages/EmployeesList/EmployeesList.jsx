import React from "react";
import "./EmployeesList.css";
import { Link } from "react-router-dom";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

export default function EmployeesList() {
  const data = useSelector((state) => state.employees);
  return (
    <div className="container">
      <div className="title">
        <h1>Current employees</h1>
      </div>
      <div className="content">
        <DataGrid
          className="table"
          rows={data.table}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
        />
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

const columns = [
  { field: "firstName", headerName: "First name", flex: 1, minWidth: 100 },
  { field: "lastName", headerName: "Last name", flex: 1, minWidth: 100 },
  { field: "startdate", headerName: "Start Date", flex: 1, minWidth: 100 },
  { field: "department", headerName: "Department", flex: 1, minWidth: 100 },
  { field: "birthdate", headerName: "Date of Birth", flex: 1, minWidth: 100 },
  { field: "street", headerName: "Street", flex: 1, minWidth: 200 },
  { field: "city", headerName: "City", flex: 1, minWidth: 100 },
  { field: "state", headerName: "State", flex: 1, minWidth: 100 },
  { field: "zipcode", headerName: "Zip Code", flex: 1, minWidth: 100 },
];
