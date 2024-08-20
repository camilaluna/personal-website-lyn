"use client"
import { motion } from 'framer-motion';
import { cormorant, dancing, dm, grey_qo, merienda } from './font/fonts';

export default function Home() {
  return (
    <div>
      <nav className="md:flex flex justify-center space-x-4">
        <a href="#inicio" className="md:flex font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Inicio</a>
        <a href="#sobre-mi" className="md:flex font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Sobre Mi</a>
        <a href="#proyectos" className="md:flex font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Proyectos</a>
        <a href="#contacto" className="md:flex font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contáctame</a>
      </nav>
      <section id='inicio' className="home">
        <div className="flex items-center justify-between mt-8">
          <div className="flex-grow ml-10">
            <h1 className={`text-left ml-10 ${dm.className}`}>
              <span className="block text-[68px]">Lyn Riquelme</span>
              <span className="block text-[68px]">Velásquez</span>
              <span className={`block text-[18px] ${cormorant.className}`}>Fotógrafa Profesional</span>
            </h1>
          </div>
          <div className="flex-shrink-0 mr-20">
          <motion.img
              src="/images/lyn1.png"
              alt="lyn1"
              width={450}
              height={450}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            />
          </div>
        </div>
      </section>
      <section id='sobre-mi' >
        <div className="flex items-center mt-8">
          <div className="flex-shrink-0 ml-20">
            <motion.img
              src="/images/lyn9.jpg"
              alt="lyn9"
              width={350}
              height={350}
              initial={{ opacity: 0 }}
              animate={{ opacity: 3 }}
              transition={{ duration: 5 }}
            />
          </div>
          <div className="flex-grow mx-4 text-center">
            <h1>
            <span className={`block text-[40px] ${dm.className} text-center h2_2`}>Mi Vida y</span>
            <span className={`block text-[40px] ${dm.className} text-center h2_2`}>Mi Trabajo</span>
            </h1>
            <p className='text-center p_2'>Soy fotógrafa profesional. Si bien he incursionado en todo tipo de fotografía, mi verdadera pasión es capturar escenas y paisajes urbanos</p>
          </div>
          <div className="flex-shrink-0 mr-20">
            <motion.img
              src="/images/lyn3.jpg"
              alt="lyn3"
              width={350}
              height={350}
              initial={{ opacity: 0 }}
              animate={{ opacity: 3 }}
              transition={{ duration: 5 }}
            />
          </div>
        </div>
      </section>
      <section id='proyectos' className="mt-8">
        <div className="flex items-start justify-between">
          <div className="flex-grow ml-20 max-w-lg">
            <h1 className={`text-[40px] text-left mr-20 ${dm.className}`}>
              La Modelo
              <span className={`block text-[18px] text-left ${cormorant.className}`}>
                Durante el curso intensivo de fotografía en Madrid, tuve la oportunidad de trabajar con una modelo profesional en una variedad de escenarios. Estas imágenes son el resultado de ese proceso creativo, donde exploré diferentes técnicas de iluminación, composición, y dirección de modelos.
              </span>
            </h1>
          </div>
          <div className="w-1/2 grid grid-cols-2 gap-4 mr-20">
            <div className="flex flex-col">
              <img
                className="h-full object-cover"
                src="/images/modelo2.jpg"
                alt="modelo2"
              />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <img
                className="w-full object-cover"
                src="/images/modelo.jpg"
                alt="modelo"
              />
              <img
                className="w-full object-cover"
                src="/images/modelo3.jpg"
                alt="modelo3"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex-grow mx-4 text-center">
          <h2 className={`text-[40px] ml-20  text-left ${dm.className}`}>Alrededor del Mundo</h2>
          <p className={`text-[18px] ml-20 mb-10 text-left ${cormorant.className}`}>Instantáneas rápidas de varias ciudades europeas</p>
        </div>
        <div className="grid grid-cols-3 gap-4 ml-20 mr-20">
          <div>
            <motion.img 
              className="h-full object-cover"
              src="/images/london1.jpg" 
              alt="london1" 
              whileHover={{ scale: 1.2 }} 
              whileTap={{ scale: 0.8 }}
            />
          </div>
          <div>
            <motion.img 
              src="/images/madrid1.jpg" 
              alt="madrid1" 
              className="h-full object-cover"
              whileHover={{ scale: 1.2 }} 
              whileTap={{ scale: 0.8 }}
            />
          </div>
          <div>
            <motion.img 
              src="/images/paris.jpg" 
              alt="paris" 
              className="h-full object-cover"
              whileHover={{ scale: 1.2 }} 
              whileTap={{ scale: 0.8 }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center mt-8">
          <div className="flex-grow mx-4 text-center">
            <h2 className={`text-[30px] ${merienda.className} text-center h2_5`}>Hay una fotografía por todas partes y es trabajo del fotógrafo encontrarla</h2>
            <p className='text-[18px] text-center mt-10 p_5'>Mis fotografías son más que simples imágenes. Viajo para ver y revelar la belleza del mundo y sus maravillas creadas por el hombre</p>
          </div>
          <div className="flex-shrink-0 mr-20">
            <motion.img
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
        <div className="grid grid-cols-3 gap-1 mt-8">
          <div className="ml-10">
            <motion.img
              src="/images/lyn6.jpg"
              alt="lyn6"
              width={450}
              height={650}
              initial={{ opacity: 0 }}
              animate={{ opacity: 3 }}
              transition={{ duration: 5 }}
            />
          </div>
          <div className="text-center flex flex-col">
            <h2 className={`text-[30px] ${dm.className} text-center h2_6`}>
              Experiencia
            </h2>
            <p className="text-[18px] text-center mt-10 p_6">
              Mis fotografías son más que simples imágenes. Viajo para ver y revelar la belleza del mundo y sus maravillas creadas por el hombre
            </p>
          </div>
          <div className='div_6'>
            <h2 className={`text-[30px] ${dm.className}`}>
              Habilidades
            </h2>
            <ul>
              <li>Fotografía callejera</li>
              <li>Fotografía de viajes</li>
            </ul>
          </div>
        </div>
      </section>
      <section id='contacto' className='final'>
        <div className="flex items-center mt-8">
          <div className="ml-20">
            <img
              src="/images/lyn11.jpg"
              alt="lyn11"
              width={350}
              height={350}
            />
          </div>
          <div className="text-center flex-grow mx-4">
            <h2 className={`text-[30px] ${dm.className} text-center`}>
              Contáctame
            </h2>
            <p className="text-[18px] text-center mt-10">
              Email: lynriquelmev@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
