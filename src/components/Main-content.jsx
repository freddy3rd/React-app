import React from "react"


import Content from "./content";

export default function MainContent(){
    return(
        <>
           <div className="container-fluid flex justify-center items-center h-[100vh] sm:px-3">
                <div className="container grid justify-center items-center bg-white relative  h-100 max-w-[800px] md:h-[max-content] sm:flex flex-row-reverse md:p-4 sm:rounded-lg sm:shadow-xl">
                    <Content/>
                </div> 
           </div>
        </>
    )
}