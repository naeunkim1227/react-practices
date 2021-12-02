import React from 'react';

import styles from './assets/scss/Email.scss'

const Email = ({firstname,lastname,email}) => {
    return (
        <li className={styles.Email}>
        <a href=''/>
        <h4>
            {email}
        </h4>
        <span>
            {`${firstname} ${lastname}`}
        </span>
        <br/>
        </li>
    );
};

export default Email;