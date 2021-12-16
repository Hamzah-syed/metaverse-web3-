import Head from "next/head";
// Components
import { Login } from "../components/login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout, isInitializing } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
      </Head>
      <button onClick={logout}>Logout</button>
      {isInitializing ? <h1>loading</h1> : <></>}
    </div>
  );
}
