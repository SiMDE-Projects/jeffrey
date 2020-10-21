import React from "react";

import './bottom-tab-bar.css';
import buy from '../../assets/Buy.svg';

const Bottom = ({ total }) => (
    <div className="Bottom">
      <button className='Buy_button'>
        <img className='Buy' src={buy}/>
      </button>
    </div>
)

export default Bottom;
