export default function OnlineRoom( { roomName, joinedRoom, setJoinedRoom, roomTest, userDetails } ) {
    console.log(roomTest)
    return (
        <div>
            <h1>{roomName}</h1>
            <p>{roomTest}</p>
        </div>
    )
}