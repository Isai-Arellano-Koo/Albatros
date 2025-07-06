import { useDispatch, useSelector } from "react-redux";
import { fetchInstituciones } from "../features/instituciones/institucionesSlice";
import InstitucionesCard from "../components/InstitucionesCard";
import { useEffect } from "react";

const Instituciones = () => {
  const dispatch = useDispatch()
  const {lista, loading, error} = useSelector((state) => state.instituciones)

   // Datos hardcodeados de respaldo
  const institucionesFallback = [
    {
      id: 1,
      nombre: "TechNova",
      descripcion: "Instiucion tecnológica.",
      ciudad: "Lima, Perú",
      tipo: "Parroquial",
    },
    {
      id: 2,
      nombre: "EcoVida",
      descripcion: "Soluciones sostenibles para el planeta.",
      ciudad: "Cusco, Perú",
      tipo: "Público",
    },
    {
      id: 3,
      nombre: "FinanPlus",
      descripcion: "Consultoría financiera moderna.",
      ciudad: "Arequipa, Perú",
      tipo: "Privado",
    },
  ];


  useEffect(() => {
      dispatch(fetchInstituciones());
    }, [dispatch]);

    const institucionesMostrar = lista.length > 0 ? lista : institucionesFallback;

  return (
    <>
      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
            Instituciones Educativas
          </h1>

          <p className="text-lg mb-8 text-gray-700 text-center">
            Albatros ofrece a los centros educativos una herramienta efectiva
            para orientar vocacionalmente a sus estudiantes, conectándolos con
            profesionales reales en entornos laborales auténticos.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                🔍 Diagnóstico vocacional realista
              </h3>
              <p className="text-gray-600">
                Permita que sus estudiantes vivan una experiencia en el campo
                profesional antes de decidir su carrera.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                🤝 Conexiones con empresas
              </h3>
              <p className="text-gray-600">
                Nosotros facilitamos las conexiones con empresas y profesionales
                que están dispuestos a recibir estudiantes.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                📈 Mejora en orientación vocacional
              </h3>
              <p className="text-gray-600">
                Reduzca la deserción en carreras equivocadas gracias a
                experiencias reales y breves antes de postular.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                📬 Fácil implementación
              </h3>
              <p className="text-gray-600">
                Solo necesitan coordinar con nosotros. Nos encargamos del resto.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/contacto"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded font-semibold hover:bg-blue-700 transition"
            >
              Quiero afiliar mi institución
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-center mb-10 text-blue-700">
            Estudiantes
          </h1>

          <p className="text-lg mb-8 text-gray-700 text-center">
            ¿No sabes si la carrera que te interesa es realmente para ti? En
            Albatros, puedes vivir un día con un profesional y tomar una
            decisión informada sobre tu futuro.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">1. Regístrate</h3>
              <p className="text-gray-600">
                Completa un formulario simple con tus datos e intereses.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">
                2. Elige un profesional
              </h3>
              <p className="text-gray-600">
                Accede a la lista de profesionales disponibles según tu carrera.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">
                3. Vive la experiencia
              </h3>
              <p className="text-gray-600">
                Acompaña a un profesional en su día real de trabajo y descubre
                si es lo tuyo.
              </p>
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
    {/* Instituciones asociadas  */}
      <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Instituciones asociadas
        </h2>

        {loading && <p className="text-center">Cargando Instituciones...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {institucionesMostrar.map((institucion, index) => (
            <InstitucionesCard key={index} {...institucion} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Instituciones;
