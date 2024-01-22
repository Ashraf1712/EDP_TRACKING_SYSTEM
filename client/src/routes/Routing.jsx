import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext'
import NavigationBar from "../Components/NavigationBar";
import Register from '../View/Auth/Register';
import Login from '../View/Auth/Login';
import Homepage from '../View/Homepage';
import AddEDP from '../View/EDP/AddEDP';

function Routing() {
  const { user, isLoading } = useAuthContext();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setAuthChecked(true);
    }
  }, [isLoading]);

  if (!authChecked) {
    // You can return a loading indicator or null while authentication is being checked
    return null;
  }

  return (
    <div>
      {user && <NavigationBar />}
      <div>
        <Routes>
          {user ? (
            <>
              <Route path="/" element={<Homepage />} />
              <Route
                path="/login"
                element={<Navigate to="/" />}
              />
              <Route
                path="/register"
                element={<Navigate to="/" />}
              />
              <Route path="/edp-add" element={<AddEDP />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );

}
export default Routing;