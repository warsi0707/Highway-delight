import { Link } from "react-router";

export default function ConfirmBooking(){
    return (
        <div className="flex flex-col gap-4 justify-center items-center pt-32">
            <p className="bg-green-primary text-white p-4 rounded-full"><i className="fa-solid fa-check text-2xl"></i></p>
            <div className="flex flex-col text-center">
                <h1 className="text-2xl font-semibold">Booking Confirmed</h1>
                <p className="text-sm">Ref ID: HUF56&SO</p>
            </div>
            <Link to={"/"} className="bg-slate-300  p-2 rounded-md">Back to Home</Link>
        </div>
    )
}