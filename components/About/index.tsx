import { cormorant, dm } from '@/app/font/fonts'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Sobremi() {
  return (
    <div id='sobre-mi' className="about flex flex-col md:flex-row items-center justify-between mt-8 px-4 md:px-0">
      <div className="w-full md:w-auto md:flex-shrink-0 md:ml-20 mb-4 md:mb-0">
        <motion.div
          className="relative w-full h-96 md:h-[450px] md:w-[350px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <Image
            src="/images/lyn10.jpg"
            alt="lyn10"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      </div>
      <div className="w-full md:w-auto md:flex-grow md:max-w-lg text-center px-4 md:px-0 mb-4 md:mb-0">
        <h1>
          <span className={`block text-3xl md:text-[40px] ${dm.className} mb-2 md:mb-4`}>Mi Vida y</span>
          <span className={`block text-3xl md:text-[40px] ${dm.className}`}>Mi Trabajo</span>
        </h1>
        <p className={`ml-5 mr-5 text-base md:text-lg mt-4 ${cormorant.className}`}>Soy fotógrafa profesional. Si bien he incursionado en todo tipo de fotografía, mi verdadera pasión es capturar escenas y paisajes urbanos</p>
      </div>
      <div className="w-full md:w-auto md:flex-shrink-0 md:mr-20">
        <motion.div
          className="relative w-full h-96 md:h-[450px] md:w-[350px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
        >
          <Image
            src="/images/lyn3.jpg"
            alt="lyn3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  )
}