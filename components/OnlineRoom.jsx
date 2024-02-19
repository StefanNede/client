import Axios from 'axios'
export default function OnlineRoom( { roomName, roomCreator, joinedRoom, setJoinedRoom, roomTest, userDetails } ) {
    Axios.defaults.withCredentials = true
    const leaveRoom = () => {
        console.log("leaving room")

        Axios.post("http://localhost:3001/leave-room", {roomName: roomName, userLeaving: userDetails}).then((response) => {
            console.log(response)
        })
        setJoinedRoom(false)
    }

    const deleteRoom = () => {
        console.log("deleting room")

        Axios.post("http://localhost:3001/delete-room", {roomName: roomName, roomCreator: roomCreator}).then((response) => {
            console.log(response)
        })
        setJoinedRoom(false)
    }

    return (
        <div>
            <header className="flex justify-between">
                <h1>{roomName}</h1>
                <div>
                    <button className="bg-white text-black rounded px-2" onClick={leaveRoom}>leave</button>
                    { roomCreator === userDetails.username ? 
                        <button className="bg-white text-black rounded px-2" onClick={deleteRoom}>delete</button>
                        :
                        <></>
                    }
                </div>
            </header>

            <p>{roomTest}</p>
        </div>
    )
}