import { dm } from "@/app/font/fonts";

export default function Contact() {
    return (
      <section id='contacto' className='final'>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="md:ml-20 mb-4 md:mb-0">
            <img
                className="rounded-lg"
                src="/images/lyn11.jpg"
                alt="lyn11"
                width={350}
                height={350}
            />
          </div>
          <div className="text-center flex-grow mx-4">
            <h2 className={`text-2xl md:text-[30px] ${dm.className} text-center`}>
              Contáctame
            </h2>
            <p className="text-base md:text-[18px] text-center mt-4 md:mt-10">
              Email: lynriquelmev@gmail.com
            </p>
          </div>
        </div>
      </section>
    )
  }