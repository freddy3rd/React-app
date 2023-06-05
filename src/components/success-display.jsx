import { BsFillCheckCircleFill } from 'react-icons/bs';
import {motion, transform} from "framer-motion"
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function SuccessDisplay({val}){

  const [email, setEmail] = useState("Manager@company.com")

  useEffect(()=>{
    val(email)
  },[])
  
     return (
        <>
        <div className="container-fluid flex gap-5 justify-center items-center h-[100vh] sm:px-3">      
            <motion.div 
            initial={{ x: 50, opacity:0  }}
            animate={{ x: 0, opacity: 1 ,transition:{duration:.5}}}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            end={{ scale: 50, opacity:0 }}
            className="container grid justify-center items-center bg-white relative h-[100vh] p-5 min-w-md md:max-h-[450px] md:max-w-md md:rounded-3xl md:p-10 md:shadow-2xl ">
              <div className="grid gap-6">
              <BsFillCheckCircleFill className="text-[3.5rem] text-[#ff6257] mt-1 mr-2"/>
              <h1 className=" text-4xl font-bold text-[#242742]">Thanks for subscribing!</h1>
              <p>
              A confirmation email has been sent to <b>{email}</b>. 
              Please open it and click the button inside to confirm your subscription.
              </p>
              </div>
              <Link to="/" className="flex justify-center py-3 mt-8 bg-[#242742] text-white rounded-lg font-semibold hover:bg-gradient-to-r from-[#FE49B2] from-83.48% to-[#FF6257]"><button >Dismiss message</button></Link>
            </motion.div>
           </div>
        </>
    )
}