import React from "react";
import styles from './assets/scss/App.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell, faCheckCircle , faTimesCircle} from '@fortawesome/free-solid-svg-icons';


// addtional 꼭 필요하진 않음 통째로 카테고리를 다 받았다고 생각하면 된다..
import {library} from '@fortawesome/fontawesome-svg-core';

import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';


export default function(){
    library.add(faBell, fab);


        return(
        <div className={styles.App}>
            <h1 className={styles.Header }>{`SASS & SCSS (css-loader options : {modules : true})`}</h1>

                {/* examples*/}
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faCheckCircle} />
                <FontAwesomeIcon icon={faTimesCircle} />


                {/* solid  그룹 지정, 이름 적기 방법 */}
                <FontAwesomeIcon icon={["fas", "bell"]} />
                <FontAwesomeIcon icon={["bell"]} />

                {/* regular*/}
                <FontAwesomeIcon  icon={["far", "bell"]} />


                {/* brands*/}
                <FontAwesomeIcon icon={["fab", "github"]}/>
                <FontAwesomeIcon icon={["fab", "github"]}/>
        </div>
         )
}
