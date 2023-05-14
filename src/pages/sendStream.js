import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTotal } from "@/store/order/action";
import { delItem } from "@/store/order/action";
import { setOrders } from "@/store/order/action";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { orderService } from "@/service/orderService";
import Image from "next/image";
export default function SendStream (){
    const dispatch = useDispatch()
    // const [orderReducer, setOrderReducer] = useState([])
    const orderReducer = useSelector((state) => state.orderReducer)
    useEffect(() => {
        const orderReducerStorage = localStorage.getItem("orderReducer");
        if(orderReducerStorage){
            console.log(JSON.parse(orderReducerStorage))
            // setOrderReducer(orderReducer)
            orderReducer.orders = JSON.parse(orderReducerStorage)
        }
    }, [])
    const [selectedOptions, setSelectedOptions] = useState(Array.from({ length: orderReducer.orders.length }, () => '1'));
    const handleSelectChange = (event, item, idx) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[idx] = Number(event.target.value);
        setSelectedOptions(newSelectedOptions)
        dispatch(addTotal(idx, event.target.value))
    }
    const handleDelete = (item) => {
        dispatch(delItem(item))
    }
    // useEffect(() => {
    //         localStorage.setItem("orderReducer", JSON.stringify(orderReducer));
    // }, [orderReducer]);

    // useEffect(() => {
    //     const orderReducerStorage = localStorage.getItem("orderReducer");
    //     if (orderReducerStorage){
    //         dispatch(setOrders(JSON.parse(orderReducerStorage)));
    //     }
    // },[])
    const handleOrder = async () => {
        const res = await orderService(orderReducer.orders)
        console.log(res)
    }
    return (
        <div>
            {orderReducer.orders.map((item, idx) => {
                return (
                    <div key={idx} className="flex items-center">
                        <button type="button" className="mr-[10px]" onClick={() => handleDelete(item.id)}>
                            Delete
                        </button>
                        <Image
                            src={item.picture}
                            alt="Description of image"
                            width={100}
                            height={100}
                            className="mr-[10px]"
                        />
                        <h1 className="mr-[10px]">{item.name}</h1>
                        <h1 className="mr-[10px]">Price: {item.price}</h1>
                        <select value={Number(selectedOptions[idx])} onChange={(event) => handleSelectChange(event, item, idx)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <h1>Total: {item.total}</h1>
                    </div>
                )
            })}
            <h1>Tổng đơn: {orderReducer.orders.reduce((total, item) => total + Number(item.total), 0)}
            </h1>
            <button type="button" onClick={handleOrder}>Đặt hàng</button>
        </div>
    )
}