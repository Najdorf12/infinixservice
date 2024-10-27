import logo from "/InfinixLogo.png";
import img2 from "/bg25.jpg";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="z-50 w-full h-screen relative flex flex-col items-center "
      >
        <nav className="bg-gradient-to-tr mx-auto self-center from-primary via-zinc-800 to-zinc-800 w-full absolute top-0 shadow-md shadow-white flex justify-evenly py-2 font-title2 text-base text-white rounded-b-full md:w-[80%] xl:text-lg 2xl:text-xl z-50 2xl:py-3">
          <button className="font-title2">Infinix</button>
          <a href="#third-section">
            <button className="flex items-center justify-center rounded-full cursor-pointer hover:scale-105 hover:text-primary duration-400">
              Servicio
            </button>
          </a>
          <a href="#contact-section">
            <button className="flex items-center justify-center rounded-full hover:scale-105 hover:text-primary duration-400 ">
              Contacto
            </button>
          </a>
        </nav>

        <section className="pb-0 md:pb-3  lg:h-full  lg:flex z-50 lg:self-start lg:w-[60%] xl:w-1/2">
          <picture className="w-full max-w-[500px]  mt-20 flex gap-4 flex-col items-center justify-center lg:mt-0 xl:max-w-[750px] 2xl:max-w-[1000px]">
            <img src={logo} alt="" className="w-[95%] lg:w-[80%] z-50 " />
            <p className="lg:w-[80%] text-center text-balance font-title font-semibold leading-4  text-base text-stone-500  z-50 xl:text-xl xl:leading-5 2xl:text-2xl 2xl:leading-6">
              Servicio técnico especializado <br />
              en dispositivos Infinix
            </p>
          </picture>
          <figure className=" absolute z-0 top-2 left-3 lg:bottom-4 lg:h-[15%] lg:w-[6%]">
            <div className="pattern-gray"></div>
          </figure>
          <figure className=" absolute bottom-0 left-o rounded-tr-2xl lg:bottom-0 pt-3 pl-3 pr-3 pb-1 lg:pb-3 lg:w-[30%] 2xl:[25%] bg-zinc-800 z-50">
            <div className="flex justify-center items-center w-full h-full gap-3 2xl:gap-4 ">
              <p className="text-white font-title text-lg xl:text-xl 2xl:text-2xl">
                Visita nuestra Tienda
              </p>
              <button className="button">
                <a href="https://www.grupolacomunidad.com.ar/" target="_blank">
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
          <figure className=" absolute z-50 bottom-3 right-3  lg:h-[15%] lg:w-[6%]">
            <div className="pattern-primary"></div>
          </figure>
        </section>

        <div
          id="home2"
          className="w-full h-full  absolute inset-0 z-10 flex items-center justify-center "
        >
          <picture className="w-full h-full flex justify-center items-center">
            <img
              src={img2}
              alt=""
              className="w-full h-full grayscale-[.5] absolute object-cover object-[-600px_center] sm:object-center"
            />
          </picture>
        </div>
      </section>
    </>
  );
};

export default Home;
