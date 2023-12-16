import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

import '../styles/topbar.css'

const Topbar = () => {
  return (
    <>
      <div className='social-icon'>
        <FaFacebookSquare className='top-icon' />
        <FaTwitterSquare className='top-icon' />
        <FaWhatsappSquare className='top-icon' />
        <FaInstagramSquare className='top-icon' />
      </div>
    </>
  )
}

export default Topbar;
