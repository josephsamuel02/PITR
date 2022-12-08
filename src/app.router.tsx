import { Route, Routes } from "react-router-dom";
import Nav from "./modules/public/components/nav";
import Contact from "./modules/public/pages/contact";
import LandingPage from "./modules/public/pages/landingPage";
import ROUTES from "./url.links/public.routes";
const Router = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path={ROUTES.HOME} element={<LandingPage />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={"*"} element={<h1>NO Page Here</h1>} />
      </Routes>
    </>
  );
};

export default Router;
