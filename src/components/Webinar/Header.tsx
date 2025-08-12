import { ArrowBigRight, X } from "lucide-react";
import logo from "../../assets/time.png";
import { Button } from "../ui/button";
import { HashLink } from "react-router-hash-link";
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div
      id="home"
      onClick={() => isMenuOpen ? setIsMenuOpen(!isMenuOpen) : null}
      className="text-[#F4F4F5] font-sans bg-[url('/bgImg.png')] bg-cover bg-center h-[20em] overflow-x-hidden overflow-y-hidden relative"
    >
      <div className="bg-[#1B2A41]/80 pt-5 px-5 h-full ">
        <div className="flex justify-between items-center ">
          <img src={logo} className="h-8 w-8" />
          
          <div className="hidden sm:flex flex-row sm:gap-7 text-[#F4F4F5] ">
            <HashLink smooth to="/">
              <h3 className="hover:text-[#2F9E44] cursor-pointer hover:scale-110">
                Home
              </h3>
            </HashLink>
            <HashLink smooth to="#about">
              <h3 className="hover:text-[#2F9E44] cursor-pointer hover:scale-110">
                About
              </h3>
            </HashLink>
            <HashLink smooth to="#register">
              <h3 className="hover:text-[#2F9E44] cursor-pointer hover:scale-110">
                register
              </h3>
            </HashLink>
            <HashLink smooth to="#speaker">
              <h3 className="hover:text-[#2F9E44] cursor-pointer hover:scale-110">
                Speaker
              </h3>
            </HashLink>
            <HashLink smooth to="#contact">
              <h3 className="hover:text-[#2F9E44] cursor-pointer hover:scale-110">
                contact
              </h3>
            </HashLink>
          </div>
          <span className="hidden sm:flex"><HiOutlineMenu className="h-6 w-6" /></span>
          {/* Mobile menu button */}
          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <HiOutlineMenu className="h-8 w-8" />
            )}
          </button>
        </div>
        {/* Mobile Navigation */}
        {/* {isMenuOpen && ( */}
          <div className={`md:hidden pb-5 rounded-sm shadow-[0_0_10px_rgba(0,0,0,0)] shadow-[#0B0B0F] pt-5 bg-[#1B2A41]/95 px-5 w-[12em] absolute z-20 top-0 right-0 transform transition-transform duration-1000 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button
              className="sm:hidden pl-32"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <HiOutlineMenu className="h-6 w-6" />
              )}
            </button>
            <nav className="flex flex-col space-y-8">
            <HashLink smooth to="/">
              <h3 className="hover:text-[#2F9E44] cursor-pointer hover:scale-110">
                Home
              </h3>
            </HashLink>
            <HashLink smooth to="#about">
              <h3 className="hover:text-[#2F9E44] cursor-pointer hover:scale-110">
                About
              </h3>
            </HashLink>
            <HashLink smooth to="#register">
              <h3 className="hover:text-[#2F9E44] cursor-pointer hover:scale-110">
                register
              </h3>
            </HashLink>
            <HashLink smooth to="#speaker">
              <h3 className="hover:text-[#2F9E44] cursor-pointer hover:scale-110">
                Speaker
              </h3>
            </HashLink>
            <HashLink smooth to="#contact">
              <h3 className="hover:text-[#2F9E44] cursor-pointer hover:scale-110">
                contact
              </h3>
            </HashLink>
            </nav>
          </div>
        {/* )} */}

        <div className="flex flex-col justify-center items-center py-[3em] px-[2em] ">
          <h1 className="text-[#F4F4F5] text-3xl sm:text-5xl ">Breakfast With The Law</h1>
          <p className="self-start sm:self-center decorate-[#2F9E44] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <span className="text-[#2F9E44]">upcoming: </span>Understanding
            Start up Compliance{" "}
          </p>
          <Button
            variant="secondary"
            className="self-start md:self-center mt-3 cursor-pointer"
          >
            <span className="text-[#0B0B0F] hover:text-[#2F9E44]">
              Register
            </span>{" "}
            <ArrowBigRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
