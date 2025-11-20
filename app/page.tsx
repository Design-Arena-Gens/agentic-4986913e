'use client';

import { useState } from 'react';
import { Lightbulb, TrendingUp, Users, DollarSign, Target, Package, Handshake, Activity, Wallet, Sparkles } from 'lucide-react';

interface BusinessModel {
  segmentosClientes: string;
  propuestaValor: string;
  canales: string;
  relacionesClientes: string;
  fuentesIngresos: string;
  recursosClaves: string;
  actividadesClaves: string;
  alianzasClaves: string;
  estructuraCostos: string;
}

interface Recommendation {
  category: string;
  icon: any;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export default function Home() {
  const [step, setStep] = useState<'input' | 'analysis'>('input');
  const [model, setModel] = useState<BusinessModel>({
    segmentosClientes: '',
    propuestaValor: '',
    canales: '',
    relacionesClientes: '',
    fuentesIngresos: '',
    recursosClaves: '',
    actividadesClaves: '',
    alianzasClaves: '',
    estructuraCostos: '',
  });
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);

  const analyzeBusinessModel = () => {
    const recs: Recommendation[] = [];

    // Análisis de Segmentos de Clientes
    if (!model.segmentosClientes || model.segmentosClientes.length < 20) {
      recs.push({
        category: 'Segmentos de Clientes',
        icon: Users,
        title: 'Define mejor tus segmentos de clientes',
        description: 'Identifica nichos específicos y personas con necesidades distintas. Considera crear buyer personas detalladas para cada segmento.',
        priority: 'high'
      });
    } else if (!model.segmentosClientes.toLowerCase().includes('edad') && !model.segmentosClientes.toLowerCase().includes('demográfico')) {
      recs.push({
        category: 'Segmentos de Clientes',
        icon: Users,
        title: 'Añade información demográfica',
        description: 'Incluye datos demográficos como edad, ubicación, nivel socioeconómico para afinar tu target.',
        priority: 'medium'
      });
    }

    // Análisis de Propuesta de Valor
    if (!model.propuestaValor || model.propuestaValor.length < 30) {
      recs.push({
        category: 'Propuesta de Valor',
        icon: Target,
        title: 'Fortalece tu propuesta de valor',
        description: 'Articula claramente qué problema resuelves y por qué eres único. Usa el modelo: "Ayudamos a [cliente] a [beneficio] mediante [diferenciador]".',
        priority: 'high'
      });
    } else if (!model.propuestaValor.toLowerCase().includes('único') && !model.propuestaValor.toLowerCase().includes('diferente')) {
      recs.push({
        category: 'Propuesta de Valor',
        icon: Sparkles,
        title: 'Destaca tu diferenciación',
        description: 'Explica qué te hace único frente a la competencia. Identifica tu ventaja competitiva sostenible.',
        priority: 'medium'
      });
    }

    // Análisis de Canales
    if (!model.canales || model.canales.split(',').length < 2) {
      recs.push({
        category: 'Canales',
        icon: Activity,
        title: 'Diversifica tus canales de distribución',
        description: 'Explora múltiples canales: online (redes sociales, web, marketplace), offline (tienda física, eventos), o híbridos.',
        priority: 'high'
      });
    }

    // Análisis de Relaciones con Clientes
    if (!model.relacionesClientes || !model.relacionesClientes.toLowerCase().includes('automatiza') && !model.relacionesClientes.toLowerCase().includes('personal')) {
      recs.push({
        category: 'Relaciones con Clientes',
        icon: Handshake,
        title: 'Optimiza la retención de clientes',
        description: 'Implementa estrategias de fidelización: programas de lealtad, servicio personalizado, comunidades o contenido exclusivo.',
        priority: 'medium'
      });
    }

    // Análisis de Fuentes de Ingresos
    if (!model.fuentesIngresos || model.fuentesIngresos.split(',').length < 2) {
      recs.push({
        category: 'Fuentes de Ingresos',
        icon: DollarSign,
        title: 'Explora modelos de ingreso adicionales',
        description: 'Considera: suscripciones recurrentes, freemium, marketplace fees, servicios premium, o productos complementarios.',
        priority: 'high'
      });
    }

    // Análisis de Recursos Clave
    if (!model.recursosClaves || model.recursosClaves.length < 20) {
      recs.push({
        category: 'Recursos Clave',
        icon: Package,
        title: 'Identifica recursos estratégicos',
        description: 'Define recursos físicos, intelectuales (patentes, datos), humanos (expertise), y financieros críticos para tu operación.',
        priority: 'medium'
      });
    }

    // Análisis de Actividades Clave
    if (!model.actividadesClaves || model.actividadesClaves.length < 20) {
      recs.push({
        category: 'Actividades Clave',
        icon: TrendingUp,
        title: 'Define procesos core del negocio',
        description: 'Mapea las actividades esenciales: producción, resolución de problemas, plataforma/red, o marketing y ventas.',
        priority: 'medium'
      });
    }

    // Análisis de Alianzas Clave
    if (!model.alianzasClaves) {
      recs.push({
        category: 'Alianzas Clave',
        icon: Handshake,
        title: 'Construye alianzas estratégicas',
        description: 'Busca partners que te ayuden a escalar: proveedores clave, alianzas tecnológicas, joint ventures, o co-marketing.',
        priority: 'low'
      });
    }

    // Análisis de Estructura de Costos
    if (!model.estructuraCostos || model.estructuraCostos.length < 20) {
      recs.push({
        category: 'Estructura de Costos',
        icon: Wallet,
        title: 'Optimiza tu estructura de costos',
        description: 'Separa costos fijos vs variables. Identifica oportunidades de economías de escala y eficiencias operativas.',
        priority: 'medium'
      });
    }

    // Recomendaciones generales de estrategia
    recs.push({
      category: 'Estrategia General',
      icon: Lightbulb,
      title: 'Valida con clientes reales',
      description: 'Antes de escalar, valida todas tus hipótesis con entrevistas a clientes, MVPs y pruebas de mercado.',
      priority: 'high'
    });

    setRecommendations(recs);
    setStep('analysis');
  };

