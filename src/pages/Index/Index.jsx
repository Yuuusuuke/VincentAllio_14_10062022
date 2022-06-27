import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200,
    },
  },
};

export default function Index() {
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("Sales");

  const handleChange = (selector, item) => {
    switch (selector) {
      case "state":
        setState(item);
        break;
      case "department":
        setDepartment(item);
        break;
      default:
        break;
    }
  };
  return (
    <div className="container">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="content">
        <Link to="/employees-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label for="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" type="text" />

          <label for="start-date">Start Date</label>
          <input id="start-date" type="text" />

          <fieldset class="address">
            <legend>Address</legend>

            <label for="street">Street</label>
            <input id="street" type="text" />

            <label for="city">City</label>
            <input id="city" type="text" />

            <FormControl className="dropdown" fullWidth>
              <InputLabel id="state">State</InputLabel>
              <Select
                className="select"
                labelId="state"
                value={state}
                label="State"
                onChange={(e) => handleChange("state", e.target.value)}
                MenuProps={MenuProps}
              >
                {states.map((item, key) => {
                  return (
                    <MenuItem key={key} value={item.name}>
                      {item.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <label for="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <FormControl className="dropdown" fullWidth>
            <InputLabel id="department">Department</InputLabel>
            <Select
              className="select"
              labelId="department"
              value={department}
              label="Department"
              onChange={(e) => handleChange("department", e.target.value)}
            >
              <MenuItem value={"Sales"}>Sales</MenuItem>
              <MenuItem value={"Marketing"}>Marketing</MenuItem>
              <MenuItem value={"Engineering"}>Engineering</MenuItem>
              <MenuItem value={"Human Resources"}>Human Resources</MenuItem>
              <MenuItem value={"Legal"}>Legal</MenuItem>
            </Select>
          </FormControl>
        </form>

        <button onclick="saveEmployee()">Save</button>
      </div>
      <div id="confirmation" class="modal">
        Employee Created!
      </div>
    </div>
  );
}

const states = [
  {
    name: "Alabama",
    abbreviation: "AL",
  },
  {
    name: "Alaska",
    abbreviation: "AK",
  },
  {
    name: "American Samoa",
    abbreviation: "AS",
  },
  {
    name: "Arizona",
    abbreviation: "AZ",
  },
  {
    name: "Arkansas",
    abbreviation: "AR",
  },
  {
    name: "California",
    abbreviation: "CA",
  },
  {
    name: "Colorado",
    abbreviation: "CO",
  },
  {
    name: "Connecticut",
    abbreviation: "CT",
  },
  {
    name: "Delaware",
    abbreviation: "DE",
  },
  {
    name: "District Of Columbia",
    abbreviation: "DC",
  },
  {
    name: "Federated States Of Micronesia",
    abbreviation: "FM",
  },
  {
    name: "Florida",
    abbreviation: "FL",
  },
  {
    name: "Georgia",
    abbreviation: "GA",
  },
  {
    name: "Guam",
    abbreviation: "GU",
  },
  {
    name: "Hawaii",
    abbreviation: "HI",
  },
  {
    name: "Idaho",
    abbreviation: "ID",
  },
  {
    name: "Illinois",
    abbreviation: "IL",
  },
  {
    name: "Indiana",
    abbreviation: "IN",
  },
  {
    name: "Iowa",
    abbreviation: "IA",
  },
  {
    name: "Kansas",
    abbreviation: "KS",
  },
  {
    name: "Kentucky",
    abbreviation: "KY",
  },
  {
    name: "Louisiana",
    abbreviation: "LA",
  },
  {
    name: "Maine",
    abbreviation: "ME",
  },
  {
    name: "Marshall Islands",
    abbreviation: "MH",
  },
  {
    name: "Maryland",
    abbreviation: "MD",
  },
  {
    name: "Massachusetts",
    abbreviation: "MA",
  },
  {
    name: "Michigan",
    abbreviation: "MI",
  },
  {
    name: "Minnesota",
    abbreviation: "MN",
  },
  {
    name: "Mississippi",
    abbreviation: "MS",
  },
  {
    name: "Missouri",
    abbreviation: "MO",
  },
  {
    name: "Montana",
    abbreviation: "MT",
  },
  {
    name: "Nebraska",
    abbreviation: "NE",
  },
  {
    name: "Nevada",
    abbreviation: "NV",
  },
  {
    name: "New Hampshire",
    abbreviation: "NH",
  },
  {
    name: "New Jersey",
    abbreviation: "NJ",
  },
  {
    name: "New Mexico",
    abbreviation: "NM",
  },
  {
    name: "New York",
    abbreviation: "NY",
  },
  {
    name: "North Carolina",
    abbreviation: "NC",
  },
  {
    name: "North Dakota",
    abbreviation: "ND",
  },
  {
    name: "Northern Mariana Islands",
    abbreviation: "MP",
  },
  {
    name: "Ohio",
    abbreviation: "OH",
  },
  {
    name: "Oklahoma",
    abbreviation: "OK",
  },
  {
    name: "Oregon",
    abbreviation: "OR",
  },
  {
    name: "Palau",
    abbreviation: "PW",
  },
  {
    name: "Pennsylvania",
    abbreviation: "PA",
  },
  {
    name: "Puerto Rico",
    abbreviation: "PR",
  },
  {
    name: "Rhode Island",
    abbreviation: "RI",
  },
  {
    name: "South Carolina",
    abbreviation: "SC",
  },
  {
    name: "South Dakota",
    abbreviation: "SD",
  },
  {
    name: "Tennessee",
    abbreviation: "TN",
  },
  {
    name: "Texas",
    abbreviation: "TX",
  },
  {
    name: "Utah",
    abbreviation: "UT",
  },
  {
    name: "Vermont",
    abbreviation: "VT",
  },
  {
    name: "Virgin Islands",
    abbreviation: "VI",
  },
  {
    name: "Virginia",
    abbreviation: "VA",
  },
  {
    name: "Washington",
    abbreviation: "WA",
  },
  {
    name: "West Virginia",
    abbreviation: "WV",
  },
  {
    name: "Wisconsin",
    abbreviation: "WI",
  },
  {
    name: "Wyoming",
    abbreviation: "WY",
  },
];
