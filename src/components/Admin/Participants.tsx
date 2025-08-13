import { ParticipantsObject } from "@/constants";
import ParticipantItem from "./ParticipantItem";

const Participants = () => {
  return (
    <div className="text-[#0B0B0F] bg-[#495057] w-screen h-screen pt-8 pl-8 font-sans">
      <span className="text-4xl text-[#2F9E44] font-bold">Welcome back,</span>
      <span className="text-3xl text-[#CFCFCF] pl-4 font-semibold ">Admin</span>
      <div className="mt-14 flex justify-center items-center">
        <span className="text-2xl text-[#CFCFCF]">
          This is the participants management screen.
        </span>
      </div>
      <p className="text-2xl text-[#CFCFCF] font-semibold ml-20">
        <span className="text-[#2F9E44]">Session title: </span>Understanding
        Start up Compliance.{" "}
      </p>
      <div
        className="text-center text-2xl font-bold border border-[#2F9E44] rounded-t-xl mx-64 text-[#1B2A41] mt-8"
        style={{ display: "grid", gridTemplateColumns: "10% 40% 10% 20% 20%" }}
      >
        <div className="border-r border-[#2F9E44] p-3">No.</div>
        <div className="border-r border-[#2F9E44] p-3">Full Name</div>
        <div className="border-r border-[#2F9E44] p-3">Gender</div>
        <div className="border-r border-[#2F9E44] p-3">phone Number (+234)</div>
        <div className="p-3">Gmail</div>
      </div>
      {ParticipantsObject.map((participant, idx) => (
        <ParticipantItem key={idx} participant={participant} />
      ))}
    </div>
  );
};

export default Participants;
