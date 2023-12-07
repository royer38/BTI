import { createContext, useState } from "react";
import React from "react";

export const ArrayContext = createContext();
export const SC_BO = [
    {
      id: 1,
      titulo: "Screen Basic",
      imagen: '', 
    },
    {
      id: 2,
      titulo: "Screen Soft",
      imagen: '',
    },
    {
      id: 3,
      titulo: "Screen Milan",
      imagen: '',
    },
    {
      id: 4,
      titulo: "B.O. Long Beach",
      imagen: '',
    },
    {
      id: 5,
      titulo: "B.O. Luxury",
      imagen: '',
    },
    {
      id: 6,
      titulo: "B.O. OHIO",
      imagen: '',
    },
  ];

  const ArrayBlackOut = ({children}) => {
    const total = SC_BO.length;
    return (
      <ArrayContext.Provider value={total}>{children}</ArrayContext.Provider>
    );
  };
export default ArrayBlackOut;