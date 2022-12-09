const Services = () => {
  return (
    <>
      <div id="service" className=" max-w-full mx-0  mt-0 pt-12 md:pt-52 bg-slate-50 ">
        <h1 className=" mx-1 md:mx-12  p-0 md:p-3 text-5xl font-Palanquin font-bold text-indigo-600">
          Guest Rooms
        </h1>

        <div className="w-full mx-0  p-1 md:p-1 flex flex-col md:flex-row">
          <div className=" left mx-0 md:mx-1 w-full md:w-1/2 h-auto items-center  ">
            <div className="w-11/12 h-72  mx-auto my-12 p-0 flex flex-col-reverse bg-[url('/img/room_1.jpg')] bg-center bg-cover content-none ">
              <div className=" mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
                  Royal Lodge
                </p>
              </div>
            </div>
            <div className="w-11/12 h-72  mx-auto my-12 p-0 flex flex-col-reverse bg-[url('/img/room_2.jpg')] bg-center bg-cover ">
              <div className="mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
                  Executive Suite
                </p>
              </div>
            </div>
          </div>
          <div className=" right mx-0 md:mx-3  w-full md:w-1/2  h-auto items-center ">
            <div className="w-11/12 h-72  mx-auto my-12 p-0 flex flex-col-reverse bg-[url('/img/room_4.jpg')] bg-center bg-cover ">
              <div className="mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold  hover:text-4xl transition-all text-white  ">
                  Standard Rooms
                </p>
              </div>
            </div>
            <div className="w-11/12 h-72  mx-auto my-12 p-0 flex flex-col-reverse bg-[url('/img/room_3.jpg')] bg-center bg-cover ">
              <div className="mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold  hover:text-4xl transition-all text-white  ">
                  Emmanuel Rooms
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          href="/gallery"
          className="  mx-10 my-12 py-5 px-10 bg-indigo-600 hover:bg-purple-700 rounded  text-lg text-white  font-medium"
        >
          Gallery
        </a>
      </div>

      <div className=" w-full mx-0 mt-34  pt-52 bg-slate-50 ">
        <h1 className=" mx-1 md:mx-12  p-0 md:py-10 text-5xl font-Palanquin font-bold text-indigo-600">
          Event Halls
        </h1>

        <div className="w-full mx-0  p-1 md:p-1 flex flex-col md:flex-row">
          <div className=" left mx-0 md:mx-1 w-full md:w-1/2 h-auto items-center  ">
            <div className="w-11/12 h-72  mx-auto my-12 md:my-2 p-0 flex flex-col-reverse bg-[url('/img/room_1.jpg')] bg-center bg-cover content-none ">
              <div className=" mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
                  300 Capacity Event Hall
                </p>
              </div>
            </div>
            <div className="w-11/12 h-72  mx-auto my-12 md:my-2 p-0 flex flex-col-reverse bg-[url('/img/room_2.jpg')] bg-center bg-cover ">
              <div className="mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
                  500 Capacity Event Hall
                </p>
              </div>
            </div>
          </div>

          <div className=" right mx-0 md:mx-0 w-full md:w-1/2 h-auto items-center  ">
            <div className=" w-11/12 h-72 md:w-full md:h-full  mx-auto my-0 p-0 flex flex-col-reverse bg-[url('/img/room_2.jpg')] bg-center bg-cover ">
              <div className="mx-0 px-4 w-full bg-opacity-20 bg-slate-900 ">
                <p className=" m-0 my-3 text-xl font-courgette font-bold hover:text-4xl transition-all text-white  ">
                  1000 Capacity Hall
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto pt-24 p-1 flex flex-row md:fex-col bg-blue-50">
        <div className="w-1/2 h-60  mx-3 p-0 flex flex-col-reverse bg-[url('/img/table_tenise.jpg')] bg-center bg-cover ">
          <p className=" m-0 my-0 p-5 text-2xl  text-white  bg-opacity-20 bg-slate-900 ">
            Table Tennis.
          </p>
        </div>
        <div className="w-1/2 h-60  mx-3 p-0 flex flex-col-reverse bg-[url('/img/long_tenise.jpg')] bg-center bg-cover ">
          <p className=" m-0 my-0 p-5 text-2xl  text-white  bg-opacity-20 bg-slate-900 ">
            Long Tennis Court.
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
