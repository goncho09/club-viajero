import Header from './components/Header';

import Destacados from './components/Destacados';
import Servicios from './components/Servicios';
import Contact from './components/Contact';
import Hero from './components/Hero';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <section className="container mx-auto justify-center flex flex-col items-center mt-12 text-[#1C1C1C]">
        <Hero />
        <hr className="w-full border-t border-celeste mt-12" />
        <Destacados />
        <hr className="w-full border-t border-celeste mt-6" />
        <Servicios />
        <hr className="w-full border-t border-celeste mt-12" />
        <Contact />
      </section>
    </div>
  );
}
