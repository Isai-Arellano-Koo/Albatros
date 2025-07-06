const Estudiantes = () => {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">Estudiantes</h1>

        <p className="text-lg mb-8 text-gray-700 text-center">
          ¿No sabes si la carrera que te interesa es realmente para ti? En ShadowLink, puedes vivir un día con un profesional y tomar una decisión informada sobre tu futuro.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">1. Regístrate</h3>
            <p className="text-gray-600">Completa un formulario simple con tus datos e intereses.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">2. Elige un profesional</h3>
            <p className="text-gray-600">Accede a la lista de profesionales disponibles según tu carrera.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
            <h3 className="text-xl font-semibold mb-2">3. Vive la experiencia</h3>
            <p className="text-gray-600">Acompaña a un profesional en su día real de trabajo y descubre si es lo tuyo.</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contacto"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded font-semibold hover:bg-blue-700 transition"
          >
            Quiero participar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Estudiantes;
