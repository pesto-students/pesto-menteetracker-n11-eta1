import "./style.css";
import LogoSideIcon from "./logoSide.js";
import { HiHome } from "react-icons/hi";
import { FaUserGraduate } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc"
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

function SideNavBar () {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <div className="nav-link">
                        <span className="link-text logo-text">Pesto</span>
                        <LogoSideIcon />
                    </div>
                </li>
                <Link to="/admin/dashboard">
                    <li className="nav-item nav-link">
                        <HiHome className="fa-primary h-7 w-7" size={70} />
                        <span className="link-text">Dashboard</span>
                    </li>
                </Link>
                <Link to="/admin/mentee">
                    <li className="nav-item nav-link">
                        <FaUserGraduate className="fa-primary h-7 w-7" size={70} />
                        <span className="link-text">Mentee</span>
                    </li>
                </Link>
                <Link to="/admin/mentor">
                    <li className="nav-item nav-link">
                        <FcBusinessman className="fa-primary h-12 w-12" size={70} />
                        <span className="link-text">Mentor</span>
                    </li>
                </Link>
                <Link to="/admin/team">
                    <li className="nav-item nav-link">
                        <FaUsers className="fa-primary h-7 w-7" size={70} />
                        <span className="link-text">Team</span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default SideNavBar;