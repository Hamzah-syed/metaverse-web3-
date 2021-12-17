import React, { useState } from "react";
import { useMoralis } from "react-moralis";
const SendMessages = ({ endOfMessagesRef }) => {
  const [message, setMessage] = useState();
  const { user, Moralis } = useMoralis();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then((msg) => {
        console.log(msg);
        setMessage("");
      })
      .catch((err) => {
        console.log(err.message);
      });

    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-10 w-11/12 flex max-w-screen-2xl  bg-black opacity-80  rounded-full py-3 border-blue-400 border-4 px-4 shadow-lg "
    >
      <input
        className="flex-grow  outline-none bg-transparent text-white placeholder-gray-500"
        type="text"
        placeholder="Enter a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="font-bold text-pink-500">
        Send
      </button>
    </form>
  );
};

export default SendMessages;
