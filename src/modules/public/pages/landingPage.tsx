import LandingPageDashBoard from "../components/landing.page.dashBoard";
import Features from "../components/features";
import Services from "../components/services";
import Footer from "../components/footer";
const LandingPage = () => {
  return (
    <div className="w-full h-auto m-0 p-0 bg-gray-300">
      <LandingPageDashBoard />
      <Services />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
