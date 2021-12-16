import Profile from "../images/profile.jpg";
import Image from "next/image";
import { useMoralis } from "react-moralis";

export const Login = () => {
  const { authenticate, isInitializing } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <div className="absolute z-50 flex h-4/6  justify-center items-center space-y-8 flex-col w-full">
        <Image
          className="rounded-full"
          src={Profile}
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="text-black bg-yellow-500 rounded text-xl p-5 font-bold animate-pulse"
        >
          Login to the web3 world
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
