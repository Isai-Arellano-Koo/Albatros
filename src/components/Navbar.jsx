import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600">Jobreando</Link>

        {/* Botón hamburguesa en móvil */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        {/* Enlaces grandes */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-600">Inicio</Link>
          <Link to="/empresas" className="hover:text-blue-600">Empresas</Link>
          <Link to="/profesionales" className="hover:text-blue-600">Profesionales</Link>
          {/* <Link to="/estudiantes" className="hover:text-blue-600">Estudiantes</Link> */}
          <Link to="/instituciones" className="hover:text-blue-600">Instituciones</Link>
          <Link to="/contacto" className="hover:text-blue-600">Contacto</Link>
          <Link to="/nosotros" className="hover:text-blue-600">Quiénes somos</Link>
          <Link to="/login" className="hover:text-blue-600">Login</Link>
        </div>
      </div>

      {/* Enlaces móviles */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" onClick={() => setOpen(false)} className="block hover:text-blue-600">Inicio</Link>
          <Link to="/empresas" onClick={() => setOpen(false)} className="block hover:text-blue-600">Empresas</Link>
          <Link to="/profesionales" onClick={() => setOpen(false)} className="block hover:text-blue-600">Profesionales</Link>
          {/* <Link to="/estudiantes" onClick={() => setOpen(false)} className="block hover:text-blue-600">Estudiantes</Link> */}
          <Link to="/instituciones" onClick={() => setOpen(false)} className="block hover:text-blue-600">Instituciones</Link>
          <Link to="/contacto" onClick={() => setOpen(false)} className="block hover:text-blue-600">Contacto</Link>
          <Link to="/nosotros" onClick={() => setOpen(false)} className="block hover:text-blue-600">Quienes somos?</Link>
          <Link to="/login" onClick={() => setOpen(false)} className="block hover:text-blue-600">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
