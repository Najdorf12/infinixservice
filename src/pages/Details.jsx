import icon1 from "/icons/phone-audio.png";
import icon2 from "/icons/phone-batery.png";
import icon3 from "/icons/phone-batery2.png";
import icon4 from "/icons/phone-camara.png";
import icon5 from "/icons/phone-fix.png";
import icon6 from "/icons/phone-fix2.png";
import icon7 from "/icons/phone-danger.png";
import icon8 from "/icons/phone-screen.png";
import icon9 from "/icons/phone-secure2.png";
import icon10 from "/icons/phone-water.png";
import imgbg from "/photos/serviciotecnico2.jpg";
import imgbg2 from "/photos/phonecamara.jpg";
import imgbg3 from "/photos/phone3.jpg";
import img from "/photos/serviciotecnico2.jpg";

const Details = () => {
  const iconsTech = [
    { icon: icon8, text: "Reemplazo de pantalla táctil" },
    { icon: icon2, text: "Sustitución de batería" },
    { icon: icon4, text: "Reparación de cámaras (principal y frontal)" },
    { icon: icon7, text: "Solución de problemas de sistema operativo" },
    { icon: icon1, text: "Reparación de audio y altavoces" },
    { icon: icon10, text: "Reparación de dispositivos mojados" },
    { icon: icon6, text: "Solución de cortocircuitos en placa" },
    { icon: icon9, text: "Actualización de sistema Android" },
  ];

  return (
    <>
      <section
        id="third-section"
        className="w-full relative  bg-gradient-to-tl from-teal-900 via-zinc-800 to-zinc-800 h-screen text-zinc-600 text-sm flex flex-col justify-center gap-3 items-center lg:flex-row lg:h-auto 2xl:h-screen "
      >
        <div className="z-10 lg:w-1/2 flex flex-col justify-center items-center gap-3 lg:py-12">
          {iconsTech?.map((icon, i) => (
            <div
              key={i}
              className="flex justify-center items-center z-50 relative w-full max-w-[500px] lg:max-w-[600px] 2xl:max-w-[700px] "
            >
              <figure
                id="box-glass"
                className="w-20 h-full flex justify-center items-center p-3 rounded-2xl rounded-r-none max-w-[200px] shadow-md shadow-zinc-900  bg-gradient-to-tl from-teal-800 via-zinc-800 to-transparent border-zinc-500 border-t-[2px] border-b-[2px] "
              >
                <img className="w-full" src={icon?.icon} alt="icon" />
              </figure>
              <ul
                id="box-glass"
                className="font-title text-base text-balance flex flex-col justify-center shadow-md shadow-zinc-900 pl-3 pr-4 py-3 w-[70%] rounded-2xl rounded-l-none text-zinc-100 gap-1 xl:text-lg xl:py-3 h-full lg:h-[84px]  border-zinc-500 border-t-[2px] border-b-[2px] "
              >
                <li className="flex items-start gap-2 h-max lg:max-w-fit xl:gap-2">
                  <i className="text-primary bx bxs-doughnut-chart -mt-[2px] lg:mt-0 text-lg xl:text-lg 2xl:text-xl"></i>
                  {icon?.text}
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Imagen que estará a la derecha en pantallas grandes */}
        <div className="w-full  absolute  h-full lg:w-1/2 lg:relative">
          <img
            className="w-full h-full object-cover grayscale-[.7] lg:static z-20 xl:right-0 shadow-xl"
            src={imgbg3}
            alt=""
          />
        </div>
      </section>

      {/*  <div className="h-24 w-full flex justify-end items-center lg:hidden">
        <div className="h-24 w-1/2 bg-teal-800 "> </div>
      </div> */}

      <section
        id="brand-section"
        className="w-full h-screen relative flex flex-col z-50  text-balance px-4 xl:pl-12 xl:pt-12 2xl:pl-20"
      >
        <figure className="w-[60%] h-20 absolute z-50 bottom-2 left-3 xl:bottom-4 xl:w-[50%]">
          <div className="pattern"></div>
        </figure>
        <figure className="hidden lg:w-[10%] lg:h-20 lg:absolute z-50  lg:flex lg:top-4 lg:right-4 xl:bottom-4 xl:w-[20%]">
          <div className="pattern"></div>
        </figure>
        <img
          className="w-full  absolute inset-0 h-full object-cover  z-20 grayscale-[.7] shadow-sm"
          src={imgbg2}
          alt=""
        />

        <article
          id="box-glass"
          className="flex flex-col items-start py-6 px-3 mt-14 z-50 w-full  border-zinc-100 border-t-[2px] border-b-[2px]   rounded-2xl max-w-[500px] sm:px-4 xl:max-w-[650px] text-balance  2xl:max-w-[800px] xl:px-6 xl:py-8 2xl:py-10"
        >
          <h6 className="text-4xl  text-balance  text-primary font-title2 font-bold md:text-5xl  xl:text-6xl 2xl:text-7xl">
            Cuidamos lo que te conecta
          </h6>
          <div className="w-full h-[2px] bg-zinc-200 mt-3 md:mt-4 2xl:mt-6"></div>
          <p
            className="text-sm mt-4 text-stone-400
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
