import { Fira_Code } from "next/font/google"

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"]
});

export default function Home() {
  return (
    <div className="pl-105 pt-20">
      <h1 className={`${firaCode.className} text-white font-medium text-8xl cursor-default whitespace-nowrap overflow-hidden w-[9.5ch] border-r-[20px]`}>BEM VINDO</h1>
      <p className="text-white font-light w-[500px] text-[18px]">Conheça mais sobre mim e explore meus projetos pessoais. Vamos criar algo juntos?</p>
    </div>
  );
}