import { FaBusAlt, FaCcVisa, FaMap, FaRegClipboard } from 'react-icons/fa';
import { FaHouseChimney, FaSailboat } from 'react-icons/fa6';
import { LuPartyPopper } from 'react-icons/lu';
import { GiSpeedBoat } from 'react-icons/gi';
import Servicio from './Servicio';

export default function Servicios() {
  return (
    <section
      className="flex flex-col items-center mt-8 text-[#1C1C1C] w-full"
      id="services"
    >
      <h2 className="text-3xl text-bold">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <Servicio
          name="Reserva de transporte"
          icon={<FaBusAlt className="text-red-700" />}
          isVisa={false}
        />
        <Servicio
          name="Alojamiento"
          icon={<FaHouseChimney className="text-green-500" />}
          isVisa={false}
        />
        <Servicio
          name="Experiencias y actividades"
          icon={<LuPartyPopper className="text-orange-600" />}
          isVisa={false}
        />
        <Servicio
          name="Excursiones"
          icon={<FaSailboat className="text-amber-950" />}
          isVisa={false}
        />
        <Servicio
          name="Planificación de viajes"
          icon={<FaRegClipboard />}
          isVisa={false}
        />
        <Servicio
          name="Obtención de visa bonificada"
          icon={<FaCcVisa className="text-blue-600" />}
          isVisa={true}
        />
      </div>
    </section>
  );
}
