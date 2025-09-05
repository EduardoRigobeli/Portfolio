import NavItem, { NavItemProps } from "../NavItem";

export default function Navbar() {
  const items: NavItemProps[] = [
    { url: "/", label: "Inicio" },
    { url: "/sobre", label: "Sobre" },
    { url: "/contato", label: "Contato" },
  ];

  return (
    <header className="flex justify-center items-center h-16 w-full">
      <nav>
        <ul className="flex gap-4 bg-black p-2 text-white rounded-2xl w-[270px] justify-center items-center text-[1.2rem] transition duration-500 ease-in-out hover:bg-white hover:text-black">
          {items.map((item, index) => (
            <NavItem url={item.url} label={item.label} key={index} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
