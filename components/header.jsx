import Image from "next/image";
import { useMoralis } from "react-moralis";
import Profile from "../images/profile.jpg";
// Components
import Avatar from "./avatar";
import ChangeUsername from "./changeUsername";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div>
      <div className="grid   text-pink-500   grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative w-24 h-24 hidden lg:inline-grid ">
          <Image src={Profile} className="rounded-full" layout="fill" />
        </div>

        <div className="lg:text-center col-span-4">
          <div className="relative h-48 w-48 lg:mx-auto border-8 border-pink-500 rounded-full">
            <Avatar />
          </div>
          <h1 className=" text-3xl">Welcome to DAPP Chat App</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
