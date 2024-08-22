import { cormorant, dm } from '@/app/font/fonts'
import { motion } from 'framer-motion'

export default function Inicio() {
  return (
    <section id='inicio' className="home">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-8">
        <div className="flex-grow md:ml-10 px-4 md:px-0 mb-8 md:mb-0">
          <h1 className={`text-center md:text-left md:ml-10 ${dm.className}`}>
            <span className="block text-5xl md:text-[68px]">Lyn Riquelme</span>
            <span className="block text-5xl md:text-[68px]">Velásquez</span>
            <span className={`block text-base md:text-[18px] ${cormorant.className}`}>Fotógrafa Profesional</span>
          </h1>
        </div>
        <div className="flex-shrink-0 md:mr-20 flex justify-center md:justify-end ml-4 mr-4">
          <motion.img
          className='rounded-lg'
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
  )
}