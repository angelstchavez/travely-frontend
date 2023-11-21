import React from "react";

function FeatureSection() {
  return (
    <section className="bg-white dark:bg-secondary-100">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            No reinventamos la forma de viajar
          </h2>
          <p className="mb-4">
            Somos estrategas, diseñadores y desarrolladores. Innovadores y
            solucionadores de problemas. Suficientemente pequeños para ofrecer
            un servicio simple y rápido, pero lo suficientemente grandes para
            brindarte la amplitud que necesitas, al ritmo que necesitas. Somos
            tu elección para experiencias de viaje inolvidables en autobuses y
            autos particulares.
          </p>
          <p>
            En Travely Manager, combinamos la eficiencia de un servicio ágil con
            la comodidad de elegir entre una flota de autobuses y autos de
            calidad para que tu viaje terrestre sea único y adaptado a tus
            necesidades.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="oficina contenido 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="oficina contenido 2"
          />
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
