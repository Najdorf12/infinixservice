import iconTech from "/iconTech.png";
import iconTech2 from "/iconTech2.png";
import iconTech3 from "/iconTech3.png";

const About = () => {
  return (
    <>
      <section
        id="second_section"
        className="w-full h-auto font-title overflow-hidden relative flex flex-col justify-between pb-14 pt-4 2xl:min-h-screen xl:pt-14 xl:pb-28  2xl:pb-32  bg-zinc-800"
      >
        <div className=" z-50 flex gap-2 flex-col justify-center items-center py-6 xl:gap-4 ">
          <div
            id="box-glass2"
            className="border-[2px] border-pastel flex w-[91%] max-w-[700px] h-[200px] z-50 rounded-2xl md:h-[220px] xl:max-w-[900px] xl:h-[250px]  md:justify-between 2xl:max-w-[950px] shadow-lg shadow-zinc-600 bg-gradient-to-tl from-teal-800 via-zinc-800 to-zinc-800"
          >
            <article className="font-text3 text-balance flex flex-col pl-3 pt-2 relative text-zinc-400 lg:pt-4 lg:pl-6">
              <h6 className="text-lg font-medium md:text-xl text-primary xl:text-2xl">
                Soluciones rápidas y eficientes
              </h6>
              <p className="text-sm mt-1 md:text-base max-w-[300px]  xl:mt-3 xl:text-lg xl:max-w-[400px]">
                Resolvemos problemas en el día o en un plazo de 24hs dependiendo
                la falla del equipo y su complejidad.
              </p>
              <button className="mt-8 flex justify-start items-center gap-1 text-base text-zinc-200 xl:text-xl ">
                Ver más
                <i className="bx bx-chevron-right text-2xl text-primary xl:text-4xl"></i>
              </button>
            </article>
            <figure className="absolute right-0 -bottom-2 z-50 w-[130px] md:w-[170px] md:relative   md:self-end md:mt-4 lg:w-[210px] xl:w-[230px] lg:right-6 ">
              <img className="w-full" src={iconTech} alt="" />
            </figure>
          </div>

          <section className="flex w-full justify-center gap-2 z-50 xl:gap-3">
            <div
              id="box-glass2"
              className="border-[2px] border-pastel w-[45%] h-[220px] rounded-2xl max-w-[348px] xl:max-w-[450px] xl:h-[240px] 2xl:max-w-[470px] shadow-lg shadow-zinc-600 bg-gradient-to-tl from-teal-800 via-zinc-800 to-zinc-800"
            >
              <article className="font-text3 text-balance flex flex-col pl-3 pt-2 xl:pt-4 xl:pl-4">
                <h6 className="text-lg font-medium md:text-xl text-primary  xl:text-2xl">
                  Soporte 24/7
                </h6>
                <p className="text-sm mt-1 text-zinc-400 md:text-base pr-3 xl:text-lg xl:max-w-[260px] xl:mt-3">
                  Te responderemos a la brevedad para aclarar cualquier duda que
                  tengas
                </p>
              </article>
              <figure className="w-full flex justify-end md:mt-0 lg:mt-3 xl:-mt-14 ">
                <img
                  className="w-[90px] mr-1 md:mr-8 xl:w-[140px]  xl:mr-3"
                  src={iconTech3}
                  alt=""
                />
              </figure>
            </div>

            <div
              id="box-glass2"
              className="border-[2px] border-pastel w-[45%] h-[220px]  rounded-2xl max-w-[348px] xl:max-w-[450px] xl:h-[240px] 2xl:max-w-[470px] shadow-lg shadow-zinc-600 bg-gradient-to-tl from-teal-800 via-zinc-800 to-zinc-800"
            >
              <article className="font-text3 text-balance flex flex-col pl-3 pt-2 xl:pt-4 xl:pl-4">
                <h6 className="text-lg font-medium md:text-xl text-primary xl:text-2xl">
                  Garantía
                </h6>
                <p className="text-sm mt-1 text-zinc-400  md:text-base xl:mt-3 xl:text-lg">
                  Todas nuestras reparación cuenta con garantía escrita
                </p>
              </article>
              <figure className="w-full mt-4 flex justify-end md:mt-0 lg:mt-3 xl:-mt-8">
                <img
                  className="w-[95px] mr-2 md:mr-8 xl:w-[145px] xl:mr-4 "
                  src={iconTech2}
                  alt=""
                />
              </figure>
            </div>
          </section>
        </div>

        {/* El último artículo toma el espacio restante */}
        <article className="w-[95%] mt-3 py-6 rounded-3xl self-center z-50 text-balance flex flex-col justify-start items-center relative flex-grow bg-gradient-to-br from-teal-800 via-zinc-800 to-zinc-800 shadow-xl shadow-zinc-500 max-w-[500px] lg:max-w-[90%] lg:py-12 xl:py-14 xl:mt-6    border-pastel border-[2px] ">
          <div className=" flex flex-col items-center  ">
            <h5 className="font-title2 text-4xl font-medium z-50  text-center leading  lg:text-nowrap lg:text-5xl xl:text-6xl 2xl:text-7xl text-white ">
              ¿Por qué elegir Infinix Service?
            </h5>
            <div className="w-[90%] h-[2px] bg-primary mt-3 self-center lg:mt-6 lg:w-[95%] 2xl:w-[90%]"></div>
            <p className="font-title px-2 text-balance text-sm font-normal text-center max-w-[450px] mt-4 lg:text-base lg:mt-6 lg:max-w-[950px] xl:max-w-[1050px] xl:text-lg 2xl:text-xl 2xl:max-w-[1200px] 2xl:mt-8 text-zinc-400   xl:text-pretty  ">
              Somos un servicio técnico especializado en Infinix, garantizamos
              reparaciones precisas y duraderas. Contamos con laboratorio
              propio. Desde simples ajustes hasta las reparaciones más
              complejas, nos aseguramos de brindarte una experiencia excepcional
              en todo momento. La combinación de rapidez, calidad y tecnología
              de vanguardia es lo que nos distingue en el sector, asegurando que
              cada cliente reciba un servicio hecho a medida. Al especializarnos
              únicamente en Infinix sabemos todo lo que hacemos y conocemos el
              procedimiento en cada equipo.
            </p>
          </div>
        </article>
      </section>
    </>
  );
};

