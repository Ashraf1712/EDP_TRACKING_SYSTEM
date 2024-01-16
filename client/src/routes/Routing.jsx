import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext'
import NavigationBar from "../Screen/NavBar/NavigationBar";
import Register from '../View/Register';
import Login from '../View/Login';
import Homepage from '../View/Homepage';




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
              <Route path="/" element={<Homepage />} />
            ) : (
              <Route path="/" element={<Navigate to="/login" />} />
            )}
            {/* Other routes go here */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    );
  }
  

export default Routing;
    // function Routing() {
    //     const {user} = useAuthContext()
    //     return (
    //         <div>
    //         {user ? <NavigationBar></NavigationBar> : ''}
    //         <div>
    //             <Routes>
    //                 {/* <Route exact path="/" element={<StaffViewModel />} /> */}
    //                 {/* <Route exact path="/profile/:id" element={<DisplayProfile />} /> */}
    //                 {/* Authentication Route */}
    //                 
    //                 <Route exact path="/login" element={<Login />} />
    //                 {
    //                     user ? <Route exact path="/" element={<Homepage />} /> 
    //                     : 
    //                     <Route exact path="/login" element={<Login />} />
    //                 }
    //             </Routes>
    //         </div>
    //         </div>
    //     )
    // }