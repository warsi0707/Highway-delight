import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import {Link} from "react-router"
import { searchListing } from "../redux/slice/ListingSlice"

export default function Navbar(){
    const disptach = useDispatch()
    const [search, setSearch] = useState("")

    useEffect(()=>{
        disptach(searchListing(search))
    },[search])
    return (
        <div className="w-full p-7 md:px-32 flex justify-between shadow-xl">
            <Link to={"/"}><img src="/logo.png" className="w-20 h-[55px]" alt="" /></Link>
            <div className="lg:flex items-center gap-4 hidden">
                <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" className="bg-slate-primary outline-none p-3 w-96 rounded-md" placeholder="Search experiences" />
                <button onClick={()=>  disptach(searchListing(search))} className="bg-yello-primary w-[87px] p-3 rounded-lg text-black-primary cursor-pointer">Search</button>
            </div>
        </div>
    )
}