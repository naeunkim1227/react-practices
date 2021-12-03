import React from 'react';
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';

const Emaillist = ({ keyword,emails }) => {
    return (
            <ul className= { styles.Emaillist } >
                {/* <Email />
                <Email />
                <Email /> */}

                {
                    emails
                        .filter(email => email.firstName.indexof(keyword) !== -1 || email.lastName.indexof(keyword) !== -1)
                        .map((email) => <Email 
                                                key={email.no} 
                                                firstName={email.firstName} 
                                                lastName={email.lastName} 
                                                email={email.email} />)
                }

            </ ul>
    );
};

export default Emaillist;