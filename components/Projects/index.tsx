import { cormorant, dm, merienda } from '@/app/font/fonts'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <>
      <section id='proyectos'>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div className="flex-grow md:ml-20 md:max-w-lg md:text-left mx-4">
            <h1 className={`text-3xl md:text-[40px] text-left  ${dm.className}`}>
              La Modelo
              <span className={`block text-base md:text-[18px] text-left ${cormorant.className}`}>
                Durante el curso intensivo de fotografía en Madrid, tuve la oportunidad de trabajar con una modelo profesional en una variedad de escenarios. Estas imágenes son el resultado de ese proceso creativo, donde exploré diferentes técnicas de iluminación, composición, y dirección de modelos
              </span>
            </h1>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 md:mr-20 mt-4 md:mt-0">
            <div className="flex flex-col">
              <img
                className="h-full object-cover rounded-lg"
                src="/images/modelo2.jpg"
                alt="modelo2"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <img
                className="w-full object-cover rounded-lg"
                src="/images/modelo.jpg"
                alt="modelo"
              />
              <img
                className="w-full object-cover rounded-lg"
                src="/images/modelo3.jpg"
                alt="modelo3"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex-grow mx-4 text-center md:text-left">
          <h2 className={`text-3xl md:text-[40px] md:ml-20 ${dm.className}`}>Alrededor del Mundo</h2>
          <p className={`text-base md:text-[18px] md:ml-20 mb-4 md:mb-10 ${cormorant.className}`}>Instantáneas rápidas de varias ciudades europeas</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 md:mx-20">
          <div>
            <motion.img 
              className="h-full object-cover rounded-lg"
              src="/images/london1.jpg" 
              alt="london1" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5 }}
            />
          </div>
          <div>
            <motion.img 
              src="/images/madrid1.jpg" 
              alt="madrid1" 
              className="h-full object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5 }}
            />
          </div>
          <div>
            <motion.img 
              src="/images/paris.jpg" 
              alt="paris" 
              className="h-full object-cover rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5 }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="flex-grow mx-4 text-center md:text-left">
            <h2 className={`text-2xl md:text-[30px] ${merienda.className} text-center h2_5`}>Hay una fotografía por todas partes y es trabajo del fotógrafo encontrarla</h2>
            <p className='text-base md:text-[18px] text-center mt-4 md:mt-10 p_5'>Mis fotografías son más que simples imágenes. Viajo para ver y revelar la belleza del mundo y sus maravillas creadas por el hombre</p>
          </div>
          <div className="flex-shrink-0 md:mr-20 mt-4 md:mt-0">
            <motion.img
                className="rounded-lg"
                src="/images/lyn4.jpg"
                alt="lyn4"
                width={450}
                height={450}
                initial={{ opacity: 0 }}
                animate={{ opacity: 3 }}
                transition={{ duration: 5 }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8">
          <div className="md:ml-20 justify-center ml-4 mr-4 ">
            <motion.img
              className="rounded-lg"
              src="/images/lyn6.jpg"
              alt="lyn6"
              width={450}
              height={450}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5 }}
            />
          </div>
          <div className="text-center flex flex-col">
            <h2 className={`text-xl sm:text-2xl md:text-[30px] ${dm.className} mb-4 sm:mb-6`}>
              Experiencia
            </h2>
            <p className="text-sm sm:text-base md:text-[18px] text-center mt-2 sm:mt-4 px-2 sm:px-4">
              Mis fotografías son más que simples imágenes. Viajo para ver y revelar la belleza del mundo y sus maravillas creadas por el hombre.
            </p>
          </div>
          <div className="text-center">
            <h2 className={`text-xl sm:text-2xl md:text-[30px] ${dm.className} mb-4`}>
              Habilidades
            </h2>
            <ul className="list-disc list-inside px-4 sm:px-6">
              <li className="text-sm sm:text-base md:text-[18px]">Fotografía callejera</li>
              <li className="text-sm sm:text-base md:text-[18px]">Fotografía de viajes</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}