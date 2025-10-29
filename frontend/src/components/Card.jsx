import { memo } from "react";
import { Link } from "react-router";

function Card({listing}){
    return (
        <div className="h-[312px] w-72 bg-gray-primary rounded-md">
            <img className="h-[150px] w-full rounded-t-md" src={listing.image} alt="" />
            <div className="p-4 flex flex-col h-1/2 justify-between ">
                <div className="flex justify-between text-black-primary items-center">
                    <h1 className="text-xl">{listing.title}</h1>
                    <p className="bg-gray-sec p-1 px-4 rounded-md">Udapi</p>
                </div>
                <p className="text-xs text-slate-sec">{listing.description}</p>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <p className="text-xs ">From</p>
                        <div className="text-xl flex items-center"><i className="fa-solid fa-indian-rupee-sign text-lg"></i><p>{listing.price}</p></div>
                    </div>
                    
                    <Link to={`/${listing._id}`} className="bg-yello-primary w-24 p-1 px-2 cursor-pointer text-sm rounded-md">View Details</Link>
                </div>
            </div>
        </div>
    )
}

export default memo(Card)