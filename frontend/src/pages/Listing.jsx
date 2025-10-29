import {Link, useParams} from "react-router"
import DateButton from "../components/DateButton"
import TimeButton from "../components/TimeButton"
import PaymentCard from "../components/PaymentCard"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getListingById } from "../redux/slice/listingSlice"

export default function Listing(){
    const dispatch = useDispatch()
    const listing = useSelector(state => state.listings.detailedlisting)

    const {id} = useParams()
    useEffect(()=>{
        dispatch(getListingById(id))
    },[dispatch,id])
    return (
        <div className="lg:pl-32 p-5 py-8 w-full md:min-h-screen space-y-4">
            <Link to={"/"} className="flex items-center"><i className="fa-solid fa-arrow-left"></i><p>Back</p></Link>
            <div className=" w-full h-full md:min-h-screen flex flex-col lg:grid lg:justify-between grid-cols-7 gap-20">
                <div className=" w-full min-h-screen flex flex-col gap-5 col-span-4">
                    <img className="md:h-[370px] w-full rounded-xl" src={listing.image} alt="" />
                    <div className=" w-full h-[406px] flex flex-col justify-between">
                       <div className="flex flex-col gap-2">
                            <h1 className="text-xl">{listing.title}</h1>
                            <p className="text-slate-sec">{listing.description}</p>
                       </div>
                        <div className="space-y-2">
                            <p>Choose date</p>
                            <div className="flex flex-wrap gap-3">
                                <DateButton/>
                                <DateButton/>
                                <DateButton/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p>Choose Time</p>
                            <div className="flex flex-wrap gap-3">
                               <TimeButton/>
                               <TimeButton/>
                               <TimeButton/>
                               <TimeButton/>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p>About</p>
                            <p className="bg-slate-200 w-full p-1 rounded-md">{listing.about}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-300 p-5 rounded-md md:h-[350px] col-span-3 w-full lg:w-[387px]">
                    <PaymentCard price={listing.price} taxes={listing.taxes} title={listing.title}/>
                </div>
            </div>
        </div>
    )
}