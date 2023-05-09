import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee, faSquarePlus, faArrowRight, faClockRotateLeft, faRainbow, faBook, faComment } from '@fortawesome/free-solid-svg-icons';
import { faPersonBreastfeeding, faGear, faMoon, faCircleArrowDown, faCoffeeBeans } from "@fortawesome/free-solid-svg-icons";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";

export default function Nav(){
    return(
        <ul className="p-[10px] text-gray-600 text-[20px] border-red-200 border">
            <li>
                <FontAwesomeIcon className="inline-block w-full text-[50px] " icon={faWaveSquare} />
            </li>
            <li className="p-[15px] ">
                <Link href='/'>
                    <FontAwesomeIcon className="mr-[15px]" icon={faCoffee} />
                    Menu
                </Link>
            </li>
            <li className="p-[15px]">
                <Link href="/sendStream">
                    <FontAwesomeIcon className="mr-[15px]" icon={faArrowRight} />
                    Send Stream
                </Link>
            </li>
            <li className="p-[15px]">
                <FontAwesomeIcon className="mr-[15px]" icon={faSquarePlus} />
                Wrap / Up
            </li>
            <li className="p-[15px]">
                <FontAwesomeIcon className="mr-[15px]" icon={faClockRotateLeft} />
                Activity History
            </li>
            <li className="p-[15px]">
                <FontAwesomeIcon className="mr-[15px]" icon={faRainbow} />
                Bridge
            </li>
            <li className="p-[15px]">
                <FontAwesomeIcon className="mr-[15px]" icon={faBook} />
                Adress Book
            </li>
            <li className="p-[15px]">
            <FontAwesomeIcon className="mr-[15px]" icon={faComment} />
                Apps
            </li>
            <li className="p-[15px]">
                <FontAwesomeIcon className="mr-[15px]" icon={faPersonBreastfeeding} />
                Vesting
            </li>
            <li className="p-[15px]">
                <FontAwesomeIcon className="mr-[15px]" icon={faGear} />
                Settings
            </li>
            <li className="p-[15px]">
                <FontAwesomeIcon className="mr-[15px]" icon={faMoon} />
                Dark Mode
            </li>
            <li className="p-[15px]">
                <FontAwesomeIcon className="mr-[15px]" icon={faCircleArrowDown} />
                More
            </li>
        </ul>
    )
}
