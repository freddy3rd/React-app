import React from "react"
import mobileHeroImage from '../assets/illustration-sign-up-mobile.svg'
import desktopHeroImage from '../assets/illustration-sign-up-desktop.svg'
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default function Content(){
    return(
        <>
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
                       <div className="grid mt-12">
                            <label className="font-bold text-[#242742]" htmlFor="#email">Email Address</label>
                            <input type="text" className="rounded-lg p-4 mt-3 outline-slate-500 border-2 border-slate-400"  placeholder="email@company.com" id="email" />
                            <button className="py-3 mt-3 bg-[#242742] text-white rounded-lg font-semibold hover:bg-[#ff6257]">Subscribe to monthly newsletter</button>
                       </div>
                    </div>
        </>
    )
}