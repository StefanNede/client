import Head from 'next/head';
import Navbar from "../components/Navbar";
import Layout from '../components/layout';
import {useState} from "react";

export default function Home() {
  // variables for logging in
  const [username, setUsername] = useState("guest")
  const [password, setPassword] = useState("")

  // variables for when registering
  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")

  // registering
  const register = () => {
    console.log("registering")
  }

  // logging in
  const login = () => {
    console.log("logging in")
  }

  return (
    <Layout>
      <div >
        <Head>
          <title>Typer: Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Navbar/>
          <div className="p-5 h-[89vh]">
            <h1 className="text-center font-bold mb-4 text-2xl lg:text-4xl">Home</h1>
            <div className="pt-[5vh] flex flex-row justify-around h-[70vh]">
              {/* register & login section */}
              <div className="flex flex-col items-center justify-evenly h-[50vh] w-[50vw]">
                {/* register section */}
                <h3 className="text-xl">register</h3>
                <div className="flex flex-col h-[40vh] justify-evenly ">
                    <div className="flex flex-col">
                        <label className="pb-1">Username</label>
                        <input type="text" onChange={(event) => setUsernameReg(event.target.value)} className="px-2 py-1 rounded text-black"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="pb-1">Password</label>
                        <input type="text" onChange={(event) => setPasswordReg(event.target.value)} className="px-2 py-1 rounded text-black"/>
                    </div>
                </div>
                <button onClick={register} className="text-black bg-white rounded px-1 py-0.5 border-black">register</button>
              </div>
              <div className="flex flex-col items-center justify-evenly h-[50vh] w-[50vw]">
                {/* login section */}
                <h3 className="text-xl">login</h3>
                <div className="flex flex-col h-[40vh] justify-evenly ">
                    <div className="flex flex-col">
                        <label className="pb-1">Username</label>
                        <input type="text" onChange={(event) => setUsername(event.target.value)} className="px-2 py-1 rounded text-black"/>
                    </div>
                    <div className="flex flex-col">
                        <label className="pb-1">Password</label>
                        <input type="text" onChange={(event) => setPassword(event.target.value)} className="px-2 py-1 rounded text-black"/>
                    </div>
                </div>
                <button onClick={login} className="text-black bg-white rounded px-1 py-0.5 border-black">login</button>
              </div>
            </div>
            <p className="text-center">logged in as: {username}</p>
          </div>
       </main>
      </div>
    </Layout>
  );
}
