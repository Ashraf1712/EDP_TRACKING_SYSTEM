import { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const params = JSON.stringify({
    email: email,
    password: password,
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
