import { Button } from "@heroui/react";
import Image from "next/image";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { Chip } from "@heroui/react";
import CancelBookButton from "../../components/CancelBookButton";

import Link from "next/link";

export default async function Dashboard() {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/myBookings/${session?.user?.id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const bookings = await res.json();
  console.log(bookings);

  return (
    <div className="w-[80%] mx-auto py-12">
      <div className="w-full">
        <h1 className="text-3xl font-bold mb-6">My Booked Rooms</h1>
        {bookings.length === 0 ? (
          <div className="p-12 text-center bg-slate-50 border rounded-2xl">
            <p className="mb-15 text-6xl text-muted">No Bookings yet</p>

            <Link href="/rooms">
              <Button>Browse Rooms</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((book) => {
              return (
                <div
                  key={book._id}
                  className="flex gap-4 p-4 bg-white border rounded-xl"
                >
                  <Image
                    src={book.roomImage}
                    alt="room"
                    width={120}
                    height={90}
                    className="rounded-lg"
                  />

                  <div className="flex flex-col grow justify-between">
                    <div>
                      <h3 className="font-bold">{book.roomTitle}</h3>
                      <p className="text-sm text-slate-500">
                        Booked: {new Date(book.bookAt).toDateString()}
                      </p>
                    </div>

                    <div className="flex justify-between items-center">
                      <Chip color="success" size="sm">
                        confirmed
                      </Chip>

                      <CancelBookButton />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
