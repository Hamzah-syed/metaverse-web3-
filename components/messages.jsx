import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import SendMessage from "./sendMessages";
import Message from "./message";

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);

  let messageMinsLimit = 15;

  const { data, isLoading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .addAscending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 30 * messageMinsLimit)
        ),
    [],
    {
      live: true,
    }
  );

  if (isLoading) {
    return <h1 className="text-white">loading</h1>;
  }
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis variant="dark" style={{ margin: "0 auto" }} />
      </div>

      <div className="space-y-5 px-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="w-full relative bg-red-600 px-5 flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}</p>
      </div>
    </div>
  );
};

export default Messages;
