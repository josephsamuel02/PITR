import { useState } from "react";
import Contact from "../pages/contact";

const Services = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <div id="service" className=" max-w-full mx-0  mt-0 pt-12 md:pt-24 ">
        <h1 className=" mx-3 md:mx-12 md:p-3 text-5xl md:text-6xl font-Palanquin font-bold text-orange-600">
          Guest Rooms
        </h1>

        <div className="w-full mx-0  p-1 md:p-1 flex flex-col md:flex-row">
          <div className=" left mx-0 md:mx-1 w-full md:w-1/2 h-auto items-center  ">
            <div className="w-11/12 h-72  mx-auto my-12 p-0 flex flex-col-reverse bg-[url('/img/IMG-20230104-WA0029.jpg')] bg-center bg-cover content-none ">
              <div className=" mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
                  Royal Lodge
                </p>
              </div>
            </div>
            <div className="w-11/12 h-72  mx-auto my-12 p-0 flex flex-col-reverse bg-[url('/img/IMG-20230104-WA0034.jpg')] bg-center bg-cover ">
              <div className="mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
                  Zeraphat Bedroom
                </p>
              </div>
            </div>
          </div>
          <div className=" right mx-0 md:mx-3  w-full md:w-1/2  h-auto items-center ">
            <div className="w-11/12 h-72  mx-auto my-12 p-0 flex flex-col-reverse bg-[url('/img/IMG-20230104-WA0027.jpg')] bg-center bg-cover ">
              <div className="mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold  hover:text-4xl transition-all text-white  ">
                  Standard Rooms
                </p>
              </div>
            </div>
            <div className="w-11/12 h-72  mx-auto my-12 p-0 flex flex-col-reverse bg-[url('/img/IMG-20230104-WA0026.jpg')] bg-center bg-cover ">
              <div className="mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold  hover:text-4xl transition-all text-white  ">
                  Emmanuel Rooms
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <a
          href="/gallery"
          className=" mx-5 md:mx-10 my-12 py-5 px-16 bg-orange-600 hover:bg-indigo-800 rounded  text-lg text-white  font-medium"
        >
          Gallery
        </a> */}
      </div>

      <div className=" w-full mx-0 mt-34  pt-52  ">
        <h1 className=" mx-3 md:mx-12 md:p-3 text-5xl md:text-6xl font-Palanquin font-bold text-orange-600">
          Event Halls
        </h1>

        <div className="w-full mx-0  p-1 md:p-1 flex flex-col md:flex-row">
          <div className=" left mx-0 md:mx-1 w-full md:w-1/2 h-auto items-center  ">
            <div className="w-11/12 h-72  mx-auto my-12 md:my-2 p-0 flex flex-col-reverse bg-[url('/img/3.jpg')] bg-center bg-cover content-none ">
              <div className=" mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
                  300 Capacity Event Hall
                </p>
              </div>
            </div>
            <div className="w-11/12 h-72  mx-auto my-12 md:my-2 p-0 flex flex-col-reverse bg-[url('/img/IMG-20221230-WA0004.jpg')] bg-center bg-cover ">
              <div className="mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
                  {/* 1000 Capacity Event Hall */}
                </p>
              </div>
            </div>
          </div>

          <div className=" right mx-0 md:mx-0 w-full md:w-1/2 h-auto items-center  ">
            <div className=" w-11/12 h-72 md:w-full md:h-full  mx-auto my-0 p-0 flex flex-col-reverse bg-[url('/img/IMG-20230104-WA0013.jpg')] bg-center bg-cover ">
              <div className="mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
                  500 Capacity Space
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" mx-1 md:mx-12 pt-20 md:py-10 md:mt-32  text-5xl font-Palanquin font-bold text-orange-600">
        Sports
      </h1>
      <div className="w-full h-auto pt-6 p-1 flex flex-row md:fex-col ">
        <div className="w-1/2 h-60  mx-3 p-0 flex flex-col-reverse bg-[url('/img/table_tenise.jpg')] bg-center bg-cover ">
          <p className=" m-0 my-0 p-5 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
            Table Tennis.
          </p>
        </div>
        <div className="w-1/2 h-60  mx-3 p-0 flex flex-col-reverse bg-[url('/img/long_tenise.jpg')] bg-center bg-cover ">
          <p className=" m-0 my-0 p-5 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
            Long Tennis Court.
          </p>
        </div>
      </div>
      <div className="w-full h-auto mt-20 p-1 ">
        <a
          className="  mx-4 md:mx-10 py-5 px-16 bg-orange-600 hover:bg-orange-800 rounded-md  text-lg text-white  font-medium cursor-pointer"
          onClick={() => setShowContact(!showContact)}
        >
          Contact Us
        </a>
      </div>
      {showContact && <Contact setShowContact={setShowContact} />}
    </>
  );
};

export default Services;
