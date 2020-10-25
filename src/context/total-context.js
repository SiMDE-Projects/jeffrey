import React from "react";

export const TotalContext = React.createContext({
  total: 0,
  handleTotal: () => {}
});

export default TotalContext;
