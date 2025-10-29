import { useEffect } from "react";
import Card from "../components/Card";
import {useDispatch, useSelector} from "react-redux"
import { getListings } from "../redux/slice/listingSlice";


export default function Home(){
    const dispatch = useDispatch()
    const listings = useSelector(state => state.listings.listing)
    const loading = useSelector(state => state.listings.loading)

    useEffect(()=>{
        dispatch(getListings())
    },[dispatch])
    if(loading){
        return (
            <h1 className="text-2xl font-semibold flex justify-center mt-32">Loading...</h1>
        )
    }
    return (
        <div className="py-10 flex gap-8 flex-wrap justify-center md:justify-between md:px-32">
            {listings && listings.map((listing)=> (
                <Card key={listing._id} listing={listing}/>
            ))}
            {listings && listings.length <=0 && <p className="mx-auto text-2xl">Listing not found</p>}
        </div>
    )
}