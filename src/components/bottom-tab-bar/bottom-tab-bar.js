import React from "react";

import './bottom-tab-bar.css';
import buy_button from '../../assets/button_buy.svg'

const Bottom = ({ total }) => (
    <div className="Bottom">
      <a href=''>
        <img src={buy_button}  className='Buy_button'/>
      </a>
    </div>
)

export default Bottom;
