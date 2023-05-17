import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
const OrderPage = () => {
  const orderReducer = useSelector((state) => state.orderReducer);
  console.log(orderReducer.completed);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trang đơn hàng</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200">Số thứ tự</th>
            <th className="px-4 py-2 bg-gray-200">Tên món</th>
            <th className="px-4 py-2 bg-gray-200">Số lượng</th>
            <th className="px-4 py-2 bg-gray-200">Hình ảnh</th>
            <th className="px-4 py-2 bg-gray-200">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {orderReducer.completed?.map((order, idx) => (
            <tr key={idx} className="hover:bg-gray-100">
              <td className="border px-4 py-2 text-center">{idx + 1}</td>
              <td className="border px-4 py-2 text-center">{order.name}</td>
              <td className="border px-4 py-2 text-center">
                {order.total / order.price}
              </td>
              <td className="border px-4 py-2 flex justify-center">
                {" "}
                <Image
                  src={order.picture}
                  alt="Description of image"
                  width={100}
                  height={100}
                />
              </td>
              <td className="border px-4 py-2 text-center">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
