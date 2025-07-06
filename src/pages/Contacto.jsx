import { useState } from 'react';

const Contacto = () => {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    tipo: 'Estudiante',
    mensaje: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    alert('Gracias por contactarte con nosotros.');
    // Aquí se conectará con backend (POST al servidor)
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg shadow">
          <div>
            <label className="block font-semibold mb-1">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Correo electrónico</label>
            <input
              type="email"
              name="correo"
              value={form.correo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Soy</label>
            <select
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option>Estudiante</option>
              <option>Empresa</option>
              <option>Institución Educativa</option>
              <option>Otro</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">Mensaje</label>
            <textarea
              name="mensaje"
              rows="4"
              value={form.mensaje}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition font-semibold"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
