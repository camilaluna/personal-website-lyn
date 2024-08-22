import { dm } from "@/app/font/fonts";
import { motion } from "framer-motion";
import { FaFacebook, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function Contact() {
    return (
      <section id='contacto' className='final'>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="md:ml-20 mb-4 md:mb-0 ml-4 mr-4">
            <motion.img
                className="rounded-lg"
                src="/images/lyn11.jpg"
                alt="lyn11"
                width={350}
                height={350}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}
            />
          </div>
          <div className="text-center flex-grow mx-4 mb-20 mt-10">
            <h2 className={`text-2xl md:text-[30px] ${dm.className} text-center`}>
              Contáctame
            </h2>
            <p className="text-base md:text-[18px] text-center mt-4 md:mt-10">
              Email: lynriquelmev@gmail.com
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <a href="https://web.facebook.com/fockyorself" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://x.com/iampoooni" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaXTwitter className="text-2xl text-black hover:text-blue-600" />
              </a>
              <a href="https://www.instagram.com/iampooni/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-2xl text-pink-600 hover:text-pink-800" />
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}
