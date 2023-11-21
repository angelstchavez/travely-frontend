const PageHero = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 bg-secondary-100">
      <h1 className="text-4xl font-bold mb-4 lg:mb-8">
        Bienvenido a <span className="text-primary">Travely Manager</span>
      </h1>
      <a
        href="#"
        className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-secondary-900 dark:text-white hover:bg-gray-200 dark:hover:bg-black"
        role="alert"
      >
        <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3 bg-primary">
          Nuevo
        </span>{" "}
        <span className="text-sm font-medium">
          Conoce nuestras últimas novedades
        </span>
        <svg
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
      <h1 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Tu mejor opción para el alquiler de vehículos en tus viajes terrestres
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Nos enfocamos en mercados donde la tecnología, la innovación y el
        capital pueden desbloquear un valor a largo plazo y impulsar el
        crecimiento económico. Ofrecemos el mejor sistema de renta de vehículos
        para que tus viajes sean más cómodos y seguros.
      </p>
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-primary">
              73M+
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Viajes realizados
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-primary">
              1B+
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Clientes satisfechos
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold text-primary">
              4M+
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Empresas resaldadas
            </dd>
          </div>
        </dl>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image"
        />
        <img
          className="w-full hidden dark:block"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Descubre cómo simplificar la gestión de tu empresa de alquiler de
            vehículos para viajes.
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            Ofrecemos un servicio excepcional para conectar con clientes,
            optimizar operaciones y descubrir nuevas oportunidades de
            crecimiento. Con funciones intuitivas y herramientas eficientes,
            gestionar tu flota de vehículos nunca fue tan fácil y rentable.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Comienza ahora
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
