import "./style.css";
import LogoSideIcon from "./logoSide.js";
import { HiHome } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function SideNavBar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <div className="nav-link">
                        <span className="link-text logo-text">Pesto</span>
                        <LogoSideIcon />
                    </div>
                </li>
                <Link to="/mentor/dashboard">
                    <li className="nav-item nav-link">
                        <HiHome className="fa-primary" size={70} />
                        <span className="link-text">Dashboard</span>
                    </li>
                </Link>
                <Link to="/mentor/session">
                    <li className="nav-item nav-link">
                        <FaCalendarAlt className="fa-primary h-6 w-6" size={70} />
                        <span className="link-text">Session</span>
                    </li>
                </Link>
                <Link to="/mentor/team">
                    <li className="nav-item nav-link">
                        <FaUsers className="fa-primary" size={70} />
                        <span className="link-text">Team</span>
                    </li>
                </Link>
                <Link to="/mentor/profile">
                    <li className="nav-item nav-link">
                        <BsFillPersonFill className="fa-primary" size={70} />
                        <span className="link-text">Profile</span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default SideNavBar;