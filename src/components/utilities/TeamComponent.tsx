import React from "react";

const TeamComponent = () => {
  const teamMembers = [
    {
      name: "Juan Pineda",
      role: "CEO and Frontend Engineer",
      image:
        "https://scontent.fbga2-1.fna.fbcdn.net/v/t1.18169-9/23844760_1870117336349781_6039355999295271262_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHjlfoQ1WWN_BJFDh6MidpCI6Ac7s15Ge4joBzuzXkZ7uYFSm4WFeZIAt10OQKWEpc&_nc_ohc=dYAl6f7JY5kAX_kWNd_&_nc_ht=scontent.fbga2-1.fna&oh=00_AfA4inS9nkExXYgkkX1-_CQrM0CTsso7jtv22UWHOXIm4A&oe=65809422",
      message:
        "Juan aporta su experiencia en el desarrollo frontend para crear interfaces de usuario impactantes.",
    },
    {
      name: "Angel Chavez",
      role: "CEO  and Backend Engineer",
      image: "https://avatars.githubusercontent.com/u/111327306?v=4",
      message:
        "Angel es el experto detrás de la lógica del servidor, asegurando un backend robusto y eficiente para la aplicación.",
    },
    {
      name: "Anibal Fuentes",
      role: "CEO and Database Engineer",
      image:
        "https://scontent.fbga2-1.fna.fbcdn.net/v/t39.30808-6/280715094_1113613449184251_7581145826601046570_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEiPgMb96OCxy434VBexAV1fG3nsk3KT8l8beeyTcpPyROO-VZ72R-jw13_k7NWPAE&_nc_ohc=cF7LjV7yXlYAX934aoo&_nc_ht=scontent.fbga2-1.fna&oh=00_AfAl4A4HYxNT-SB1fXT1dyRBePIpJiVaLJRAllL-IAT7sg&oe=655E0580",
      message:
        "Anibal se encarga de diseñar y mantener las bases de datos para garantizar un rendimiento óptimo del sistema.",
    },
  ];

  return (
    <section className="bg-white dark:bg-secondary-100">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-primary">
            Nuestro equipo
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Nuestro equipo altamente especializado garantiza el funcionamiento
            óptimo del sistema Travely Manager, brindando soluciones integrales
            para la gestión eficiente de renta de vehículos, facilitando así
            cada viaje y experiencia de nuestros usuarios.
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-secondary-900 dark:border-gray-700 ${
                index === 2 ? "md:col-span-2" : ""
              }`}
            >
              <a href="#">
                <img
                  className="w-full h-[250px] object-cover rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={member.image}
                  alt={`${member.name} Avatar`}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-primary">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  {member.role}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {member.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
