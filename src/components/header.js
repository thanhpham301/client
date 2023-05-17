import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delUser } from "@/store/user/action";
import { useRouter } from "next/router";

export const Header = () => {
  const [onOffButton, setOnOffButton] = useState(false);
  const showLogOut = useSelector((state) => state.showLogOutReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    setOnOffButton(showLogOut.logOut);
  }, [showLogOut]);
  const handleLogOut = () => {
    setOnOffButton(false);
    router.push("/");
    dispatch(delUser(null));
  };
  return (
    <div className="flex justify-center items-center h-[50px]">
      <div className="flex justify-center items-center space-x-4">
        {onOffButton ? (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogOut}
          >
            Log out
          </button>
        ) : (
          <div>
            <Link href="/login">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>

            <Link href="/register">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
