import React from "react";
import "./EmployeesList.css";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";

export default function EmployeesList() {
  return (
    <div className="container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="content" style={{ height: 371, width: "100%" }}>
        <DataGrid
          className="table"
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
      <Link to="/">Home</Link>
    </div>
  );
}

const rows = [
  {
    id: "1",
    lastName: "Snow",
    firstName: "Jon",
    startdate: "20/06/2022",
    department: "313",
    birthdate: "15/01/1985",
    street: "yes",
    city: "Detroit",
    state: "Michigan",
    zipcode: "46421",
  },
  {
    id: "2",
    lastName: "Snow",
    firstName: "Jon",
    startdate: "20/06/2022",
    department: "313",
    birthdate: "15/01/1985",
    street: "yes",
    city: "Detroit",
    state: "Michigan",
    zipcode: "46421",
  },
  {
    id: "3",
    lastName: "Snow",
    firstName: "Jon",
    startdate: "20/06/2022",
    department: "313",
    birthdate: "15/01/1985",
    street: "yes",
    city: "Detroit",
    state: "Michigan",
    zipcode: "46421",
  },
  {
    id: "4",
    lastName: "Snow",
    firstName: "Jon",
    startdate: "20/06/2022",
    department: "313",
    birthdate: "15/01/1985",
    street: "yes",
    city: "Detroit",
    state: "Michigan",
    zipcode: "46421",
  },
  {
    id: "5",
    lastName: "Snow",
    firstName: "Jon",
    startdate: "20/06/2022",
    department: "313",
    birthdate: "15/01/1985",
    street: "yes",
    city: "Detroit",
    state: "Michigan",
    zipcode: "46421",
  },
  {
    id: "6",
    lastName: "Snow",
    firstName: "Jon",
    startdate: "20/06/2022",
    department: "313",
    birthdate: "15/01/1985",
    street: "yes",
    city: "Detroit",
    state: "Michigan",
    zipcode: "46421",
  },
];

const columns = [
  { field: "firstName", headerName: "First name", flex: 1 },
  { field: "lastName", headerName: "Last name", flex: 1 },
  { field: "startdate", headerName: "Start Date", flex: 1 },
  { field: "department", headerName: "Department", flex: 1 },
  { field: "birthdate", headerName: "Date of Birth", flex: 1 },
  { field: "street", headerName: "Street", flex: 1 },
  { field: "city", headerName: "City", flex: 1 },
  { field: "state", headerName: "State", flex: 1 },
  { field: "zipcode", headerName: "Zip Code", flex: 1 },
];
