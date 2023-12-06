import Link from "next/link";

interface props {
  selected: string;
}
export default function Sidebar({ selected }: props) {
  return (
    <div className="fixed w-full flex items-center justify-center top-0 px-5 py-5 border-b border-[#e5e5e542] backdrop-blur-sm z-30">
      <ul className="flex gap-20 ">
        <Link href={"/"}>
          <li
            className={
              "cursor-pointer  " +
              (selected === "inicio"
                ? "text-blue-500 font-bold"
                : "hover:text-blue-500 font-medium")
            }
          >
            Inicio
          </li>
        </Link>
        <Link href={"/marco_teorico"}>
          <li
            className={
              " cursor-pointer  " +
              (selected === "marco_teorico"
                ? "text-blue-500 font-bold"
                : "hover:text-blue-500 font-medium")
            }
          >
            Marco Teorico
          </li>
        </Link>
        <Link href={"/analisis_estructurado"}>
          <li
            className={
              " cursor-pointer  " +
              (selected === "analisis_estructurado"
                ? "text-blue-500 font-bold"
                : "hover:text-blue-500 font-medium")
            }
          >
            Analisis Estructurado
          </li>
        </Link>
        <Link href={"/orientado_objetos"}>
          <li
            className={
              " cursor-pointer  " +
              (selected === "orientado_objetos"
                ? "text-blue-500 font-bold"
                : "hover:text-blue-500 font-medium")
            }
          >
            Orientado a objetos
          </li>
        </Link>
        <Link href={"/videos"}>
          <li
            className={
              " cursor-pointer  " +
              (selected === "videos"
                ? "text-blue-500 font-bold"
                : "hover:text-blue-500 font-medium")
            }
          >
            Videos
          </li>
        </Link>
      </ul>
    </div>
  );
}
