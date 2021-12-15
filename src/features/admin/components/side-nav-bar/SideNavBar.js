import "./style.css";
import LogoSideIcon from "./logoSide.js";
import { HiHome } from "react-icons/hi";
import { RiGroupFill } from "react-icons/ri";
import { RiTrelloFill } from "react-icons/ri"
import { BsFillPersonFill } from "react-icons/bs";
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
                        <HiHome className="fa-primary" size={70} />
                        <span className="link-text">Dashboard</span>
                    </li>
                </Link>
                <Link to="/admin/mentee">
                    <li className="nav-item nav-link">
                        <RiGroupFill className="fa-primary" size={70} />
                        <span className="link-text">Mentee</span>
                    </li>
                </Link>
                <Link to="/admin/mentor">
                    <li className="nav-item nav-link">
                        <RiTrelloFill className="fa-primary" size={70} />
                        <span className="link-text">Mentor</span>
                    </li>
                </Link>
                <Link to="/admin/team">
                    <li className="nav-item nav-link">
                        <BsFillPersonFill className="fa-primary" size={70} />
                        <span className="link-text">Team</span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default SideNavBar;