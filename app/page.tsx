"use client"
import { motion } from 'framer-motion';
import { cormorant, dancing, dm, grey_qo, merienda } from './font/fonts';
import NavBar from '@/components/NavBar';
import Sobremi from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Inicio from '@/components/Inicio';


export default function Home() {
  return (
    <>
    <NavBar/>
    <Inicio/>
    <Sobremi/>
    <Projects/>
    <Contact/>
    </>
  )
}
