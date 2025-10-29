import { useState } from "react"

export default function ChekoutCard(){
    return (
        <div className="h-full w-full flex flex-col justify-between gap-5 p-5 rounded-md bg-slate-300">
            <div className="w-full flex gap-5">
                <div className="flex w-full flex-col gap-2">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="John Doe" className="bg-slate-third p-3 rounded-md outline-none" />
                </div>
                <div className="flex w-full flex-col gap-2">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="John Doe" className="bg-slate-third p-3 rounded-md outline-none" />
                </div>
            </div>
            <div className="flex ">
                <div className="flex w-full flex-col gap-2">
                    <div className="w-full flex gap-2">
                        <input type="text" placeholder="John Doe" className="bg-slate-third p-3 rounded-md outline-none w-full" />
                        <button className="bg-black-primary text-white p-2 px-5 rounded-md cursor-pointer">Apply</button>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <input id="checkbox-1" className=" bg-black-primary text-black-primary"  type="checkbox" ></input>
                <p>I agree to the terms and safety policy</p>
            </div>
        </div>
    )
}