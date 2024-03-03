// component for showing the lifetime stats of a user once they have logged in

export default function Stats({ userDetails, setLoginBool, setLoginStatus }) {
    let bestScore = userDetails.bestScore
    let bestAccuracy = userDetails.bestAccuracy
    let numWins = userDetails.numWins 
    let numLosses = userDetails.numLosses

    const logout = () => {
        console.log("logging out")
        setLoginBool(false)
        setLoginStatus("Not Logged In")
    }

    // jsx output
    return (
        <div className="h-[70vh]">
            <button className="ml-[85vw] bg-white text-black rounded py-1 px-2" onClick={logout}>Logout</button>
            <div className="px-[10vw]">
                <h1 className="text-3xl">Stats</h1>
                <div className="mt-[8vh] px-[5vw]">
                    {/* this is the actual stats rendering part */}
                    <div className="flex flex-row justify-between text-blue-300">
                        <h3 className="text-xl">Best Score</h3>
                        <p className="text-xl">{bestScore} wpm</p>
                    </div>
                    <div className="bg-white h-0.5 rounded my-[2vh]"></div>
                    <div className="flex flex-row justify-between text-blue-300">
                        <h3 className="text-xl">Best Accuracy</h3>
                        <p className="text-xl">{bestAccuracy}%</p>
                    </div>
                    <div className="bg-white h-0.5 rounded my-[2vh]"></div>
                    <div className="flex flex-row justify-between text-green-400">
                        <h3 className="text-xl">Wins</h3>
                        <p className="text-xl">{numWins}</p>
                    </div>
                    <div className="bg-white h-0.5 rounded my-[2vh]"></div>
                    <div className="flex flex-row justify-between text-red-400">
                        <h3 className="text-xl">Losses</h3>
                        <p className="text-xl">{numLosses}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}