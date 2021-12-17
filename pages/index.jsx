import Head from "next/head";
import { useMoralis } from "react-moralis";
// Components
import { Login } from "../components/login";
import Header from "../components/header";
import Messages from "../components/messages";

export default function Home() {
  const { isAuthenticated, logout, isInitializing } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
      </Head>

      <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-500">
        <div className="max-w-screen-2xl bg-black  mx-auto sticky top-0 z-50 p-5 border-pink-500 border-b-4">
          <Header />
        </div>
        <div className="max-w-screen-2xl mx-auto">
          <Messages />
        </div>
      </div>

      {/* <button onClick={logout}>Logout</button> */}
    </div>
  );
}
