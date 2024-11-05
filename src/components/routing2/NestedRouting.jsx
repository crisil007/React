import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Nav from "./Nav"; 
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";

function NestedRouting() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path={'/'} exact element={<Nav/>}/>
                    <Route path={'/home'} exact element={<Home />} />
                    <Route path={'/about'} exact element={<About />} />
                    <Route path={'/dashboard/*'} exact element={<Dashboard/>} />
                </Routes>
            </Router>
        </>
    )
}
export default NestedRouting; 