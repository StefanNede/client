// component for the end screen that shows on the completion of a multiplayer test

export default function MultiEnd({ roomName, roomCreator, userResults, setJoinedRoom, userDetails, socket }) {
    let userScores = userResults[0]

    const sortScores = (userScores) => {
        // sort descending by value (WPM score)
        // convert object to 2d array
        let sortedArr = []
        for (var user in userScores) {
            sortedArr.push([user, userScores[user]])
        }

        // use in-built javascript function to sort descending
        sortedArr.sort(function(a, b) {
            return b[1] - a[1]
        })

        return sortedArr
    }

    userScores = sortScores(userScores)

    return (
        <div>
            <h2 className="text-center text-3xl">RESULTS</h2>
            <div className="mt-[5vh]">
                <ol className="">
                    {userScores.map((user, i) => {
                        return (
                            <li style={{color:(i===0 ? "lightGreen" : "white")}} className="flex justify-around mb-[3vh]">
                                <h4 className="flex text-xl">
                                    <p >{i+1}. </p> 
                                    <p className="font-bold ml-1"> {user[0]}</p>
                                </h4>
                                <p className="text-xl">{user[1]} wpm</p>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}