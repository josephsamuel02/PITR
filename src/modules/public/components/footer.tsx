import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="footer" className="w-full px-2  py-6 flex flex-col bg-slate-600">
      <ul className=" mx-3 py-10 flex flex-row ">
        <a href="#" className=" mx-3 px-3">
          <BsFacebook size={52} color="#0349FF" />
        </a>
        <a href="#" className=" mx-3 px-3">
          <BsInstagram size={52} color="#C101EE" />
        </a>
      </ul>
      <ul className="  mx-3 flex flex-col px-3">
        <h3 className=" text-2xl font-nunito font-bold py-3 text-white">Contact</h3>
        <a href="" className=" text-2xl text-white font-roboto">
          Email: officialemail@gmail.com
        </a>
        <a href="" className="  text-2xl text-white font-roboto">
          Phone: +2349073077717
        </a>
      </ul>
    </div>
  );
};

export default Footer;
