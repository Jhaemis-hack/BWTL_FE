import { BsInstagram } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="bg-[#1B2A41] text-[#F4F4F5] h-[10em] relative pt-3"
    >
      <div className="flex flex-col justify-center items-center">
        <h3 className="pb-4">Get in touch with the Law: </h3>
        <div className="flex justify-between items-center gap-6 text-3xl text-[#2F9E44]">
          <Link to={"/"}>
            <span>
              <BsInstagram />
            </span>
          </Link>
          <a href="mailto:Breakfastwiththelaw@gmail.com">
            {" "}
            <span>
              <BiLogoGmail />
            </span>
          </a>
          <Link to={"/"}>
            <span>
              <FaXTwitter />
            </span>
          </Link>
        </div>
        <span className="absolute bottom-10 text-[#cfcfcfc9]/40">
          BreakFast with the Law @2025
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
