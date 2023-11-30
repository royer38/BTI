import ScreenBasic from "../Imagenes/Icons/ScreenBasic";
import ScreenMilan from "../Imagenes/Icons/ScreenMilan";
import ScreenSoft from "../Imagenes/Icons/ScreenSoft";
import BOLongBeach from "../Imagenes/Icons/B.O.LongBeach";
import BOLuxury from "../Imagenes/Icons/BOLuxury";
import BO_OHIO from "../Imagenes/Icons/BOOHIO";
import { createContext } from "react";
import React from "react";

export const ArrayContext = createContext();

const ArrayBlackOut = ({children}) => {
const SC_BO = [
{
    id: 1,
    titulo: 'Screen Basic',
    imagen: ScreenBasic,
},
{
    id: 2,
    titulo: 'Screen Soft',
    imagen: ScreenSoft,
},
{
    id: 3,
    titulo: 'Screen Milan',
    imagen: ScreenMilan,
},
{
    id: 4,
    titulo:'B.O. Long Beach',
    imagen: BOLongBeach,
},
{
    id: 5,
    titulo: 'B.O. Luxury',
    imagen: BOLuxury,
},
{
    id: 6,
    titulo: 'B.O. OHIO',
    imagen: BO_OHIO,
},
];
const total = SC_BO.length;
return (
    <ArrayContext.Provider value={total}>
        {children}
    </ArrayContext.Provider>
);
 };
 export default ArrayBlackOut;