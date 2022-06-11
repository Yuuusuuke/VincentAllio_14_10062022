import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

// Pages
import Index from "./pages/Index/Index";
import EmployeesList from "./pages/EmployeesList/EmployeesList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/employees-list" element={<EmployeesList />} />
          <Route path="/" element={<Index />} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
