const Gallery = () => {
  const Photos = [
    { name: "", img: "2.jpg" },
    { name: "", img: "3.jpg" },
    { name: "", img: "IMG-20221230-WA0004.jpg" },
    { name: "", img: "IMG-20221230-WA0006.jpg" },
    { name: "", img: "IMG-20230104-WA0007.jpg" },
    { name: "", img: "IMG-20230104-WA0008.jpg" },
    { name: "", img: "IMG-20230104-WA0009.jpg" },
    { name: "", img: "IMG-20221230-WA0007.jpg" },
    { name: "", img: "IMG-20230104-WA0007.jpg" },
    { name: "", img: "IMG-20230104-WA0008.jpg" },
    { name: "", img: "IMG-20230104-WA0009.jpg" },
    { name: "", img: "IMG-20230104-WA0011.jpg" },
    { name: "", img: "IMG-20230104-WA0010.jpg" },
    { name: "", img: "IMG-20230104-WA0012.jpg" },
    { name: "", img: "IMG-20230104-WA0002.jpg" },
    { name: "", img: "IMG-20230104-WA0005.jpg" },
    { name: "", img: "IMG-20230104-WA0013.jpg" },
    { name: "", img: "IMG-20230104-WA0016.jpg" },
    { name: "", img: "IMG-20230104-WA0018.jpg" },
    { name: "", img: "IMG-20230104-WA0017.jpg" },
    { name: "", img: "IMG-20230104-WA0020.jpg" },
    { name: "", img: "IMG-20230104-WA0019.jpg" },
    { name: "", img: "IMG-20230104-WA0022.jpg" },
    { name: "", img: "IMG-20230104-WA0026.jpg" },
    { name: "", img: "IMG-20230104-WA0027.jpg" },
    { name: "", img: "IMG-20230104-WA0033.jpg" },
    { name: "", img: "IMG-20230104-WA0032.jpg" },
    { name: "", img: "IMG-20230104-WA0034.jpg" },
    { name: "", img: "IMG-20230104-WA0039.jpg" },
    { name: "", img: "IMG-20230104-WA0038.jpg" },
    { name: "", img: "IMG-20230104-WA0040.jpg" },
    { name: "", img: "IMG-20230104-WA0042.jpg" },
    { name: "", img: "IMG-20230104-WA0041.jpg" },
  ];

  return (
    <div className="w-full h-auto m-0 p-0">
      <a href="/" className=" mx-5 py-2 text-xl font-courgette font-bold ">
        Back
      </a>
      {/* <h1 className=" mx-5 py-2 text-xl font-courgette font-bold ">Gallery</h1> */}

      <div className="flex flex-row flex-wrap w-full h-auto justify-center">
        {Photos &&
          Photos.map((i, n) => (
            <img
              src={`img/${i.img}`}
              key={n}
              alt="photo"
              className="  w-11/12  h-auto md:w-52 md:h-64 m-5 p-0 object-cover object-center"
            />
          ))}
      </div>
    </div>
  );
};

export default Gallery;
