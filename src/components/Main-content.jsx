import React, { useEffect } from "react"
import Content from "./content";
import SuccessDisplay from "./success-display";
import { useState } from "react";
import {motion} from "framer-motion"

export default function MainContent({value}){
    const [email, setEmail] = useState([])
    
    function useEmail(email){
        setEmail(email)     
    }
  
    useEffect(()=>{
        value(email)
    },[email])

    
    return(
        <>
            <motion.div 
            initial={{ X: 20, opacity:0  }}
            animate={{ x: 0, opacity: 1 ,transition:{duration:.5}}}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }} className="container-fluid flex gap-5 justify-center items-center h-screen overflow-hidden sm:px-3">
            <Content userEmail= {useEmail} value={email}/> 
           </motion.div>
        </>
    )
}