import { FaPhoneAlt, FaUser } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      className="flex flex-col justify-center text-[#1C1C1C] p-[2px] md:p-5 mt-4"
      id="contact"
    >
      <h2 className="text-3xl text-bold text-center ">Contáctanos</h2>
      <p className="text-center mt-4">
        Si tienes alguna pregunta o necesitas más información, no dudes en
        contactarnos.
      </p>
      <div className="flex mt-8 justify-center space-x-4 md:space-x-8">
        <div className="flex flex-col items-center border border-azul-claro p-4 rounded-lg text-black">
          <div className="flex justify-center flex-col  items-center space-y-4">
            <p className="flex items-center space">
              <span>
                <FaUser className="text-xl mr-2" />
              </span>
              Belén Gesta
            </p>
            <p className="flex items-center hover:text-green-500">
              <span>
                <FaPhoneAlt className="text-xl  mr-2" />
              </span>
              <a
                href="https://api.whatsapp.com/send?phone=59893476972&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Club%20Viajero"
                target="_blank"
                rel="noopener noreferrer"
              >
                +598 93 476 972
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center border border-azul-claro p-4 rounded-lg">
          <div className="flex justify-center flex-col   items-center space-y-4 ">
            <p className="flex items-center space">
              <span>
                <FaUser className="text-xl mr-2" />
              </span>
              Omar Gesta
            </p>
            <p className="flex items-center hover:text-green-500">
              <span>
                <FaPhoneAlt className="text-xl mr-2" />
              </span>
              <a
                href="https://api.whatsapp.com/send?phone=59893860150&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Club%20Viajero"
                target="_blank"
                rel="noopener noreferrer"
              >
                +598 93 860 150
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
