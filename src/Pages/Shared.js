import React from "react";
import { Outlet } from "react-router-dom";
import SharedNavigation from "./SharedNavigation";

function Shared(){
    return(
        <>
        <SharedNavigation/>
        <Outlet/>
        </>
    )
}

export default Shared;