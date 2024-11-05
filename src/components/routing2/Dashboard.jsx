import { Link ,Routes,Route} from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";

function Dashboard(){

    return(
        <>
        <nav>
            <ul>
                <li><Link to={'/dashboard/profile'} style={{ color: "white", textDecoration: "none" }} >Profile</Link></li>
                <li><Link to={'/dashboard/Settings'} style={{ color: "white", textDecoration: "none" }} >Settings</Link></li>
            </ul>
        </nav>

        <section>
            <Routes>
                <Route path={'/profile'} exact element={<Profile/>} />
                <Route path={'/settings'} exact element={<Settings/>} />
            </Routes>
        </section>
        </>
    )

}

export default Dashboard;