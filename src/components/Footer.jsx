import React from 'react'

const Footer = () => {
   return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-10 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Albatros. Todos los derechos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-600">Términos</a>
          <a href="#" className="hover:text-blue-600">Privacidad</a>
          <a href="/contacto" className="hover:text-blue-600">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer