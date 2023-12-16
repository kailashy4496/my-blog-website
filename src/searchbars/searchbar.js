import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import '../styles/searchbar.css'

const SearchBar = () => {
    return (
        <>
            <div className='top-img'>
                <img src='https://img.freepik.com/free-photo/beautiful-girl-stands-park_8353-5084.jpg?w=2000' alt='' />
            </div>
            <div className='top-searchIcon'>
                <BiSearchAlt2 />
            </div>
        </>
    )
}

export default SearchBar;
