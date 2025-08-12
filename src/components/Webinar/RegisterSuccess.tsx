import ContactUs from "./ContactUs";
import Header from "./Header";
import Check from "../../assets/Check.png";
import Mail from "../../assets/mail.png";

const RegisterSuccess = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center pt-3 text-[#F4F4F5] px-4">
        <img src={Check} className="h-20 w-20 mb-4" />
        <h3 className="capitalize text-[#2F9E44] font-bold text-lg sm:text-2xl font-sans mb-2">
          Thank You for registering{" "}
        </h3>
        <p className="text-sm sm:text-lg font-serif mb-2 text-center">
          Your seat for Breakfast with the Law is confirmed.
        </p>
        <p className="text-centertext-sm sm:text-lg font-serif text-[#CFCFCF] flex">
          keep an eye on your inbox. <span><img src={Mail} className="w-5 h-5 ml-3 self-baseline"/></span>
        </p>
      </div>
      <div className="fixed bottom-0 w-full">
        <ContactUs />
      </div>
    </>
  );
};

export default RegisterSuccess;
