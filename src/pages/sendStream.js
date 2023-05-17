import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTotal } from "@/store/order/action";
import { delItem } from "@/store/order/action";
import { delAll } from "@/store/order/action";
import { setOrders } from "@/store/order/action";
import { orderService } from "@/service/orderService";
import Image from "next/image";

import io from "socket.io-client";

const socket = io("ws://localhost:8080");

export default function SendStream() {
  const dispatch = useDispatch();
  const [showOrderReducer, setShowOrderReducer] = useState([]);
  const orderReducer = useSelector((state) => state.orderReducer);
  useEffect(() => {
    const orderReducerStorage = localStorage.getItem("orderReducer");
    if (orderReducerStorage) {
      // setOrderReducer(orderReducer);
      // orderReducer.orders = JSON.parse(orderReducerStorage);
      setShowOrderReducer(JSON.parse(orderReducerStorage));
    }
  }, [orderReducer]);
  const [selectedOptions, setSelectedOptions] = useState(
    Array.from({ length: showOrderReducer.length }, () => "1")
  );
  const handleSelectChange = (event, item, idx) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[idx] = Number(event.target.value);
    setSelectedOptions(newSelectedOptions);
    dispatch(addTotal(idx, event.target.value));
  };
  const handleDelete = (item) => {
    dispatch(delItem(item));
  };
  const handleOrder = async () => {
    const res = await orderService(orderReducer.orders);
    socket.emit("newOrder", orderReducer.orders);
    setShowOrderReducer([]);
    localStorage.setItem("orderReducer", JSON.stringify([]));
    dispatch(setOrders(orderReducer.orders));
    dispatch(delAll([]));
    console.log(res);
    alert("Đơn đã đặt");
  };

  return (
    <div className="bg-pink-100 p-6">
      {showOrderReducer.map((item, idx) => {
        return (
          <div key={idx} className="flex items-center mb-4">
            <button
              type="button"
              className="bg-white text-pink-500 rounded-full py-2 px-4 mr-2 shadow"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
            <Image
              src={item.picture}
              alt="Description of image"
              width={100}
              height={100}
              className="mr-2 rounded-full shadow"
            />
            <div className="flex flex-col justify-center">
              <h1 className="font-bold text-pink-500">{item.name}</h1>
              <h1 className="text-sm text-gray-500">Price: {item.price}</h1>
              <select
                value={Number(selectedOptions[idx])}
                onChange={(event) => handleSelectChange(event, item, idx)}
                className="mt-2 rounded-full border-pink-500 border-2 py-1 px-2"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <h1 className="ml-auto font-bold text-pink-500">{item.total}</h1>
          </div>
        );
      })}
      <h1 className="font-bold text-pink-500 text-lg mt-6">
        Tổng đơn:{" "}
        {showOrderReducer.reduce(
          (total, item) => total + Number(item.total),
          0
        )}
      </h1>
      <button
        type="button"
        className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full mt-4"
        onClick={handleOrder}
      >
        Đặt hàng
      </button>
    </div>
  );
}
