import { memo } from "react"

function PayButton({handleTotal}){
    return (
        <button onClick={handleTotal} className="bg-yello-primary w-full p-2 rounded-md cursor-pointer">Confirm</button>
    )
}

export default memo(PayButton)