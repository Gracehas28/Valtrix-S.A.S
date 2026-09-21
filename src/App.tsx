import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Factory, Laptop, Car, Ship, 
  CheckCircle2, TrendingUp, Globe, Trophy, 
  Mail, MapPin, Phone, MessageSquare, 
  ChevronRight, ArrowRight, Calendar, Users,
  Award, Building2, Briefcase, Clock,
  User, Send, FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CasosDeExito } from './components/CasosDeExito';

// --- Components ---

interface HeaderProps {
  currentView: 'home' | 'casos-de-exito';
  onNavigate: (view: 'home' | 'casos-de-exito', hash?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolid = scrolled || currentView === 'casos-de-exito';

  const navLinks = [
    { name: 'TEXTILES', href: '#textiles' },
    { name: 'TECNOLOGÍA', href: '#tecnologia' },
    { name: 'VEHÍCULOS', href: '#vehiculos' },
    { name: 'CASOS DE ÉXITO', isCasos: true },
    { name: 'COTIZACIÓN', href: '#cotizacion' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  const handleLinkClick = (link: { name: string; href?: string; isCasos?: boolean }) => {
    setIsOpen(false);
    if (link.isCasos) {
      onNavigate('casos-de-exito');
    } else if (link.href) {
      onNavigate('home', link.href);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img 
              src="https://i.imgur.com/noXxWB5.jpeg" 
              alt="VALTRIX SAS Logo" 
              className="h-10 w-auto rounded-lg shadow-sm transition-transform group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tighter transition-colors ${isSolid ? 'text-valtrix-blue' : 'text-white'}`}>VALTRIX SAS</span>
              <span className={`text-[10px] font-semibold tracking-[0.2em] uppercase ${isSolid ? 'text-valtrix-gray' : 'text-gray-200'}`}>Sistemas de Información</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-7 items-center">
            {navLinks.map((link) => {
              const isActiveCasos = link.isCasos && currentView === 'casos-de-exito';
              return (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className={`text-sm font-bold transition-all cursor-pointer relative py-1 ${
                    isActiveCasos
                      ? 'text-valtrix-gold'
                      : isSolid 
                        ? 'text-valtrix-gray hover:text-valtrix-gold' 
                        : 'text-white hover:text-valtrix-gold'
                  }`}
                >
                  {link.name}
                  {isActiveCasos && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-valtrix-gold rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={isSolid ? 'text-valtrix-blue' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link)}
                  className="w-full text-left block px-3 py-3.5 text-base font-bold text-valtrix-gray hover:bg-gray-50 hover:text-valtrix-blue border-b border-gray-50"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = ({ onNavigateToCasos }: { onNavigateToCasos?: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-valtrix-gray">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Corporate Building" 
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-valtrix-blue/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              VALTRIX SAS: <span className="text-valtrix-gold">Tu operación internacional</span>, nuestra visión estratégica.
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-xl">
              Somos sus aliados estratégicos en textiles premium, soluciones tecnológicas avanzadas y vehículos de lujo. Logística puerta a puerta desde el exterior hasta Colombia para empresarios visionarios.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                '+10 años de experiencia',
                'Especialistas en importación',
                'Enfoque 100% empresarial',
                'Aliados estratégicos de confianza'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
                  <CheckCircle2 className="text-valtrix-gold shrink-0" size={20} />
                  <span className="text-white font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#cotizacion" className="bg-valtrix-gold hover:bg-amber-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg cursor-pointer">
                COTIZAR AHORA <ChevronRight size={20} />
              </a>
              <button 
                onClick={onNavigateToCasos}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all backdrop-blur-md cursor-pointer"
              >
                CONOCER NUESTRA TRAYECTORIA
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-valtrix-gold/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
                alt="Business Team" 
                className="relative rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: 'textiles',
      title: 'TEXTILES INDUSTRIALES',
      icon: <Factory size={40} />,
      items: ['Materiales industriales', 'Volúmenes mayoristas', 'Importación directa'],
      cta: 'Ver Catálogo',
      img: 'https://images.unsplash.com/photo-1558444479-c848517d736e?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'tecnologia',
      title: 'TECNOLOGÍA EMPRESARIAL',
      icon: <Laptop size={40} />,
      items: ['Plataformas corporativas', 'ERP/CRM', 'Hosting empresarial', 'Soporte 24/7'],
      cta: 'Ver Soluciones',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    },
    {
      id: 'vehiculos',
      title: 'VEHÍCULOS CORPORATIVOS',
      icon: <Car size={40} />,
      items: ['Flota empresarial', 'Vehículos ejecutivos', 'Importación especializada'],
      cta: 'Ver Inventario',
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-valtrix-gold tracking-widest uppercase mb-2">División de Servicios</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-valtrix-gray">Soluciones para Empresarios Visionarios</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="text-valtrix-blue mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-valtrix-gray mb-4">{service.title}</h3>
                <ul className="space-y-2 mb-8">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-valtrix-gold rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 px-6 bg-white border-2 border-valtrix-blue text-valtrix-blue font-bold rounded-lg group-hover:bg-valtrix-blue group-hover:text-white transition-all duration-300">
                  {service.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = ({ onNavigateToCasos }: { onNavigateToCasos?: () => void }) => {
  const stats = [
    { label: 'Empresarios Satisfechos', value: '+500', icon: <Users size={32} /> },
    { label: 'Importaciones Exitosas', value: '+1000', icon: <Globe size={32} /> },
    { label: 'Logística Internacional', value: 'Líderes', icon: <Ship size={32} /> },
    { label: 'Alianza Garantizada', value: '100%', icon: <Award size={32} /> },
  ];

  return (
    <section id="experiencia" className="py-24 bg-valtrix-blue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-valtrix-gold rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">VALTRIX SAS - MÁS DE UNA DÉCADA</h2>
          <p className="text-valtrix-gold text-xl font-bold">Cumpliendo Sueños Empresariales</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center"
            >
              <div className="text-valtrix-gold flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mb-10 text-center">
          <p className="text-xs uppercase font-extrabold tracking-widest text-blue-200 mb-4">
            Proyección y Casos de Estudio con Líderes de la Industria
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
            {['Alpina', 'Grupo Nutresa', 'Grupo Éxito', 'Postobón', 'Tecnoglass'].map((brand) => (
              <span 
                key={brand}
                onClick={onNavigateToCasos}
                className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer shadow-xs"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={onNavigateToCasos}
            className="bg-white text-valtrix-blue hover:bg-valtrix-gold hover:text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            CONOCER CASOS DE ÉXITO Y TRAYECTORIA <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    correo: '',
    telefono: '',
    direccion: '',
    servicio: 'Textiles Industriales',
    proyecto: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      nombreCompleto: '',
      correo: '',
      telefono: '',
      direccion: '',
      servicio: 'Textiles Industriales',
      proyecto: ''
    });
    setSubmitted(false);
  };

  return (
    <section id="cotizacion" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-gradient-to-r from-valtrix-blue to-blue-900 p-8 text-center text-white relative">
            <span className="inline-block px-4 py-1 rounded-full bg-valtrix-gold/20 text-valtrix-gold text-xs font-bold uppercase tracking-wider mb-2 border border-valtrix-gold/30">
              Atención Personalizada B2B
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3">COTIZACIÓN EMPRESARIAL A TU MEDIDA</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-base">
              Déjanos tu proyecto y te cotizamos sobre el proyecto que requieras a tu medida.
            </p>
          </div>

          <div className="p-8 md:p-12">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 px-4"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <CheckCircle2 size={44} />
                </div>
                <h3 className="text-2xl font-bold text-valtrix-gray mb-3">
                  ¡Solicitud de Cotización Recibida!
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto mb-6 leading-relaxed">
                  Estimado/a <strong className="text-valtrix-blue">{formData.nombreCompleto || 'Cliente'}</strong>, hemos recibido con éxito los datos de su proyecto. Un asesor corporativo de <strong>VALTRIX SAS</strong> revisará sus requerimientos y se comunicará a <strong>{formData.correo}</strong> o al teléfono <strong>{formData.telefono}</strong> con una propuesta económica adaptada a su medida.
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 max-w-md mx-auto mb-8 text-left text-sm text-gray-700">
                  <p className="font-semibold text-valtrix-gray mb-2">Resumen de solicitud:</p>
                  <p><strong>Servicio:</strong> {formData.servicio}</p>
                  <p><strong>Dirección:</strong> {formData.direccion || 'No especificada'}</p>
                  <p className="truncate"><strong>Proyecto:</strong> {formData.proyecto}</p>
                </div>
                <button
                  onClick={resetForm}
                  className="bg-valtrix-blue hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md"
                >
                  Enviar otra cotización
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nombre completo */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-valtrix-gray uppercase tracking-wider mb-2">
                      <User size={15} className="text-valtrix-blue" />
                      Nombre Completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombreCompleto}
                      onChange={(e) => setFormData({ ...formData, nombreCompleto: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-valtrix-gray placeholder-gray-400 focus:bg-white focus:border-valtrix-blue focus:ring-2 focus:ring-valtrix-blue/20 outline-none transition-all text-sm font-medium"
                      placeholder="Ej: Ing. Carlos Morales"
                    />
                  </div>

                  {/* Correo */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-valtrix-gray uppercase tracking-wider mb-2">
                      <Mail size={15} className="text-valtrix-blue" />
                      Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.correo}
                      onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-valtrix-gray placeholder-gray-400 focus:bg-white focus:border-valtrix-blue focus:ring-2 focus:ring-valtrix-blue/20 outline-none transition-all text-sm font-medium"
                      placeholder="ejemplo@empresa.com"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-valtrix-gray uppercase tracking-wider mb-2">
                      <Phone size={15} className="text-valtrix-blue" />
                      Teléfono / Móvil <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-valtrix-gray placeholder-gray-400 focus:bg-white focus:border-valtrix-blue focus:ring-2 focus:ring-valtrix-blue/20 outline-none transition-all text-sm font-medium"
                      placeholder="+57 (300) 123-4567"
                    />
                  </div>

                  {/* Dirección */}
                  <div>
                    <label className="flex items-center gap-2 text-xs font-bold text-valtrix-gray uppercase tracking-wider mb-2">
                      <MapPin size={15} className="text-valtrix-blue" />
                      Dirección <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.direccion}
                      onChange={(e) => setFormData({ ...formData, direccion: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-valtrix-gray placeholder-gray-400 focus:bg-white focus:border-valtrix-blue focus:ring-2 focus:ring-valtrix-blue/20 outline-none transition-all text-sm font-medium"
                      placeholder="Ciudad, departamento y dirección de sede"
                    />
                  </div>
                </div>

                {/* Selección de división */}
                <div>
                  <label className="block text-xs font-bold text-valtrix-gray uppercase tracking-wider mb-2">
                    Línea de Interés
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { id: 'Textiles Industriales', label: 'Textiles', icon: <Factory size={16} /> },
                      { id: 'Tecnología Empresarial', label: 'Tecnología', icon: <Laptop size={16} /> },
                      { id: 'Vehículos Corporativos', label: 'Vehículos', icon: <Car size={16} /> },
                      { id: 'Logística & Importación', label: 'Logística', icon: <Ship size={16} /> },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setFormData({ ...formData, servicio: item.id })}
                        className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs border transition-all ${
                          formData.servicio === item.id
                            ? 'bg-valtrix-blue text-white border-valtrix-blue shadow-md'
                            : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Déjanos tu proyecto y te cotizamos sobre el proyecto que requieras a tu medida */}
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-valtrix-gray uppercase tracking-wider mb-2">
                    <FileText size={15} className="text-valtrix-gold" />
                    Déjanos tu proyecto y te cotizamos sobre el proyecto que requieras a tu medida <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.proyecto}
                    onChange={(e) => setFormData({ ...formData, proyecto: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl p-4 text-valtrix-gray placeholder-gray-400 focus:bg-white focus:border-valtrix-blue focus:ring-2 focus:ring-valtrix-blue/20 outline-none transition-all text-sm font-medium resize-none"
                    placeholder="Describe los detalles de tu proyecto: especificaciones técnicas, volumen o cantidades, tiempos requeridos, destino de entrega o cualquier requerimiento a tu medida..."
                  ></textarea>
                </div>

                {/* Beneficios */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                  {[
                    'Asesoría empresarial',
                    'Términos comerciales flexibles',
                    'Financiamiento disponible',
                    'Respuesta en menos de 24h'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600 font-medium">
                      <CheckCircle2 className="text-valtrix-blue shrink-0" size={15} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  className="w-full bg-valtrix-gold hover:bg-amber-600 text-white py-4 px-6 rounded-2xl font-black text-base md:text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  SOLICITAR COTIZACIÓN A TU MEDIDA
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const events = [
    { year: '2013', title: 'Fundación VALTRIX SAS', desc: 'Inicio de operaciones en Colombia.' },
    { year: '2015', title: 'Primeras 100 importaciones', desc: 'Consolidación en el mercado textil.' },
    { year: '2017', title: 'Expansión a vehículos', desc: 'División de vehículos corporativos de lujo.' },
    { year: '2019', title: 'División tecnológica', desc: 'Lanzamiento de soluciones ERP/CRM.' },
    { year: '2021', title: '+500 empresarios satisfechos', desc: 'Hito de confianza empresarial.' },
    { year: '2024', title: 'Líderes en logística B2B', desc: 'Referente nacional en importaciones.' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-valtrix-gray">NUESTROS 10+ AÑOS</h2>
          <div className="w-24 h-1 bg-valtrix-gold mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-100 hidden md:block"></div>

          <div className="space-y-12">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 w-full md:w-1/2 px-8">
                  <div className={`p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-valtrix-gold font-black text-2xl mb-2 block">{event.year}</span>
                    <h3 className="text-xl font-bold text-valtrix-blue mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.desc}</p>
                  </div>
                </div>
                <div className="z-10 bg-valtrix-blue w-10 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center my-4 md:my-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessCenter = () => {
  return (
    <section className="py-24 bg-valtrix-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-valtrix-blue to-blue-900 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-valtrix-gold p-3 rounded-xl">
                <Briefcase size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold">ATENCIÓN ESPECIALIZADA PARA EMPRESARIOS</h2>
            </div>
            <ul className="space-y-4 mb-10">
              {[
                'Asesor comercial dedicado',
                'Seguimiento personalizado de proyectos',
                'Reportes ejecutivos de importaciones',
                'Reuniones presenciales disponibles',
                'Términos de pago empresariales'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-blue-100">
                  <CheckCircle2 className="text-valtrix-gold" size={24} />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-valtrix-gold hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl transition-all flex items-center gap-3">
              <MessageSquare size={24} /> SOLICITAR REUNIÓN COMERCIAL
            </button>
          </div>
          <div className="flex-1 relative">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <img src="https://picsum.photos/seed/ceo/100/100" alt="CEO" className="w-16 h-16 rounded-full border-2 border-valtrix-gold" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-xl">Jesus Guillermo Valenzuela</p>
                  <p className="text-valtrix-gold text-sm font-semibold">Gerente Comercial Senior</p>
                </div>
              </div>
              <p className="italic text-blue-100 mb-6">
                "En VALTRIX SAS no solo vendemos servicios, construimos el futuro de su empresa con logística de clase mundial y tecnología de punta."
              </p>
              <div className="flex gap-2">
                <div className="bg-white/10 px-3 py-1 rounded text-xs">ISO 9001</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs">DIAN Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onNavigateToCasos }: { onNavigateToCasos?: () => void }) => {
  return (
    <footer id="contacto" className="bg-valtrix-gray text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="https://i.imgur.com/noXxWB5.jpeg" 
                alt="VALTRIX SAS Logo" 
                className="h-12 w-auto rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tighter text-white">VALTRIX SAS</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-valtrix-gold">Sistemas de Información</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              "Aliados estratégicos para cumplir tus sueños". Más de 10 años de experiencia empresarial brindando soluciones integrales.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-valtrix-blue transition-colors cursor-pointer">
                <Globe size={20} />
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-valtrix-blue transition-colors cursor-pointer">
                <Mail size={20} />
              </div>
              <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-valtrix-blue transition-colors cursor-pointer">
                <Phone size={20} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Mail className="text-valtrix-gold" size={20} /> CONTACTO EMPRESARIAL
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-valtrix-gold" /> comercial@valtrixsas.com
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-valtrix-gold" /> gerencia@valtrixsas.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-valtrix-gold" /> +57 (1) 234-5678
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={16} className="text-valtrix-gold" /> WhatsApp: +57 300 123 4567
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <MapPin className="text-valtrix-gold" size={20} /> OFICINA PRINCIPAL
            </h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-valtrix-gold mt-1" /> [Dirección completa de la oficina en Colombia]
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-valtrix-gold" /> Lun-Vie: 8AM-6PM
              </li>
              <li className="flex items-center gap-3">
                <Calendar size={16} className="text-valtrix-gold" /> Sáb: 9AM-1PM (Cita previa)
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <Ship className="text-valtrix-gold" size={20} /> LOGÍSTICA B2B
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Importaciones corporativas</li>
              <li>• Contenedores completos</li>
              <li>• Logística especializada</li>
              <li>• Seguimiento 24/7</li>
              <li>• Asesoría comercial</li>
              <li>• Financiamiento</li>
              <li 
                onClick={onNavigateToCasos}
                className="text-valtrix-gold hover:underline cursor-pointer font-bold flex items-center gap-1.5 transition-colors pt-2"
              >
                • Ver Casos de Éxito Empresariales →
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <Award className="text-valtrix-gold" size={20} />
              <span className="text-xs font-bold">ISO 9001</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <Building2 className="text-valtrix-gold" size={20} />
              <span className="text-xs font-bold">Cámara de Comercio</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
              <CheckCircle2 className="text-valtrix-gold" size={20} />
              <span className="text-xs font-bold">DIAN</span>
            </div>
          </div>
          <p className="text-gray-500 text-xs">
            © 2026 VALTRIX SAS - Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'casos-de-exito'>('home');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#casos-de-exito') {
        setCurrentView('casos-de-exito');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '' || window.location.hash === '#') {
        if (currentView === 'casos-de-exito') {
          setCurrentView('home');
        }
      }
    };

    if (window.location.hash === '#casos-de-exito') {
      setCurrentView('casos-de-exito');
    }

    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentView]);

  const navigateTo = (view: 'home' | 'casos-de-exito', hash?: string) => {
    if (view === 'casos-de-exito') {
      setCurrentView('casos-de-exito');
      window.location.hash = '#casos-de-exito';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('home');
      if (hash) {
        window.location.hash = hash;
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="font-sans text-valtrix-gray bg-white selection:bg-valtrix-gold selection:text-white min-h-screen flex flex-col justify-between">
      <Header currentView={currentView} onNavigate={navigateTo} />
      {currentView === 'casos-de-exito' ? (
        <main className="flex-1">
          <CasosDeExito 
            onBackToHome={() => navigateTo('home')} 
            onGoToQuotation={() => navigateTo('home', '#cotizacion')} 
          />
        </main>
      ) : (
        <main className="flex-1">
          <Hero onNavigateToCasos={() => navigateTo('casos-de-exito')} />
          <Services />
          <Experience onNavigateToCasos={() => navigateTo('casos-de-exito')} />
          <Timeline />
          <QuotationForm />
          <BusinessCenter />
        </main>
      )}
      <Footer onNavigateToCasos={() => navigateTo('casos-de-exito')} />
    </div>
  );
}
