import "./style.css";
import LogoSideIcon from "../../dashboard/assets/icons/logoSide.js";
import { HiHome } from "react-icons/hi";
import { RiGroupFill } from "react-icons/ri";
import { RiTrelloFill } from "react-icons/ri"
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function MenteeSidebar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <div className="nav-link">
                        <span className="link-text logo-text">Pesto</span>
                        <LogoSideIcon />
                    </div>
                </li>
                <Link to="dashboard">
                    <li className="nav-item nav-link">
                        <HiHome className="fa-primary" size={70} />
                        <span className="link-text">Dashboard</span>
                    </li>
                </Link>
                <Link to="session">
                    <li className="nav-item nav-link">
                        <RiGroupFill className="fa-primary" size={70} />
                        <span className="link-text">Session</span>
                    </li>
                </Link>
                <Link to="task">
                    <li className="nav-item nav-link">
                        <RiTrelloFill className="fa-primary" size={70} />
                        <span className="link-text">Task</span>
                    </li>
                </Link>
                <Link to="profile">
                    <li className="nav-item nav-link">
                        <BsFillPersonFill className="fa-primary" size={70} />
                        <span className="link-text">Profile</span>
                    </li>
                </Link>
            </ul>
        </nav>
    );
}

export default MenteeSidebar;