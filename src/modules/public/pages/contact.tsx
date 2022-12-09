import { SiGmail } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <div className="fixed  top-0 bottom-0 left-0 right-0 bg-transparent">
      <div className=" mx-auto w-8/12 md:w-6/12 h-auto absolute py-12 top-36 left-0 right-0 translate-x-8 backdrop-blur-md bg-opacity-10 bg-white rounded-xl ">
        {/* <h2
        className="absolute top-6 right-6 text-2xl font-nunito font-bold text-slate-500 cursor-pointer"
        // onClick={setShowContact(false)}
      >
        X
      </h2> */}

        <ul className="mx-auto px-20 h-auto w-full">
          <div className="w-full px-0 py-4 border-blue-300 hover:border-b-3 flex flex-row items-center cursor-pointer">
            <SiGmail size={40} color="red" />
            <p className=" mx-2 text-2xl text-slate-700 font-nunito">Email Us Directly</p>
          </div>
          <div className="w-full px-0 py-4  hover:border-b-3 flex flex-row items-center cursor-pointer">
            <MdCall size={45} color="blue" />
            <p className=" mx-2 text-2xl text-slate-700 font-nunito">Call Now</p>
          </div>
          <div className="w-full px-0 py-4  hover:border-b-3 flex flex-row items-center cursor-pointer">
            <RiWhatsappFill size={50} color="#28D70B" />
            <p className=" mx-2 text-2xl text-slate-700 font-nunito"> Chat</p>
          </div>
          <p className=" w-10/12 mt-7 mb-5 mx-auto text-center py-4 text-2xl text-white font-nunito bg-indigo-500 hover:bg-violet-500  rounded-lg cursor-pointer">
            Close
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
