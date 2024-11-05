import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";


function BasicRouting() {

    return (
        <>
            {/* <Router>
            <nav>
                <ul>
                    <li><Link to={"/home"} style={{color : "black" , textDecoration : "none"}}>Home</Link></li>
                    <li><Link to={"/about"} style={{color : "black" , textDecoration : "none"}}>About</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path={'/home'} exact element={<Home/>}/>
                <Route path={'/about'} exact element={<About/>}/>
            </Routes>
        </Router> */}



            {/* or */}



            <Router>
                <Routes>
                    <Route path={'/'} exact element={<Nav/>}/>
                    <Route path={'/home'} exact element={<Home />} />
                    <Route path={'/about'} exact element={<About />} />
                </Routes>
            </Router>

        </>
    )
}
export default BasicRouting;