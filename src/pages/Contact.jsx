import img2 from "/photos/serviciotecnico2.jpg";

const Contact = () => {
  return (
    <>
    {/* <div className="h-24 w-1/2 bg-teal-800 lg:hidden"> </div> */}
      <section
        id="contact-section"
        className="w-full relative bg-gradient-to-br lg:bg-gradient-to-tl from-teal-800 via-zinc-800 to-zinc-800 h-screen flex flex-col lg:flex-row lg:h-screen pb-8 lg:pb-0"
      >
        {/* Contenedor del formulario */}
        <section className="relative z-10 w-full lg:w-1/2 flex flex-col justify-start items-center ">
          <article id="box-glass" className="py-6  px-2 w-full  flex flex-col items-center justify-center text-center lg:text-left shadow-lg shadow-zinc-900 rounded-b-3xl bg-gradient-to-bl from-teal-800 via-zinc-800 to-zinc-800 border-b-[2px] border-zinc-600">
            <h2
              style={{ animation: "appear 2s ease-out" }}
              className="text-6xl font-bold font-title2 text-primary lg:text-6xl xl:text-7xl 2xl:text-8xl"
            >
              CONTACTO
            </h2>
            <p
              style={{ animation: "appear 3s ease-out" }}
              className="text-stone-400 mt-4 text-base font-semibold font-title text-center text-balance xl:max-w-[600px] xl:mt-5 xl:text-lg 2xl:max-w-[700px]"
            >
              Elige Infinix Service para una experiencia donde la tecnología, la eficiencia y la satisfacción del cliente se combinan.
            </p>
            <p className="text-white mt-4  text-base font-medium font-title max-w-[500px] xl:max-w-[600px] xl:text-lg 2xl:max-w-[700px] 2xl:text-xl">
              Ponte en contacto con nosotros o dejanos tu consulta.
            </p>
          </article>

          {/* Formulario */}
          <div
            style={{ animation: "slideInFromLeft 1s ease-out" }}
            className="w-full max-w-md mt-6 lg:mt-8 2xl:mt-12"
          >
            <form method="POST" action="#" className="space-y-8 px-6 lg:px-0 font-medium 2xl:space-y-9">
              <div className="relative">
                <input
                  autoComplete="off"
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-primary font-title text-zinc-100 bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                  required
                  id="email"
                  name="email"
                  type="email"
                />
                <label
                  className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-300  peer-focus:font-medium peer-focus:text-base font-normal"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  autoComplete="off"
                  placeholder="WhatsApp"
                  className="peer h-10 font-title w-full border-b-2 border-primary text-zinc-100 bg-transparent placeholder-transparent focus:outline-none focus:border-white"
                  required
                  id="whatsapp"
                  name="whatsapp"
                />
                <label className="absolute left-0 -top-3.5 text-gray-800 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-zinc-100 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-300 peer-focus:text-base font-normal">
                  WhatsApp
                </label>
              </div>

              <textarea
              id="box-glass4"
                placeholder="Escribe tu consulta aquí ..."
                name="textarea"
                className="border-[2px] border-white text-white rounded-2xl w-full h-[150px] 2xl:h-[170px] placeholder:text-stone-500 p-2 bg-transparent focus:border-primary focus:outline-none"
              ></textarea>

              <button
              id="box-glass4"
                className="w-full border-[2px] border-primary  py-1 px-4 rounded-full shadow-md shadow-zinc-800 text-stone-200 font-semibold transition duration-200 text-lg font-title"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
          <footer className="w-full self-center mt-8 lg:w-auto z-50 lg:mt-6 xl:mt-8 2xl:mt-16">
          <ul className="flex gap-8 justify-center items-center text-primary text-4xl lg:text-5xl  xl:gap-12 ">
            <li className="hover:scale-110 hover:text-white duration-500 cursor-pointer z-50">
              <i className="bx bxl-youtube"></i>
            </li>
            <li className="hover:scale-110 hover:text-white duration-500 cursor-pointer z-50">
              <i className="bx bxl-facebook-circle"></i>
            </li>
            <li className="hover:scale-110 hover:text-white duration-500 cursor-pointer z-50">
              <i className="bx bxl-instagram-alt"></i>
            </li>
            <li className="hover:scale-110 hover:text-white duration-500 cursor-pointer z-50">
              {" "}
              <i className="bx bxl-tiktok"></i>
            </li>
          </ul>
        </footer>
        </section>

        {/* Contenedor de la imagen */}
        <div className="w-full absolute h-full hidden lg:flex lg:w-1/2 lg:relative ">
          <img
            className="w-full h-full object-cover grayscale-[1]"
            src={img2}
            alt=""
          />
        </div>

      </section>
    </>
  );
};

export default Contact;
