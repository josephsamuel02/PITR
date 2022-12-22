import { MdLocationOn } from "react-icons/md";
const Features = () => {
  const illustrations = [
    { icon: "undraw_blooming_re_2kc4.svg", title: "Friendly environment" },
    { icon: "undraw_wedding_re_66hj.svg", title: "   Perfect for events" },
    { icon: "undraw_relaxing_at_home_re_mror.svg", title: " For your retreats" },
    { icon: "undraw_delivery_truck_vt6p.svg", title: "Wide parking space" },
  ];

  return (
    <>
      <div
        id="features"
        className=" max-w-full mt-24 py-12 flex flex-row flex-wrap items-center"
      >
        {illustrations &&
          illustrations.map((item, i) => (
            <div
              className=" mx-auto my-10 p-1 py-12 w-4/5  md:w-1/5 h-60 md:h-60 flex flex-col bg-white rounded-md shadow hover:shadow-lg"
              key={i}
            >
              <img
                src={`img/${item.icon}`}
                alt="illustration"
                className="m-auto py-3 w-32 h-auto"
              />
              <p className="mx-auto  px-10 md:px-1 lg:px-10 text-xl text-center font-md text-slate-800">
                {item.title}
              </p>
            </div>
          ))}
      </div>

      <div className=" md:mx-auto p-10 flex flex-row items-center justify-center">
        <span className="md:mx-1">
          <MdLocationOn color="red" size={60} />
        </span>
        <span className=" md:mx-0 md:text-center text-base text-black md:text-4xl font-roboto font-bold ">
          1 - 7 Otunba Adejonwo Street, Plywood junction, Epe, Lagos.
        </span>
      </div>
    </>
  );
};

export default Features;
