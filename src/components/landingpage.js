import React from 'react';
import Topbar from '../topbars/topbar';
import Navbar from '../navbars/navbar';
import SearchBar from '../searchbars/searchbar';

import '../App.css';


const LandingPage = () => {
    return (
        <div className='navigation-bar'>
            <div className='top-left'>
                <Topbar />
            </div>
            <div className='top-center'>
                <Navbar />
            </div>
            <div className='top-right'>
                <SearchBar />
            </div>
        </div>
    )
}

export default LandingPage;