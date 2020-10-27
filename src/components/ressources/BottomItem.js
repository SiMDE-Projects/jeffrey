import React from 'react';
import './css/item.css';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BottomItem = ({ active, icon, redirect }) => {
    return(
    <div className='bottomItem'>
    { active === true ?
      <>
        <div className='topLine'/>
        <Icon name={icon} size='big'/>
        <div className='bottomLine'/>
      </>
    :
      <>
        <Link to={redirect}>
          <Icon name={icon} size='big'/>
        </Link>
      </>
    }

    </div>
  )
}

export default BottomItem;
