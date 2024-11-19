import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./Pages/AddUser";
import Login from "./Pages/Login";
import GetAllUsers from "./Pages/GetAllUsers";

function Routing() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path={"/"} exact element={<Login />} />
                    <Route path={"/adduser"} exact element={<AddUser />} />
                    <Route path={"/getallusers"} exact element={<GetAllUsers />} />
                </Routes>
            </Router>

        </>
    )

}
export default Routing;