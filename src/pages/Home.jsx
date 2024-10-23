import logo from "/InfinixLogo.png";
import img2 from "/photos/serviciotecnico9.jpg";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="z-50 w-full h-screen relative flex flex-col items-center lg:flex-row lg:justify-center "
      >
        <nav className="bg-gradient-to-tr from-primary via-zinc-800 to-zinc-800 w-full absolute top-0 shadow-md shadow-zinc-200 flex justify-evenly py-2 font-title2 text-base text-white rounded-b-full md:w-[80%] self-center xl:text-lg 2xl:text-xl z-50">
          <button className="font-title2">Infinix</button>
          <a href="#third-section">
            <button className="flex items-center justify-center rounded-full">
              Servicio
            </button>
          </a>
          <a href="#contact-section">
            <button className="flex items-center justify-center rounded-full">
              Contacto
            </button>
          </a>
        </nav>

        <section className="pb-0 md:pb-3  lg:h-full lg:w-1/2 lg:flex  ">
          <picture className="w-full max-w-[500px] mt-20 flex gap-4 flex-col items-center justify-center lg:mt-0 xl:max-w-[750px] 2xl:max-w-[1000px]">
            <img src={logo} alt="" className="w-[95%] lg:w-[80%]" />
            <p className="lg:w-[80%] text-center text-balance font-title font-semibold text-base text-stone-600 leading-5 z-50 xl:text-xl 2xl:text-2xl">
              Servicio técnico especializado <br />
              en dispositivos Infinix
            </p>
          </picture>
          <figure className=" absolute z-0 top-2 left-3 lg:bottom-4 lg:h-[15%] lg:w-[6%]">
            <div className="pattern-gray"></div>
          </figure>
          <figure className=" absolute z-0 bottom-2 left-o rounded-tr-2xl lg:bottom-0 lg:h-[20%] lg:w-[30%] bg-zinc-800">
            <div className="flex justify-center items-center w-full h-full gap-3 2xl:gap-4">
              <p className="text-white font-title text-lg xl:text-xl 2xl:text-2xl">Visita nuestra Tienda</p>
              <button className="button">
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
              </button>
            </div>
          </figure>
          <figure className=" absolute z-50 bottom-3 right-3  lg:h-[15%] lg:w-[6%]">
            <div className="pattern-primary"></div>
          </figure>
        </section>

        <div
          id="home2"
          className="w-full h-full relative flex items-center justify-center -mt-3  lg:w-1/2"
        >
          <picture className="w-full h-full flex justify-center items-center">
            <img
              src={img2}
              alt=""
              className="w-full h-full object-cover grayscale-[.5]"
            />
          </picture>
        </div>
      </section>
    </>
  );
};

export default Home;
{
  /*  <div id="home2" className="w-full h-[60%] self-start flex justify-between items-end text-balance absolute bottom-0 md:bottom-2 lg:max-w-[550px] xl:max-w-[680px] 2xl:max-w-[950px]"> */
}
{
  /* <picture  className=" h-[100%] w-full   bg-red-500 z-20">
            <img className="w-full object-cover" src={img} alt="" />
          </picture> */
}
{
  /*  <div className="border-l-0 shadow-md shadow-zinc-800 text-center text-balance h-[300px] w-[45%] max-w-[350px] bg-gradient-to-tr from-zinc-800 via-zinc-800 to-trasparent p-3 rounded-l-2xl lg:h-[200px]  xl:h-[250px] xl:p-4 xl:pl-6 2xl:h-[300px] 2xl:pt-8">
            <p className="lg:w-[80%] text-white font-bold font-title2 text-2xl  lg:text-xl xl:text-2xl  2xl:text-3xl ">
              Lorem Impsum dolor sit amet
            </p>
            <p className="text-zinc-500 font-bold font-title2 text-base mt-3 ">
              Lorem impsum dolor sit amet
            </p>
            <div className="w-[80%] h-[2.5px] self-center bg-[rgb(146,195,73)] mt-6 relative flex items-center justify-center lg:mt-9 lg:w-[80%] xl:mt-12 2xl:mt-20"> */
}
{
  /*  <i className="bx bx-right-arrow-alt absolute -right-2 text-2xl mt-[.98px] text-[rgb(146,195,73)] xl:text-4xl xl:mt-0"></i> */
}
{
  /* </div>
          </div> */
}
{
  /*   </div> */
}
