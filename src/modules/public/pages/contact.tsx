import { SiGmail } from "react-icons/si";
import { MdCall } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import URLS from "../../../url.links/publicURLs";

interface props {
  setShowContact: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact = ({ setShowContact }: props) => {
  return (
    <div className="fixed  top-0 bottom-0 left-0 right-0 bg-transparent">
      <div className=" mx-auto h-auto w-11/12 md:w-6/12  absolute top-24 left-0 right-0 py-12  backdrop-blur-md bg-opacity-10 bg-white rounded-xl self-center ">
        <ul className="mx-auto px-10 md:px-20 h-auto w-full">
          <a
            className="w-full px-0 py-4 border-blue-300 hover:border-b-3 flex flex-row items-center cursor-pointer"
            href={URLS.EMAIL}
            target="_blank"
          >
            <SiGmail size={40} color="red" />
            <p className=" mx-2 text-2xl text-slate-900 font-nunito font-bold">
              Email Us Directly
            </p>
          </a>
          <a
            className="w-full px-0 py-4  hover:border-b-3 flex flex-row items-center cursor-pointer"
            href={URLS.CALL}
          >
            <MdCall size={45} color="blue" />
            <p className=" mx-2 text-2xl text-slate-900 font-nunito font-bold">Call Now</p>
          </a>
          <a
            className="w-full px-0 py-4  hover:border-b-3 flex flex-row items-center cursor-pointer"
            href={URLS.WHATSAPP}
            target="_blank"
          >
            <RiWhatsappFill size={50} color="#28D70B" />
            <p className=" mx-2 text-2xl text-slate-900 font-nunito font-bold"> Chat</p>
          </a>
          <p
            className=" w-full md:w-10/12 mt-7 mb-5 mx-auto text-center py-4 text-2xl text-white font-nunito bg-orange-500 hover:bg-orange-800  rounded cursor-pointer"
            onClick={() => setShowContact(false)}
          >
            Close
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
