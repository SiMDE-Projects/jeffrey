import React, { useState } from 'react';

import { Accordion } from 'semantic-ui-react';

import './css/commande.css';

import data from '../assets/data.json';

import Header from '../components/header/header';
import Bottom from '../components/bottom-tab-bar/bottom-tab-bar';
import Left_Item from '../components/ressources/left_item';
import Right_Item from '../components/ressources/right_item';

const product_data = data.Product;

const rootPanels = product_data.map((item,i) => i%2 == 0 ?
    {key: {i}, title: {content:<Left_Item/>, icon: ''}, content: {content : i} }
    :
    {key: {i}, title: {content:<Right_Item/>, icon: ''}, content: {content : i} }
  );

console.log(rootPanels);



function Commande() {
    const [total, setTotal] = useState(0);

  return (
    <div className="Main_container">
      <Header title='Commander'/>
      <div className="Body_container">
      <Accordion defaultActiveIndex={0} panels={rootPanels}/>
      </div>
      <Bottom total={total}/>
    </div>
  );
}

export default Commande;
