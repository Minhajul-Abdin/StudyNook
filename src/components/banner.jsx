import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full py-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Book Study & Meeting Rooms Instantly
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90">
            Find, compare, and reserve fully equipped rooms in seconds. Perfect
            for students, teams, and professionals.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href={"/rooms"}
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-md hover:bg-gray-100 transition"
            >
              Browse Rooms
            </Link>
          </div>
        </div>

        {/* Right Content (Image / Illustration) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Room Booking"
            className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
