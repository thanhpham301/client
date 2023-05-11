import { menuService } from "@/services/menu.Service"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid";
import Image from "next/image"
export function Menu () {
    const [menu, setMenu] = useState([])
    const [showItem, setShowItem] = useState(false)
    useEffect(() => {
        menuService().then((res) => {
            const stringtify = JSON.stringify(res)
            setMenu(JSON.parse(stringtify))
        })
    }, [])

    const [selectedSize, setSelectedSize] = useState(null);

    const handleItemClick = (item, size) => {
        setSelectedSize(size);
        setShowItem(item._id)
    };
    
    const handleSubmit = (event, item) => {
        event.preventDefault();
        const cart = {
            id: uuidv4(),
            picture: item.picture,
            name: item.name,
            price: Number(item.price) + Number(selectedSize),
        }
        console.log(cart)
    }
    return (
        <div>
            {menu.map((item, index) =>
                <div key={item._id}  className="flex pb-[20px]">
                    <Image
                        src={item.picture}
                        alt="Description of image"
                        width={500}
                        height={500}
                    />
                    <div>
                        <form onSubmit={(event) => handleSubmit(event, item)}>
                            <h1>{item.name}</h1>
                            <h1>{item.price}</h1>
                            <ul>
                                Size (nhỏ, vừa, lớn)
                                {JSON.parse(item.size).map((size, idx) => (
                                <li
                                    key={idx}
                                    className={size === selectedSize && showItem === item._id ? 'bg-blue-200' : 'bg-inherit'}
                                    onClick={() => handleItemClick(item, size)}
                                >
                                    <h1 className="cursor-pointer">+{size}</h1>
                                </li>
                                ))}
                            </ul>
                            <button type="submit">Chọn</button>
                        </form>
                    </div>
                </div>
                
            )}
        </div>
    )
}