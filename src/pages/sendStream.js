import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTotal } from "@/store/order/action";
import Image from "next/image";
export default function SendStream (){
    const dispatch = useDispatch()
    const orderReducer = useSelector((state) => state.orderReducer)
    const [selectedOptions, setSelectedOptions] = useState(Array.from({ length: orderReducer.orders.length }, () => '1'));
    console.log(orderReducer.orders)
    const handleSelectChange = (event, item, idx) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[idx] = event.target.value;
        setSelectedOptions(newSelectedOptions)
        // orderReducer.orders[idx].total = Number(event.target.value)*orderReducer.orders[idx].price
        dispatch(addTotal(idx, event.target.value))
    }
    return (
        <div>
            {orderReducer.orders.map((item, idx) => {
                return (
                    <div key={idx} className="flex items-center">
                        <input type="checkbox" className="mr-[10px]" />
                        <Image
                            src={item.picture}
                            alt="Description of image"
                            width={100}
                            height={100}
                            className="mr-[10px]"
                        />
                        <h1 className="mr-[10px]">{item.name}</h1>
                        <h1 className="mr-[10px]">Price: {item.price}</h1>
                        <select value={selectedOptions[idx]} onChange={(event) => handleSelectChange(event, item, idx)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <h1>Total: {item.total}</h1>
                    </div>
                )
            })}
        </div>
    )
}