export default About;
{
  /*  
  [12:01 p.m., 23/10/2024] Victor Farias: SOLUCIONES RAPIDAS Y EFICIENTES
Resolvemos problemas en el día o en un plazo de 24hs dependiendo la falla del equipo y su complejidad.
SOPORTE 24/7
Podes comunicarte con nosotros via whatsapp o mail te responderemos a la brevedad tratando de sacarte cualquier duda que tengas.
GARANTIAS
Todas nuestras reparación cuenta con garantía escrita 
PORQUE ELEGIR INFINIX SERVICE
Somos un servicio técnico especializado en Infinix, garantizamos reparaciones precisas y duraderas. Contamos con laboratorio propio. Desde simples ajustes hasta las reparaciones más complejas, nos aseguramos de brindarte una experiencia excepcional en todo momento. La combinación de rapidez, calidad y tecnología de vanguardia es lo que nos distingue en el sector, asegurando que cada cliente reciba un servicio hecho a medida.
Al especializarnos únicamente en Infinix sabemos todo lo que hacemos y conocemos el procedimiento en cada equipo.
REEMPLAZO DE PANTALLA TACTIL:
Nos dedicamos al cambio de modulo completo del equipo o en su defecto cambio de vidrio si es posible, trabajamos con las mejores pegamentos y maquinas de secado
SUSTITUCION DE BATERIA:
Realizamos cambio de baterías con su debida prueba de funcionamiento y rendimiento en el equipo
REPARACION DE CAMARA
Colocamos cámaras originales que son compatibles con tu modelo Infinix, tanto la principal como la selfie, también cambiamos vidrios de cámaras externos
SOLUCION DE PROBLEMAS DE SISTEMA OPERATIVO
Realizamos reinstalación de software, actualizaciones, trabajos de fallas en errores de software
REPARACION DE AUDIO Y ALTAVOCES
Ante inconveniente de sonido contamos con cambio auriculares y buzzer altavoz
REPARACION DE EQUIPOS MOJADOS
Trabajamos con equipos mojados, realizamos baños químicos y tenemos todas las herramientas necesarias para poder revivir cualquier dispositivo que haya tenido contacto con el agua, no damos ningún celular por perdido.
SOLUCION DE CORTOCIRCUITOS EN PLACA
Al trabajar con microscopios de alta precisión y micro soldaduras, solucionamos la mayoría de los cortos en placa que se pueden producir en tu celular, se por uso, golpes o fallas de fabricas del equipo

ACTUALIZACION DE SISTEMA ANDROID
Realizamos todas las actualizaciones de software oficiales que se encuentren disponibles para tu celular.
[12:01 p.m., 23/10/2024] Victor Farias: buen dia agus
[12:01 p.m., 23/10/2024] Victor Farias: claudio me paso eso en los textos
[12:01 p.m., 23/10/2024] Victor Farias: agregar direccion Av Rivadavia 4975 local 53  -  Av Acoyte 87 local 53 - Caballito , poner mapa como para rellenar
[12:06 p.m., 23/10/2024] Victor Farias: y me pregunta si en la pagina principal se puede poner gif para que vayan rotando las opiniones le cobramos por eso
[12:06 p.m., 23/10/2024] Victor Farias: o no
[12:07 p.m., 23/10/2024] Victor Farias: vos me diras
[12:07 p.m., 23/10/2024] Victor Farias: y me pregunta si al lado del loguito de WhatsApp gris se puede poner algo como en que puedo ayudarte y el logo ponerlo en verde
  
  
  
  
  nuestro equipo está listo para ofrecerte un servicio de calidad y confianza. 
          
      Nuestra misión es mantener tu dispositivo Infinix funcionando como nuevo, utilizando solo piezas originales y garantizando cada reparación. 
     
      En <strong>Infinix Service</strong>, entendemos que los dispositivos móviles son una parte esencial de tu vida diaria. 
      Ya sea para el trabajo, el entretenimiento o la comunicación, tu smartphone Infinix es mucho más que un dispositivo; es una herramienta indispensable. 
      Por eso, nuestro servicio técnico está diseñado para ofrecer soluciones rápidas y eficientes, con el más alto estándar de calidad.
      Nos especializamos en una amplia gama de reparaciones: desde cambios de pantalla hasta soluciones más complejas como la reparación de placas y diagnósticos avanzados. 
      Nuestro equipo técnico trabaja con tecnología de punta para identificar y resolver cualquier problema, asegurando que cada reparación mantenga la integridad de tu dispositivo.
      Utilizamos exclusivamente repuestos originales de Infinix para garantizar una durabilidad óptima y la mejor experiencia posible para nuestros clientes.
     

       */
}
