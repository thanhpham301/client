import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getOrdersService } from "@/service/getOrders.Service";
import Image from "next/image";
import axios from "axios";

const OrdersPage = () => {
  const [getOrders, setGetOrders] = useState([]);

  useEffect(() => {
    getOrdersService().then((res) => {
      setGetOrders(res);
    });
  }, []);

  // useEffect(() => {
  //   const savedOrders = localStorage.getItem("orders");
  //   if (savedOrders) {
  //     setGetOrders(JSON.parse(savedOrders));
  //   } else {
  //     getOrdersService().then((res) => {
  //       setGetOrders(res);
  //       localStorage.setItem("orders", JSON.stringify(res));
  //     });
  //   }
  // }, []);
  const handleOrderComplete = (orderId) => {
    setGetOrders((prevOrders) => {
      const updatedOrders = prevOrders.map((order) => {
        if (order._id === orderId) {
          return {
            ...order,
            completed: true,
          };
        }
        return order;
      });
      console.log(updatedOrders);
      // localStorage.setItem("orders", JSON.stringify(updatedOrders));

      // Move completed order to the bottom
      return [
        ...updatedOrders.filter((order) => !order.completed),
        ...updatedOrders.filter((order) => order.completed),
      ];
    });
  };

  // ...

  // const handleOrderComplete = (orderId) => {
  //   axios
  //     .patch(`/api/orders/${orderId}`, { completed: true })
  //     .then((response) => {
  //       // Update the completed status in the local state
  //       setGetOrders((prevOrders) => {
  //         const updatedOrders = prevOrders.map((order) => {
  //           if (order._id === orderId) {
  //             return {
  //               ...order,
  //               completed: true,
  //             };
  //           }
  //           return order;
  //         });

  //         // Move completed order to the bottom
  //         return [
  //           ...updatedOrders.filter((order) => !order.completed),
  //           ...updatedOrders.filter((order) => order.completed),
  //         ];
  //       });
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error("Failed to update order:", error);
  //     });
  // };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center">
        Admin Dashboard
      </h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Order ID</th>
            <th className="px-4 py-2">Customer</th>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Product</th>
            <th className="px-4 py-2">Total Price</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {getOrders.map((order) => (
            <tr key={order._id}>
              <td className="border px-4 py-2">{order._id}</td>
              <td className="border px-4 py-2">{order.username}</td>
              <td className="border px-4 py-2">{order.name}</td>
              <td className="border px-4 py-2">
                {" "}
                <Image
                  src={order.picture}
                  alt="Description of image"
                  width={100}
                  height={100}
                />
              </td>

              <td className="border px-4 py-2">
                {" "}
                {order.total.toLocaleString("en-US")} VND
              </td>
              <td className="border px-4 py-2">{order.total / order.price}</td>
              <td className="border px-4 py-2">
                {order.completed ? (
                  <span className="text-gray-500">Done</span>
                ) : (
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleOrderComplete(order._id)}
                  >
                    Mark as Done
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
