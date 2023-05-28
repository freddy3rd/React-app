import React, { useState } from "react"
import mobileHeroImage from '../assets/illustration-sign-up-mobile.svg'
import desktopHeroImage from '../assets/illustration-sign-up-desktop.svg'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Form from "./form";

export default function Content(){

    return(
        <>
         <div className="container grid justify-center items-center bg-white relative  h-100 max-w-[800px] md:h-[max-content] sm:flex flex-row-reverse md:p-4 sm:rounded-lg sm:shadow-xl">
                <picture className="self-start sm:self-center sm:px-4 md:px-2 w-100" >
                    <source media="(min-width: 500px" srcSet={desktopHeroImage}/>
                    <img src={mobileHeroImage} className=" w-[100%]" alt="" />
                </picture>
                    <div className=" self-start p-5">
                        <h1 className=" text-5xl mb-4 font-bold text-[#242742]">Stay updated!</h1>
                        <p className="my-4">Join 60,000+ product managers receiving monthly updates on:</p> 
                        <ul className="list-disc">
                            <li className="flex items-start mt-3">
                            <BsFillCheckCircleFill className=" text-[#ff6257] mt-1 mr-2"/>
                            Product discovery and building what matters
                            </li>
                            <li className="flex items-start mt-3">
                            <BsFillCheckCircleFill className=" text-[#ff6257] mt-1 mr-2"/>
                            Measuring to ensure updates are a success
                            </li>
                            <li className="flex items-start mt-3">
                            <BsFillCheckCircleFill className=" text-[#ff6257] mt-1 mr-2"/>   
                            And much more!
                            </li>
                        </ul>
                        <Form/>
                    </div>
                </div>
        </>
    )
}