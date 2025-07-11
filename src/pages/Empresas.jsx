import EmpresaCard from "../components/EmpresaCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmpresas } from "../features/empresas/empresasSlice";

const Empresas = () => {
  const dispatch = useDispatch();
  const { lista, loading, error } = useSelector((state) => state.empresas);

  // Datos hardcodeados de respaldo
  const empresasFallback = [
    {
      id: 1,
      nombre: "TechNova",
      descripcion: "Empresa de innovación tecnológica.",
      ciudad: "Lima, Perú",
      rubro: "Tecnología",
    },
    {
      id: 2,
      nombre: "EcoVida",
      descripcion: "Soluciones sostenibles para el planeta.",
      ciudad: "Cusco, Perú",
      rubro: "Medio Ambiente",
    },
    {
      id: 3,
      nombre: "FinanPlus",
      descripcion: "Consultoría financiera moderna.",
      ciudad: "Arequipa, Perú",
      rubro: "Finanzas",
    },
  ];

  useEffect(() => {
    dispatch(fetchEmpresas());
  }, [dispatch]);

  const empresasMostrar = lista.length > 0 ? lista : empresasFallback;

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Empresas asociadas
        </h2>

        {loading && <p className="text-center">Cargando Empresas...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {empresasMostrar.map((empresa, index) => (
            <EmpresaCard key={index} {...empresa} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Empresas;
