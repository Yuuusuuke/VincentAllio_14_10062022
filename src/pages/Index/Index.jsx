import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  TextField,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import format from "date-fns/format";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employees";
import { Modale } from "yuusuke_modale";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200,
    },
  },
};

export default function Index() {
  // API variable and methodes
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birth, setBirth] = useState(new Date("2030-08-18T21:11:54"));
  const [start, setStart] = useState(new Date("2030-08-18T21:11:54"));
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [department, setDepartment] = useState("Sales");

  const [openModale, setOpenModale] = useState(false);

  /* Table to know where the error is | [0] is firstName ; [8] is department | order list above */
  const [errors, setErrors] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const submitForm = (e) => {
    e.preventDefault();
    let tableErrors = [];

    // Check every input
    tableErrors = [
      !checkTextInput(firstName),
      !checkTextInput(lastName),
      !checkBirthDate(format(birth, "dd-MM-yyyy")),
      !checkStart(format(start, "dd-MM-yyyy")),
      !checkTextInput(street),
      !checkTextInput(city),
      !checkTextInput(state),
      !checkZip(zip),
      !checkTextInput(department),
    ];
    setErrors(tableErrors);

    // Check if there is an error anywhere in the form
    let ok = true;
    tableErrors.forEach((error) => {
      if (error) {
        ok = false;
      }
    });
    if (ok) {
      dispatch(
        addEmployee([
          firstName,
          lastName,
          format(birth, "dd/MM/yyyy"),
          format(start, "dd/MM/yyyy"),
          street,
          city,
          state,
          zip,
          department,
        ])
      );
      setOpenModale(true);
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
        <form action="#" id="create-employee" onSubmit={(e) => submitForm(e)}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors[0] && <p className="error">Invalid name</p>}

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors[1] && <p className="error">Invalid name</p>}

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3} className="datepickers">
              <DesktopDatePicker
                label="Date of Birth"
                inputFormat="dd/MM/yyyy"
                value={birth}
                onChange={(e) => setBirth(e)}
                renderInput={(params) => <TextField {...params} />}
              />
              {errors[2] && <p className="error">Invalid date</p>}
              <DesktopDatePicker
                label="Start Date"
                inputFormat="dd/MM/yyyy"
                value={start}
                onChange={(e) => setStart(e)}
                renderInput={(params) => <TextField {...params} />}
              />
              {errors[3] && <p className="error">Invalid date</p>}
            </Stack>
          </LocalizationProvider>

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              onChange={(e) => setStreet(e.target.value)}
            />
            {errors[4] && <p className="error">Invalid address</p>}

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
            {errors[5] && <p className="error">Invalid city</p>}

            <FormControl className="dropdown" fullWidth>
              <InputLabel id="state">State</InputLabel>
              <Select
                className="select"
                labelId="state"
                value={state}
                label="State"
                onChange={(e) => setState(e.target.value)}
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
              {errors[6] && <p className="error">Invalid state</p>}
            </FormControl>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              onChange={(e) => setZip(e.target.value)}
            />
            {errors[7] && <p className="error">Invalid code</p>}
          </fieldset>

          <FormControl className="dropdown" fullWidth>
            <InputLabel id="department">Department</InputLabel>
            <Select
              className="select"
              labelId="department"
              value={department}
              label="Department"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <MenuItem value={"Sales"}>Sales</MenuItem>
              <MenuItem value={"Marketing"}>Marketing</MenuItem>
              <MenuItem value={"Engineering"}>Engineering</MenuItem>
              <MenuItem value={"Human Resources"}>Human Resources</MenuItem>
              <MenuItem value={"Legal"}>Legal</MenuItem>
            </Select>
          </FormControl>
          <input type="submit" value="Save" />
          {openModale && (
            <Modale setFunction={setOpenModale} text="Employee created !" />
          )}
        </form>
      </div>
    </div>
  );
}

function checkTextInput(text) {
  return /[a-zA-Z]{3,}/.test(text) && text !== "";
}

function checkBirthDate(birthdate) {
  return /(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19\d{2}|20[0-2][0-9]|2022)\b/.test(
    birthdate
  );
}

function checkStart(startdate) {
  return /(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19\d{2}|20[0-9][0-9])\b/.test(
    startdate
  );
}

function checkZip(code) {
  return /\d{3,}/.test(code) && code !== "";
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
