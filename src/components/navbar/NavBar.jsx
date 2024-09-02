import { useState } from 'react';
import styles from "./navbar.module.css";
import { NavLink } from 'react-router-dom';
import { FaMap } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaBarsStaggered } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log("Menu toggled:", isMenuOpen); 
    };


    return (
        <header id="navbar">
            <div className={styles.top_bar}>
                <div className={styles.contact_info}>
                    <div><MdEmail className={styles.myIcon}/> <span>info@company.com</span></div>
                    <div><FaMap className={styles.myIcon}  /> <span>Sunny Isles Beach, FL 33160</span></div>
                </div>
                <div className={styles.social_icons}>
                    <a href="#"><CiFacebook /></a>
                    <a href="#"><CiTwitter /></a>
                    <a href="#"><CiLinkedin /></a>
                    <a href="#"><CiInstagram /></a>
                </div>
            </div>

            
            <nav  className={styles.navbar}>
                <div className={styles.navbar_brand}>
                    <h1>VILLA</h1>
                </div>
                <div className={styles.navbar_menu} >
                <ul className={styles.navbar_links}>
                    <li>
                        <NavLink
                        className={({ isActive }) =>
                            isActive ? `${styles.active}` : ""
                        }
                        to="/Villa/"
                        >
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className={({ isActive }) =>
                            isActive ? `${styles.active}` : ""
                        }
                        to="/Properties"
                        >
                        Properties
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className={({ isActive }) =>
                            isActive ? `${styles.active}` : ""
                        }
                        to="/BestDeal"
                        >
                        Property Details
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        className={({ isActive }) =>
                            isActive ? `${styles.active}` : ""
                        }
                        to="/ContactUs"
                        >
                        Contact Us
                        </NavLink>
                    </li>
                    </ul>

                    <div className={styles.schedule_button}>
                        <a href="#" className={styles.btn_schedule}>Schedule a visit</a>
                    </div>
                    <div className={styles.menu_icon} onClick={toggleMenu}>
                        <FaBarsStaggered />
                    </div>
                    <div className={`${styles.nav_menu} ${isMenuOpen ? styles.active : ""}`}>
                        {console.log("Menu class applied:", isMenuOpen ? styles.active : "inactive")}
                        <ul className={styles.menu_links}>
                            <li><NavLink className={(isActive) =>isActive ? "active" : ""} to="/Villa/ ">Home </NavLink></li>
                            <li><NavLink className={(isActive) =>isActive ? "active" : ""}  to="/Properties">Properties</NavLink></li>
                            <li><NavLink className={(isActive) =>isActive ? "active" : ""}  to="/BestDeal">Property Details</NavLink></li>
                            <li><NavLink className={(isActive) =>isActive ? "active" : ""}  to="/ContactUs">Contact Us</NavLink></li>
                        </ul>
                        <div className={styles.menu_icons}>
                            <a href="#"><CiFacebook /></a>
                            <a href="#"><CiTwitter /></a>
                            <a href="#"><CiLinkedin /></a>
                            <a href="#"><CiInstagram /></a>
                        </div>
                    </div>
                    
                </div>
            </nav>
        </header>
    );
};

export default NavBar;