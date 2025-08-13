import flyer from "../../assets/flyer.jpeg";

const Sessions = () => {
  return (
    <div className="text-[#0B0B0F] bg-[#495057] w-screen h-screen pt-8 pl-8 font-sans">
      <span className="text-4xl text-[#2F9E44] font-bold">Welcome back,</span>
      <span className="text-3xl text-[#CFCFCF] pl-4 font-semibold ">Admin</span>
      <div className="mt-14 flex justify-center items-center">
        <span className="text-2xl text-[#CFCFCF] mb-8">
          This is the sessions management screen.
        </span>
      </div>
      <div className="flex flex-col gap-5 mx-20 justify-start items-center font-sans">
        <div className="h-[10em] w-full rounded-r-lg hover:shadow-[0_0_25px_rgba(0,0,0,0.25)] hover:shadow-[#1B2A41] gap-4 cursor-pointer flex justify-between items-center overflow-hidden">
          <div className="flex gap-5">
            <div className="overflow-hidden w-40 h-40 ">
              <img src={flyer} alt="session flyer" />
            </div>
            <div>
              <h1 className="text-[#CFCFCF] text-2xl font-semibold">
                <span className="text-[#2F9E44] text-2xl">Title:</span>{" "}
                Understand standard compliance.
              </h1>
              <h1 className="text-[#CFCFCF] text-sm overflow-hidden truncate w-[30em] font-semibold">
                <span className="text-[#2F9E44] text-xl">summary:</span> Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum,
                sed at vitae omnis totam fugit dolore consequuntur sint
                explicabo doloremque velit deleniti quo voluptatibus aliquid
                architecto perferendis vel veniam.
              </h1>
              <h1 className="text-[#CFCFCF] text-lg font-semibold">
                <span className="text-[#2F9E44] text-xl">date: </span>28th
                August, 2025.
              </h1>
              <h1 className="text-[#CFCFCF] text-lg font-semibold">
                <span className="text-[#2F9E44] text-xl">time: </span>8:00AM.
              </h1>
            </div>
          </div>
          <div>
            <button className="px-10 py-1 bg-[#2F9E44] text-[#0B0B0F] font-bold text-lg rounded-sm mr-3">
              Edit
            </button>
            <button className="px-8 py-1 bg-[#C92A2A] text-[#0B0B0F] font-bold text-lg rounded-sm mr-3">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sessions;
