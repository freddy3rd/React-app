import React, { useEffect, useState } from "react"
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default function SuccessDisplay({value}){
    return (
        <>
          <div className="container grid justify-center items-center bg-white relative h-[100vh] p-5 min-w-md md:max-h-[450px] md:max-w-md md:rounded-3xl md:p-10 md:shadow-2xl ">
            <div className="grid gap-6">
            <BsFillCheckCircleFill className="text-[3.5rem] text-[#ff6257] mt-1 mr-2"/>
            <h1 className=" text-4xl font-bold text-[#242742]">Thanks for subscribing!</h1>
            <p>
            A confirmation email has been sent to <b>{(value === "") ?  "Email@company.com" : value}</b>. 
            Please open it and click the button inside to confirm your subscription.
            </p>
            </div>
            <button className="py-3 mt-8 bg-[#242742] text-white rounded-lg font-semibold hover:bg-gradient-to-r from-[#FE49B2] from-83.48% to-[#FF6257]">Dismiss message</button>
          </div>
        </>
    )
}