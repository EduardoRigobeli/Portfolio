import React from "react";

export default function Header() {
  return (
    <>
      <header className="flex justify-center items-center h-16 w-full">
        <ul className="flex bg-black text-white rounded-2xl w-[250px] justify-center items-center gap-4 text-[1.3rem] font-semibold">
          <li className="cursor-pointer">Inicio</li>
          <li className="cursor-pointer">Sobre</li>
          <li className="cursor-pointer">Contato</li>
        </ul>
      </header>
    </>
  );
}
