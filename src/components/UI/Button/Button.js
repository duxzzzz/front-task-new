import React from 'react';
import styles from './Button.scss'

const button = (props) => (
    <button className={styles.Button} onClick={props.clicked}>{props.children}</button>
);

export default button;