import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
import getAllRooms from "./actions/getAllRoom";

export default async function Home() {
  const rooms = await getAllRooms();
  return (
    <>
      <Heading title="Available Room" />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} key={room.$id} />)
      ) : (
        <p>No Rooms Found</p>
      )}
    </>
  );
}
