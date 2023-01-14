import { Route, Routes } from "react-router-dom";
import Nav from "./modules/public/components/nav";
import LandingPage from "./modules/public/pages/landingPage";
import ROUTES from "./url.links/public.routes";
import Gallery from "./modules/public/pages/gallery";
const Router = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path={ROUTES.HOME} element={<LandingPage />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={"*"} element={<h1>NO Page Here</h1>} />
      </Routes>
    </>
  );
};

export default Router;
