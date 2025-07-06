const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Explora tu futuro profesional con Albatros</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">Conecta con profesionales reales, descubre si tu carrera es la ideal y vive experiencias únicas en el mundo laboral.</p>
        <a href="/contacto" className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-200 transition">Comienza ahora</a>
      </div>
    </section>
  );
};

export default Hero;
