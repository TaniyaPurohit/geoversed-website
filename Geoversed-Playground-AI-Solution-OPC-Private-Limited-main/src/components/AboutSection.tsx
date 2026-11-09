import React, { useState } from 'react';
import {
  Building2,
  ShieldCheck,
  Cpu,
  Layers,
  Globe,
  Award,
  FileText,
  CheckCircle2,
  MapPin,
  UserCheck,
  Sparkles,
  Mountain,
  Briefcase,
  Database,
  Network,
  Scale,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Landmark,
  Target,
  Eye,
  X,
} from 'lucide-react';

import { useLanguage } from '../i18n/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'profile' | 'objects' | 'missions' | 'governance'>('profile');
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  // National Flagship Programs from Clause 3(a)(10) of INC-33
  const nationalMissions = [
    {
      name: 'PM Gati-Shakti',
      tag: 'National Master Plan',
      desc: 'Multi-modal connectivity infrastructure mapping, digital corridor planning, and geospatial synchronization across central & state ministries.',
    },
    {
      name: 'Jal Jeevan Mission',
      tag: 'Water Security & Supply',
      desc: 'GIS-driven rural water supply tracking, Himalayan spring-shed rejuvenation, tap connection mapping, and village water safety plans.',
    },
    {
      name: 'Namami Gange',
      tag: 'River Basin Management',
      desc: 'Upper Ganga catchment mapping, floodplain zoning, sewage discharge tracking, and high-altitude river health monitoring.',
    },
    {
      name: 'SARRA',
      tag: 'Rural Resource Analytics',
      desc: 'Spatial Analytics & Rural Resource Applications for precision rural infrastructure, socio-economic surveys, and demographic planning.',
    },
    {
      name: 'CAMPA',
      tag: 'Forestry & Afforestation',
      desc: 'Compensatory Afforestation Management & Planning Authority monitoring, forest canopy density mapping, and carbon sequestration modeling.',
    },
    {
      name: 'MGNREGA',
      tag: 'Watershed & Asset Planning',
      desc: 'GIS-based watershed planning, natural resource management (NRM) spatial audits, and durable community asset geolocation.',
    },
    {
      name: 'Smart Cities Mission',
      tag: 'Urban Spatial Platforms',
      desc: 'Digital twin architectures, 3D municipal GIS modeling, utility mapping, and integrated command and control center (ICCC) data layers.',
    },
    {
      name: 'Disaster Management',
      tag: 'Himalayan Risk Reduction',
      desc: 'Landslide hazard zonation (LHZ), flash flood susceptibility modeling, seismic vulnerability maps, and real-time early warning GIS layers.',
    },
  ];

  // Core Objects from Clause 3(a) of e-MOA
  const coreObjects = [
    {
      number: '01',
      title: 'Enterprise AI & SaaS Innovation',
      icon: Cpu,
      clause: 'Clause 3(a)(1, 2, 3, 9)',
      headline: 'Designing, scaling, and commercializing AI-powered software & SaaS platforms',
      points: [
        'Enterprise-grade SaaS platforms automating complex spatial operations and digital transformations',
        'Artificial Intelligence & Machine Learning algorithms for automated satellite feature extraction',
        'Decision-support systems (DSS), predictive dashboards, and custom geospatial APIs',
      ],
    },
    {
      number: '02',
      title: 'Geospatial, Drone & LiDAR Surveys',
      icon: Layers,
      clause: 'Clause 3(a)(4, 5)',
      headline: 'High-precision terrestrial, aerial, and satellite mapping for rugged mountain topographies',
      points: [
        'Geographic Information Systems (GIS), Remote Sensing, and advanced multispectral satellite image processing',
        'UAV / Drone surveying, photogrammetry, RTK-GPS geodetic surveys, and high-density LiDAR data processing',
        '3D terrain modeling, digital elevation models (DEM), watershed delineation, and spatial geodatabase engineering',
      ],
    },
    {
      number: '03',
      title: 'Web-GIS, Cloud & Digital Platforms',
      icon: Network,
      clause: 'Clause 3(a)(6, 7)',
      headline: 'Cloud-native interactive mapping geoportals, mobile apps, and IT infrastructure',
      points: [
        'Custom Web-GIS and Mobile GIS applications with responsive spatial querying and real-time telemetry',
        'Enterprise IT consulting, system integration, automated DevOps pipelines, and robust cybersecurity protocols',
        'Scalable cloud databases (PostGIS, GeoServer) and open spatial data standard implementations',
      ],
    },
    {
      number: '04',
      title: 'DPRs & Natural Resource Engineering',
      icon: FileText,
      clause: 'Clause 3(a)(8)',
      headline: 'Detailed Project Reports and end-to-end multi-sectoral planning & monitoring',
      points: [
        'Detailed Project Reports (DPRs) and master plans in water resources, river rejuvenation, and agriculture',
        'Comprehensive environmental impact assessments, forestry conservation, and rural development frameworks',
        'Ground-truthed field monitoring, hydrogeological tracer studies, and hill town infrastructure roadmaps',
      ],
    },
  ];

  const [objectsFilter, setObjectsFilter] = useState<'all' | 'main' | 'furtherance'>('all');

  const mainObjects = [
    {
      id: 1,
      title: 'SaaS Platforms & Enterprise Software Solutions',
      text: 'To carry on the business of designing, developing, implementing, maintaining, and operating software, Software-as-a-Service (SaaS) platforms, cloud-based applications, and enterprise software solutions.',
    },
    {
      id: 2,
      title: 'Artificial Intelligence, ML & Decision-Support Systems',
      text: 'To undertake the business of development and application of Artificial Intelligence (AI), Machine Learning (ML), data analytics, automation systems, and decision-support systems.',
    },
    {
      id: 3,
      title: 'GIS, Remote Sensing, Drone & LiDAR Surveys',
      text: 'To carry on the business of Geographic Information Systems (GIS), Remote Sensing, Geospatial Technology, Drone Survey, LiDAR Survey, mapping, surveying, and allied services.',
    },
    {
      id: 4,
      title: 'Satellite Image Processing & 3D Terrain Modeling',
      text: 'To provide services in GIS mapping, satellite image processing, spatial data analysis, 3D terrain modeling, watershed mapping, and geospatial data management.',
    },
    {
      id: 5,
      title: 'Web GIS, Mobile GIS & Spatial Visualization',
      text: 'To design, develop, and implement Web GIS, Mobile GIS applications, digital mapping platforms, and data visualization systems.',
    },
    {
      id: 6,
      title: 'IT Consulting, System Integration & Cybersecurity',
      text: 'To provide information technology services including IT consulting, system integration, DevOps services, cybersecurity services, and digital transformation solutions.',
    },
    {
      id: 7,
      title: 'Consultancy, DPRs & Natural Resource Infrastructure',
      text: 'To undertake consultancy services, preparation of Detailed Project Reports (DPRs), project planning, execution, and monitoring in the fields of water resources, river rejuvenation, forestry, agriculture, rural development, environment, and infrastructure.',
    },
    {
      id: 8,
      title: 'National Flagship Programs & Public Implementing Agency',
      text: 'To act as technical consultants, service providers, or implementing agencies for government departments, public sector undertakings, private organizations, and other institutions for projects including but not limited to PM Gati-Shakti, SARRA, Jal Jeevan Mission, MGNREGA, CAMPA, Namami Gange, Smart Cities, Disaster Management, and similar programmes.',
    },
    {
      id: 9,
      title: 'Software Products, Platform Deals & APIs',
      text: 'To develop, own, license, sell, lease, or otherwise deal in software products, applications, platforms, and application programming interfaces (APIs).',
    },
  ];

  const furtheranceObjects = [
    {
      id: 1,
      title: 'Collaborations & Joint Ventures',
      text: 'To enter into agreements, collaborations, joint ventures, or partnerships with government authorities, companies, firms, institutions, or individuals for carrying out the business of the Company.',
    },
    {
      id: 2,
      title: 'Funding, Borrowing & Financial Assistance',
      text: 'To borrow, raise, or secure funds, and to obtain financial assistance, loans, grants, or investments from banks, financial institutions, investors, or other lawful sources, in accordance with applicable laws.',
    },
    {
      id: 3,
      title: 'R&D Centers & Technical Institutions',
      text: 'To establish, maintain, and operate research and development centers, training centers, and technical institutions related to the business of the Company.',
    },
    {
      id: 4,
      title: 'Intellectual Property Rights & Commercialization',
      text: 'To acquire, register, protect, use, and commercialize intellectual property rights including patents, copyrights, trademarks, designs, software, and proprietary technologies.',
    },
    {
      id: 5,
      title: 'Talent Acquisition & Technical Capacity Building',
      text: 'To recruit, employ, train, and retain professionals, consultants, and technical personnel for the efficient conduct of the business.',
    },
    {
      id: 6,
      title: 'Incidental & Conducive Lawful Acts',
      text: 'To do all such other lawful acts, deeds, and things as are incidental or conducive to the attainment of the above objects.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 bg-[#E6F8F6] border-y border-teal-200/70">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission, Vision & 5. Object Section */}
        <div id="mission-vision-objects" className="mb-16 space-y-8">
          
          {/* Top Row: Vision & Mission matching the reference design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* 4. VISION Card (Deep Royal Indigo) */}
            <div id="vision" className="scroll-mt-28 bg-[#312E81] text-white rounded-2xl border border-indigo-500/20 shadow-md p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full pointer-events-none -mr-6 -mt-6"></div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider font-['Poppins']">
                    <Eye className="w-3.5 h-3.5 text-sky-400" />
                    <span>{t('about.vision.title')}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-sky-300 bg-sky-400/10 px-2.5 py-0.5 rounded-full border border-sky-400/20">
                    {t('about.vision.tag')}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-['Poppins'] mb-3 leading-snug">
                  {t('about.vision.heading')}
                </h3>
                <p className="text-indigo-100 text-xs sm:text-sm leading-relaxed text-justify">
                  {t('about.vision.text')}
                </p>
              </div>
            </div>

            {/* MISSION Card (Soft Ice Lavender) */}
            <div id="mission" className="scroll-mt-28 bg-[#EEF2FF] rounded-2xl border border-indigo-200/80 shadow-xs p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-indigo-300 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-bl-full pointer-events-none -mr-6 -mt-6"></div>
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-['Poppins'] shadow-2xs">
                    <Target className="w-3.5 h-3.5 text-blue-600" />
                    <span>{t('about.mission.title')}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full border border-blue-200">
                    {t('about.mission.tag')}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-['Poppins'] mb-3 leading-snug">
                  {t('about.mission.heading')}
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed text-justify">
                  {t('about.mission.text')}
                </p>
              </div>
            </div>

          </div>

          {/* 5. OBJECT Container */}
          <div id="objective" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Object Header */}
            <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/70">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-semibold uppercase tracking-wider font-['Poppins'] mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t('about.objective.badge')}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-['Poppins']">
                  {t('about.objective.title')}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                  {t('about.objective.subtitle')}
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="inline-flex p-1 bg-white rounded-xl border border-slate-200 shadow-2xs text-xs font-['Poppins']">
                <button
                  type="button"
                  onClick={() => setObjectsFilter('all')}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    objectsFilter === 'all'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All (15)
                </button>
                <button
                  type="button"
                  onClick={() => setObjectsFilter('main')}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    objectsFilter === 'main'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  A. Main Objective (9)
                </button>
                <button
                  type="button"
                  onClick={() => setObjectsFilter('furtherance')}
                  className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                    objectsFilter === 'furtherance'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  B. Furtherance (6)
                </button>
              </div>
            </div>

            {/* Objects Content */}
            <div className="p-6 sm:p-8 space-y-8">
              
              {/* Part A: Main Objects */}
              {(objectsFilter === 'all' || objectsFilter === 'main') && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <h4 className="font-bold text-base sm:text-lg text-slate-900 font-['Poppins']">
                      A. MAIN OBJECTS
                    </h4>
                    <span className="text-xs text-slate-400 font-medium ml-auto">9 Primary Clauses</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mainObjects.map((obj) => (
                      <div
                        key={obj.id}
                        className="bg-slate-50/70 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white font-bold text-xs font-['Poppins'] transition-colors">
                              {obj.id}
                            </span>
                          </div>
                          <h5 className="text-xs font-bold text-slate-900 font-['Poppins'] mb-1.5 group-hover:text-blue-600 transition-colors">
                            {obj.title}
                          </h5>
                          <p className="text-slate-600 text-xs leading-relaxed">
                            {obj.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Part B: Matters Necessary for Furtherance of Objects */}
              {(objectsFilter === 'all' || objectsFilter === 'furtherance') && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                    <h4 className="font-bold text-base sm:text-lg text-slate-900 font-['Poppins']">
                      B. MATTERS WHICH ARE NECESSARY FOR FURTHERANCE OF THE OBJECTS
                    </h4>
                    <span className="text-xs text-slate-400 font-medium ml-auto">6 Incidental Clauses</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {furtheranceObjects.map((obj) => (
                      <div
                        key={obj.id}
                        className="bg-slate-50/70 hover:bg-white rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:border-blue-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2.5">
                            <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white font-bold text-xs font-['Poppins'] transition-colors">
                              {obj.id}
                            </span>
                          </div>
                          <h5 className="text-xs font-bold text-slate-900 font-['Poppins'] mb-1.5 group-hover:text-blue-600 transition-colors">
                            {obj.title}
                          </h5>
                          <p className="text-slate-600 text-xs leading-relaxed">
                            {obj.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-xs font-semibold uppercase tracking-wider font-['Poppins'] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('about.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-slate-900 font-['Poppins'] tracking-tight mb-4 leading-tight">
            {t('about.title')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* Interactive Tabs Header */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-slate-200 shadow-2xs gap-1.5 text-xs font-['Poppins']">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'profile'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{t('about.tab.profile')}</span>
            </button>

            <button
              onClick={() => setActiveTab('objects')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'objects'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{t('about.tab.objects')}</span>
            </button>

            <button
              onClick={() => setActiveTab('missions')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'missions'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>{t('about.tab.missions')}</span>
            </button>

            <button
              onClick={() => setActiveTab('governance')}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                activeTab === 'governance'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{t('about.tab.governance')}</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Corporate Overview & Identity */}
        {activeTab === 'profile' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Top 2-Column Overview (Equal Size & Length) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Left Column: Narrative */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider font-['Poppins']">
                    <Mountain className="w-4 h-4" />
                    <span>The GEOVERSED Story &amp; Vision</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-['Poppins'] leading-snug">
                    Transforming Geospatial science with Artificial Intelligence from the Central Himalayas
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Headquartered in <strong>Almora, Uttarakhand</strong>, <strong>GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED</strong> was 
                    founded to close the crucial divide between empirical on-ground Geography and cutting-edge digital computing. 
                    We operate where the fragile Himalayan terrain demands highest accuracy and ethical environmental stewardship.
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our multidisciplinary team unites geologists, GIS architects, AI software engineers, environmental scientists, 
                    and regional planners. Pursuant to our statutory Memorandum of Association, we develop scalable software products, 
                    AI models, and comprehensive Detailed Project Reports (DPRs) that empower government departments, private enterprises, 
                    and academic institutions to thrive.
                  </p>
                </div>

                {/* Key Metrics Ribbon */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100 mt-auto">
                  <div>
                    <span className="block text-2xl font-bold text-slate-900 font-['Poppins']">13</span>
                    <span className="text-xs text-slate-500">Districts Covered</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-blue-600 font-['Poppins']">53,483</span>
                    <span className="text-xs text-slate-500">km² Himalayan Atlas</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-slate-900 font-['Poppins']">100%</span>
                    <span className="text-xs text-slate-500">MCA Registered</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Official MCA Incorporation Card */}
              <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#312E81] text-white rounded-2xl p-6 sm:p-7 shadow-xl border border-indigo-500/20 space-y-5 flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-sky-400" />
                      <span className="font-bold text-xs uppercase tracking-wider text-slate-200 font-['Poppins']">
                        Official Incorporation Data
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold bg-amber-400/10 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                      Govt. of India
                    </span>
                  </div>

                  <div className="space-y-3.5 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px] font-medium">Corporate Legal Entity</span>
                      <strong className="text-white text-sm font-['Poppins'] leading-tight block mt-0.5">
                        GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED
                      </strong>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div>
                        <span className="text-slate-400 block text-[11px] font-medium">Company Structure</span>
                        <span className="text-slate-200 font-semibold">One Person Company (OPC)</span>
                        <span className="text-[10px] text-slate-400 block">Limited by Shares</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px] font-medium">Statutory Forms</span>
                        <span className="text-slate-200 font-semibold">INC-33 (e-MOA)</span>
                        <span className="text-[10px] text-slate-400 block">INC-34 (e-AOA)</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div>
                        <span className="text-slate-400 block text-[11px] font-medium">State of Incorporation</span>
                        <span className="text-slate-200 font-semibold flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-sky-400" /> Uttarakhand
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[11px] font-medium">Certificate of Incorporation</span>
                        <span className="text-slate-200 font-semibold flex items-center gap-1">
                          <a
                            href="/reports/Certificate_of_incorporation.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sky-300 hover:text-sky-200 transition-colors group/cert"
                            title="Open Official Certificate of Incorporation (PDF)"
                          >
                            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                            <span className="underline underline-offset-2 decoration-sky-400/40 group-hover/cert:decoration-sky-300">
                              Certificate
                            </span>
                            <ExternalLink className="w-3 h-3 text-slate-300 group-hover/cert:text-sky-200" />
                          </a>
                        </span>
                        <span className="text-[10px] text-slate-400 block">MCA Govt. of India</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/10">
                      <span className="text-slate-400 block text-[11px] font-medium">Founder &amp; Director</span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300">
                          <UserCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <strong className="text-white text-xs font-['Poppins']">Varun Rawat</strong>
                          <span className="text-slate-300 text-[10px] block">Director &amp; Chief Geospatial Architect</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10 text-xs mt-auto">
                  <span className="text-slate-400 block text-[11px] font-medium">Registered Office Address</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed mt-0.5">
                    Khatyari, Manoj Vihar, Almora, Uttarakhand – 263601, India
                  </p>
                </div>
              </div>

            </div>

            {/* 4 Pillars Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  icon: Mountain,
                  title: 'Himalayan Field Expertise',
                  desc: 'Decades of ground-truthed Geographical explorations and hydrological surveys across remote Himalayan basins.',
                },
                {
                  icon: Cpu,
                  title: 'Artificial Intelligence & SaaS',
                  desc: 'Enterprise software, deep learning for satellite rasters, automated spatial algorithms, and cloud APIs.',
                },
                {
                  icon: Globe,
                  title: 'Web-GIS & 3D Topography',
                  desc: 'High-density LiDAR processing, UAV drone surveys, interactive geoportals, and 3D terrain modeling.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Government Flagship Partner',
                  desc: 'Statutory mandate for PM Gati-Shakti, Jal Jeevan Mission, Namami Gange, CAMPA, and Disaster Management.',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white transition-colors mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors font-['Poppins'] mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Core e-MOA Objects & SaaS Platforms */}
        {activeTab === 'objects' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-bold text-[#0F2042] font-['Poppins'] flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Clause 3(a) — The Objects Pursued by the Company on Incorporation
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Extracted from official Ministry of Corporate Affairs Form No. INC-33 (e-Memorandum of Association)
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-[#0F2042] bg-[#0F2042]/5 px-3 py-1 rounded-full border border-slate-200 self-start sm:self-auto">
                  10 Comprehensive Clauses
                </span>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                The Company is legally authorized to design, develop, operate, and scale enterprise-grade software products, 
                AI platforms, geospatial data engines, and Detailed Project Reports. Here is the operational framework of our charter:
              </p>
            </div>

            {/* 4 Objects Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {coreObjects.map((obj, index) => {
                const Icon = obj.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:border-[#B3864B]/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-[#0F2042] text-white flex items-center justify-center font-bold text-xs font-['Poppins']">
                            {obj.number}
                          </div>
                          <div>
                            <h4 className="font-bold text-base text-[#0F2042] font-['Poppins']">
                              {obj.title}
                            </h4>
                            <span className="text-[10px] font-mono font-medium text-blue-600">
                              {obj.clause}
                            </span>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <p className="text-xs font-medium text-slate-700 mb-4 italic bg-[#F8F9FA] p-2.5 rounded-lg border border-slate-200/60">
                        "{obj.headline}"
                      </p>

                      <ul className="space-y-2 mb-4">
                        {obj.points.map((pt, pidx) => (
                          <li key={pidx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-['Poppins']">
                      <span>e-MOA Compliant</span>
                      <span className="text-[#0F2042] font-semibold">Active Operations</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: National Flagship Missions */}
        {activeTab === 'missions' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Context Box */}
            <div className="bg-gradient-to-r from-[#0F2042] to-[#1a3365] text-white rounded-2xl p-6 sm:p-7 shadow-md">
              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider font-['Poppins'] mb-1.5">
                <Landmark className="w-4 h-4" />
                <span>Statutory Mandate: Clause 3(a)(10) of e-MOA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] mb-2">
                Technical Consultants &amp; Implementing Agency for National Flagship Programs
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-4xl">
                Pursuant to Clause 10 of our Memorandum of Association, GEOVERSED is chartered to act as technical consultants, 
                service providers, or implementing agencies for Government departments, Public Sector Undertakings (PSUs), 
                and institutional bodies across India's foremost socio-economic and infrastructural programs.
              </p>
            </div>

            {/* 8 National Missions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {nationalMissions.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <h4 className="font-bold text-sm text-[#0F2042] font-['Poppins']">
                        {item.name}
                      </h4>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-600 font-semibold">
                    <span>Active Domain</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Statutory R&D & Governance Mandate */}
        {activeTab === 'governance' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* R&D and Academic Institution Objects */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider font-['Poppins']">
                  <GraduationCap className="w-4 h-4" />
                  <span>Clause 3(b)(3) — Academic &amp; R&amp;D Centers</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F2042] font-['Poppins']">
                  Research Centers &amp; Accredited Certificate Academies
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  As specifically authorized by the Ministry of Corporate Affairs, GEOVERSED is mandated to establish, 
                  maintain, and operate state-of-the-art research and development centers, technical training hubs, 
                  and technical institutes in Almora and regional campuses.
                </p>
                <div className="space-y-2 pt-2">
                  {[
                    'Conduct professional certificate courses in GIS, Remote Sensing, GPS, and Drone Mapping',
                    'NEP 2020 curriculum design for undergraduate and postgraduate university departments',
                    'One-on-one thesis and dissertation supervision across Geoinformatics and Mountain Geography',
                    'Intellectual property (IPR) generation, patenting, and proprietary GeoAI software commercialization',
                  ].map((pt, pidx) => (
                    <div key={pidx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Legal & Corporate Governance */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider font-['Poppins']">
                  <Scale className="w-4 h-4" />
                  <span>INC-34 e-AOA Corporate Governance</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F2042] font-['Poppins']">
                  Statutory Structure &amp; Shareholder Safety
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The company adheres strictly to the regulatory safeguards of the Companies Act, 2013, ensuring rigorous corporate 
                  integrity, audit accountability, and transparent institutional governance.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="p-3 bg-[#F8F9FA] rounded-lg border border-slate-200/70">
                    <strong className="text-[#0F2042] block mb-0.5">Section 122 Regulatory Adherence:</strong>
                    <span>One Person Company governance provisions governing director resolutions, minutes books, and administrative operations.</span>
                  </div>
                 

                  <div className="p-3 bg-[#F8F9FA] rounded-lg border border-slate-200/70">
                    <strong className="text-[#0F2042] block mb-0.5">Statutory Audit &amp; Witness Verification:</strong>
                    <span>Incorporation attested by Fellow Chartered Accountant (FCA) CA. Sanjay Karnatak (Membership No. 501670), Noida.</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Certificate of Incorporation Modal */}
      {isCertificateModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          onClick={() => setIsCertificateModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsCertificateModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-[#0F2042] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with National Emblem / MCA Branding */}
            <div className="text-center pb-5 border-b border-slate-200">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#0F2042]/5 text-[#0F2042] mb-3">
                <Landmark className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-[11px] font-bold tracking-widest text-blue-600 uppercase font-['Poppins']">
                Government of India • Ministry of Corporate Affairs
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#0F2042] font-['Poppins'] mt-1">
                Certificate of Incorporation
              </h3>
              <p className="text-[11px] text-slate-500 mt-1">
                [Pursuant to sub-section (2) of section 7 and sub-section (1) of section 8 of the Companies Act, 2013 and rule 18 of the Companies (Incorporation) Rules, 2014]
              </p>
            </div>

            {/* Certificate Body */}
            <div className="py-5 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <p>
                I hereby certify that <strong>GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED</strong> is incorporated on this date under the Companies Act, 2013 and that the company is a <strong>One Person Company</strong> limited by shares.
              </p>

              <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80 space-y-2.5 text-xs">
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">Corporate Entity:</span>
                  <span className="font-semibold text-[#0F2042] text-right">GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">Company Category:</span>
                  <span className="font-semibold text-[#0F2042]">One Person Company (OPC)</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">State / RoC:</span>
                  <span className="font-semibold text-[#0F2042]">RoC - Uttarakhand</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">Registered Office:</span>
                  <span className="font-semibold text-[#0F2042] text-right">Khatyari, Manoj Vihar, Almora, Uttarakhand 263601</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">Founder &amp; Director:</span>
                  <span className="font-semibold text-[#0F2042]">Varun Rawat</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Statutory Charters:</span>
                  <span className="font-semibold text-[#0F2042]">Form INC-33 (e-MOA) &amp; Form INC-34 (e-AOA)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200/60 rounded-lg text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Statutory compliance active and attested under MCA Central Registration Centre provisions.</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-3">
              <a
                href="/reports/incorporation_certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#B3864B] hover:bg-[#8C5D27] text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Open Certificate PDF</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

              <button
                type="button"
                onClick={() => setIsCertificateModalOpen(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-[#0F2042] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
