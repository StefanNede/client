import Head from "next/head"
import Navbar from "../components/Navbar"
import {useState, useEffect} from "react"
import WordsTyper from "../components/WordsTyper"
import QuotesTyper from "../components/QuotesTyper"
import TimerTyper from "../components/TimerTyper"
import ContinuousTyper from "../components/ContinuousTyper"

export default function PracticeType() {
    const [testMode, setTestMode] = useState("words")
    const [testLength, setTestLength] = useState(15)
    
    return (
        <div>
            <Head>
                <title>Typer: Practice Typing</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Navbar/>
                <div className="p-5">
                    <h1 className="text-center font-bold mb-4 text-2xl lg:text-4xl">Practice Type</h1>
                    <div className="flex flex-row bg-slate-700 w-[95vw] h-[8vh] rounded">
                        {/* this will hold the mode selection tab */}
                        <div className="w-[65vw] flex flex-row justify-around">
                            {/* selection between words, timer, continuous, quote - testMode */}
                            <button className={testMode==="words" ? "text-pink-300" : "text-white"} onClick={() => setTestMode("words")}>words</button>
                            <button className={testMode==="timer" ? "text-pink-300" : "text-white"} onClick={() => setTestMode("timer")}>timer</button>
                            <button className={testMode==="continuous" ? "text-pink-300" : "text-white"} onClick={() => setTestMode("continuous")}>continuous</button>
                            <button className={testMode==="quote" ? "text-pink-300" : "text-white"} onClick={() => setTestMode("quote")}>quote</button>
                        </div>
                        <div className="w-[5vw] pt-[1vh] pr-[2vw] h-[6vh] flex flex-row justify-center">
                            {/* this is for the divider */}
                            <div className="bg-white pt-1 h-[6vh] w-[0.2vw] rounded"></div>
                        </div>
                        <div className="w-[25vw] flex flex-row justify-around">
                            {/* selection between 15, 30, 60, 120 - testLength */}
                            <button className={testLength===15 ? "text-pink-300" : "text-white"} onClick={() => setTestLength(15)}>15</button>
                            <button className={testLength===30 ? "text-pink-300" : "text-white"} onClick={() => setTestLength(30)}>30</button>
                            <button className={testLength===60 ? "text-pink-300" : "text-white"} onClick={() => setTestLength(60)}>60</button>
                            <button className={testLength===120 ? "text-pink-300" : "text-white"} onClick={() => setTestLength(120)}>120</button>
                        </div>
                    </div>
                    {(() => {
                        switch (testMode) {
                            case "words":
                                return <WordsTyper testLength={testLength}/>
                            case "timer":
                                return <TimerTyper/>
                            case "continuous":
                                return <ContinuousTyper/>
                            case "quote":
                                return <QuotesTyper/>
                            default:
                                console.log("ERROR WITH MODE SELECTED")
                                break
                        }
                    })()}
                </div>
            </main>
        </div>
    )
}