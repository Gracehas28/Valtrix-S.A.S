import React, { useState } from 'react';
import { 
  ArrowLeft, CheckCircle2, TrendingUp, Users, Award, 
  Globe, ShieldCheck, Factory, Laptop, Car, Ship, 
  ChevronRight, ArrowRight, Quote, Star, Clock, 
  Building2, Phone, Mail, FileCheck2, ExternalLink,
  Target, Sparkles, Compass, CheckSquare, Layers,
  BarChart3, Handshake, ShieldAlert, Cpu, Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CasosDeExitoProps {
  onBackToHome: () => void;
  onGoToQuotation: () => void;
}

interface StrategicCompany {
  id: string;
  name: string;
  badge: string;
  category: string;
  tagline: string;
  colorBorder: string;
  colorBg: string;
  colorText: string;
  colorBadge: string;
  image: string;
  opportunity: string;
  marketingFocus: string;
  details?: {
    servicioPropuesto?: string;
    trayectoriaNarrativa?: string;
    resultadosProyectados?: string[];
    mensajeMarketing?: string;
  };
}

export const CasosDeExito: React.FC<CasosDeExitoProps> = ({ onBackToHome, onGoToQuotation }) => {
  const [activeTab, setActiveTab] = useState<'narrativa' | 'matriz'>('narrativa');
  const [selectedCompanyModal, setSelectedCompanyModal] = useState<StrategicCompany | null>(null);

  // 5 Strategic Accounts
  const strategicCompanies: StrategicCompany[] = [
    {
      id: 'alpina',
      name: 'Alpina',
      badge: 'Alimentario & Lácteos',
      category: 'Insumos Industriales',
      tagline: 'Gestión Documental y Abastecimiento de Precisión',
      colorBorder: 'border-blue-400',
      colorBg: 'bg-blue-50/50',
      colorText: 'text-blue-700',
      colorBadge: 'bg-blue-100 text-blue-800 border-blue-200',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1000&auto=format&fit=crop',
      opportunity: 'Gestión de proveedores internacionales, importación de insumos y coordinación documental.',
      marketingFocus: 'Ofrecer trazabilidad, cumplimiento de cronogramas y reducción de incertidumbre en la cadena de abastecimiento.',
      details: {
        servicioPropuesto: 'Consultoría de abastecimiento internacional y acompañamiento a proveedores.',
        trayectoriaNarrativa: 'Como parte de su estrategia de expansión comercial, VALTRIX SAS desarrolla una propuesta de acompañamiento para empresas del sector alimentario, enfocada en la identificación de oportunidades de abastecimiento internacional y la gestión organizada de sus procesos de compra. En el caso académico de Alpina, se plantea una operación de evaluación de proveedores y análisis de alternativas logísticas para insumos industriales. El servicio se estructura con una metodología de seguimiento documental, evaluación de cotizaciones y comunicación permanente con los responsables de la operación.',
        resultadosProyectados: [
          'Fortalecimiento de la relación comercial sostenible.',
          'Mayor claridad y rigor en el proceso de evaluación de proveedores internacionales.',
          'Satisfacción empresarial medida mediante encuesta de servicio y KPIs de respuesta.'
        ],
        mensajeMarketing: 'Cada operación comienza con una necesidad y termina con una relación de confianza.'
      }
    },
    {
      id: 'nutresa',
      name: 'Grupo Nutresa',
      badge: 'Consumo Masivo & Alimentos',
      category: 'Comercio Exterior Integral',
      tagline: 'Logística Coordinada y Visibilidad Total de Carga',
      colorBorder: 'border-amber-400',
      colorBg: 'bg-amber-50/50',
      colorText: 'text-amber-800',
      colorBadge: 'bg-amber-100 text-amber-900 border-amber-200',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
      opportunity: 'Consultoría en operaciones de comercio exterior, coordinación de carga y apoyo en procesos de abastecimiento internacional.',
      marketingFocus: 'Presentar soluciones de logística coordinada y visibilidad de la operación en tiempo real.',
      details: {
        servicioPropuesto: 'Coordinación de una importación de insumos y acompañamiento logístico internacional.',
        trayectoriaNarrativa: 'VALTRIX SAS plantea una operación de importación orientada al abastecimiento de insumos para una empresa del sector industrial alimentario. El proceso contempla el análisis de la mercancía, la revisión de los documentos comerciales, la coordinación del transporte internacional y el seguimiento a los hitos de la operación. En este escenario académico, el equipo de VALTRIX participa en la planificación de la carga, la comunicación con proveedores y la coordinación con los actores logísticos correspondientes.',
        resultadosProyectados: [
          'Importación completada conforme al cronograma definido en el caso operativo.',
          'Documentación organizada, digitalizada y auditada para el seguimiento de la operación.',
          'Evaluación de la experiencia del cliente y consolidación de oportunidades de mejora.'
        ],
        mensajeMarketing: 'La logística internacional se construye con planificación, coordinación y seguimiento.'
      }
    },
    {
      id: 'exito',
      name: 'Grupo Éxito',
      badge: 'Retail & Gran Distribución',
      category: 'Alianzas Estratégicas',
      tagline: 'Continuidad de Suministro y Optimización de Costos',
      colorBorder: 'border-yellow-500',
      colorBg: 'bg-yellow-50/40',
      colorText: 'text-yellow-800',
      colorBadge: 'bg-yellow-100 text-yellow-900 border-yellow-300',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop',
      opportunity: 'Apoyo en el análisis de proveedores, planificación de importaciones y coordinación de entregas.',
      marketingFocus: 'Construir propuestas enfocadas en continuidad del suministro y control de costos logísticos.',
      details: {
        servicioPropuesto: 'Diseño de una propuesta de colaboración logística y abastecimiento.',
        trayectoriaNarrativa: 'Como parte de su estrategia de posicionamiento, VALTRIX SAS desarrolla una propuesta de alianza estratégica dirigida a empresas con operaciones de distribución y abastecimiento. La iniciativa contempla el análisis de necesidades, la identificación de servicios complementarios y la estructuración de un esquema de colaboración empresarial. Para este caso, se plantea una propuesta de acercamiento a Grupo Éxito que permita estudiar oportunidades de apoyo en procesos de abastecimiento y coordinación de operaciones internacionales. La alianza se presenta como una meta comercial que requiere evaluación, negociación y aprobación de las partes.',
        resultadosProyectados: [
          'Presentación formal de una propuesta de colaboración empresarial integral.',
          'Identificación rigurosa de áreas de interés compartido y sinergias comerciales.',
          'Definición de posibles etapas estructuradas para una alianza futura de alto impacto.'
        ],
        mensajeMarketing: 'Las grandes oportunidades nacen cuando dos empresas encuentran una forma de crear valor juntas.'
      }
    },
    {
      id: 'postobon',
      name: 'Postobón',
      badge: 'Bebidas & Manufactura',
      category: 'Maquinaria & Repuestos',
      tagline: 'Planificación de Compras Industriales y Evaluación Técnica',
      colorBorder: 'border-rose-400',
      colorBg: 'bg-rose-50/50',
      colorText: 'text-rose-700',
      colorBadge: 'bg-rose-100 text-rose-800 border-rose-200',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
      opportunity: 'Identificación de proveedores internacionales de maquinaria, repuestos y suministros industriales.',
      marketingFocus: 'Resaltar la planificación de compras, la evaluación de alternativas y el acompañamiento documental.',
      details: {
        servicioPropuesto: 'Sourcing internacional especializado de maquinaria y gestión de componentes críticos.',
        trayectoriaNarrativa: 'En el sector de bebidas y embotellado, la continuidad de la línea productiva exige repuestos críticos con cero margen de error. VALTRIX SAS diseña un esquema de prospección y homologación técnica de proveedores de equipos y piezas industriales en mercados europeos y asiáticos, asegurando cotizaciones directas de fabricante, cálculo exacto de aranceles y asesoría aduanera integral.',
        resultadosProyectados: [
          'Evaluación comparativa de alternativas de proveedores de maquinaria.',
          'Acompañamiento documental para homologación aduanera de repuestos especializados.',
          'Planificación de inventario de seguridad con reducción de tiempos de tránsito.'
        ],
        mensajeMarketing: 'Cada repuesto y cada máquina representan la continuidad del motor productivo.'
      }
    },
    {
      id: 'tecnoglass',
      name: 'Tecnoglass',
      badge: 'Arquitectura & Exportación',
      category: 'Transporte Internacional',
      tagline: 'Eficiencia en la Cadena Logística de Carga Especializada',
      colorBorder: 'border-cyan-500',
      colorBg: 'bg-cyan-50/50',
      colorText: 'text-cyan-800',
      colorBadge: 'bg-cyan-100 text-cyan-900 border-cyan-200',
      image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1000&auto=format&fit=crop',
      opportunity: 'Coordinación de proveedores, servicios de transporte internacional y apoyo a operaciones de importación o exportación.',
      marketingFocus: 'Promover eficiencia en la cadena logística y soluciones adaptadas a operaciones industriales.',
      details: {
        servicioPropuesto: 'Operación logística multimodal y enlace aduanero para insumos de transformación arquitectónica.',
        trayectoriaNarrativa: 'La exportación y transformación de vidrio arquitectónico de alta gama demanda precisión milimétrica en fletes marítimos, manejo de contenedores especiales Open Top y tiempos récord en terminales portuarias. VALTRIX SAS formula esquemas de coordinación de transporte multimodal con pólizas todo riesgo y enlaces aduaneros ágiles.',
        resultadosProyectados: [
          'Optimización de tiempos en despachos de carga especializada.',
          'Mapeo y consolidación de proveedores internacionales clave.',
          'Soluciones logísticas adaptadas a la alta demanda de la industria de la construcción.'
        ],
        mensajeMarketing: 'La excelencia industrial requiere una logística con visión estratégica de clase mundial.'
      }
    }
  ];

  // The 3 Detailed Narrative Case Studies
  const deepNarratives = [
    {
      number: '01',
      company: 'Alpina',
      title: 'VALTRIX SAS y Alpina',
      sector: 'Sector Alimentario & Agroindustrial',
      serviceProp: 'Consultoría de abastecimiento internacional y acompañamiento a proveedores.',
      narrative: 'Como parte de su estrategia de expansión comercial, VALTRIX SAS desarrolla una propuesta de acompañamiento para empresas del sector alimentario, enfocada en la identificación de oportunidades de abastecimiento internacional y la gestión organizada de sus procesos de compra.\n\nEn el caso académico de Alpina, se plantea una operación de evaluación de proveedores y análisis de alternativas logísticas para insumos industriales. El servicio se estructura con una metodología de seguimiento documental, evaluación de cotizaciones y comunicación permanente con los responsables de la operación.',
      results: [
        'Fortalecimiento de la relación comercial.',
        'Mayor claridad en el proceso de evaluación de proveedores.',
        'Satisfacción empresarial medida mediante encuesta de servicio.'
      ],
      marketingMsg: 'Cada operación comienza con una necesidad y termina con una relación de confianza.',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop',
      badgeColor: 'bg-blue-600',
      accentColor: 'from-blue-600 to-indigo-800'
    },
    {
      number: '02',
      company: 'Grupo Nutresa',
      title: 'VALTRIX SAS y Grupo Nutresa',
      sector: 'Industria Alimentaria & Cadenas de Suministro',
      serviceProp: 'Coordinación de una importación de insumos y acompañamiento logístico internacional.',
      narrative: 'VALTRIX SAS plantea una operación de importación orientada al abastecimiento de insumos para una empresa del sector industrial alimentario. El proceso contempla el análisis de la mercancía, la revisión de los documentos comerciales, la coordinación del transporte internacional y el seguimiento a los hitos de la operación.\n\nEn este escenario académico, el equipo de VALTRIX participa en la planificación de la carga, la comunicación con proveedores y la coordinación con los actores logísticos correspondientes.',
      results: [
        'Importación completada conforme al cronograma definido en el caso.',
        'Documentación organizada para el seguimiento de la operación.',
        'Evaluación de la experiencia del cliente y oportunidades de mejora.'
      ],
      marketingMsg: 'La logística internacional se construye con planificación, coordinación y seguimiento.',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
      badgeColor: 'bg-amber-600',
      accentColor: 'from-amber-600 to-amber-900'
    },
    {
      number: '03',
      company: 'Grupo Éxito',
      title: 'VALTRIX SAS y Grupo Éxito',
      sector: 'Gran Distribución, Retail & Abastecimiento Nacional',
      serviceProp: 'Diseño de una propuesta de colaboración logística y abastecimiento.',
      narrative: 'Como parte de su estrategia de posicionamiento, VALTRIX SAS desarrolla una propuesta de alianza estratégica dirigida a empresas con operaciones de distribución y abastecimiento. La iniciativa contempla el análisis de necesidades, la identificación de servicios complementarios y la estructuración de un esquema de colaboración empresarial.\n\nPara este caso, se plantea una propuesta de acercamiento a Grupo Éxito que permita estudiar oportunidades de apoyo en procesos de abastecimiento y coordinación de operaciones internacionales. La alianza se presenta como una meta comercial que requiere evaluación, negociación y aprobación de las partes.',
      results: [
        'Presentación formal de una propuesta de colaboración.',
        'Identificación de áreas de interés compartido.',
        'Definición de posibles etapas para una alianza futura.'
      ],
      marketingMsg: 'Las grandes oportunidades nacen cuando dos empresas encuentran una forma de crear valor juntas.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      badgeColor: 'bg-emerald-600',
      accentColor: 'from-emerald-700 to-slate-900'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-valtrix-gray">
      {/* Top Breadcrumb & Quick Action Bar */}
      <div className="pt-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-valtrix-blue hover:text-valtrix-gold font-bold text-sm transition-all group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-blue-50 group-hover:bg-amber-50 flex items-center justify-center transition-colors">
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            </div>
            <span>Volver a la Página Principal</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <span className="hover:text-valtrix-blue cursor-pointer" onClick={onBackToHome}>Inicio</span>
            <span>/</span>
            <span className="text-gray-400">Trayectoria de VALTRIX</span>
            <span>/</span>
            <span className="text-valtrix-blue font-bold">Casos de Éxito</span>
          </div>

          <button
            onClick={onGoToQuotation}
            className="bg-valtrix-gold hover:bg-amber-600 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Cotizar Proyecto</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-valtrix-blue via-blue-950 to-slate-950 text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-valtrix-gold rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-valtrix-gold border border-white/20 text-xs font-black uppercase tracking-widest mb-6">
                <Sparkles size={15} /> Trayectoria y Casos de Éxito Empresariales
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight">
                VALTRIX SAS: <span className="text-valtrix-gold">Tu operación internacional</span>, nuestra visión estratégica.
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 font-normal leading-relaxed mb-10 max-w-3xl mx-auto">
                Casos de estudio, estructuración de alianzas estratégicas y proyección comercial con los principales referentes empresariales de Colombia: <strong>Alpina, Nutresa, Grupo Éxito, Postobón y Tecnoglass</strong>.
              </p>

              {/* View Switcher Tabs */}
              <div className="inline-flex p-1.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <button
                  onClick={() => setActiveTab('narrativa')}
                  className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'narrativa'
                      ? 'bg-valtrix-gold text-white shadow-lg'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  <FileCheck2 size={16} />
                  <span>Trayectoria Narrativa a Profundidad</span>
                </button>
                <button
                  onClick={() => setActiveTab('matriz')}
                  className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === 'matriz'
                      ? 'bg-valtrix-gold text-white shadow-lg'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  <Layers size={16} />
                  <span>Matriz de Cuentas Estratégicas</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION A: DETAILED NARRATIVE CASES (Alpina, Nutresa, Grupo Éxito) */}
      {activeTab === 'narrativa' && (
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black text-valtrix-gold uppercase tracking-widest block mb-2">
                Casos de Estudio Detallados
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-valtrix-gray mb-4 tracking-tight">
                Trayectoria Narrativa y Proyección de Impacto
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Estructuración de servicios de abastecimiento internacional, acompañamiento aduanero y alianzas de valor compartido.
              </p>
            </div>

            <div className="space-y-16">
              {deepNarratives.map((item, idx) => (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="grid lg:grid-cols-12 gap-0">
                    {/* Visual Graphic Column */}
                    <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-900">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r ${item.accentColor} opacity-75 mix-blend-multiply`}></div>
                      
                      {/* Top Badges */}
                      <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                        <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white font-extrabold text-xs uppercase tracking-wider border border-white/30">
                          {item.sector}
                        </span>
                        <span className="w-10 h-10 rounded-2xl bg-white text-valtrix-blue font-black flex items-center justify-center text-sm shadow-md">
                          {item.number}
                        </span>
                      </div>

                      {/* Bottom Marketing Quote Banner */}
                      <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-white">
                        <div className="flex items-center gap-2 text-valtrix-gold mb-2 text-xs font-black uppercase tracking-wider">
                          <Quote size={14} /> Mensaje de Marketing
                        </div>
                        <p className="text-sm font-semibold italic text-blue-50 leading-snug">
                          "{item.marketingMsg}"
                        </p>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
                      <div>
                        {/* Title & Service Tag */}
                        <div className="mb-6">
                          <div className="inline-block px-3 py-1 rounded-lg bg-blue-50 text-valtrix-blue text-xs font-bold uppercase tracking-wider mb-2">
                            Alianza Estratégica
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-black text-valtrix-gray mb-3 leading-tight">
                            {item.title}
                          </h3>
                          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                            <Target size={18} className="text-valtrix-gold shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Servicio Propuesto</span>
                              <span className="text-sm font-bold text-valtrix-gray">{item.serviceProp}</span>
                            </div>
                          </div>
                        </div>

                        {/* Trayectoria Narrativa */}
                        <div className="mb-8">
                          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Compass size={15} className="text-valtrix-blue" />
                            Trayectoria Narrativa
                          </h4>
                          <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 font-normal">
                            {item.narrative.split('\n\n').map((paragraph, pIdx) => (
                              <p key={pIdx}>{paragraph}</p>
                            ))}
                          </div>
                        </div>

                        {/* Resultados Proyectados */}
                        <div className="bg-blue-50/60 rounded-2xl p-6 border border-blue-100 mb-6">
                          <h4 className="text-xs font-black text-valtrix-blue uppercase tracking-wider mb-4 flex items-center gap-2">
                            <BarChart3 size={16} />
                            Resultados Proyectados
                          </h4>
                          <ul className="space-y-2.5">
                            {item.results.map((res, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-3 text-sm text-gray-800 font-medium">
                                <div className="w-5 h-5 rounded-full bg-valtrix-blue text-white flex items-center justify-center shrink-0 mt-0.5">
                                  <CheckCircle2 size={13} />
                                </div>
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Action */}
                      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="text-xs text-gray-500 font-semibold">
                          VALTRIX SAS • Operaciones con Visión Estratégica
                        </div>
                        <button
                          onClick={onGoToQuotation}
                          className="w-full sm:w-auto bg-valtrix-blue hover:bg-blue-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>Estructurar Proyecto Similar</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION B: COMPLETE STRATEGIC MATRIX OF 5 COMPANIES */}
      <section className={`py-16 lg:py-24 ${activeTab === 'matriz' ? 'bg-slate-50' : 'bg-white border-t border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-black text-valtrix-gold uppercase tracking-widest block mb-2">
              Portafolio Corporativo
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-valtrix-gray mb-4 tracking-tight">
              Matriz Estratégica de Oportunidad y Enfoque
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Oportunidades de servicio y enfoques de valor diseñados para cada sector industrial y comercial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strategicCompanies.map((comp, idx) => (
              <motion.article
                key={comp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-white rounded-3xl overflow-hidden border-2 ${comp.colorBorder} shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group`}
              >
                <div>
                  {/* Photo with Overlay Badge */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img 
                      src={comp.image} 
                      alt={comp.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border backdrop-blur-md ${comp.colorBadge}`}>
                        {comp.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-black leading-tight text-white mb-0.5">
                        {comp.name}
                      </h3>
                      <p className="text-xs text-gray-300 font-medium">{comp.category}</p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-5">
                    {/* Oportunidad de servicio */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-valtrix-blue">
                        <Handshake size={15} />
                        <span>Oportunidad de Servicio</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed font-normal bg-gray-50 p-3.5 rounded-xl border border-gray-200">
                        {comp.opportunity}
                      </p>
                    </div>

                    {/* Enfoque de marketing */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-valtrix-gold">
                        <TrendingUp size={15} />
                        <span>Enfoque Estratégico</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed font-normal bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/60">
                        {comp.marketingFocus}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Button to open modal */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedCompanyModal(comp)}
                    className="w-full bg-gray-100 hover:bg-valtrix-blue hover:text-white text-valtrix-gray font-bold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Ver propuesta y proyección</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.article>
            ))}

            {/* General CTA Card matching grid */}
            <div className="bg-gradient-to-br from-valtrix-blue to-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl border border-blue-900">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-valtrix-gold flex items-center justify-center mb-6 shadow-md">
                  <Handshake size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3">
                  Su Empresa en la Cadena de Éxito
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Diseñamos propuestas personalizadas de abastecimiento, importación y optimización logística para empresas de cualquier escala con visión de crecimiento.
                </p>
                <div className="space-y-2 text-xs text-blue-200 font-medium mb-6">
                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-valtrix-gold" /> Trazabilidad total de extremo a extremo
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-valtrix-gold" /> Gestión documental y jurídica aduanera
                  </p>
                  <p className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-valtrix-gold" /> Planificación de compras internacionales
                  </p>
                </div>
              </div>

              <button
                onClick={onGoToQuotation}
                className="w-full bg-valtrix-gold hover:bg-amber-600 text-white font-black py-3.5 px-4 rounded-xl shadow-lg transition-all text-xs tracking-wider uppercase text-center cursor-pointer"
              >
                SOLICITAR PROPUESTA A LA MEDIDA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHY BANNER */}
      <section className="py-20 bg-valtrix-gray text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-black text-valtrix-gold uppercase tracking-widest block mb-2">
                Nuestra Filosofía de Servicio
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
                "Cada operación comienza con una necesidad y termina con una relación de confianza."
              </h2>
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                En VALTRIX SAS entendemos que el comercio internacional y la consultoría en abastecimiento no son simples transacciones: son alianzas de largo plazo que salvaguardan la continuidad operativa de nuestros clientes.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4">
              <button
                onClick={onGoToQuotation}
                className="w-full bg-valtrix-gold hover:bg-amber-600 text-white font-black py-4 px-6 rounded-2xl shadow-xl transition-all text-center text-sm cursor-pointer"
              >
                INICIAR COTIZACIÓN EMPRESARIAL
              </button>
              <button
                onClick={onBackToHome}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-2xl border border-white/20 transition-all text-center text-sm cursor-pointer"
              >
                Explorar Servicios en Inicio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL: Strategic Company Deep Dive */}
      <AnimatePresence>
        {selectedCompanyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 p-6 sm:p-8 relative my-8"
            >
              <button
                onClick={() => setSelectedCompanyModal(null)}
                className="absolute top-6 right-6 w-9 h-9 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center transition-colors font-bold text-lg cursor-pointer"
              >
                ✕
              </button>

              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${selectedCompanyModal.colorBadge}`}>
                  {selectedCompanyModal.badge}
                </span>
              </div>

              <h3 className="text-3xl font-black text-valtrix-gray mb-1">
                {selectedCompanyModal.name}
              </h3>
              <p className="text-xs font-bold text-valtrix-blue mb-6 uppercase tracking-wider">
                {selectedCompanyModal.tagline}
              </p>

              <div className="rounded-2xl overflow-hidden mb-6 h-48 bg-gray-100">
                <img 
                  src={selectedCompanyModal.image} 
                  alt={selectedCompanyModal.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Oportunidad y Enfoque */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                  <h4 className="font-extrabold text-valtrix-blue text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Handshake size={14} /> Oportunidad de Servicio:
                  </h4>
                  <p className="text-gray-800 text-sm leading-relaxed">{selectedCompanyModal.opportunity}</p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
                  <h4 className="font-extrabold text-amber-900 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <TrendingUp size={14} /> Enfoque de Marketing:
                  </h4>
                  <p className="text-gray-800 text-sm leading-relaxed">{selectedCompanyModal.marketingFocus}</p>
                </div>
              </div>

              {/* Detailed narrative if exists */}
              {selectedCompanyModal.details && (
                <div className="space-y-4 mb-6">
                  {selectedCompanyModal.details.servicioPropuesto && (
                    <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                      <h4 className="font-extrabold text-gray-500 text-xs uppercase tracking-wider mb-1">
                        Servicio Propuesto:
                      </h4>
                      <p className="text-valtrix-gray font-bold text-sm">
                        {selectedCompanyModal.details.servicioPropuesto}
                      </p>
                    </div>
                  )}

                  {selectedCompanyModal.details.trayectoriaNarrativa && (
                    <div>
                      <h4 className="font-extrabold text-gray-600 text-xs uppercase tracking-wider mb-2">
                        Trayectoria Narrativa:
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-gray-200">
                        {selectedCompanyModal.details.trayectoriaNarrativa}
                      </p>
                    </div>
                  )}

                  {selectedCompanyModal.details.resultadosProyectados && (
                    <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100">
                      <h4 className="font-extrabold text-emerald-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <CheckCircle2 size={15} /> Resultados Proyectados:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-gray-800 font-medium">
                        {selectedCompanyModal.details.resultadosProyectados.map((res, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">•</span>
                            <span>{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedCompanyModal.details.mensajeMarketing && (
                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-center">
                      <Quote size={18} className="text-valtrix-gold mx-auto mb-1" />
                      <p className="text-xs sm:text-sm italic font-semibold text-gray-800">
                        "{selectedCompanyModal.details.mensajeMarketing}"
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedCompanyModal(null);
                    onGoToQuotation();
                  }}
                  className="flex-1 bg-valtrix-gold hover:bg-amber-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all text-center text-sm cursor-pointer"
                >
                  Cotizar Operación Similar
                </button>
                <button
                  onClick={() => setSelectedCompanyModal(null)}
                  className="sm:w-32 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3.5 px-6 rounded-xl transition-all text-center text-sm cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
