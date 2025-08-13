import profile from "../../assets/mr_pelumi.jpg";

const Profile = () => {
  return (
    <div id="speaker" className="mt-6 py-40 flex flex-col justify-center font-sans items-center bg-[#1B2A41] text-[#495057]">
      <h2 className="pb-9 text-3xl font-black text-[#CFCFCF] font-sans">Host</h2>
      <div className="relative rounded-full w-[15em] h-[15em] border-2 overflow-hidden hover:shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[#2F9E44] mb-5">
        <img src={profile} alt="profile" className="absolute -top-8" />
      </div>
      <h2 className="text-[#CFCFCF] font-bold text-xl text-wrap text-center">
        Oluwapelumi Awoyale, ACIS, AICMC, DCP, FMVA
      </h2>
      <div className="flex flex-col justify-start items-center w-[80%]">
        <h2 className="font-black text-[#CFCFCF] mt-8">Bio:</h2>
        <p className="text-[#CFCFCF] font-serif">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, libero
          exercitationem nisi pariatur ea, excepturi molestias magni dicta optio
          aut odio doloremque nulla unde minus officiis ducimus iure placeat
          labore!
        </p>
        <p className="text-[#CFCFCF] mt-4 font-serif">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
          expedita deserunt eaque, iure nemo illum beatae quibusdam repellendus
          ea dicta animi placeat natus quod libero soluta quidem, blanditiis
          tenetur doloremque.
        </p>
      </div>
    </div>
  );
};

export default Profile;
// Speaker

// Oluwapelumi Awoyale, ACIS, AICMC, DCP, FMVA
