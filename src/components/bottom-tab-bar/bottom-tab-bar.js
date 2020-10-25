import React from "react";

import { Icon } from 'semantic-ui-react';

import './bottom-tab-bar.css';
import buy from '../../assets/Buy.svg';

const Bottom = ({ total }) => (
    <div className="Bottom">
      <div className="Right_text">
        <h1>Total</h1>
      </div>
      <button className='Buy_button'>
        <Icon name='paper plane' size='big' inverted/>
      </button>
      <div className="Left_text">
        <h1>{total}€</h1>
      </div>
    </div>
)

export default Bottom;
