import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-10 bg-white">
      <Sidebar
        className="bg-white/70"
        selected="orientado_objetos"
      />
      <div className="min-h-[100vh] flex justify-center items-center flex-col  gap-12 w-full  py-14 ">
        <div className="font-normal text-7xl white  px-8 py-6 border-dashed w-4/5 border-gray-600/40  ">
          <p className="text-center">
            Estructura Orientada a Objetos
          </p>
        </div>
        <p className="text-2xl max-w-6xl text-center">
          El Sistema de Gestión de Pacientes es
          una aplicación orientada a objetos
          diseñada para optimizar la gestión de la
          información médica y proporcionar una
          experiencia integral para pacientes y
          profesionales de la salud. La estructura
          del sistema se basa en los principios de
          la programación orientada a objetos,
          utilizando clases y objetos para modelar
          entidades y procesos clave.
        </p>
        <div className=" flex justify-center items-center flex-col  gap-12 w-full  py-14 ">
          <div className="flex  w-3/5 pt-12 text-3xl gap-10 border-t">
            <div className="text-4xl">01</div>
            <div className="">
              <span className="font-medium">
                Paciente
              </span>
              <p className="text-2xl">
                Representa la entidad paciente,
                con atributos como nombre, fecha
                de nacimiento, historial médico y
                detalles de contacto.
              </p>
            </div>
          </div>

          <div className="flex  w-3/5 pt-12 text-3xl gap-10 border-t">
            <div className="text-4xl">02</div>
            <div className="">
              <span className="font-medium">
                Cita
              </span>
              <p className="text-2xl">
                Modela la entidad de citas
                médicas, con propiedades como
                fecha, hora, médico asignado y
                estado de la cita.
              </p>
            </div>
          </div>
          <div className="flex  w-3/5 pt-12 text-3xl gap-10 border-t">
            <div className="text-4xl">03</div>
            <div className="">
              <span className="font-medium">
                HistorialMedico
              </span>
              <p className="text-2xl">
                Almacena la información detallada
                sobre el historial médico de cada
                paciente, incluyendo diagnósticos,
                tratamientos y resultados de
                pruebas.
              </p>
            </div>
          </div>
          <div className="flex  w-3/5 pt-12 text-3xl gap-10 border-t">
            <div className="text-4xl">04</div>
            <div className="">
              <span className="font-medium">
                ProfesionalSalud
              </span>
              <p className="text-2xl">
                Define a los profesionales de la
                salud, con detalles como nombre,
                especialidad y horario de
                consulta.
              </p>
            </div>
          </div>
          <div className="flex  w-3/5 pt-12 text-3xl gap-10 border-t">
            <div className="text-4xl">05</div>
            <div className="">
              <span className="font-medium">
                Gestión de Citas
              </span>
              <p className="text-2xl">
                Creación, modificación y
                cancelación de citas médicas.
                Asignación eficiente de
                profesionales de la salud a citas
                programadas.
              </p>
            </div>
          </div>
          <div className="flex  w-3/5 pt-12 text-3xl gap-10 border-t">
            <div className="text-4xl">06</div>
            <div className="">
              <span className="font-medium">
                Historial Médico Centralizado
              </span>
              <p className="text-2xl">
                Acceso rápido y seguro a los
                historiales médicos de los
                pacientes. Registro y seguimiento
                de diagnósticos, tratamientos y
                resultados de pruebas.
              </p>
            </div>
          </div>
          <div className="flex  w-3/5 pt-12 text-3xl gap-10 border-t">
            <div className="text-4xl">07</div>
            <div className="">
              <span className="font-medium">
                Interfaz Intuitiva para Usuarios
              </span>
              <p className="text-2xl">
                Diseño amigable para pacientes y
                profesionales de la salud.
                Funcionalidades específicas
                adaptadas a las necesidades de
                cada tipo de usuario.
              </p>
            </div>
          </div>
          <Image
            src="/uml1.jpg"
            alt=""
            width={1600}
            height={1600}
            className="rounded-3xl z-10"
          />
        </div>
      </div>
    </div>
  );
}
