import logoImg from '../assets/logo.jpeg';

export default function Header() {
  return (
    <header className="bg-azul-marino  flex items-center h-fit justify-around ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/">
          <img src={logoImg} alt="Logo" className="h-24 w-24 mx-auto" />
        </a>

        <nav className="flex justify-center ">
          <ul className="flex gap-x-4 text-base mr-2 md:text-lg">
            <li>
              <a
                href="#about"
                className="hover:underline hover:text-azul-claro"
              >
                Sobre nosotros
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:underline hover:text-azul-claro"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:text-azul-claro"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
