import { useRef, useState } from 'react';
import bannerImg from '../assets/banner2.jpeg';
import bannerVideo from '../assets/banner-video.mp4';

export default function Hero() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  return (
    <section className=" flex justify-center   text-[#1C1C1C]  flex-col w-full">
      <div className="flex items-center justify-center w-full mb-4 space-x-10 md:flex-row flex-col text-center">
        <div className="flex flex-col w-full md:w-1/3 text-center m-0 ">
          <h1 className="text-4xl font-extrabold mb-4 text-center">
            Organizamos tu viaje ideal: vuelos, hoteles y transporte.
          </h1>
          <p className="mb-2 text-lg">
            Descubre el mundo con nosotros, tu agencia de viajes de confianza.
          </p>
          <p className="mb-2 text-lg">
            Explora destinos, reserva vuelos y encuentra el hotel perfecto para
            tu aventura.
          </p>
        </div>
        <div className="w-2/3 md:w-1/3 overflow-hidden flex justify-center relative">
          <video
            ref={videoRef}
            src={bannerVideo}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-80 object-contain"
          />
          <button
            onClick={toggleMute}
            className="absolute  bottom-5  bg-white text-black px-3 py-1 rounded-md shadow hover:bg-gray-200 cursor-pointer"
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <img
          src={bannerImg}
          alt="Banner de viajes"
          className=" w-full object-contain md:object-cover md:w-3/4 h-64"
        />
      </div>
    </section>
  );
}
