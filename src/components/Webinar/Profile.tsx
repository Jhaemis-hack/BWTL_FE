import profile from "../../assets/mr_pelumi.jpg";

const Profile = () => {
  return (
    <div
      id="speaker"
      className="mt-20 py-24 flex flex-col justify-center font-sans items-center bg-[#1B2A41] text-[#495057]"
    >
      <h2 className="pb-9 text-3xl font-black text-[#CFCFCF] font-sans">
        Host
      </h2>
      <div className="relative rounded-full w-[15em] h-[15em] border-2 overflow-hidden hover:shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[#2F9E44] mb-5 outline-4 outline-[#CFCFCF]">
        <img src={profile} alt="profile" className="absolute -top-8" />
      </div>
      <h2 className="text-[#CFCFCF] font-bold text-xl text-wrap text-center">
        Oluwapelumi Awoyale, ACIS, AICMC, DCP, FMVA
      </h2>
      <div className="flex flex-col justify-start items-center w-[80%]">
        <h2 className="font-black text-[#CFCFCF] text-2xl mt-8 mb-3">Bio:</h2>
        <p className="text-[#CFCFCF] font-serif indent-5">
          Oluwapelumi O. A. is a certified compliance professional, Company
          Secretary, and certified board professional at Cashwise Finance. He
          has led governance reforms, built investor-ready structures, and
          guided organizations through complex regulatory landscapes.
        </p>
        <p className="text-[#CFCFCF] mt-4 font-serif indent-5">
          A published researcher on corporate governance, regulatory compliance,
          and AI ethics, Oluwapelumi also runs transformative tech
          ventures—including Rydr Technologies and BusinessAI—where he applies
          his governance expertise to innovation.
        </p>
        <p className="text-[#CFCFCF] mt-4 font-serif indent-5">
          Currently pursuing an LL.M. in corporate finance, corporate
          governance, and regulatory compliance, he is passionate about
          equipping founders with the strategies and structures to scale
          sustainably, stay compliant, and attract long-term investment.
        </p>
      </div>
    </div>
  );
};

export default Profile;
// Speaker

// Oluwapelumi Awoyale, ACIS, AICMC, DCP, FMVA
