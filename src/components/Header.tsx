import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-center h-25">
      <nav className="text-white">
        <ul className="flex gap-8 border-2 border-gray-200 p-3.5 rounded-full backdrop-blur-md">
          <li>
            <Link href="/" className="">
              Início
            </Link>
          </li>
          <li>
            <Link href="/sobre" className="">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/projetos" className="">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="/contato" className="">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