  const handleInputChange = (field: keyof BusinessModel, value: string) => {
    setModel({ ...model, [field]: value });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 border-red-300 text-red-800';
      case 'medium': return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'low': return 'bg-blue-100 border-blue-300 text-blue-800';
      default: return 'bg-gray-100 border-gray-300 text-gray-800';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'Alta Prioridad';
      case 'medium': return 'Prioridad Media';
      case 'low': return 'Prioridad Baja';
      default: return '';
    }
  };

  if (step === 'input') {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              🚀 Analizador de Modelo de Negocio
            </h1>
            <p className="text-lg text-gray-600">
              Ingresa tu modelo de negocio y recibe recomendaciones personalizadas para mejorarlo
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Business Model Canvas</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    Segmentos de Clientes
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                    placeholder="¿Quiénes son tus clientes objetivo?"
                    value={model.segmentosClientes}
                    onChange={(e) => handleInputChange('segmentosClientes', e.target.value)}
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Target className="w-5 h-5 mr-2 text-purple-600" />
                    Propuesta de Valor
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    rows={3}
                    placeholder="¿Qué valor entregas a tus clientes?"
                    value={model.propuestaValor}
                    onChange={(e) => handleInputChange('propuestaValor', e.target.value)}
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Activity className="w-5 h-5 mr-2 text-green-600" />
                    Canales
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows={3}
                    placeholder="¿Cómo llegas a tus clientes?"
                    value={model.canales}
                    onChange={(e) => handleInputChange('canales', e.target.value)}
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Handshake className="w-5 h-5 mr-2 text-orange-600" />
                    Relaciones con Clientes
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    rows={3}
                    placeholder="¿Cómo te relacionas con ellos?"
                    value={model.relacionesClientes}
                    onChange={(e) => handleInputChange('relacionesClientes', e.target.value)}
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <DollarSign className="w-5 h-5 mr-2 text-emerald-600" />
                    Fuentes de Ingresos
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    rows={3}
                    placeholder="¿Cómo generas ingresos?"
                    value={model.fuentesIngresos}
                    onChange={(e) => handleInputChange('fuentesIngresos', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Package className="w-5 h-5 mr-2 text-indigo-600" />
                    Recursos Clave
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    rows={3}
                    placeholder="¿Qué recursos son esenciales?"
                    value={model.recursosClaves}
                    onChange={(e) => handleInputChange('recursosClaves', e.target.value)}
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <TrendingUp className="w-5 h-5 mr-2 text-pink-600" />
                    Actividades Clave
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    rows={3}
                    placeholder="¿Qué actividades son críticas?"
                    value={model.actividadesClaves}
                    onChange={(e) => handleInputChange('actividadesClaves', e.target.value)}
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Handshake className="w-5 h-5 mr-2 text-teal-600" />
                    Alianzas Clave
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    rows={3}
                    placeholder="¿Con quién te asocias?"
                    value={model.alianzasClaves}
                    onChange={(e) => handleInputChange('alianzasClaves', e.target.value)}
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-semibold text-gray-700 mb-2">
                    <Wallet className="w-5 h-5 mr-2 text-red-600" />
                    Estructura de Costos
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    rows={3}
                    placeholder="¿Cuáles son tus costos principales?"
                    value={model.estructuraCostos}
                    onChange={(e) => handleInputChange('estructuraCostos', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <button
              onClick={analyzeBusinessModel}
              className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              ✨ Analizar y Obtener Recomendaciones
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📊 Análisis de tu Modelo de Negocio
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Aquí están tus recomendaciones personalizadas para mejorar
          </p>
          <button
            onClick={() => setStep('input')}
            className="text-blue-600 hover:text-blue-800 font-semibold underline"
          >
            ← Volver a editar
          </button>
        </div>

        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Resumen del Modelo</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-semibold text-blue-900">Total Recomendaciones</p>
              <p className="text-3xl font-bold text-blue-600">{recommendations.length}</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="font-semibold text-red-900">Alta Prioridad</p>
              <p className="text-3xl font-bold text-red-600">
                {recommendations.filter(r => r.priority === 'high').length}
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-yellow-900">Prioridad Media</p>
              <p className="text-3xl font-bold text-yellow-600">
                {recommendations.filter(r => r.priority === 'medium').length}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {recommendations.map((rec, index) => {
            const Icon = rec.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
                  rec.priority === 'high' ? 'border-red-500' :
                  rec.priority === 'medium' ? 'border-yellow-500' : 'border-blue-500'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    rec.priority === 'high' ? 'bg-red-100' :
                    rec.priority === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      rec.priority === 'high' ? 'text-red-600' :
                      rec.priority === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{rec.title}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getPriorityColor(rec.priority)}`}>
                        {getPriorityLabel(rec.priority)}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2 font-medium">{rec.category}</p>
                    <p className="text-gray-700 leading-relaxed">{rec.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">🎯 Próximos Pasos</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <span>Prioriza las recomendaciones de alta prioridad y trabaja en ellas primero</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <span>Valida cada hipótesis con clientes reales antes de invertir recursos</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">3.</span>
              <span>Establece métricas (KPIs) para medir el impacto de cada mejora</span>
            </li>
            <li className="flex items-start">
              <span className="font-bold mr-2">4.</span>
              <span>Revisa y actualiza tu modelo de negocio trimestralmente</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
