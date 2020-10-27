import React from 'react';
import BottomItem from '../ressources/BottomItem';
import './bottom-tab-bar.css';

const Bottom = ({ indexActive }) => {
  return(
  <div className="Bottom">
    { indexActive === 0 ? <BottomItem active={true} icon='cart' redirect='/order'/> : <BottomItem active={false} icon='cart' redirect='/order'/>}
    { indexActive === 1 ? <BottomItem active={true} icon='bell' redirect='/track'/> : <BottomItem active={false} icon='bell' redirect='/track'/>}
  </div>
)};

export default Bottom;
