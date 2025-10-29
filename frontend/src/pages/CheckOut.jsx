import { Link, useNavigate } from "react-router";
import ChekoutCard from "../components/CheckoutCard";
import PaymentCard from "../components/PaymentCard";
import { useSelector } from "react-redux";
import PayButton from "../components/PayButton";

export default function CheckOut(){
    const subTotal = useSelector(state => state.listings.subTotal)
    const quantiy = useSelector(state => state.listings.quantity)
    const listing = useSelector(state => state.listings.detailedlisting)
    const navigagte = useNavigate()

    const handleBook =()=>{
        navigagte("/confirm")
    }
    return (
       <div className="lg:px-32 p-5 py-8 w-full md:min-h-screen space-y-4">
            <Link to={"/"} className="flex items-center"><i className="fa-solid fa-arrow-left"></i><p>Back</p></Link>
            <div className=" w-full h-full flex-col md:flex-row justify-center items-center md:items-start md:p-0 gap-5 flex md:justify-between">
                <div className="w-full lg:w-[739px] py-3 p-5 md:p-0">
                    <ChekoutCard/>
                </div>
                <div className="bg-slate-300 p-5 rounded-md md:h-[350px] col-span-3 w-full lg:w-[387px]">
                    <div className="flex flex-col gap-5">
                          <div className="flex justify-between text-xl">
                            <p>Experiance</p>
                            <p>adfasd</p>
                          </div>
                          <div className="flex justify-between">
                            <p>Qty</p>
                            <p>{quantiy}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p>Subtotal</p>
                            <div className="flex items-center">
                              <i className="fa-solid fa-indian-rupee-sign"></i>
                              <p>{subTotal}</p>
                            </div>
                          </div>
                          <div className="flex justify-between ">
                            <p>Taxes</p>
                            <div className="flex items-center">
                              <i className="fa-solid fa-indian-rupee-sign"></i> <p>39</p>{" "}
                            </div>
                          </div>
                          <div className="border"></div>
                          <div className="flex justify-between text-xl">
                            <p>Total</p>
                            <div className="flex items-center">
                              <i className="fa-solid fa-indian-rupee-sign"></i> <p>{subTotal}</p>{" "}
                            </div>
                          </div>
                          <PayButton handleTotal={handleBook} />
                        </div>
                </div>
            </div>
        </div>
    )
}