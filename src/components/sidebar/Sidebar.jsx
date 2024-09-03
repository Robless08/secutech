import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import LogoBlue from "../../assets/images/logo_blue.svg";
import LogoWhite from "../../assets/images/logo_white.svg";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineBookOnline,
  MdOutlineCardMembership,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineDoorFront,
  MdOutlineGridView,
  MdOutlineLock,
  MdOutlineLockPerson,
  MdOutlineLogout,
  MdOutlineMessage,
  MdOutlinePeople,
  MdOutlineSettings,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-oepn-btn"
    ) {
      closeSidebar();
    }
  };

  const handlelogout = () => {
    Navigate('/Signin')
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    <nav
      className={`sidebar ${isSidebarOpen ? "no sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={theme === LIGHT_THEME ? LogoBlue : LogoWhite} alt="" />
          <span className="sidebar-brand-text">ROBLESS</span>
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/Dashboard" className="menu-link active">
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/Statistics" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineBarChart size={20} />
                </span>
                <span className="menu-link-text">Statistics</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/ProgramAccessCards" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineCardMembership size={20} />
                </span>
                <span className="menu-link-text">Program Access Cards</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/MonitorAccess" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineDoorFront size={20} />
                </span>
                <span className="menu-link-text">Monitor Access</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/ManageAccounts" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineBookOnline size={20} />
                </span>
                <span className="menu-link-text">Manage Accounts</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/ControlAccesshistory" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineCardMembership size={19} />
                </span>
                <span className="menu-link-text">Control Access history</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/ManageSecurity" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLock size={19} />
                </span>
                <span className="menu-link-text">Manage Security</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="/Settings" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text" onClick={handlelogout}>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
};

export default Sidebar;
