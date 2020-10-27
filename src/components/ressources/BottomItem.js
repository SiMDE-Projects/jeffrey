import React from 'react';
import './css/item.css';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BottomItem = ({ active, icon, redirect }) => {
    return(
    <div className='Bottom_item'>
    { active === true ?
      <>
        <div className='top_line'/>
        <Icon name={icon} size='big'/>
        <div className='bottom_line'/>
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
