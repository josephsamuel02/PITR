import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="footer" className="w-full px-2  py-6 flex flex-col bg-indigo-800">
      <ul className=" mx-3 py-10 flex flex-row ">
        <a href="#" className=" mx-3 px-3">
          <BsFacebook size={52} color="white" />
        </a>
        <a href="#" className=" mx-3 px-3">
          <BsInstagram size={52} color="white" />
        </a>
      </ul>
      <ul className="  mx-3 flex flex-col px-3 ">
        <h3 className=" text-2xl   font-bold font-dayone py-3 text-white">Contact</h3>
        <a href="" className=" text-xl text-white font-roboto">
          Email: pilgrimsrestepe@gmail.com
        </a>
        <a href="#" className="text-xl text-white font-roboto">
          Phone: +234 803 325 8643
        </a>
      </ul>

      <p id="footer" className=" mx-auto mt-16 text-center flex flex-row bg-indigo-800 ">
        &#169;Copyrights 2022 Pilgrims Intransit
      </p>
    </div>
  );
};

export default Footer;
