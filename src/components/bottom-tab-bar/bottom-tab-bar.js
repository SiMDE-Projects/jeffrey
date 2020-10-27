import React from 'react';
import BottomItem from '@components/ressources/BottomItem';
import { useLocation } from "react-router-dom";
import './bottom-tab-bar.css';

const Bottom = () => {
  const loc = useLocation().pathname ;

  return(
  <div className="bottom">
    <BottomItem active={loc === '/order'} icon='cart' redirect='/order'/>
    <BottomItem active={loc === '/track'} icon='bell' redirect='/track'/>
  </div>
)};

export default Bottom;
