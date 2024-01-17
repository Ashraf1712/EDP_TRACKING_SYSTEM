import React, { useEffect, useState } from "react";
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from "../../hooks/useAuthContext"
import { Link } from "react-router-dom"

function NavigationBar() {
  const {logout} = useLogout();
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useAuthContext()

  const handleLogout = () => {
    // setIsOpen(!isOpen);
    logout();
  };


  return (
<div className="navbar bg-gray-200">
  <div className="flex-1">
    <a className="btn btn-ghost text-lg text-petronas-primary">PETRONAS</a>
  </div>
  <div className="flex-none">
    <div>
    <p className="text-primary-content p-2">
  {user && user.Staff_Name ? user.Staff_Name : ''}
</p>

    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  );
}

export default NavigationBar;
