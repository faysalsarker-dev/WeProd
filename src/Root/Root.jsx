import { Outlet } from "react-router-dom";
import TopNavbar from "../component/Navber";



const Root = () => {
    return (
        <>
        <TopNavbar/>
        <Outlet/>
            
        </>
    );
};

export default Root;