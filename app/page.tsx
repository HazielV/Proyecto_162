import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-black text-white">
      <Sidebar selected="inicio" />
      <div className="min-h-[100vh] flex justify-center items-center flex-col   w-full   ">
        <div className="font-normal text-9xl white  px-8 py-6 border-dashed w-4/5 border-gray-600/40  ">
          <p className="max-w-5xl">Más que </p>
          <p className="max-w-5xl">un Sistema una Experiencia</p>
        </div>
        {/* <div className="w-full px-8 py-16 border-dashed  border-gray-600/40">
          <p className="text-[#888888] font-medium text-xl max-w-6xl text-center ">
            Experimenta un nivel superior de coordinación en tu atención médica.
            No es solo un sistema, es una experiencia de cuidado que se ajusta y
            evoluciona contigo.
          </p>
        </div> */}
        <div className="px-8 pt-28 border-dashed  w-4/5 border-gray-600/40 flex items-start justify-start gap-5">
          <div className="bg-indigo-600 rounded-full p-6 group cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 group-hover:translate-y-1 duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
          </div>

          {/* <button className="rounded-lg bg-[#DADADA] text-black  text-lg font-medium px-5 py-2">
            Iniciar
          </button>
          <button className="rounded-lg bg-stone-950/80 text-[#DADADA] border-[#DADADA]/30 border  text-lg font-medium px-5 py-2">
            Saber mas
          </button> */}
        </div>
      </div>
      <div className="min-h-screen flex justify-center items-center flex-col gap-20 max ">
        <div className="flex relative ">
          <Image
            src="/software2.svg"
            alt=""
            width={1300}
            height={1300}
            className="rounded-3xl z-10"
          />
          <div className="absolute blur-lg bg-gradient-to-tr  from-rose-600 to-purple-600 inset-0 animate-pulse duration-500"></div>
        </div>
      </div>
      <div className="min-h-[100vh] flex justify-center items-center flex-col  w-4/5 py-32 ">
        <div className=" max-w-7xl text-justify text-7xl text-[#DADADA]   border-dashed  border-gray-600/40 ">
          <p>
            <span className="text-xl  uppercase  text-left float-left pr-60 ">
              ¿Qué Hacemos?
            </span>
            Nos dedicamos a proporcionar{" "}
            <span className="  stroke-red-200 ">soluciones innovadoras</span> y
            centradas en el paciente. Desde la gestión de historiales médicos
            hasta la programación de citas
          </p>
        </div>
        <div className="border-t flex justify-between max-w-7xl py-24 w-full items-center mt-48">
          <div className=" self-start">01</div>
          <div className="text-7xl text-[5rem] font-medium max-w-md">
            Atención Personalizada
          </div>
          <div>
            <p className="max-w-[15rem]">
              Experimenta la diferencia de una atención médica diseñada para ti.
              Más que un sistema, es una experiencia personalizada que se adapta
              a tus necesidades únicas
            </p>
          </div>
        </div>
        <div className="border-t flex justify-between max-w-7xl py-24 w-full items-center">
          <div className=" self-start">02</div>
          <div className="text-7xl text-[5rem] font-medium max-w-md">
            Conexión Significativa
          </div>
          <div>
            <p className="max-w-[15rem] ">
              Descubre la conexión significativa entre tu salud y la tecnología.
              Nuestra experiencia redefine la relación entre pacientes y su
              atención médica, creando vínculos más sólidos
            </p>
          </div>
        </div>
        <div className="border-t flex justify-between max-w-7xl py-24 w-full items-center">
          <div className=" self-start">03</div>
          <div className="text-7xl text-[5rem] font-medium max-w-md">
            Simplicidad y Eficacia
          </div>
          <div>
            <p className="max-w-[15rem]">
              No se trata solo de gestionar información, sino de simplificar tu
              camino hacia un cuidado de salud efectivo. Descubre la eficacia de
              una experiencia diseñada para ser simple y poderosa
            </p>
          </div>
        </div>
        <div className="border-t flex justify-between max-w-7xl py-24 w-full items-center border-b">
          <div className=" self-start">04</div>
          <div className="text-7xl text-[5rem] font-medium max-w-md">
            Cuidado Coordinado
          </div>
          <div>
            <p className="max-w-[15rem]">
              Experimenta un nivel superior de coordinación en tu atención
              médica. No es solo un sistema, es una experiencia de cuidado que
              se ajusta y evoluciona contigo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
