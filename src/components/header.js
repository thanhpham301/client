import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center h-[50px]">
      <div className="flex justify-center items-center space-x-4">
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
    </div>
  );
};
