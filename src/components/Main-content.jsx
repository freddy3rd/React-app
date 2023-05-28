import React from "react"


import Content from "./content";
import SuccessDisplay from "./success-display";

export default function MainContent(){
    return(
        <>
           <div className="container-fluid flex justify-center items-center h-[100vh] sm:px-3">
               
                    {/* <Content/> */}
                    <SuccessDisplay/>
               
           </div>
        </>
    )
}