import type { ParticipantItemInterface } from "@/constants";

export const ParticipantItem = ({
  participant,
}: {
  participant: ParticipantItemInterface;
}) => {
  return (
    <div
      className="text-center text-2xl font-md border border-[#2F9E44] mx-64 text-[#CFCFCF]"
      style={{ display: "grid", gridTemplateColumns: "10% 40% 10% 20% 20%" }}
    >
      <div className="border-r border-[#2F9E44] p-3">{participant.index}</div>
      <div className="border-r border-[#2F9E44] p-3 text-start">
        {participant.name}
      </div>
      <div className="border-r border-[#2F9E44] p-3">{participant.gender}</div>
      <div className="border-r border-[#2F9E44] p-3">{participant.phone}</div>
      <div className="p-3">{participant.gmail}</div>
    </div>
  );
};

export default ParticipantItem;
