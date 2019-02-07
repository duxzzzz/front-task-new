import React from 'react';
import styles from './Landing.scss';

const landing = () => (
    <div className={styles.Landing}>
        <h1 className={styles.Landing__title}>Welcome</h1>
        <p className={styles.Landing__lead}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
)

export default landing;