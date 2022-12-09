import ROUTES from "../../../url.links/public.routes";

const Nav = () => {
  const navigation = [
    { name: "Services", href: ROUTES.SERVICE },
    { name: "Gallery", href: ROUTES.COMPANY },
    { name: "Contact", href: ROUTES.CONTACT },
  ];
  return (
    <section className="w-screen ">
      <nav className="w-full z-10 fixed top-0  flex flex-row py-3 items-center transparent">
        <a href={ROUTES.HOME} className="mx-6 my-3 items-center">
          <img alt=" Company Logo" className="h-12 w-auto sm:h-10" src="/vite.svg" />
        </a>

        <ul className=" absolute right-1 py-3 hidden md:flex flex-row">
          {navigation.map((item, i) => (
            <a
              className="mx-1 px-6 text-3xl tex-center text-orange-600 font-nunito font-bold hover:text-black "
              href={`${item.href}`}
              key={i}
            >
              {item.name}
            </a>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default Nav;
``;
