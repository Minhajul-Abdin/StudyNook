import RoomCard from "../../components/roomCard";
import { fetchRooms } from "@/lib/rooms/data.js";
import SearchBar from "../../components/searchBar";

export default async function allRoom({ searchParams }) {
  const sParams = await searchParams;
  const rooms = await fetchRooms(sParams?.search || "");

  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-12 py-15">
      <div className="max-w-5xl mx-auto">
        <div>
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Explore Our Rooms
          </h1>

          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl">
            Find the perfect course to advance your career. Learn from the best
            experts in the field.
          </p>

          {/* Search Bar */}
          <SearchBar />
          <div>
            <div>
              <h2 className="text-xl font-bold py-10">Available Rooms</h2>
            </div>
          </div>
        </div>

        {/* dinamic part */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms.map((room) => (
            <RoomCard key={room?._id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
