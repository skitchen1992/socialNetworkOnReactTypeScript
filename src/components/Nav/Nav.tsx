import './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav(){
    return(
            <nav>
                <ul>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/dialogs">Messages</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to="/settings">Settings</NavLink></li>
                </ul>
            </nav>
    )
}
export default Nav;