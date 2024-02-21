import Axios from 'axios'
import { useState, useEffect, useMemo } from 'react'
import OnlineTest from './OnlineTest'

export default function OnlineRoom( { roomName, roomCreator, joinedRoom, setJoinedRoom, roomTest, userDetails, socket } ) {
    const [userList, setUserList] = useState([userDetails.username])
    const [userResults, setUserResults] = useState({}) // store results for every user
    const [userWayThrough, setUserWayThrough] = useState({}) // store the amount through the test every user is

    Axios.defaults.withCredentials = true

    const leaveRoom = () => {
        console.log("leaving room")

        // socket stuff
        socket.emit("leave_room", {roomName:roomName, username:userDetails.username})

        Axios.post("http://localhost:3001/leave-room", {roomName: roomName, userLeaving: userDetails}).then((response) => {
            console.log(response)
        })
        setJoinedRoom(false)
    }

    const deleteRoom = () => {
        console.log("deleting room")

        // socket stuff
        socket.emit("leave_room", {roomName:roomName, username:userDetails.username})

        Axios.post("http://localhost:3001/delete-room", {roomName: roomName, roomCreator: roomCreator}).then((response) => {
            console.log(response)
        })
        setJoinedRoom(false)
    }

    useMemo(() => {
        socket.on("update_user_list", (data) => {
            console.log("UPDATING USER LIST")
            console.log(data)
            setUserList(data)
        })
    }, [socket])

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
            <div>
                {/* area that shows the users */}
                <ul className="h-[30vh] flex flex-col mt-[5vh] mx-[5vw]">
                    {userList.map((user, i) => {
                        return (<li className="mb-[5vh]">
                                    <p className="text-xl font-bold">{user}</p>
                                </li>)
                    })}
                </ul>

            </div>

            <div>
                <OnlineTest text={roomTest} />
            </div>
        </div>
    )
}