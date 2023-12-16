import React from 'react';
import { Link } from 'react-router-dom';

import Topbar from '../topbars/topbar';
import SearchBar from '../searchbars/searchbar';

import '../App.css';
import '../styles/navbars.css'


const Navbar = () => {
    return (
        <div className='navigation-bar'>
            <div className='top-left'>
                <Topbar />
            </div>
            <div className='top-center'>
                <ul className='top-list'>
                    <li className='top-listItem'>
                        <Link
                            to='/'
                            style={{ textDecoration: 'none' }}
                        >
                            HOME
                        </Link>
                    </li>
                    <li className='top-listItem'>
                        <Link
                            to='/about'
                            style={{ textDecoration: 'none' }}
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li className='top-listItem'>
                        <Link
                            to='/contact'
                            style={{ textDecoration: 'none' }}
                        >
                            CONTACT
                        </Link>
                    </li>
                    <li className='top-listItem'>
                        <Link
                            to='/write'
                            style={{ textDecoration: 'none' }}
                        >
                            WRITE
                        </Link>
                    </li>
                    <li className='top-listItem'>
                        <Link
                            to='/logout'
                            style={{ textDecoration: 'none' }}
                        >
                            LOGOUT
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='top-right'>
                <SearchBar />
            </div>
        </div>
    )
}

export default Navbar;
