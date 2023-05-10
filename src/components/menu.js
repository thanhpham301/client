import { menuService } from "@/services/menu.Service"
import { useEffect, useState } from "react"
import Image from "next/image"
export function Menu () {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        menuService().then((res) => {
            const stringtify = JSON.stringify(res)
            setMenu(JSON.parse(stringtify))
        })
    }, [])
    return (
        <div>
            {menu.map(item => 
                <Image
                    key={item._id}
                    src={item.picture}
                    alt="Description of image"
                    width={500}
                    height={500}
                />
            )}
        </div>
    )
}