import LandingPageDashBoard from "../components/landing.page.dashBoard";
import Features from "../components/features";
import Services from "../components/services";
import Footer from "../components/footer";
const LandingPage = () => {
  return (
    <>
      <LandingPageDashBoard />
      <Services />
      <Features />
      <Footer />
    </>
  );
};

export default LandingPage;
