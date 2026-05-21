"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function BookButton({ room }) {
  const { data: session } = useSession();

  const handleBooking = async () => {
    const { data: jwtData } = await authClient.token();
    const token = jwtData?.token;
    if (!token) {
      toast.error("This time is already Booked");
      return;
    }

    const updatedData = {
      userId: session?.user?.id,
      bookerName: session?.user?.name,
      bookerEmail: session?.user?.email,
      roomTitle: room?.room_name,
      roomImage: room?.room_image_url,
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rooms/${room?._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedData),
      },
    );
    console.log(res);
    const data = await res.json();

    if (!data) {
      toast.error("Something went wrong");
      return;
    }
    console.log(data);
  };
  return (
    <Button
      className="w-full mt-6 bg-[#D4A351] hover:bg-[#C09243] text-white font-medium py-3 px-4 rounded-xl shadow-sm transition flex items-center justify-center gap-2 text-sm md:text-base"
      onClick={handleBooking}
    >
      Book Now
    </Button>
  );
}
