import { Routes, Route } from 'react-router-dom';
import DisplayProfile from "../Screen/displayProfile";
import StaffViewModel from "../Screen/staffViewModel";
import NavigationBar from "../Screen/NavBar/NavigationBar";
import Register from '../View/Register';
import Login from '../View/Login';
import Homepage from '../View/Homepage';



function Routing() {
    return (
        <div>
        <NavigationBar></NavigationBar>
        <div>
            <Routes>
                {/* <Route exact path="/" element={<StaffViewModel />} /> */}
                {/* <Route exact path="/profile/:id" element={<DisplayProfile />} /> */}
                {/* Authentication Route */}
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Homepage />} />
            </Routes>
        </div>
        </div>
    )
}

export default Routing;