import { MdLocationOn } from "react-icons/md";

const Features = () => {
  return (
    <>
      <div
        id="features"
        className=" max-w-full mt-24 py-12 flex flex-row flex-wrap items-center"
      >
        <div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
          <img src="vite.svg" alt="vite" className="m-auto p-4 w-20 h-20" />
          <p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center font-md text-slate-600">
            Serene & Nature filled Environment
          </p>
        </div>
        <div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
          <img src="vite.svg" alt="vite" className="m-auto p-4 w-20 h-20" />
          <p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center font-md text-slate-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. d magna aliqua ad ad non
            deserunt sunt.
          </p>
        </div>
        <div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
          <img src="vite.svg" alt="vite" className="m-auto p-4 w-20 h-20" />
          <p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center font-md text-slate-600">
            Perfect For Your Retreats
          </p>
        </div>
        <div className=" mx-auto my-10 p-1 py-12 w-3/5  md:w-1/5 flex flex-col bg-white rounded-md shadow hover:shadow-lg">
          <img src="vite.svg" alt="vite" className="m-auto p-4 w-20 h-20" />
          <p className="mx-auto px-10 md:px-1 lg:px-10 text-md text-center font-md text-slate-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. d magna aliqua ad ad non
            deserunt sunt.
          </p>
        </div>
      </div>

      <div className="mx-auto p-10 flex flex-row items-center justify-center">
        <span className="mx-1">
          <MdLocationOn color="red" size={74} />
        </span>
        <span className="mx-auto md:mx-0 text-xl md:text-4xl font-bold ">
          1 - 7 Otunba Adejonwo Street, Plywood junction, Epe
        </span>
      </div>
    </>
  );
};

export default Features;
