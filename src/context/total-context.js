import React from 'react';

export const TotalContext = React.createContext({
    total: 0,
    count: 0,
    order: [],
    handleOrder: () => {},
    handleTotal: () => {}
});

export default TotalContext;
