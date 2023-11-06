import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayProfile from "./Screen/displayProfile";
import StaffViewModel from "./Screen/staffViewModel";
import NavigationBar from "./Screen/NavBar/NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route exact path="/" element={<StaffViewModel />} />
        <Route exact path="/profile/:id" element={<DisplayProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
