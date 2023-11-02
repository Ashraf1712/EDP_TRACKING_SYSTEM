import React, { useEffect, useState } from "react";
import StaffService from "../Services/staffService";
import { useParams, useNavigate } from "react-router-dom";

function DisplayProfile() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let staff = new StaffService();
        const jsonData = await staff.getUserByID(parseInt(id));
        setItems(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <button onClick={handleGoBack}>Back</button>
      <table>
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{items.staffID}</td>
            <td>{items.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DisplayProfile;
