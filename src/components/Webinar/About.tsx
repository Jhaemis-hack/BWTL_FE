import flyer from "../../assets/flyer.jpeg";
import { Button } from "../ui/button";
import { TiTime } from "react-icons/ti";
import { MdOutlineDateRange } from "react-icons/md";
import { NavHashLink } from "react-router-hash-link";
import { SVG } from "@/constants";
import { GrLocation } from "react-icons/gr";

export interface SessionItemsInterface {
  icon: string;
  title: string;
  descript: string;
}

export const SessionItems: SessionItemsInterface[] = [
  {
    icon: SVG.chip,
    title: "Intellectual Property & Technology",
    descript: `Learn about protecting and commercializing intellectual property through trademark, patent, copyright, and industrial design registration, licensing structures, technology transfer, franchising models, and resolving infringement disputes.`,
  },
  {
    icon: SVG.briefcase,
    title: "Corporate & Compliance",
    descript: `Gain insights into entity formation, corporate restructuring, complex commercial contracts, regulatory compliance, governance, and policy development.`,
  },
  {
    icon: SVG.data,
    title: "AI, Data & Digital",
    descript: `Explore strategies for AI adoption and integration, data privacy compliance, and ethical governance to manage risks in the digital era.`,
  },
  {
    icon: SVG.tax,
    title: "Tax Advisory",
    descript: `Gain insights on tax planning, optimization, and compliance, with strategies to maximize efficiency under Nigerian law and effectively resolve disputes with tax authorities.`,
  },
  {
    icon: SVG.board,
    title: "Board & Executive Training",
    descript: `Develop practical skills in directors’ duties, regulatory compliance, and board governance, with training on liability management, crisis preparedness, and strategies to enhance board effectiveness.`,
  },
];

const About = () => {
  return (
    <div className="flex flex-col gap-3 items-center mt-14 justify-between font-sans text-[#0B0B0F]">
      <h3 className="text-xl text-[#F48C06] font-bold capitalize font-serif">
        Upcoming Sessions:
      </h3>
      <div className="border-2 shadow-2xs flex gap-3 justify-start w-[95%] sm:w-[85%] md:w-[80%] lg:w-[50em] mx-auto">
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
              <MdOutlineDateRange className="text-[#2F9E44] my-auto text-xl" />{" "}
              August 28, 2025.
            </span>
            <span className="flex gap-1 text-[#F4F4F5] font-semibold font-serif">
              <GrLocation className="text-[#2F9E44] my-auto text-xl" /> ATB Tech
              Hub.
            </span>
          </div>
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
      <div className="md:max-w-7xl mx-auto px-4 mt-20 font-serif">
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
    <div className="md:w-[14em] w-[15em] text-[#F4F4F5] h-[15em] rounded-xl shadow-md bg-[#1B2A41]/95 flex flex-col text-wrap justify-center items-center px-2 py-2 shadow-[#1B2A41] hover:shadow-md hover:shadow-[#2F9E44] hover:scale-x-101 ">
      {/* <img src={items.icon} alt="item-card-icon" className="w-[25%]" /> */}
      {/* <span className="w-[25%]">{}</span> */}
      <span
        dangerouslySetInnerHTML={{
          __html: items.icon,
        }}
      />
      <h3 className="font-bold text-md text-center mb-2">{items.title}</h3>
      <p className="text-center text-xs text-[#CFCFCF] leading-4 font-sans">
        {items.descript}
      </p>
    </div>
  );
}
