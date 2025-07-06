const InfoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">¿Cómo funciona?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="">
            <h3 className="text-xl font-semibold mb-2">1. Elige una empresa</h3>
            <p>Explora las empresas asociadas según tu interés o carrera.</p>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold mb-2">2. Conoce a un profesional</h3>
            <p>Accede a un día de shadowing con un experto de esa empresa.</p>
          </div>
          <div className="">
            <h3 className="text-xl font-semibold mb-2">3. Evalúa tu vocación</h3>
            <p>Vive la experiencia y decide si esa carrera es para ti.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
