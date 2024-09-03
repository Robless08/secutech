import { useContext, useEffect } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "./constants/themeConstants";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import BaseLayout from "./layout/BaseLayout";
import { Dashboard, PageNotFound } from "./screens";
import Welcome from "./components/Welcome";
import Signin from "./components/SigninSignup/Signin";
import SignUp from './components/SigninSignup/SignUp';
import { Sidebar } from "./components";
import ProgramAccessCards from "./components/ProgramAccessCards";
import MonitorAccess from "./components/MonitorAccess";
import ManageAccount from "./components/ManageAccounts";
import ControlAccesshistory from "./components/ControlAccesshistory";
import ManageSecurity from "./components/ManageSecurity";
import Settings from "./components/Settings";
import Statistics from "./components/Statistics";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  return (
    <>
      <Router>
        <Routes>
        <Route index element={<Welcome />} />
          <Route element={<BaseLayout />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Sidebar" element={<Sidebar />} />
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="Statistics" element={<Statistics/>}/>
            <Route path="ProgramAccessCards" element={<ProgramAccessCards/>} />
            <Route path="MonitorAccess" element={<MonitorAccess/>} />
            <Route path="ManageAccounts" element={<ManageAccount/>} />
            <Route path="ControlAccesshistory" element={<ControlAccesshistory/>}/>
            <Route path="ManageSecurity" element={<ManageSecurity/>}/>
            <Route path="Settings" element={<Settings/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Register" element={<SignUp />} />

        </Routes>

        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  );
}

export default App;
