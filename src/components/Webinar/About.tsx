import i from "../../assets/time.png";
import flyer from "../../assets/flyer.jpeg";
import { Button } from "../ui/button";
import { TiTime } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { NavHashLink } from "react-router-hash-link";

export interface SessionItemsInterface {
  icon: string;
  title: string;
  descript: string;
}

export const SessionItems: SessionItemsInterface[] = [
  {
    icon: i,
    title: "Trade mark consultation",
    descript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi consequuntur cum magni! Vel laudantium odio explicabo dignissimos tempora repellat odit praesentium provident! Reiciendis aspernatur aut dolores, beatae quidem cupiditate!",
  },
  {
    icon: i,
    title: "Legal consultation",
    descript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi consequuntur cum magni! Vel laudantium odio explicabo dignissimos tempora repellat odit praesentium provident! Reiciendis aspernatur aut dolores, beatae quidem cupiditate!",
  },
  {
    icon: i,
    title: "Tax advisory",
    descript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi consequuntur cum magni! Vel laudantium odio explicabo dignissimos tempora repellat odit praesentium provident! Reiciendis aspernatur aut dolores, beatae quidem cupiditate!",
  },
  {
    icon: i,
    title: "Internal policy formulation",
    descript:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi consequuntur cum magni! Vel laudantium odio explicabo dignissimos tempora repellat odit praesentium provident! Reiciendis aspernatur aut dolores, beatae quidem cupiditate!",
  },
];

const About = () => {
  return (
    <div className="flex flex-col gap-3 items-center mt-14 justify-between font-sans text-[#0B0B0F]">
      <h3 className="text-xl text-[#F48C06] font-bold capitalize font-serif">Upcoming Sessions:</h3>
      <div className="border-2 shadow-2xs flex gap-3 justify-start w-[95%] sm:w-[85%] ">
        <div className="overflow-hidden border">
          <img src={flyer} className="w-[16em] h-[12em]" />
        </div>
        <div className="mb-8">
          <h3 className="font-bold text-xl text-[#F4F4F5] font-serif">
            Understanding legal processes
          </h3>
          <div className="flex flex-row justify-start items-center mt-4 flex-wrap gap-3">
            <span className="flex gap-1 text-[#F4F4F5] font-semibold font-serif">
              <TiTime className="text-[#2F9E44] my-auto text-xl" /> 8AM
            </span>
            <span className="flex gap-1 text-[#F4F4F5] font-semibold font-serif">
              <MdOutlineDateRange className="text-[#2F9E44] my-auto text-xl" /> August
              28, 2025.
            </span>
          </div>
          {/* <h3 className="text-[#f4f4f5a4] ">About:</h3>
          <p className="py-2 text-[#CFCFCF]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            nihil numquam! Velit officia asperiores quod numquam unde ad vel
            nesciunt iure, quia reprehenderit iste veniam, eveniet ea tempore
            ipsam provident.
          </p> */}
          <NavHashLink smooth to={"#register"}>
            <Button
              variant="secondary"
              className="self-start md:self-center mt-3 bg-[#2F9E44] hover:bg-[#2f9e439f]"
            >
              <span className="text-[#0B0B0F] hover:text-[#CFCFCF] text-md font-bold cursor-pointer">
                Secure a seat
              </span>
            </Button>
          </NavHashLink>
        </div>
      </div>
      <div className="md:max-w-7xl w- mx-auto px-4 mt-20 font-serif">
        <h3 className="text-xl text-center text-[#CFCFCF] ">
          <strong className="text-[#F48C06]">All in-one</strong> webinar
        </h3>
        <h4 className="text-md text-center text-[#CFCFCF] pb-8">
          What you stand to gain.
        </h4>
        <div className="flex flex-1 justify-center items-center gap-9 flex-wrap ">
          {SessionItems.map((item, idx) => (
            <Card key={idx} items={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

function Card({ items }: { items: SessionItemsInterface }) {
  return (
    <div className="md:w-[14em] w-[14em]  h-[15em] rounded-xl shadow-md text-[#000] bg-[#f4f4f5a4] flex flex-col justify-center items-center px-1 py-2 shadow-[#1B2A41] hover:shadow-lg hover:shadow-[#1B2A41] hover:scale-x-101 ">
      <img src={items.icon} alt="item-card-icon" className="w-[25%]" />
      <h3 className="font-bold text-md ">{items.title}</h3>
      <p className="text-center text-xs">{items.descript}</p>
    </div>
  );
}
