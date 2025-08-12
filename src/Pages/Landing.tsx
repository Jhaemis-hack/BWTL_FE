import About from "@/components/Webinar/About";
import ContactUs from "@/components/Webinar/ContactUs";
import Header from "@/components/Webinar/Header";
import Profile from "@/components/Webinar/Profile";
import Register from "@/components/Webinar/Register";

const Landing = () => {
  return (
    <div className="bg-[#495057]">
      <Header />
      <About />
      <Profile/>
      <Register/>
      <ContactUs/>
    </div>
  );
};

export default Landing;
