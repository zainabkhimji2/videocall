"use client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

// video calling app
function Home() {
  const [roomID, setRoomID] = useState<string>("");
  return (
    <>
      <main className="flex gap-y-6 flex-col items-center justify-between p-24  ">
        <h1 className="text-3xl font-bold text-orange-200"> ZK Video Calling App</h1>
        <input
          type="text"
          placeholder="Enter The Room ID"
          className="px-4 py-2 outline-none bg-gray-100 rounded-lg"
          value={roomID}
          onChange={(e:ChangeEvent<HTMLInputElement>) => setRoomID(e.target.value)}
        />

        <Link href="/room/roomid">
          <button className="px-4 py-2 rounded-md bg-blue-700 text-white">
            Join Room
          </button>
        </Link>
      </main>
    </>
  );
}

export default Home;
