import floripaImg from '../assets/floripa.jpg';
import miamiImg from '../assets/miami.jpg';
import cancunImg from '../assets/cancun.jpg';
import Destacado from './Destacado';

export default function Destacados() {
  return (
    <section className="flex flex-col items-center mt-12 text-[#1C1C1C]">
      <h2 className="text-3xl text-bold">Lugares destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center text-center">
        <Destacado title="Florianópolis" image={floripaImg} />
        <Destacado title="Cancún" image={cancunImg} />
        <Destacado title="Miami" image={miamiImg} />
      </div>
    </section>
  );
}
