export default function Servicio({ name, icon, isVisa }) {
  return (
    <div className=" p-6 rounded-lg shadow-xl text-center flex flex-col items-center">
      <span className="text-4xl mb-4 ">{icon}</span>
      <h3 className="text-lg font-semibold">{name}</h3>
      {isVisa && (
        <a
          className="text-sm text-green-500"
          target="_blank"
          href="https://www.visasconexito.com/omargesta"
        >
          ¡Servicio de visa bonificada disponible!
        </a>
      )}
    </div>
  );
}
