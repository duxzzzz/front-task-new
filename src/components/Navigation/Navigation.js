import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.scss';

const navigation = () => (
    <nav className={styles.Navigation}>
          <NavLink 
            className={styles.Navigation__link} 
            activeClassName={styles.Navigation__active} 
            to="/"
            exact
        >Home</NavLink>
        <NavLink 
            className={styles.Navigation__link} 
            activeClassName={styles.Navigation__active} 
            to="/contact-us"
            exact
        >Contact Us</NavLink>
    </nav> 
);

export default navigation;