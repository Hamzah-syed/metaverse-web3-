import Image from "next/image";
import { useMoralis } from "react-moralis";
const Avatar = ({ username, logoutOnPress }) => {
  const { user, logout } = useMoralis();
  return (
    <Image
      onClick={() => logoutOnPress && logout()}
      className="cursor-pointer rounded-full bg-black hover:opacity-50"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get("username")
      }.svg`}
      layout="fill"
    />
  );
};

export default Avatar;
