import React, { useState } from 'react';
import styles from './assets/scss/SearchBar.scss';

const SearchBar = ({keyword,callback}) => {

    return (
        <div className={styles.Searchbar}>
            찾기: <input type='text' placeholder='찾기' onChange={(e) => callback(e.target.value)} value={keyword}/>
            //g하나는 자기가 부모한테 받는것, 하나는 보내는것
        </div>
    );
};

export default SearchBar;