import React from "react"
import Content from "./content";
import SuccessDisplay from "./success-display";
import { useState } from "react";

export default function MainContent(){
    const [email, setEmail] = useState("")
  
    function useEmail(email){
        setEmail(email)
    }
    return(
        <>
           <div className="container-fluid flex gap-5 justify-center items-center h-[100vh] sm:px-3">
               
                    {
                       (email !== "") ? <SuccessDisplay value={email} /> :  <Content value={useEmail}/> 
                    }
           </div>
        </>
    )
}