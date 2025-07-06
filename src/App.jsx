import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Empresas from './pages/Empresas';
import Profesionales from './pages/Profesionales';
import Estudiantes from './pages/Estudiantes';
import Instituciones from './pages/Instituciones';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Nosotros from './pages/Nosotros';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/profesionales" element={<Profesionales />} />
          {/* <Route path="/estudiantes" element={<Estudiantes />} /> */}
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path="/instituciones" element={<Instituciones />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
