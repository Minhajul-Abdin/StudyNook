import { Search } from "lucide-react";
import RoomCard from "../../components/roomCard";
import { fetchRooms } from "@/lib/rooms/data.js";

export default async function PremiumCoursesBanner() {
  const rooms = await fetchRooms();
  console.log(rooms);

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
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-2xl mx-auto">
            <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500">
              <Search className="text-gray-400 w-5 h-5 mr-2" />
              <input
                type="text"
                placeholder="Search for courses (e.g. Next.js, Web Design...)"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>

            <button className="btn btn-accent text-white px-6 py-3 rounded-full font-medium transition w-full sm:w-auto">
              Search
            </button>
          </div>
          <div>
            <div>
              <h2 className="text-xl font-bold py-10">
                Available Rooms ({rooms.length})
              </h2>
            </div>
          </div>
        </div>

        {/* dinamic part */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms?.map((room) => (
            <RoomCard key={room?._id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
}
