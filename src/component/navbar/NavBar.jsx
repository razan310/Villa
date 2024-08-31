import { useState } from 'react';
import styles from "./navbar.module.css";
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.navbar_brand}>
                    <h1>VILLA</h1>
                </div>
                <div className={styles.menu_toggle} onClick={toggleMenu}>
                    <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
                <div className={`${styles.navbar_menu} ${menuOpen ? styles.active : ''}`}>
                    <ul className={styles.navbar_links}>
                        <li><NavLink className={(isActive) =>isActive ? "active" : ""} to="/Villa/ ">Home </NavLink></li>
                        <li><NavLink className={(isActive) =>isActive ? "active" : ""}  to="/Properties">Properties</NavLink></li>
                        <li><NavLink className={(isActive) =>isActive ? "active" : ""}  to="/BestDeal">Property Details</NavLink></li>
                        <li><NavLink className={(isActive) =>isActive ? "active" : ""}  to="/ContactUs">Contact Us</NavLink></li>
                    </ul>
                    <div className={styles.schedule_button}>
                        <a href="#" className={styles.btn_schedule}>Schedule a visit</a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;