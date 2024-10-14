import rooms from "@/data/rooms.json";
import Heading from "@/components/Heading";
import RoomCard from "@/components/RoomCard";
export default function Home() {
  return (
    <>
      <Heading title="Available Room" />
      {rooms.length > 0 ? (
        rooms.map((room) => <RoomCard room={room} />)
      ) : (
        <p>No Rooms Found</p>
      )}
    </>
  );
}
