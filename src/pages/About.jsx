import iconTech from "/iconTech.png";
import iconTech2 from "/iconTech2.png";
import iconTech3 from "/iconTech3.png";

const About = () => {
  return (
    <>
      <section
        id="second_section"
        className="w-full h-auto font-title overflow-hidden relative flex flex-col justify-between pb-12 2xl:min-h-screen xl:pb-16 2xl:pb-24"
      >
        <div className=" z-50 flex gap-2 flex-col justify-center items-center py-12 xl:gap-4 ">
          <div
            id="box-glass2"
            className="border-[2px] border-stone-400 flex w-[91%] max-w-[700px] h-[180px] z-50 rounded-2xl md:h-[200px] xl:max-w-[900px] xl:h-[230px]  md:justify-between 2xl:max-w-[950px] shadow-lg shadow-zinc-600 bg-gradient-to-tl from-teal-800 via-zinc-800 to-zinc-800"
          >
            <article className="font-text3 text-balance flex flex-col pl-3 pt-2 relative text-zinc-400 xl:pt-4 xl:pl-6">
              <h6 className="text-lg font-medium md:text-xl text-primary xl:text-2xl">
                Soluciones rápidas y eficientes
              </h6>
              <p className="text-sm mt-1 md:text-base max-w-[300px]  xl:mt-3 xl:text-lg xl:max-w-[400px]">
                Tecnología de punta para identificar y resolver cualquier
                problema
              </p>
              <button className="mt-8 flex justify-start items-center gap-1 text-base text-zinc-200 xl:text-xl ">
                Ver más
                <i className="bx bx-chevron-right text-2xl text-primary xl:text-4xl"></i>
              </button>
            </article>
            <figure className="absolute right-0 -bottom-2 z-50 w-[130px] md:w-[170px] md:relative   md:self-end md:mt-4 xl:w-[230px] xl:right-6 ">
              <img className="w-full" src={iconTech} alt="" />
            </figure>
          </div>

          <section className="flex w-full justify-center gap-2 z-50 xl:gap-3">
            <div
              id="box-glass2"
              className="border-[2px] border-stone-400 w-[45%] h-[200px] rounded-2xl max-w-[348px] xl:max-w-[450px] xl:h-[220px] 2xl:max-w-[470px] shadow-lg shadow-zinc-600 bg-gradient-to-tl from-teal-800 via-zinc-800 to-zinc-800"
            >
              <article className="font-text3 text-balance flex flex-col pl-3 pt-2 xl:pt-4 xl:pl-4">
                <h6 className="text-lg font-medium md:text-xl text-primary  xl:text-2xl">
                  Soporte 24/7
                </h6>
                <p className="text-sm mt-1 text-zinc-400 md:text-base pr-3 xl:text-lg xl:max-w-[240px] xl:mt-3">
                  Equipo listo para asistirte cuando lo necesites.
                </p>
              </article>
              <figure className="w-full flex justify-end md:mt-0 xl:-mt-10 ">
                <img
                  className="w-[90px] mr-1 md:mr-8 xl:w-[130px]  xl:mr-3"
                  src={iconTech3}
                  alt=""
                />
              </figure>
            </div>

            <div
              id="box-glass2"
              className="border-[2px] border-stone-400 w-[45%] h-[200px]  rounded-2xl max-w-[348px] xl:max-w-[450px] xl:h-[220px] 2xl:max-w-[470px] shadow-lg shadow-zinc-600 bg-gradient-to-tl from-teal-800 via-zinc-800 to-zinc-800"
            >
              <article className="font-text3 text-balance flex flex-col pl-3 pt-2 xl:pt-4 xl:pl-4">
                <h6 className="text-lg font-medium md:text-xl text-primary xl:text-2xl">
                  Garantía
                </h6>
                <p className="text-sm mt-1 text-zinc-400  md:text-base xl:mt-3 xl:text-lg">
                  Nos especializamos en una amplia gama de reparaciones
                </p>
              </article>
              <figure className="w-full  flex justify-end md:mt-0 xl:-mt-10">
                <img
                  className="w-[90px] mr-1md:mr-8 xl:w-[130px] xl:mr-3 "
                  src={iconTech2}
                  alt=""
                />
              </figure>
            </div>
          </section>
        </div>

        {/* El último artículo toma el espacio restante */}
        <article className="w-[95%] py-6 rounded-3xl self-center z-50 text-balance flex flex-col justify-start items-center relative flex-grow bg-gradient-to-br from-teal-800 via-zinc-800 to-zinc-800 shadow-xl shadow-zinc-500 max-w-[900px] lg:py-12 xl:py-16 xl:px-12 2xl:py-20 xl:max-w-[1100px] 2xl:max-w-[1350px] border-zinc-400 border-t-[2px] border-b-[2px]">
          <div className=" flex flex-col items-center  ">
            <h5 className="font-title2 text-4xl font-medium z-50  text-center leading lg:text-5xl lg:text-nowrap xl:text-6xl 2xl:text-7xl text-white ">
              ¿Por qué elegir Infinix Service?
            </h5>
            <div className="w-[90%] h-[2px] bg-primary mt-3 self-center lg:mt-6 lg:w-[95%] 2xl:w-[80%]"></div>
            <p className="font-title px-4 text-balance text-sm font-semibold text-center max-w-[450px] mt-4 lg:text-base lg:mt-6 lg:max-w-[850px] xl:text-lg 2xl:text-xl 2xl:max-w-[1200px] 2xl:mt-8 text-zinc-300   xl:text-pretty ">
              Con un servicio técnico especializado y confiable, garantizamos
              reparaciones precisas y duraderas. Desde simples ajustes hasta las
              reparaciones más complejas, nos aseguramos de brindarte una
              experiencia excepcional en todo momento. La combinación de
              rapidez, calidad y tecnología de vanguardia es lo que nos
              distingue en el sector, asegurando que cada cliente reciba un
              servicio hecho a medida.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default About;
{
  /*   nuestro equipo está listo para ofrecerte un servicio de calidad y confianza. 
          
      Nuestra misión es mantener tu dispositivo Infinix funcionando como nuevo, utilizando solo piezas originales y garantizando cada reparación. 
     
      En <strong>Infinix Service</strong>, entendemos que los dispositivos móviles son una parte esencial de tu vida diaria. 
      Ya sea para el trabajo, el entretenimiento o la comunicación, tu smartphone Infinix es mucho más que un dispositivo; es una herramienta indispensable. 
      Por eso, nuestro servicio técnico está diseñado para ofrecer soluciones rápidas y eficientes, con el más alto estándar de calidad.
      Nos especializamos en una amplia gama de reparaciones: desde cambios de pantalla hasta soluciones más complejas como la reparación de placas y diagnósticos avanzados. 
      Nuestro equipo técnico trabaja con tecnología de punta para identificar y resolver cualquier problema, asegurando que cada reparación mantenga la integridad de tu dispositivo.
      Utilizamos exclusivamente repuestos originales de Infinix para garantizar una durabilidad óptima y la mejor experiencia posible para nuestros clientes.
     
       */
}
