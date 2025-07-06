const Nosotros = () => {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">¿Quiénes somos?</h2>
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
          En Jobrando, creemos que la mejor manera de descubrir tu verdadera vocación es experimentarla de cerca. Somos una plataforma innovadora dedicada a conectar a estudiantes y jóvenes profesionales con expertos de diversas industrias para vivir experiencias reales de job shadowing. A través de jornadas de acompañamiento, los usuarios pueden observar de primera mano cómo es el día a día en la carrera que les interesa, tomar decisiones informadas sobre su futuro y construir redes de contacto clave desde una etapa temprana.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Nuestra misión</h3>
            <p className="text-gray-600">
              Guiar y acompañar a estudiantes y jóvenes profesionales en el descubrimiento de su vocación mediante experiencias auténticas de job shadowing, conectándolos con mentores de distintas áreas y facilitando decisiones de carrera más conscientes, alineadas y seguras.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">Nuestra visión</h3>
            <p className="text-gray-600">
              Ser la plataforma líder en Latinoamérica en experiencias de job shadowing, transformando la manera en que las personas eligen su camino profesional, empoderándolas con información real, vivencial y personalizada.
            </p>
          </div>
        </div>

        {/* Puedes agregar más secciones si quieres mostrar a los fundadores o aliados */}
      </div>
    </section>
  );
};

export default Nosotros;
