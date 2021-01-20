import React from 'react';
import { Progress } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './css/item.css';

const OrderItem = ({ num, percent, etat }) => {
    const { t } = useTranslation();

    return (
        <Link to={'/orderDetails?id=' + num} className="orderItem">
            <h3>
                {t('order n°')} {num}
            </h3>
            <h4>{t(etat)}</h4>
            <Progress className="progressBar" percent={percent} size="tiny" indicating />
        </Link>
    );
};

export default OrderItem;
