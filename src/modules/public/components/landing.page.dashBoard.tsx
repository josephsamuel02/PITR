const LandingPageDashBoard = () => {
  return (
    <div className="w-full  h-screen mx-0 mt-0 bg-[url('/img/hotel_outdoor.jpg')] bg-center bg-cover ">
      <div className="w-full h-full m-0 p-0  ">
        <div className="px-6 md:px-12  md:mt-auto pt-20 md:pt-24 w-full h-full  bg-transparent  bg-gradient-to-t md:bg-gradient-to-r from-slate-200 ">
          <h1 className="p-3 text-orange-600 m-0 font-bold md:text-left   text-6xl md:text-8xl">
            Pilgrims Intransit
          </h1>
          <h1 className="p-3 text-indigo-600 m-0  font-bold md:text-left   text-5xl md:text-7xl">
            Guest House
          </h1>
          <h1 className="p-3 text-indigo-600 m-0  font-bold md:text-left  text-5xl md:text-7xl">
            & Event Center
          </h1>
          <p className="p-1 my-12 mt-12 text-xl md:3xl text-black  font-base w-full md:w-1/2 font-bold ">
            Do you need a place for your events? Be it Marriage, Lectures, Trainings or
            Retreats, large or small occasions, we have exactly what you need.
            {/* ture filled location for relaxation or standard guest rooms for your guest in Epe
            ? we have exactly what you need. */}
          </p>

          <a
            href="/contact"
            className="mx-3 my-12 py-4 px-16 bg-indigo-600 text-xl text-white hover:bg-gradient-to-r from-purple-800 rounded-md transition-all "
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPageDashBoard;
