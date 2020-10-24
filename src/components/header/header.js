import React from 'react';

import './header.css'

const Header = ({ title }) => (
  <div className="Header_container">
    <div  className="header">
      <h1>{title}</h1>
    </div>
  </div>
)

export default Header;
