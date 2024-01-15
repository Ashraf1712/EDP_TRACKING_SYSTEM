import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StaffService from "../../Services/staffService";

function NavigationBar() {
  const id = 1;
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let staff = new StaffService();
        const jsonData = await staff.getUserByID(id);
        setItems(jsonData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [id]);

  const expandNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="Navbar">
        <div className="Navbar-left-side">
          <button onClick={expandNavBar}>Logo</button>
        </div>
        <div className="Navbar-right-side">
          <div className="profile-name">{items.name}</div>
          <div className="profile-logo">
            <img
              className="img-thumbnail"
              alt="profileImage"
              rel="icon"
              src="/profile.png"
            />
          </div>
        </div>
      </nav>

      {/* <div className={`Navbar-left${isOpen ? "-expand" : ""}`}>
        Test Vertical
        <div className={`${isOpen ? "sidebar" : ""}`}>Test 2</div>
      </div> */}
    </div>
  );
}

export default NavigationBar;
