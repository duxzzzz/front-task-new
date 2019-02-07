import React from 'react';
import Form from '../../containers/Form/Form';
import styles from './Contact.scss';

const contact = () => (
    <div className={styles.Contact}>
        <h1 className={styles.Contact__title}>Feel free to contact us!</h1>
        <Form/>
    </div> 
)

export default contact;