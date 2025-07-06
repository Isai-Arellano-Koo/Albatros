const ProfesionalCard = ({ nombre, especialidad, empresa, ciudad, disponibilidad }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
      <h3 className="text-xl font-bold text-blue-600 mb-1">{nombre}</h3>
      <p className="text-gray-700">{especialidad}</p>
      <p className="text-sm text-gray-500 mb-2">{empresa} · {ciudad}</p>
      <p className="text-sm text-green-600 font-medium">Disponible: {disponibilidad}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Solicitar
      </button>
    </div>
  );
};

export default ProfesionalCard;
