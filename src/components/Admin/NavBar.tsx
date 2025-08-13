import profile from "../../assets/mr_pelumi.jpg"

const NavBar = () => {
  return (
    <div className=" sticky z-50 bg-[#1B2A41] flex gap-8 justify-between items-center py-5 border-b border-[#CFCFCF] px-8">
      <h1 className="text-3xl text-[#2F9E44] font-bold font-sans">BWTL</h1>
      <h1 className="text-[#F4F4F5] text-3xl font-semibold font-sans pl-28">
        Admin Dashboard
      </h1>
      <span className="text-[#2F9E44] text-3xl font-semibold font-sans rounded-full border-2 w-12 h-12 flex justify-center items-center overflow-hidden">
       <img src={profile} />
      </span>
    </div>
  );
};

export default NavBar;
