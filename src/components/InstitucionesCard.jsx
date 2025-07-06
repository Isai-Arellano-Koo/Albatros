import { Link } from "react-router-dom";

const InstitucionesCard = ({ nombre, tipo, ciudad, descripcion }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
      <h3 className="text-xl font-bold text-blue-600 mb-2">{nombre}</h3>
      <p className="text-gray-700 mb-1">{tipo}</p>
      <p className="text-sm text-gray-500">{ciudad}</p>
      <p className="text-sm mt-2 text-gray-600">{descripcion}</p>
      {/* <Link
        to="/profesionales"
        className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
      >
        Ver profesionales →
      </Link> */}
    </div>
  );
};

export default InstitucionesCard;
