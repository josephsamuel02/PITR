import Contact from "../pages/contact";
import { useState } from "react";
const LandingPageDashBoard = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="w-full  h-screen mx-0 mt-0 bg-[url('/img/hotel_outdoor.jpg')] bg-center bg-cover ">
      <div className="w-full h-full m-0 p-0  ">
        <div className="px-3 md:px-12  md:mt-auto pt-20 md:pt-24 w-full h-full bg-transparent bg-gradient-to-t md:bg-gradient-to-r from-slate-800 ">
          <h1 className=" p-3  text-orange-500 m-0 font-bold md:text-left  text-7xl md:text-8xl">
            Pilgrims Intransit
          </h1>
          <h1 className="p-3 text-white m-0  font-bold md:text-left   text-5xl md:text-7xl">
            Guest House
          </h1>
          <h1 className="p-3 text-white m-0  font-bold md:text-left  text-5xl md:text-7xl">
            & Event Center
          </h1>
          <p className="p-1 my-12 mt-12 text-xl md:text-2xl text-white font-nunito w-full md:w-1/2 font-bold ">
            Do you need a place for your events? Be it Marriage, Lectures, Trainings or
            Retreats, large or small occasions, we have exactly what you need.
            {/* ture filled location for relaxation or standard guest rooms for your guest in Epe
            ? we have exactly what you need. */}
          </p>

          <a
            className="mx-3 my-12 py-4 px-16 bg-orange-600 text-xl font-roboto text-white hover:bg-indigo-800 cursor-pointer rounded-md transition-all "
            onClick={() => setShowContact(!showContact)}
          >
            Contact Us
          </a>

          {showContact && <Contact setShowContact={setShowContact} />}
        </div>
      </div>
    </div>
  );
};

export default LandingPageDashBoard;
