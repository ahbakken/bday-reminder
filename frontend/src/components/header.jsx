import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";

// Tips: logo home, summary : logout, home, list

const header = () => {
  return (
    <div className="flex h-20 w-full flex-row justify-between items-center bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] px-7">
      <div>
        <div className="">
          <h1 className="font-bold text-2xl hover:scale-105 trasnform">Bday Reminder</h1>
        </div>
      </div>
      <div className="flex flex-row justify-around">
        <div className="flex flex-row justify-around text-white hover:scale-105 trasnform">
          <div>
            <Link href="/">
              <p className="text-xl">Calendar</p>
            </Link>
          </div>
          <div className="px-2">
            <Link href="/">
              <AiOutlineCalendar size={25} />
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-around text-white hover:scale-105 trasnform">
          <div>
            <Link href="/">
              <p className="text-xl">Home</p>
            </Link>
          </div>
          <div className="px-2">
            <Link href="/">
              <AiOutlineHome size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
