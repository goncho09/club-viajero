export default function Destacado({ title, description, image }) {
  return (
    <div className="">
      <img
        src={image}
        alt={title}
        className="w-80 md:w-96 h-3/4 object-center mb-4 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
      />
      <h3 className="font-bold text-2xl">{title}</h3>
    </div>
  );
}
