import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { DisplayStaff } from "./Screen/DisplayStaffDetails";
import DisplayProfile from "./Screen/displayProfile";
import StaffViewModel from "./Screen/staffViewModel";

// Import your Products component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<StaffViewModel />} />
        <Route exact path="/profile/:id" element={<DisplayProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
