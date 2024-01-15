import { useState } from "react";
import axios from "axios";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [category, setCategory] = useState("");
  const [section, setSection] = useState("");
  const [group, setGroup] = useState("");
  const [yip, setYip] = useState("");
  const [yiSG, setYiSG] = useState("");

  const params = JSON.stringify({
    first_name: firstName,
    last_name: lastName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    department: department,
    category: category,
    section: section,
    group: group,
    yearsInPosition: yip,
    yearsInSG: yiSG,
  });

  const url = "http://localhost/edpdb/register.php";

  const submitData = async () => {
    await axios
      .post(url, params)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitData();
  };

  return (
    <form method="POST">
      <label htmlFor="fname">First name:</label>
      <input
        required
        type="text"
        id="first_name"
        name="first_name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="lname">Last name:</label>
      <input
        required
        type="text"
        id="last_name"
        name="last_name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="email">e-Mail:</label>
      <input
        required
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="password">Password:</label>
      <input
        required
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        required
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      ></input>
      <br></br>
      <br></br>

      <label htmlFor="Department">Department:</label>
      <input
        required
        type="text"
        id="department"
        name="department"
        value="Production Plant 1"
        onChange={(e) => setDepartment(e.target.value)}
        disabled
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="category">Choose a Category:</label>
      <select
        name="category"
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Executive">Executive</option>
        <option value="Non-Executive">Non-Executive</option>
      </select>
      <br></br>
      <br></br>
      <label htmlFor="section">Choose a Section:</label>
      <select
        name="section"
        id="section"
        value={section}
        onChange={(e) => setSection(e.target.value)}
      >
        <option value="Improvement">Improvement</option>
        <option value="Offsite">Offsite</option>
        <option value="Onsite">Onsite</option>
        <option value="PE COC">PE COC</option>
        <option value="Support">Support</option>
      </select>
      <br></br>
      <br></br>
      <label htmlFor="group">Choose a Group:</label>
      <select
        name="group"
        id="group"
        value={group}
        onChange={(e) => setGroup(e.target.value)}
      >
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
        required
        type="number"
        id="yearsInPosition"
        name="yearsInPosition"
        min="1"
        max="20"
        value={yip}
        onChange={(e) => setYip(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="yiSG">Years in Salary Grade:</label>
      <input
        required
        type="number"
        id="yearsInSG"
        name="yearsInSG"
        min="1"
        max="20"
        value={yiSG}
        onChange={(e) => setYiSG(e.target.value)}
      ></input>
      <br></br>
      <br></br>
      <button
        type="submit"
        name="submit"
        id="submit"
        value="Register"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};
