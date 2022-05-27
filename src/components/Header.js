import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className='ui secondary pointing menu' style={{ padding: '10px 0' }}>
      <Link to='/' className='item'>
        Streamy
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          All streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
