import imgST from "/st/st21.jpeg"
import imgST2 from "/st/st27.jpg"
import { useForm } from "react-hook-form";
import { Resend } from "resend";  

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
 
  const onSubmit = async (data) => {
    try {
        const response = await fetch('https://infinix-backend.vercel.app/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        if (response.ok) {
          console.log('Correo enviado:', result);
        } else {
          console.error('Error al enviar el correo:', result.error);
        }
      } catch (err) {
        console.error('Error en la solicitud:', err);
      }
};

  return (
    <>
      <section
        id="contact-section"
        className="w-full relative bg-gradient-to-br lg:bg-gradient-to-tl from-zinc-500 via-zinc-800 to-zinc-900 h-screen flex flex-col xl:flex-row xl:h-screen pb-8 lg:pb-0"
      >
        <section  className="relative z-10 w-full xl:w-1/2 flex flex-col justify-start items-center overflow-hidden ">
          <article
            id="box-glass"
            className="py-6 px-2 w-full flex flex-col items-center justify-center text-center xl:text-left rounded-b-2xl bg-gradient-to-l from-transparent via-zinc-700 to-zinc-800 border-b-[2px] border-stone-300 xl:border-r-[2px]"
          >
            <h2
              style={{ animation: "appear 2s ease-out" }}
              className="text-6xl font-bold font-title2 text-primary lg:text-6xl xl:text-7xl 2xl:text-8xl"
            >
              CONTACTO
            </h2>
            <div className="flex items-start justify-center gap-1 font-title text-white mt-4 text-sm lg:items-center xl:gap-2 lg:text-lg xl:font-semibold">
              <i className="bx bxs-map text-xl text-primary -ml-[1px] -mt-[5px] 2xl:text-xl"></i>
              Galería París - Av Rivadavia 4975 local 53 - Caballito
            </div>
            <p
              style={{ animation: "appear 3s ease-out" }}
              className="text-white mt-3 text-base font-semibold font-title text-center text-balance xl:max-w-[600px] xl:text-lg 2xl:max-w-[700px] "
            >
              Elige Infinix Service para una experiencia donde la tecnología, la
              eficiencia y la satisfacción del cliente se combinan.
            </p>
          </article>
         
          <div
            style={{ animation: "slideInFromLeft 1s ease-out" }}
            className="w-full max-w-md mt-8 lg:mt-8 2xl:mt-12 "
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="border border-stone-200 space-y-8 px-4 pt-6 pb-9 rounded-xl font-medium 2xl:space-y-9 lg:pt-8 lg:px-6 bg-gradient-to-l from-transparent via-transparent to-zinc-800"
              id="box-glass"
            >
              <div className="relative">
                <input
                  autoComplete="off"
                  placeholder="john@example.com"
                  className="peer h-10 w-full border-b-2 border-primary font-title text-zinc-100 bg-transparent placeholder-transparent focus:outline-none focus:border-white "
                  required
                  id="email"
                  name="email"
                  type="email"
                  {...register("email")}
                />
                <label
                  className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-300 peer-focus:font-medium peer-focus:text-base font-normal lg:text-zinc-800  lg:peer-placeholder-shown:font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  autoComplete="off"
                  placeholder="WhatsApp"
                  className="peer h-10 w-full border-b-2 border-primary font-title text-zinc-100 bg-transparent placeholder-transparent focus:outline-none focus:border-white "
                  required
                  id="whatsapp"
                  name="whatsapp"
                  {...register("wttp")}
                />
                <label className="absolute left-0 -top-3.5 text-sm transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-stone-300 peer-focus:font-medium peer-focus:text-base font-normal lg:text-zinc-800  lg:peer-placeholder-shown:font-medium">
                  WhatsApp
                </label>
              </div>

              <textarea
                id="box-glass4"
                placeholder="Escribe tu consulta aquí ..."
                name="textarea"
                className="border-[2px] border-white text-white rounded-2xl w-full h-[150px] 2xl:h-[170px] placeholder:text-stone-500 p-2 bg-transparent focus:border-primary focus:outline-none lg:placeholder:text-white"
                {...register("message")}
              ></textarea>

              <button
                id="box-glass4"
                className="w-full border-[2px] border-primary py-1 px-4 rounded-full shadow-md shadow-zinc-800 text-stone-200 font-semibold transition duration-200 text-lg font-title lg:bg-gradient-to-tl "
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
        <div className="w-full absolute h-full lg:flex  ">{/* lg:w-1/2 lg:relative */}
          <img className="w-full h-full object-cover grayscale-[.6]" src={imgST2} alt="" />
        </div>
        <figure className="w-[60%] h-12 absolute z-50 bottom-3 right-3 xl:bottom-6 xl:w-[50%] xl:right-6">
          <div className="pattern-primary"></div>
        </figure>
      </section>
    </>
  );
};

export default Contact;
