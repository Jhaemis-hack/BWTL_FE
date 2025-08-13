import { useState } from "react";
import Main from "./Main";
import Participants from "./Participants";
import { FaHome } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { SiSession } from "react-icons/si";
import Sessions from "./Sessions";

const Sidebar = () => {
  const [screen, setScreen] = useState<string>("Sessions");
  return (
    <div className="flex w-screen">
      <ul className="w-24 sticky z-50 bg-[#1B2A41] flex flex-col gap-8 h-screen justify-start items-center pt-12 text-3xl text-[#2F9E44]">
        <li onClick={() => setScreen("Main")} className="cursor-pointer">
          <FaHome/>
        </li>
        <li
          onClick={() => setScreen("Participants")}
          className="cursor-pointer"
        >
          <PiUsersFourFill/>
        </li>
        <li
          onClick={() => setScreen("Sessions")}
          className="cursor-pointer"
        >
          <SiSession/>
        </li>
      </ul>
      {screen === "Main" && <Main />}
      {screen === "Participants" && <Participants />}
      {screen === "Sessions" && <Sessions />}
    </div>
  );
};

export default Sidebar;
