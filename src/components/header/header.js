import React from 'react';
import { Lnk } from "react-router-dom";
import { Icon, Segment } from 'semantic-ui-react';
import left_order from '@assets/Header_left_order.svg';
import right_order from '@assets/Header_right_order.svg';


import './header.css'

const Header = ({ title }) => (
  <div className="Header_container">
      <Icon className='logout' name='log out' size='large'/>
      <div>
        <h1>{title}</h1>
      </div>
      <Icon className='setting' name='setting' size='large'/>
    <hr/>
  </div>
)

export default Header;
