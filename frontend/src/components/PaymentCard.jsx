import { memo, useEffect, useState } from "react";
import PayButton from "./PayButton";
import { useDispatch, useSelector } from "react-redux";
import { handleTotal } from "../redux/slice/ListingSlice";
import { useNavigate } from "react-router";

function PaymentCard({price, taxes,title}) {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [subTotal, setSubTotal] = useState(0)
  const navigate = useNavigate()

  useEffect(()=>{
    if(price){
      setSubTotal(price)
    }
    let totalPrice = price * quantity + taxes
    setSubTotal(totalPrice)
  },[quantity,price,dispatch])

const handlePostTotal =(payload)=>{
  navigate("/checkout")
  dispatch(handleTotal(payload))
}

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between text-xl">
        <p>Stars At</p>
        <p className="flex items-center">
          <i className="fa-solid fa-indian-rupee-sign"></i> <p>{price}</p>{" "}
        </p>
      </div>
      <div className="flex justify-between">
        <p>Quantity</p>
        <div className="flex gap-2">
          <button onClick={()=> setQuantity(quantity -1)} className="cursor-pointer">
            <i className="fa-solid fa-minus"></i>
          </button>
          <p>{quantity}</p>
          <button onClick={()=> setQuantity(quantity +1)} className="cursor-pointer">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
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
        <p className="flex items-center">
          <i className="fa-solid fa-indian-rupee-sign"></i> <p>{taxes}</p>{" "}
        </p>
      </div>
      <div className="border"></div>
      <div className="flex justify-between text-xl">
        <p>Total</p>
        <p className="flex items-center">
          <i className="fa-solid fa-indian-rupee-sign"></i> <p>{subTotal}</p>{" "}
        </p>
      </div>
      <PayButton handleTotal={()=> handlePostTotal({subTotal, quantity,title,taxes})} />
    </div>
  );
}
export default  memo(PaymentCard)