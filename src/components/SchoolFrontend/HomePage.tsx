import CallbackModal from './request-callback/CallbackModal';
import Header from "./header/Header";
import HeroSlider from "./slider/HeroSlider";
import AboutUs from "./aboutus/AboutUs";
import Testimonials from "./aboutus/Testimonials";
import EducationCards from "./aboutus/EducationCards";
import OurSessions from "./aboutus/OurSessions";
import OurTeachers from "./teachers/OurTeachers";
import PhotoGallery from "./gallery/PhotoGallery";
import LatestVideo from "./aboutus/LatestVideo";
import Footer from "./footer/Footer";
function HomePage() {
  return (
    <>
      <CallbackModal />
      <Header />
      <HeroSlider />
      <AboutUs/>
      <Testimonials/>
      <EducationCards/>
      <OurSessions/>
      <OurTeachers/>
      <PhotoGallery/>
      <LatestVideo/>
      <Footer />
    </>
  );
}

export default HomePage;
