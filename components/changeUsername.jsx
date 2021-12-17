import { useMoralis } from "react-moralis";

const ChangeUsername = () => {
  const { userError, setUserData, isUserUpdating, user } = useMoralis();

  const setUsername = () => {
    const username = prompt(
      `Enter your new Username (current: ${user.getUsername()}`
    );
    if (!username) return;

    setUserData({
      username,
    });
  };
  return (
    <div className="text-sm absolute top-5 right-8 hover:text-pink-700">
      <button onClick={setUsername} disabled={isUserUpdating}>
        Chnage Your Username
      </button>
    </div>
  );
};

export default ChangeUsername;
