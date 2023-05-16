import { useSelector } from "react-redux";
import { menuService } from "@/services/menu.Service";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import { addOrder } from "@/store/order/action";
import { useDispatch } from "react-redux";
export function Menu() {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState([]);
  const [showItem, setShowItem] = useState(false);
  const userReducer = useSelector((state) => state.userReducer);
  useEffect(() => {
    menuService().then((res) => {
      const stringtify = JSON.stringify(res);
      setMenu(JSON.parse(stringtify));
    });
  }, []);

  const [selectedSize, setSelectedSize] = useState(null);

  const handleItemClick = (item, size) => {
    setSelectedSize(size);
    setShowItem(item._id);
  };

  const handleSubmit = (event, item) => {
    event.preventDefault();
    if (userReducer.user[0] !== 0) {
      const cart = {
        id: uuidv4(),
        username: userReducer.user[0],
        picture: item.picture,
        name: item.name,
        price: Number(item.price) + Number(selectedSize),
        total: Number(item.price) + Number(selectedSize),
        completed: false,
      };
      console.log(cart);
      dispatch(addOrder(cart));
      setShowItem(false);
    } else {
      alert("Login Please");
    }
  };
  return (
    // <div>
    //     {menu.map((item, index) =>
    //         <div key={item._id}  className="flex pb-[20px]">
    //             <Image
    //                 src={item.picture}
    //                 alt="Description of image"
    //                 width={500}
    //                 height={500}
    //             />
    //             <div>
    //                 <form onSubmit={(event) => handleSubmit(event, item)}>
    //                     <h1>{item.name}</h1>
    //                     <h1>{item.price}</h1>
    //                     <ul>
    //                         Size (nhỏ, vừa, lớn)
    //                         {JSON.parse(item.size).map((size, idx) => (
    //                         <li
    //                             key={idx}
    //                             className={size === selectedSize && showItem === item._id ? 'bg-blue-200' : 'bg-inherit'}
    //                             onClick={() => handleItemClick(item, size)}
    //                         >
    //                             <h1 className="cursor-pointer">+{size}</h1>
    //                         </li>
    //                         ))}
    //                     </ul>
    //                     <button type="submit">Chọn</button>
    //                 </form>
    //             </div>
    //         </div>

    //     )}
    // </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-[40px]">
      {menu.map((item, index) => (
        <div
          key={item._id}
          className="bg-white rounded-3xl shadow-lg overflow-hidden"
        >
          <div className="relative overflow-hidden pb-[100%]">
            <Image
              src={item.picture}
              alt="Description of image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <h1 className="text-xl font-bold">{item.name}</h1>
            <h1 className="text-gray-500">{item.price}</h1>
            <ul className="mt-4 mb-2 text-sm text-gray-600">
              <li className="font-medium">Size (nhỏ, vừa, lớn)</li>
              {JSON.parse(item.size).map((size, idx) => (
                <li
                  key={idx}
                  className={`cursor-pointer ${
                    size === selectedSize && showItem === item._id
                      ? "text-blue-500"
                      : ""
                  }`}
                  onClick={() => handleItemClick(item, size)}
                >
                  + {size}
                </li>
              ))}
            </ul>
            <form onSubmit={(event) => handleSubmit(event, item)}>
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-md mt-4"
              >
                Chọn
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
