import Link from "next/link";

export default function Header() {
    return (
        <header className="flex items-center justify-center h-15">
            <ul className="flex gap-8 text-white bg-black p-3 rounded-lg">
                <li>
                    <Link href="/" className="">Início</Link>
                </li>
                <li>
                    <Link href="/sobre" className="">Sobre</Link>
                </li>
                <li>
                    <Link href="/projetos" className="">Projetos</Link>
                </li>
                <li>
                    <Link href="/contato" className="">Contato</Link>
                </li>
            </ul>
        </header>
    )
}