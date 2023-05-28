import React from "react"

export default function Form(){
    
    return (
        <>
            <form className="grid mt-12 relative" >
                <label className="font-bold text-[#242742] text-[.8rem]" htmlFor="#email">Email Address</label>
                <input type="email" className="peer rounded-lg p-4 mt-3 outline-slate-500 border-2 border-slate-400 invalid:bg-pink-200 invalid:border-pink-500 invalid:text-pink-600"   placeholder="email@company.com" id="email" />
                <p className="absolute top-0 right-0 font-bold text-[.8rem] text-pink-400  invisible peer-invalid:visible">Valid Email Required</p>
                <button className="py-3 mt-3 bg-[#242742] text-white rounded-lg font-semibold hover:bg-[#ff6257] ">Subscribe to monthly newsletter</button>
            </form>
        </>
    )
}