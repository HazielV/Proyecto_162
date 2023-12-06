import Sidebar from "@/components/Sidebar";

export default function page() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-10 bg-white">
      <Sidebar selected="marco_teorico" />
      <div className="min-h-[100vh] flex justify-center items-center flex-col  gap-12 w-full  py-14 ">
        <div className="font-normal text-6xl white  px-8 py-6  w-4/5  flex  ">
          <div className="">
            <p className="max-w-2xl  ">
              Comprende nuestra Filosofía, Innovación y Compromiso con la
              Atención del Paciente
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 w-4/5 px-8 py-6 gap-24">
          <div className="flex flex-col gap-5 pb-10 pt-6 border-gray-600 border-t-2">
            <div className="text-2xl font-medium">
              Transformación en la Gestión de la Información Médica
            </div>
            <p className="text-lg">
              La salud electrónica representa un cambio transformador en la
              gestión de la información médica, destacando pilares como
              registros médicos electrónicos (EMR), sistemas de información de
              salud y telemedicina. Los EMR, en particular, centralizan y
              digitalizan registros médicos, mejorando la accesibilidad y
              coordinación entre profesionales de la salud.
            </p>
          </div>
          <div className="flex flex-col gap-5 pb-10 pt-6 border-gray-600 border-t-2">
            <div className="text-2xl font-medium">
              Importancia Crucial de la Interoperabilidad
            </div>
            <p className="text-lg">
              La interoperabilidad, esencial en salud electrónica, cobra
              importancia al integrar sistemas de agenda médica. La capacidad de
              intercambio efectivo de información entre sistemas optimiza la
              gestión de citas médicas, mejorando la eficiencia y la experiencia
              del paciente. Facilita la coordinación entre profesionales y
              contribuye a una atención más personalizada.
            </p>
          </div>
          <div className="flex flex-col gap-5 pb-10 pt-6 border-gray-600 border-t-2">
            <div className="text-2xl font-medium">
              Desafíos en Seguridad de la Información:
            </div>
            <p className="text-lg">
              A pesar de sus beneficios, la salud electrónica enfrenta desafíos,
              destacando la seguridad de la información en salud. La
              preservación de la confidencialidad e integridad de los datos del
              paciente requiere medidas de seguridad y estándares robustos. La
              gestión adecuada de la seguridad informática se convierte en un
              requisito indispensable para garantizar la confianza de
              profesionales y pacientes en los sistemas electrónicos.
            </p>
          </div>
          <div className="flex flex-col gap-5 pb-10 pt-6 border-gray-600 border-t-2">
            <div className="text-2xl font-medium">
              Perspectiva Centrada en el Usuario y Consideraciones Éticas
            </div>
            <p className="text-lg">
              En el diseño de sistemas de información, la perspectiva centrada
              en el usuario es crucial para la aceptación y eficacia. La
              usabilidad y la experiencia del usuario son clave. La integración
              de tecnologías como la inteligencia artificial ofrece mejoras,
              pero debe ir de la mano con consideraciones éticas y legales, como
              las establecidas por normativas como la Ley HIPAA en los Estados
              Unidos, para asegurar la privacidad y seguridad de la información
              de salud.
            </p>
          </div>
        </div>
        <div className="min-h-[100vh] flex justify-center items-center flex-col  gap-12 w-full  py-14 ">
          <div className="font-normal text-7xl white  px-8 py-6 border-dashed w-4/5 border-gray-600/40  ">
            <p className="max-w-5xl">Plateamiento del problema </p>
          </div>

          <div className="flex flex-col w-4/6 px-8 py-6 items-center relative">
            <div className="flex items-center gap-10">
              <div className="border flex-col  rounded-full  flex text-4xl h-[26rem] w-[26rem] items-center justify-center text-center border-gray-700">
                <span>Contexto</span>
                <span>especifico</span>
              </div>
              <p className="flex-1 text-xl">
                En el actual escenario de prestación de servicios de salud, la
                gestión integral de la información relacionada con los pacientes
                enfrenta desafíos sustanciales. La falta de un sistema eficiente
                y unificado para registrar ingresos del paciente, gestionar el
                sistema de seguros, agendar citas médicas y acceder al historial
                clínico de manera rápida y segura ha generado obstáculos
                significativos en la entrega efectiva de la atención médica.
              </p>
            </div>
            <div className="flex items-center gap-10 relative -top-12">
              <div className="border flex-col  rounded-full  flex text-4xl h-[26rem] w-[26rem] items-center justify-center text-center border-gray-700">
                <span>Desafíos </span>
                <span>Identificados</span>
              </div>
              <div className="grid grid-cols-2 gap-10 flex-1">
                <p className=" text-xl">
                  <span className="font-medium">Fragmentación de Datos:</span>
                  La información del paciente está dispersa en diversos sistemas
                  y formatos, dificultando la creación de un panorama coherente
                  de su historial médico.
                </p>
                <p className=" text-xl">
                  <span className="font-medium">
                    Proceso Manual en Datos Financieros:
                  </span>{" "}
                  El registro de ingresos y la gestión de seguros se realizan
                  manualmente, lo que puede resultar en errores, demoras y
                  pérdida de eficiencia.
                </p>
                <p className=" text-xl">
                  <span className="font-medium">
                    Agendamiento de Citas Desorganizado:
                  </span>{" "}
                  La falta de un sistema centralizado para agendar citas médicas
                  ha generado confusiones, retrasos y una experiencia menos
                  satisfactoria para los pacientes.
                </p>
                <p className=" text-xl">
                  <span className="font-medium">
                    Acceso Limitado al Historial Clínico:{" "}
                  </span>
                  Obtener información histórica relevante sobre el paciente es
                  un proceso lento e ineficiente, afectando la toma de
                  decisiones médicas informadas.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-10 relative -top-24">
              <div className="border flex-col  rounded-full  flex text-4xl h-[26rem] w-[26rem] items-center justify-center text-center border-gray-700">
                <span> Impacto </span>
                <span>de la Atención</span>
              </div>
              <p className="flex-1 text-xl">
                Estos desafíos impactan directamente en la calidad de la
                atención médica proporcionada. La falta de integración y
                eficiencia en la gestión de datos financieros, seguros, citas
                médicas y registros clínicos afecta la capacidad de los
                profesionales de la salud para ofrecer una atención completa y
                centrada en el paciente.
              </p>
            </div>
            <div className="flex items-center gap-10 relative -top-36">
              <div className="border flex-col  rounded-full  flex text-4xl h-[26rem] w-[26rem] items-center justify-center text-center border-gray-700">
                <span> Necesidad de </span>
                <span>una Solución</span>
              </div>
              <p className="flex-1 text-xl">
                La implementación de un sistema integral que aborde los desafíos
                mencionados es esencial para mejorar la eficiencia operativa, la
                coordinación de la atención y, en última instancia, la calidad
                de los servicios de salud. Se requiere una solución que optimice
                el registro de ingresos, simplifique la gestión de seguros,
                facilite el agendamiento de citas y mejore el acceso al
                historial clínico, proporcionando una experiencia integrada y
                centrada en el paciente.
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-[100vh] flex justify-center items-center flex-col  gap-12 w-full  py-14 ">
          <div className="font-normal text-7xl white  px-8 py-6 border-dashed w-4/5 border-gray-600/40  ">
            <p className="max-w-5xl">ÁRBOL DE PROBLEMAS </p>
          </div>
          <div className="w-4/5 px-8 py-6 text-2xl">
            <p>
              En este caso, el problema principal es la falta de un sistema
              integrado y eficiente para la gestión de la información del
              paciente, incluyendo el registro de ingresos, sistema de seguros,
              agendamiento de citas médicas y acceso al historial clínico, que
              está afectando negativamente la calidad de la atención médica y la
              experiencia general del paciente en el entorno de la atención de
              la salud.
            </p>
          </div>
          <div className="flex  w-3/5 pt-12 text-3xl gap-10 border-t">
            <div className="text-4xl">01</div>
            <div className="">
              <span className="font-medium">Fortalezas</span>
              <p className="text-2xl">
                La experiencia del personal de atención médica en el uso de
                sistemas de salud electrónicos.
              </p>
            </div>
          </div>

          <div className="flex  w-3/5 pt-12 text-3xl gap-10 border-t">
            <div className="text-4xl">02</div>
            <div className="">
              <span className="font-medium">Oportunidades</span>
              <p className="text-2xl">
                La disponibilidad de financiamiento para implementar soluciones
                de interoperabilidad.
              </p>
            </div>
          </div>
          <div className="flex  w-3/5 pt-12 text-3xl gap-10 border-t">
            <div className="text-4xl">03</div>
            <div className="">
              <span className="font-medium">Debilidades</span>
              <p className="text-2xl">
                Falta de capacitación adecuada del personal de atención médica
                en el uso de sistemas de salud electrónicos.
              </p>
            </div>
          </div>
          <div className="flex  w-3/5 pt-12 text-3xl gap-10 border-t">
            <div className="text-4xl">04</div>
            <div className="">
              <span className="font-medium">Amenazas</span>
              <p className="text-2xl">
                Falta de un marco regulatorio claro y coherente para la gestión
                de la información del paciente.
              </p>
            </div>
          </div>
          <div className="flex flex-col px-8 py-6 w-4/5 pt-16 text-3xl gap-10 ">
            <div className="font-medium">Consecuencias del problema</div>
            <div className="grid grid-cols-2 gap-10">
              <div className="text-2xl border rounded-xl p-10">
                La falta de un marco regulatorio claro y coherente para la
                gestión de la información del paciente podría llevar a la falta
                de estandarización en la gestión de la información del paciente,
                lo que podría dificultar la interoperabilidad entre sistemas y
                la transferencia de datos entre proveedores de atención médica
              </div>
              <div className="text-2xl border rounded-xl p-10">
                La falta de incentivos para la adopción de sistemas de salud
                electrónicos por parte de los proveedores de atención médica
                podría llevar a una baja tasa de adopción de sistemas de salud
                electrónicos.
              </div>
              <div className="text-2xl border rounded-xl p-10">
                La inadecuada capacitación para el personal de atención médica
                en el uso de sistemas de salud electrónicos podría llevar a una
                baja eficiencia en el trabajo y una mayor probabilidad de
                errores.
              </div>
              <div className="text-2xl border rounded-xl p-10">
                La falta de recursos financieros para implementar y mantener
                sistemas de salud electrónicos podría llevar a una baja tasa de
                adopción de sistemas de salud electrónicos, lo que podría
                limitar la cantidad de datos disponibles para la gestión de la
                información del paciente.
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[100vh] flex justify-center items-center flex-col  gap-12 w-full  py-14 ">
          <div className="font-normal text-7xl white  px-8 py-6 border-dashed w-4/5 border-gray-600/40  ">
            <p className="max-w-5xl">PLANIFICACIÓN DE ACTIVIDADES </p>
          </div>
          <div className="w-[90%] px-8 py-6 text-2xl flex items-center gap-14">
            <div className="border rounded-full h-[25rem] w-[25rem] flex flex-col items-center justify-center font-medium">
              <p>1. Recolección </p>
              <p>de Información</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <div className="border-2 rounded-full h-[25rem] w-[25rem] relative flex flex-col items-center justify-center font-medium border-yellow-500 after:h-[30rem] after:w-[30rem] after:border after:border-yellow-500/60 after:rounded-full after:absolute  ">
              <p>2. Entrevistas </p>
              <p>y Encuestas</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
            <div className="border rounded-full h-[25rem] w-[25rem] flex flex-col items-center justify-center font-medium bg-black text-white">
              <p>3. Análisis de </p>
              <p>Procesos Actuales</p>
            </div>
          </div>
          <div className="w-[90%] px-8 py-6 text-2xl flex items-center gap-14">
            <div className="border-2 rounded-full h-[25rem] w-[25rem] relative flex flex-col items-center justify-center font-medium border-blue-500 after:h-[30rem] after:w-[30rem] after:border after:border-blue-500/60 after:rounded-full after:absolute  ">
              <p>6. Evaluación </p>
              <p>y seguimiento</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
            <div className="border rounded-full h-[25rem] w-[25rem] flex flex-col items-center justify-center font-medium bg-black text-white">
              <p>5. Implementación </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>

            <div className="border rounded-full h-[25rem] w-[25rem] flex flex-col items-center justify-center font-medium ">
              <p>4. Identificación de </p>
              <p>Requerimientos del Sistema</p>
            </div>
          </div>
          <div className="w-[90%] px-8 py-6 text-2xl flex items-center gap-14 relative after:w-1 after:h-52 after:bottom-full after:-mb-10 after:absolute after:bg-blue-600 after:left-[14.5rem] ">
            <div className="border rounded-full h-[25rem] w-[25rem] flex flex-col items-center justify-center font-medium bg-blue-600 text-white">
              <p>6. Mantenimiento </p>
              <p>y actualización</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*
 */
