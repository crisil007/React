import { Link } from "react-router-dom";
import "./Nav.css";

    
function Nav() {

    return (
        <>

            <nav>
                <ul>
                    <li><Link to={"/home"} style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
                    <li><Link to={"/about"} style={{ color: "white", textDecoration: "none" }}>About</Link></li>
                    <li><Link to={"/dashboard"} style={{ color: "white", textDecoration: "none" }}>Dashboard</Link></li>
                </ul>
            </nav>

        </>
    )
}

export default Nav;
