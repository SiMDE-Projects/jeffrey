import React from "react";

import './bottom-tab-bar.css';
import Buy_button from '../ressources/buy_button.js'

const Bottom = ({ total }) => (
    <div className="Bottom">
      <div className="Buy">
        <Buy_button/>
      </div>
    </div>
)

export default Bottom;
