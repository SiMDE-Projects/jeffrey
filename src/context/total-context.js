import { createContext } from 'react';

export default createContext({
    total: 0,
    count: 0,
    order: [],
    handleOrder: () => {},
    handleTotal: () => {}
});
