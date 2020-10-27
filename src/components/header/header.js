import React from 'react';
import { Lnk } from "react-router-dom";
import { Icon, Segment } from 'semantic-ui-react';
import left_order from '@assets/Header_left_order.svg';
import right_order from '@assets/Header_right_order.svg';


import './header.css'

const Header = ({ title }) => (
  <div className="Header_container">
    <img className='left_header' src={left_order} alt='left_header'/>
    <Icon className='cart' name="cart arrow down" size='big' inverted/>
    <h3 className='left_text'>Commander</h3>
    <div  className="header">
      <Icon className='logout' name='log out' size='large'/>
      <div>
        <h1>{title}</h1>
      </div>
      <Icon className='setting' name='setting' size='large'/>
    </div>
    <img className='right_header' src={right_order} alt='right_header'/>
    <Icon className='bell' name="bell" size='big'/>
    <h3 className='right_text'>Suivre</h3>
    <hr/>
  </div>
)

export default Header;
