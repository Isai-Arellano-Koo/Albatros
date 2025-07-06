import ProfesionalCard from '../components/ProfesionalCard';

const profesionales = [
  {
    nombre: 'Ana Torres',
    especialidad: 'Diseño UX/UI',
    empresa: 'Diseña360',
    ciudad: 'Arequipa',
    disponibilidad: 'Lunes y miércoles',
  },
  {
    nombre: 'Carlos Gómez',
    especialidad: 'Desarrollador Backend',
    empresa: 'TechNova',
    ciudad: 'Lima',
    disponibilidad: 'Martes y viernes',
  },
  {
    nombre: 'Lucía Paredes',
    especialidad: 'Ingeniería Civil',
    empresa: 'Ingenia',
    ciudad: 'Cusco',
    disponibilidad: 'Jueves',
  },
  {
    nombre: 'Marco Lazo',
    especialidad: 'Growth Marketing',
    empresa: 'MediaLab',
    ciudad: 'Trujillo',
    disponibilidad: 'Lunes a jueves',
  },
];

const Profesionales = () => {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Profesionales disponibles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {profesionales.map((pro, index) => (
            <ProfesionalCard key={index} {...pro} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profesionales;
