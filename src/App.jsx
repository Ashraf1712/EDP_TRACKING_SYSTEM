import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { createRoot } from "react-dom";
// Import your Products component

function App() {
  function validateInput(inputElement) {
    const maxValue = parseFloat(inputElement.getAttribute("max"));
    const enteredValue = parseFloat(inputElement.value);

    if (isNaN(enteredValue)) {
      inputElement.value = ""; // Clear the input if it's not a number
    } else if (enteredValue > maxValue) {
      inputElement.value = maxValue; // Set the value to the maximum allowed
    }
  }

  return (
    <>
      <div>
        <h2>Register</h2>
        <form method="POST">
          <label htmlFor="fname">First name:</label>
          <input type="text" id="fname" name="fname"></input>
          <br></br>
          <br></br>
          <label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" name="lname"></input>
          <br></br>
          <br></br>
          <label htmlFor="email">e-Mail:</label>
          <input type="email" id="email" name="email"></input>
          <br></br>
          <br></br>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"></input>
          <br></br>
          <br></br>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
          ></input>
          <br></br>
          <br></br>

          <label htmlFor="lname">Department:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value="Production Plant 1"
            disabled
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="category">Choose a Category:</label>
          <select name="category" id="category">
            <option value="Executive">Executive</option>
            <option value="Non-Executive">Non-Executive</option>
          </select>
          <br></br>
          <br></br>
          <label htmlFor="section">Choose a Section:</label>
          <select name="section" id="section">
            <option value="Improvement">Improvement</option>
            <option value="Offsite">Offsite</option>
            <option value="Onsite">Onsite</option>
            <option value="PE COC">PE COC</option>
            <option value="Support">Support</option>
          </select>
          <br></br>
          <br></br>
          <label htmlFor="group">Choose a Group:</label>
          <select name="group" id="group">
            <option value="Improvement">Day</option>
            <option value="Group 1">Group 1</option>
            <option value="Group 2">Group 2</option>
            <option value="Group 3">Group 3</option>
            <option value="Group 4">Group 4</option>
          </select>
          <br></br>
          <br></br>
          <label htmlFor="yip">Years in Position:</label>
          <input
            type="number"
            id="yearsInPosition"
            name="yearsInPosition"
            min="1"
            max="20"
            onInput={(e) => validateInput(e.target)}
          ></input>
          <br></br>
          <br></br>
          <label htmlFor="yiSG">Years in Salary Grade:</label>
          <input
            type="number"
            id="yearsInSG"
            name="yearsInSG"
            min="1"
            max="20"
            onInput={(e) => validateInput(e.target)}
          ></input>
        </form>
      </div>
    </>
  );
}

export default App;
