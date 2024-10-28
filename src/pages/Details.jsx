import icon1 from "/icons/phone-audio.png";
import icon2 from "/icons/phone-batery.png";
import icon4 from "/icons/phone-camara.png";
import icon6 from "/icons/phone-fix2.png";
import icon7 from "/icons/phone-danger.png";
import icon8 from "/icons/phone-screen.png";
import icon9 from "/icons/phone-secure2.png";
import icon10 from "/icons/phone-water.png";
import imgbg2 from "/bg20.jpg";
import imgbg from "/bg2.webp";
/* import img from "/bg26.jpg"; */
import img from "/bg22.jpg";
import { useState } from "react";

const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const openModal = (title, subtitle) => {
    setCurrentTitle(title);
    setCurrentSubtitle(subtitle);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentTitle("");
    setCurrentSubtitle("");
  };
  const iconsTech = [
    {
      icon: icon8,
      title: "Reemplazo de pantalla táctil",
      subtitle:
        "Cambio de módulo completo del equipo o ,en su defecto, cambio de vidrio si es posible. Trabajamos con los mejores pegamentos y máquinas de secado",
    },
    {
      icon: icon2,
      title: "Sustitución de batería",
      subtitle:
        "Realizamos cambios de baterías con su debida prueba de funcionamiento y rendimiento en el equipo.",
    },
    {
      icon: icon4,
      title: "Reparación de cámaras",
      subtitle:
        "Colocamos cámaras originales que son compatibles con tu modelo Infinix, tanto la principal como la selfie. También cambiamos vidrios de cámaras externos.",
    },
    {
      icon: icon7,
      title: "Solución de problemas de sistema operativo",
      subtitle:
        "Realizamos reinstalación de software, actualizaciones y trabajos de fallas en errores de software.",
    },
    {
      icon: icon1,
      title: "Reparación de audio y altavoces",
      subtitle:
        "Ante cualquier inconveniente de sonido contamos con cambio auriculares y buzzer altavoz.",
    },
    {
      icon: icon10,
      title: "Reparación de dispositivos mojados",
      subtitle:
        "Trabajamos con equipos mojados, realizamos baños químicos y tenemos todas las herramientas necesarias para poder revivir cualquier dispositivo que haya tenido contacto con el agua. No damos ningún celular por perdido.",
    },
    {
      icon: icon6,
      title: "Solución de cortocircuitos en placa",
      subtitle:
        "Al trabajar con microscopios de alta precisión y micro soldaduras, solucionamos la mayoría de los cortos en placa que se pueden producir en tu celular, sea por uso, por golpes o fallas de fabrica del equipo",
    },
    {
      icon: icon9,
      title: "Actualización de sistema Android",
      subtitle:
        "Realizamos todas las actualizaciones de software oficiales que se encuentren disponibles para  tu  celular.",
    },
  ];

  return (
    <>
      <section
        id="third-section"
        className="w-full relative bg-gradient-to-tl from-teal-900 via-zinc-800 to-zinc-800 h-screen text-zinc-600 text-sm flex flex-col justify-center gap-3 items-center lg:items-start 2xl:h-screen "
      >
        <div className="z-50 lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:py-12 xl:gap-4 2xl:gap-6 ">
          {iconsTech.map((icon, i) => (
            <div
              key={i}
              className="flex justify-center items-center z-50 relative w-full max-w-[500px] lg:max-w-[600px] xl:max-w-[560px] 2xl:max-w-[630px]"
            >
              <figure
                id="box-glass4"
                className="w-20 flex justify-center items-center p-3 rounded-2xl rounded-r-none shadow-md shadow-zinc-900 bg-gradient-to-tl from-teal-800 via-zinc-800 to-transparent border-zinc-400 border-t-[2px] border-b-[2px] lg:w-14 xl:w-16 2xl:w-20"
              >
                <img className="w-full" src={icon.icon} alt="icon" />
              </figure>
              <ul
                id="box-glass3"
                className="font-title h-full text-base text-balance flex flex-col justify-start shadow-md shadow-zinc-900 pl-3 pr-4 py-1 w-[70%] rounded-2xl rounded-l-none text-stone-300 font-semibold gap-1 xl:text-lg border-zinc-400 border-t-[2px] border-b-[2px]  2xl:text-xl  relative xl:pr-28 xl:bg-gradient-to-tr from-teal-900 via-zinc-800 to-zinc-900 "
              >
                <li className="relative flex items-start gap-2  lg:h-[32px] xl:gap-2 xl:h-[40px] 2xl:h-[56px] ">
                  <i className="text-primary bx bxs-doughnut-chart -mt-[2px] lg:mt-0 text-lg xl:text-lg 2xl:text-xl"></i>
                  {icon.title}
                </li>
                <button
                  onClick={() => openModal(icon.title, icon.subtitle)}
                  className="ml-2 text-stone-300 blue-200  text-sm font-title font-normal  absolute bottom-[2px] right-[2px]  flex items-center justify-between gap-3 bg-zinc-800 rounded-3xl pl-3 pr-[1px] py-[1px] border-[2px] border-zinc-600 xl:text-base xl:pl-5 xl:gap-4 2xl:text-xl shadow-sm shadow-zinc-900"
                >
                  Ver más
                  <i className="bx bx-right-arrow-alt text-primary text-xl rotate-[-45deg] rounded-full bg-zinc-600 w-6 h-6 flex items-center justify-center xl:text-2xl 2xl:w-7 2xl:h-7 "></i>
                </button>
              </ul>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="absolute h-screen w-full inset-0 flex items-center justify-center z-[100] bg-zinc-900 bg-opacity-50 ">
            <div className="relative bg-gradient-to-tl from-zinc-600 via-zinc-800 to-zinc-900 border-[2px] border-stone-500 shadow-lg shadow-zinc-900 pt-6 pb-14 px-4 rounded-lg w-[90%] max-w-md xl:max-w-[570px] xl:pb-16 xl:px-6">
              <button
                onClick={closeModal}
                className="text-primary h-6 w-6 flex justify-center items-center red-500 float-right font-bold absolute right-3 top-2 bg-zinc-700 p-2 rounded-full border border-zinc-500 shadow-md shadow-zinc-800 xl:h-7 xl:w-7"
              >
                X
              </button>
              <h2 className="text-2xl text-balance font-semibold mb-2  font-title2 text-primary xl:text-4xl ">
                {currentTitle}
              </h2>
              <div className="w-full h-[2px] bg-stone-400 mt-2 xl:mt-3 2xl:mt-4"></div>
              <p className=" text-stone-400 text-balance text-base mt-3 xl:mt-4 font-text3 xl:text-lg">
                {currentSubtitle}
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=5491176159960&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <button className="ml-2 text-primary blue-200 text-sm font-title absolute bottom-2 right-2  flex items-center justify-between gap-3 bg-zinc-800 rounded-3xl pl-3 pr-[1px] py-[1px] border-[2px] border-stone-600 xl:pl-5 xl:gap-4 xl:text-xl shadow-sm shadow-zinc-800">
                  Escríbenos
                  <i className="bx bx-right-arrow-alt text-primary text-xl rotate-[-45deg] rounded-full bg-zinc-600 w-6 h-6 flex items-center justify-center xl:text-2xl xl:w-7 xl:h-7 "></i>
                </button>
              </a>
            </div>
          </div>
        )}

        <div
          id="home2"
          className="w-full h-full absolute inset-0 z-10 flex items-center justify-center"
        >
          <picture className="w-full h-full flex justify-center items-center">
            <img
              src={img}
              alt=""
              className="w-full h-full grayscale-[.5] absolute object-cover object-[-600px_center] sm:object-center"
            />
          </picture>
        </div>

        <div
          id="home2"
          className="w-full h-full  absolute inset-0 z-10 flex items-center justify-center "
        >
          <picture className="w-full h-full flex justify-center items-center">
            <img
              src={img}
              alt=""
              className="w-full h-full grayscale-[.3] absolute object-cover object-[-600px_center] sm:object-center"
            />
          </picture>
        </div>
      </section>

      <section classsName="w-full flex flex-col">
        <div className="w-full flex justify-end bg-zinc-900">
          <div
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 100% 66%, 52% 20%)",
            }}
            className="w-1/2 h-14 bg-primary"
          ></div>
        </div>

        <figure className="w-full  h-[40vh] md:h-[70vh] relative">
          <img src={imgbg} alt="" className="object-cover w-full h-full" />
          <div className="flex justify-center items-center  gap-3 2xl:gap-4 absolute -bottom-14 left-0 rounded-tr-2xl lg:bottom-0 pt-2 pl-3  pr-3 pb-1 lg:pb-3 lg:w-[30%] 2xl:[25%] bg-zinc-900 z-50">
            <p className="text-zinc-300 font-title text-lg xl:text-xl 2xl:text-2xl">
              Visita nuestra Tienda
            </p>
            <button className="button">
              <a
                href="https://www.grupolacomunidad.com.ar/infinix"
                target="_blank"
              >
                <div className="button__circle">
                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon"
                    width="14"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>

                  <svg
                    viewBox="0 0 14 15"
                    fill="none"
                    width="14"
                    xmlns="http://www.w3.org/2000/svg"
                    className="button__icon button__icon--copy"
                  >
                    <path
                      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </a>
            </button>
          </div>
        </figure>

        <div className="w-full flex  bg-zinc-900">
          <div
            style={{
              clipPath: "polygon(0 0, 21% 67%, 100% 100%, 0 98%, 0 59%)",
            }}
            className="w-1/2 h-14 bg-primary xl:h-16"
          ></div>
        </div>
      </section>

      <section
        id="brand-section"
        className="w-full h-screen relative flex flex-col z-50  text-balance px-4 xl:pl-12 xl:pt-12 2xl:pl-20"
      >
        <figure className="w-[60%] h-20 absolute z-50 bottom-3 left-3 xl:bottom-6 xl:w-[50%] xl:left-6">
          <div className="pattern-primary"></div>
        </figure>
        <figure className="hidden lg:w-[10%] lg:h-20 lg:absolute z-50  lg:flex lg:top-6 lg:right-4 xl:bottom-4 xl:w-[20%]">
          <div className="pattern-primary"></div>
        </figure>
        <img
          className="w-full  absolute inset-0 h-full object-cover object-[-650px_center] md:object-center z-20 grayscale-[.7] shadow-sm"
          src={imgbg2}
          alt=""
        />

        <article
          id="box-glass4"
          className="flex flex-col items-start py-6 px-3 mt-14 z-50 w-full  border-zinc-400 border-t-[2px] border-b-[2px]   rounded-2xl max-w-[500px] sm:px-4 xl:max-w-[650px] text-balance  2xl:max-w-[800px] xl:px-6 xl:py-8 2xl:py-10 xl:mt-8 2xl:mt-12 "
        >
          <h6 className="text-4xl  text-balance  text-primary font-title2 font-bold md:text-5xl  xl:text-6xl 2xl:text-7xl">
            Cuidamos lo que te conecta
          </h6>
          <div className="w-full h-[2px] bg-zinc-400 mt-3 md:mt-4 2xl:mt-6"></div>
          <p
            className="text-sm mt-4 text-stone-300
           font-title2 font-medium md:text-base md:mt-5  xl:text-lg xl:mt-6 2xl:text-xl"
          >
            En <strong>Infinix Service</strong>, entendemos que los dispositivos
            móviles son una parte esencial de tu vida diaria. Ya sea para el
            trabajo, el entretenimiento o la comunicación, tu smartphone Infinix
            es mucho más que un dispositivo; es una herramienta indispensable.
            Por eso, te ofrecemos un servicio técnico ágil y eficiente, con la
            tranquilidad de que tu dispositivo está en buenas manos.
          </p>
        </article>
      </section>
    </>
  );
};

export default Details;

/*  bg-gradient-to-tl from-teal-800 via-zinc-800 to-trasparent */
