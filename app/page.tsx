import Image from "next/image";
import { grey_qo } from './font/fonts'

export default function Home() {
  return (
    <div>
      <nav className="md:flex flex justify-center space-x-4">
        <a href="#" className="md:flex font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Inicio</a>
        <a href="#" className="md:flex font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Sobre Mi</a>
        <a href="#" className="md:flex font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Proyectos</a>
        <a href="#" className="md:flex font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contáctame</a>
      </nav>
      <div className="flex items-center justify-between mt-8">
        <div className="flex-grow ml-20"> {/* Agrega un margen izquierdo aquí */}
          <h1 className={`text-[80px] ${grey_qo.className} text-left`}>Lyn Riquelme Velásquez</h1>
        </div>
        <div className="flex-shrink-0 mr-20"> {/* Agrega un margen derecho aquí */}
          <Image
            src="/images/lyn1.png"
            alt="lyn1"
            width={450}
            height={450}
          />
        </div>
      </div>
    </div>
  );
}
