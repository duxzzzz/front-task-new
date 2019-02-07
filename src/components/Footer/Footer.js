import React from 'react';
import styles from './Footer.scss';

const footer = (props) => (
    <footer className={styles.Footer}>
        <h1 className={styles.Footer__text}>{props.text}</h1>
    </footer>
);

export default footer;