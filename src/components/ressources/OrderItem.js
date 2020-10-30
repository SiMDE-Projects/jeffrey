import React, { useState } from 'react';
import { Progress, Portal, Segment, Icon } from 'semantic-ui-react';
import { withNamespaces } from 'react-i18next';
import './css/item.css';

const OrderItem = ({ t, num, percent, etat }) => {

    return (
        <div className="orderItem">
            <h3>
                {t('order n°')} {num}
            </h3>
            <h4>{t(etat)}</h4>
            <Progress className="progressBar" percent={percent} size="tiny" indicating />
        </div>
    );
};

export default withNamespaces()(OrderItem);
