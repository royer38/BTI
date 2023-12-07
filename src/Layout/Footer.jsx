import { Outlet } from "react-router-dom";

const PLayout = () => { 
    return(
        <>
        <Outlet/>
        <p>footer</p>
        </>
    );
 };

export default PLayout;