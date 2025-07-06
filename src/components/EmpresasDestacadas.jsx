const empresas = [
  { nombre: 'TechNova', rubro: 'Software', ciudad: 'Lima' },
  { nombre: 'Diseña360', rubro: 'Diseño Digital', ciudad: 'Arequipa' },
  { nombre: 'Ingenia', rubro: 'Ingeniería Civil', ciudad: 'Cusco' },
];

const EmpresasDestacadas = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Empresas destacadas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {empresas.map((empresa, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg p-6 text-left">
              <h3 className="text-xl font-bold text-blue-600">{empresa.nombre}</h3>
              <p className="text-gray-600">{empresa.rubro}</p>
              <p className="text-gray-500 text-sm">{empresa.ciudad}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpresasDestacadas;
