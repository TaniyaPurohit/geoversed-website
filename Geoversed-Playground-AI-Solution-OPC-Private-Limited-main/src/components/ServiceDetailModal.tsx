import React from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Sparkles,
  Layers,
  Globe,
  Layout,
  Cpu,
  ShieldCheck,
  Building2,
  GraduationCap,
  Briefcase,
  BookOpen,
  School,
  Microscope,
  Landmark,
  FileSpreadsheet,
  Users,
  BarChart3,
  Smartphone,
  Compass,
  Droplets,
  Waves,
  TreePine,
  Activity,
  FileText,
  AlertTriangle,
  Thermometer,
  TrendingUp,
  MountainSnow,
  CloudSun,
  Flame,
  Car,
  Scale,
  Gauge,
  Mountain,
  ShieldAlert,
  Sprout,
  Gem,
  PieChart,
  Zap,
  Binary,
  Bot,
  Scan,
  Laptop,
  MessageSquare,
  Cog,
  Clock,
  Award,
} from 'lucide-react';
import { ServiceItem } from '../types';
import service1Banner from '../assets/images/service_1_banner_1789822361499.webp';
import service2Banner from '../assets/images/service_2_banner_1789920757626.webp';
import service3Banner from '../assets/images/service_3_banner_1789921059747.webp';
import service4Banner from '../assets/images/service_4_banner_1789921283127.webp';
import service5Banner from '../assets/images/service_5_banner_1789921414372.webp';
import service6Banner from '../assets/images/service_6_banner_1789921648768.webp';
import service7Banner from '../assets/images/service_7_banner_1789921828579.webp';
import service8Banner from '../assets/images/service_8_banner_1790052418156.webp';
import service9Banner from '../assets/images/service_9_banner_1790053167291.webp';
import service10Banner from '../assets/images/service_10_banner_1790053408029.webp';
import service11Banner from '../assets/images/service_11_banner_1790053697808.webp';
import service12Banner from '../assets/images/service_12_banner_1790054191491.webp';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  // Technical specifications for services 02 through 12 (updated 1-12 sequence)
  const serviceDetailsMap: Record<string, { deliverables: string[]; methodology: string; keyFocus: string }> = {
    '02': {
      methodology: 'Hands-on curriculum development, GIS laboratory setup, hazard modeling using AHP & machine learning for landslide susceptibility and flash-flood modeling.',
      deliverables: ['Multi-hazard risk maps at 1:10,000 scale', 'University research workshops & training manuals', 'Field verification protocols & slope stability datasets'],
      keyFocus: 'Capacity building and empirical hazard assessment for vulnerable Himalayan hill catchments.',
    },
    '03': {
      methodology: 'Decision-support platforms, municipal GIS integration, spatial asset registry, and citizen grievance mapping.',
      deliverables: ['Administrative GIS dashboards', 'Spatial budget allocation analytics', 'Inter-departmental geo-database sync protocols'],
      keyFocus: 'Enabling evidence-backed governance for district magistrate offices and state bodies.',
    },
    '04': {
      methodology: 'Satellite photogrammetry, slope-aspect zoning, land-use land-cover (LULC) classification, and master plan formulation.',
      deliverables: ['Development suitability maps', 'Infrastructure corridor planning blueprints', 'Rural asset & road connectivity geospatial registries'],
      keyFocus: 'Balancing mountain infrastructure growth with ecological fragility and transit constraints.',
    },
    '05': {
      methodology: 'Hydrogeological mapping, isotope tracing, recharge zone delineation, and spring shed revival engineering.',
      deliverables: ['Spring inventory database (discharge, water quality, GPS)', 'Recharge zone watershed action maps', 'Community spring-shed treatment plans'],
      keyFocus: 'Securing Himalayan water security by rejuvenating declining mountain springs (Dharas & Naulas).',
    },
    '06': {
      methodology: 'Comprehensive baseline environmental monitoring, ecological sensitivity indexing, GIS overlay modeling, and mitigation matrices.',
      deliverables: ['Statutory EIA & EMP reports', 'Flora & fauna habitat sensitivity overlays', 'Post-project environmental monitoring frameworks'],
      keyFocus: 'Rigorous compliance for mountain highways, hydro projects, tunnels, and eco-tourism initiatives.',
    },
    '07': {
      methodology: 'Downscaled CMIP6 climate models, temperature/precipitation trend regression, and socio-ecological vulnerability mapping.',
      deliverables: ['Climate vulnerability atlas for hill districts', 'Sectoral adaptation strategies (agriculture, water, forests)', 'Extreme weather risk forecasting reports'],
      keyFocus: 'Actionable resilience roadmaps for Himalayan ecosystems under changing climatic regimes.',
    },
    '08': {
      methodology: 'Multi-criteria spatial analysis synthesizing seismic hazard, slope gradients, water availability, structural load, and tourist influx.',
      deliverables: ['Town carrying capacity scorecards', 'Zonewise construction density ceiling guidelines', 'Urban emergency evacuation spatial plans'],
      keyFocus: 'Preventing subsidence and ecological collapse in rapidly urbanizing hill towns.',
    },
    '09': {
      methodology: 'High-resolution multispectral remote sensing, field ground-truthing, forest canopy density modeling, and demographic GIS correlation.',
      deliverables: ['High-precision resource cadastre', 'NTFP and medicinal herb distribution mapping', 'Human capital and skill-level geo-spatial distribution'],
      keyFocus: 'Sustainable stewardship of natural assets coupled with local economic empowerment.',
    },
    '10': {
      methodology: 'Machine learning & deep neural network models (CNNs, Random Forest, U-Net) applied to high-resolution satellite imagery, multi-spectral bands, and spatial time-series datasets.',
      deliverables: ['Predictive hazard & terrain susceptibility models', 'Automated geospatial feature extraction workflows', 'AI-driven land use anomaly & change detection maps'],
      keyFocus: 'Leveraging AI/ML for proactive environmental monitoring, predictive hazard modeling, and automated spatial analytics.',
    },
    '11': {
      methodology: 'Hands-on experiential workshops, participatory GIS (PGIS), mobile GPS/GNSS field data capture routines, and customized administrative training modules.',
      deliverables: ['Step-by-step GIS & Remote Sensing training manuals', 'Hands-on practical field verification workshops', 'Certified geospatial literacy modules for local officials and community champions'],
      keyFocus: 'Building grassroots and institutional self-reliance in spatial technologies across Himalayan hill districts.',
    },
    '12': {
      methodology: 'NEP 2020 outcome-based curriculum architecture, structured hands-on lab practicals, comprehensive similarity & plagiarism checks, and individualized dissertation thesis mentoring with publication support.',
      deliverables: ['Accredited UG/PG/Diploma curricula & syllabi', 'Practical laboratory exercise workbooks & open-source QGIS geodatabases', 'One-on-one virtual dissertation guidance & milestone reviews', 'Turnitin/Ouriginal similarity verification certificates', 'Scopus & UGC CARE journal publication support'],
      keyFocus: 'Curriculum design for Geoinformatics, Geography, and Environmental Science, plus dissertation/thesis supervision across all academic levels.',
    },
  };

  const isService01 = service.id === '01';
  const isService02 = service.id === '02';
  const isService03 = service.id === '03';
  const isService04 = service.id === '04';
  const isService05 = service.id === '05';
  const isService06 = service.id === '06';
  const isService07 = service.id === '07';
  const isService08 = service.id === '08';
  const isService09 = service.id === '09';
  const isService10 = service.id === '10';
  const isService11 = service.id === '11';
  const isService12 = service.id === '12';
  const currentDetails = serviceDetailsMap[service.id] || {
    methodology: 'State-of-the-art field geoscience instrumentation paired with modern GIS analysis.',
    deliverables: ['Technical survey reports', 'GIS layer datasets', 'Policy recommendation brief'],
    keyFocus: 'Sustainable Himalayan development.',
  };

  return (
    <div
      id="service-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="service-detail-modal-container"
        className={`bg-white rounded-2xl shadow-2xl w-full ${
          isService01 || isService02 || isService03 || isService04 || isService05 || isService06 || isService07 || isService08 || isService09 || isService10 || isService11 || isService12 ? 'max-w-4xl' : 'max-w-2xl'
        } overflow-hidden border border-slate-100 max-h-[92vh] flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#0F2042] text-white p-6 relative shrink-0">
          <button
            id="service-detail-modal-close-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="inline-flex items-center gap-2 bg-[#B3864B] text-white font-bold text-xs tracking-wider px-2.5 py-1 rounded-[4px] mb-3">
            SERVICE {service.id}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-['Poppins'] pr-8 leading-snug">
            {service.title}
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-1 flex items-center gap-2">
            <span>{service.category}</span>
            {isService01 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">Custom GIS Platforms &amp; Web-GIS Portals</span>
              </>
            )}
            {isService02 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">Mapping | Spatial Analysis | Research • Learning</span>
              </>
            )}
            {isService03 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">g-Governance Dashboard • Real-time Monitoring &amp; Decision Support</span>
              </>
            )}
            {isService04 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">GIS Mapping • Spatial Analysis • Sustainable Planning • Community Development</span>
              </>
            )}
            {isService05 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">Reviving Himalayan Springs • Mapping Watersheds • Conserving Naulas &amp; Dharas</span>
              </>
            )}
            {isService06 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">Ecological Mapping • Impact Prediction • Mitigation Planning • Compliance</span>
              </>
            )}
            {isService07 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">Field Research &amp; Climate Monitoring • GIS Mapping &amp; Satellite Analysis</span>
              </>
            )}
            {isService08 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">Himalayan Hill Towns • Sustainable Planning &amp; Carrying Capacity Analysis</span>
              </>
            )}
            {isService09 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">Resource Atlas for Uttarakhand • Thematic Natural &amp; Human Resource Mapping</span>
              </>
            )}
            {isService10 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">Real-Time Geospatial Intelligence • Neural Networks &amp; Computer Vision</span>
              </>
            )}
            {isService11 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">Preparedness &amp; Training • Hazard Mapping • Carrying Capacity &amp; Sustainability</span>
              </>
            )}
            {isService12 && (
              <>
                <span className="text-slate-500">•</span>
                <span className="text-[#B3864B] font-medium">NEP 2020 Syllabus • Practical Modules • Online Guidance • Plagiarism Check • Publication Support</span>
              </>
            )}
          </p>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          {/* SERVICE 01 DETAILED SPECIALIZED VIEW */}
          {isService01 ? (
            <div className="space-y-6">
              {/* Service 01 Banner */}
              <div
                id="service-01-banner-container"
                className="rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-[#041326]"
              >
                <img
                  id="service-01-banner-img"
                  src={service1Banner}
                  loading="lazy"
                  decoding="async"
                  alt="Service 01 GIS and Web-GIS Development"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overview */}
              <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  <strong className="text-[#0F2042]">GEOVERSED</strong> develops custom GIS platforms and Web-GIS portals for government, academia, and industry. We build end-to-end systems: spatial database design (PostGIS), QGIS plugins, and interactive Web-GIS dashboards using Leaflet, Mapbox, and GeoServer.
                </p>
              </div>

              {/* What We Do */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  What We Do
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    {
                      title: 'Base Map Creation',
                      desc: 'Accurate topological, cadastral, and thematic base layer mapping.',
                      icon: Layers,
                    },
                    {
                      title: 'Geo-Referencing',
                      desc: 'Coordinate rectification, high-resolution spatial alignment, and CRS conversion.',
                      icon: Compass,
                    },
                    {
                      title: 'Spatial Analysis',
                      desc: 'Multi-criteria spatial analysis, proximity modeling, and overlay intelligence.',
                      icon: Globe,
                    },
                    {
                      title: '3D Terrain Modelling',
                      desc: 'High-precision digital elevation models (DEM), slope, and 3D surface meshes.',
                      icon: Mountain,
                    },
                    {
                      title: 'Mobile GIS Apps for Field Survey',
                      desc: 'Offline and real-time mobile GIS applications for on-ground field data collection.',
                      icon: Smartphone,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#B3864B]/40 transition-colors shadow-xs"
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-[#0F2042]/5 flex items-center justify-center text-[#B3864B]">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                          {item.title}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Why Us Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#B3864B]" />
                      Deliverables
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        { title: 'Web-GIS Portal', detail: 'Interactive browser-based mapping dashboard with query and export tools' },
                        { title: 'Mobile App', detail: 'Field data collection app for on-ground surveying' },
                        { title: 'Spatial Database', detail: 'Engineered PostGIS / Spatialite database architecture' },
                        { title: 'User Manual & Training', detail: 'Step-by-step user documentation and capacity building sessions' },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#0F2042]">{item.title}</span>
                            <span className="text-slate-500"> — {item.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Why Us */}
                <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-3 font-['Poppins'] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B3864B]" />
                      Why Us?
                    </h4>
                    <p className="text-sm font-medium text-white mb-4 leading-relaxed">
                      "Field expertise + Smart technology, cost-effective, made for hill states."
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Field Expertise + Smart Technology:</strong> Ground-truthed spatial understanding combined with modern web frameworks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Cost-Effective:</strong> Powered by open-source stacks (PostGIS, GeoServer, Leaflet, QGIS) with zero recurring licensing burdens.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Made for Hill States:</strong> Engineered specifically for the rugged terrain, elevation variance, and logistical challenges of Himalayan hill regions.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : isService02 ? (
            /* SERVICE 02 DETAILED SPECIALIZED VIEW */
            <div className="space-y-6">
              {/* Service 02 Banner */}
              <div
                id="service-02-banner-container"
                className="rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-[#041326]"
              >
                <img
                  id="service-02-banner-img"
                  src={service2Banner}
                  loading="lazy"
                  decoding="async"
                  alt="Service 02 Application of GIS in Education and Research"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overview */}
              <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We bring GIS into classrooms and labs. We help universities and schools set up GIS labs, develop practical curricula, and guide UG/PG/PhD research using spatial methods.
                </p>
              </div>

              {/* What We Do */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  What We Do
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    {
                      title: 'Lab Setup',
                      desc: 'Complete hardware, workstation, and open-source GIS software setup with Himalayan spatial data.',
                      icon: School,
                    },
                    {
                      title: 'Syllabus Design',
                      desc: 'Curriculum integration, chapter-wise practical modules, and bilingual learning materials in Hindi and English.',
                      icon: BookOpen,
                    },
                    {
                      title: 'Hands-on Workshops',
                      desc: 'Practical, interactive training on QGIS, Remote Sensing, GPS survey, and field mobile data collection.',
                      icon: Laptop,
                    },
                    {
                      title: 'Research Guidance',
                      desc: 'Guiding UG/PG/PhD students and faculty with modern spatial methods, modeling, and dissertation analysis.',
                      icon: Microscope,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#B3864B]/40 transition-colors shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-[#0F2042]/5 flex items-center justify-center text-[#B3864B]">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                            {item.title}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Why Us Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#B3864B]" />
                      Deliverables
                    </h4>
                    <ul className="space-y-2.5">
                      {[
                        { title: 'Lab Setup', detail: 'Turnkey GIS laboratory establishment, software installation & Himalayan datasets' },
                        { title: 'Practical Manuals', detail: 'Step-by-step practical manuals, exercises & bilingual coursework materials' },
                        { title: 'Research Guidance', detail: 'Complete spatial research methodology support, satellite data selection & spatial modeling' },
                        { title: 'Publication Support', detail: 'High-resolution thematic maps, publication-grade figures & research paper assistance' },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#0F2042]">{item.title}</span>
                            <span className="text-slate-500"> — {item.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Why Us */}
                <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-3 font-['Poppins'] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B3864B]" />
                      Why GEOVERSED?
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      We are educators first. With 20+ years of field expertise across the Himalayas, we translate complex geoscience concepts into intuitive, accessible, and practical learning experiences.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Bilingual Delivery:</strong> Learning materials and mentorship delivered in both Hindi and English for hill region institutions.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Open-Source Stack:</strong> Low-cost, sustainable setups using QGIS, Google Earth Engine, and open spatial data without recurring licensing fees.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>70% Hands-on:</strong> Experiential learning connecting classroom theory with on-ground GPS surveys and live spatial mapping.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : isService03 ? (
            /* SERVICE 03 DETAILED SPECIALIZED VIEW */
            <div className="space-y-6">
              {/* Service 03 Banner */}
              <div
                id="service-03-banner-container"
                className="rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-[#041326]"
              >
                <img
                  id="service-03-banner-img"
                  src={service3Banner}
                  loading="lazy"
                  decoding="async"
                  alt="Service 03 Application of GIS and Web-GIS for Developing g-Governance"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overview */}
              <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We provide digital governance solutions using geospatial intelligence. We create village-level to district-level g-Governance portals for asset mapping, scheme monitoring, and public service delivery.
                </p>
              </div>

              {/* What We Do */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  What We Do
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    {
                      title: 'Gram Panchayat Asset Mapping',
                      desc: 'Cadastral & village boundary level geo-tagging of public infrastructure, water points, schools, and civic utilities.',
                      icon: Landmark,
                    },
                    {
                      title: 'PMGSY Road Monitoring',
                      desc: 'Geo-spatial alignment, slope stability analysis, all-weather connectivity tracking, and road condition monitoring.',
                      icon: MapPin,
                    },
                    {
                      title: 'Jal Jeevan Mission Dashboard',
                      desc: 'Real-time tap water supply coverage, functional household tap connection (FHTC) verification, and water source tracking.',
                      icon: Layers,
                    },
                    {
                      title: 'Disaster Management GIS',
                      desc: 'Multi-hazard vulnerability mapping, landslide risk zones, emergency response routing, and incident reporting.',
                      icon: ShieldCheck,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#B3864B]/40 transition-colors shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-[#0F2042]/5 flex items-center justify-center text-[#B3864B]">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                            {item.title}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#B3864B]" />
                      Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {[
                        {
                          title: 'g-Governance Portal',
                          detail: 'Multi-tiered, interactive Web-GIS platform linking village Gram Panchayats with Block and District administration.',
                        },
                        {
                          title: 'Real-Time Dashboards',
                          detail: 'Interactive KPI metrics, scheme performance monitoring, fund utilization, and geo-tagged grievance tracking.',
                        },
                        {
                          title: 'Decision Support System',
                          detail: 'Spatial intelligence tools enabling administrators to simulate scenarios and prioritize sanctioning with location data.',
                        },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#0F2042]">{item.title}</span>
                            <span className="text-slate-500"> — {item.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact */}
                <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-3 font-['Poppins'] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B3864B]" />
                      Measurable Impact
                    </h4>
                    <div className="p-3.5 rounded-lg bg-[#B3864B]/15 border border-[#B3864B]/40 mb-3.5">
                      <p className="text-xs sm:text-sm font-medium text-amber-200 leading-snug">
                        <strong>Impact:</strong> Transparency, better planning for Almora, Uttarakhand.
                      </p>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Transparent Administration:</strong> Public visibility of ongoing works, geo-tagged audits, and citizen-accessible status maps.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Targeted District Planning:</strong> Objective, data-backed budget allocation eliminating scheme duplication across hilly blocks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Offline-to-Cloud Field Sync:</strong> Mobile GIS tools built for frontline staff working in remote, low-connectivity mountain terrain.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : isService04 ? (
            /* SERVICE 04 DETAILED SPECIALIZED VIEW */
            <div className="space-y-6">
              {/* Service 04 Banner */}
              <div
                id="service-04-banner-container"
                className="rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-[#2b1810]"
              >
                <img
                  id="service-04-banner-img"
                  src={service4Banner}
                  loading="lazy"
                  decoding="async"
                  alt="Service 04 Urban and Rural Planning"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overview */}
              <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We provide data-driven master plans for hill towns and villages where carrying capacity is critical. Our plans integrate slope, landslide, water, and livelihood data.
                </p>
              </div>

              {/* What We Do */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  What We Do
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    {
                      title: 'Land Use Mapping',
                      desc: 'High-resolution Existing Land Use (ELU) & Proposed Land Use (PLU) mapping, zoning, and carrying capacity audits.',
                      icon: Layers,
                    },
                    {
                      title: 'Suitability Analysis',
                      desc: 'Multi-criteria slope, aspect, lithology, landslide hazard, and drainage buffer analysis for safe construction.',
                      icon: Compass,
                    },
                    {
                      title: 'Infrastructure Gap Analysis',
                      desc: 'Evaluating water supply, sewage, road networks, health sub-centres, and public amenity access using GIS.',
                      icon: Building2,
                    },
                    {
                      title: 'Rural Development Plans',
                      desc: 'Gram Panchayat Development Plans (GPDP), village asset mapping, spring protection, and local livelihood planning.',
                      icon: School,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#B3864B]/40 transition-colors shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-[#0F2042]/5 flex items-center justify-center text-[#B3864B]">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                            {item.title}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Why Us Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#B3864B]" />
                      Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {[
                        {
                          title: 'Master Plan Maps',
                          detail: 'Comprehensive GIS-based master plan maps, sectoral zoning layouts & village development plan maps (A0 ready).',
                        },
                        {
                          title: 'DPR (Detailed Project Reports)',
                          detail: 'Complete technical DPR documentation including carrying capacity, infrastructure gap audits & budget shelves.',
                        },
                        {
                          title: '3D Visualizations',
                          detail: '3D digital elevation terrain models, building height regulations & slope-sensitive visual simulations.',
                        },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#0F2042]">{item.title}</span>
                            <span className="text-slate-500"> — {item.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Why Us */}
                <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-3 font-['Poppins'] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B3864B]" />
                      Himalayan Planning Focus
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Himalayan settlements cannot be planned like the plains. Our plans are grounded in hill ecology, carrying capacity, and mountain hydrology.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Carrying Capacity Centric:</strong> Analyzing slope stability, aquifer recharge, and environmental limits before zoning.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Community-Validated GPDP:</strong> Combining household surveys and participatory GIS (PGIS) directly with Gram Sabhas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Field-Verified Precision:</strong> Blending drone mapping with on-ground verification across Uttarakhand hill districts.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : isService05 ? (
            /* SERVICE 05 DETAILED SPECIALIZED VIEW */
            <div className="space-y-6">
              {/* Service 05 Banner */}
              <div
                id="service-05-banner-container"
                className="rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-[#041c24]"
              >
                <img
                  id="service-05-banner-img"
                  src={service5Banner}
                  loading="lazy"
                  decoding="async"
                  alt="Service 05 Springs and River Rejuvenation"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overview */}
              <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Core Himalayan expertise. We map springs, delineate recharge zones, and design recharge pits, check dams, and community-based rejuvenation plans.
                </p>
              </div>

              {/* Method & Scientific Approach */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Method &amp; Approach
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    {
                      title: 'Hydrogeological Mapping',
                      desc: 'Rock strata, lithology, lineaments, strike/dip angles, fault zones, and subsurface aquifer boundary delineation.',
                      icon: Compass,
                    },
                    {
                      title: 'Spring Inventory via GIS',
                      desc: 'GPS-tagged inventory of Naulas, Dharas & Gadheras with perennial vs. seasonal flow status and household dependency.',
                      icon: MapPin,
                    },
                    {
                      title: 'Isotope and Discharge Data',
                      desc: 'Flow discharge tracking (L/min), isotope tracing for recharge elevation zones, and multi-season water quality audits.',
                      icon: Droplets,
                    },
                    {
                      title: 'Community PRA',
                      desc: 'Participatory Rural Appraisal (PRA) engaging Van Panchayats, elders, and women self-help groups for traditional wisdom.',
                      icon: Users,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#B3864B]/40 transition-colors shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-[#0F2042]/5 flex items-center justify-center text-[#B3864B]">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                            {item.title}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Regional Impact Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#B3864B]" />
                      Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {[
                        {
                          title: 'Spring Atlas',
                          detail: 'Comprehensive Web-GIS & high-resolution printed atlas of springs, catchments, recharge zones & traditional Naulas (A0 ready).',
                        },
                        {
                          title: 'Rejuvenation Plan',
                          detail: 'Detailed engineering DPR with micro-sited recharge pits, staggered contour trenches, check dams, and native broadleaf afforestation.',
                        },
                        {
                          title: 'Monitoring Protocol',
                          detail: 'Long-term community-managed and IoT discharge telemetry protocols tracking post-monsoon and lean-season discharge revival.',
                        },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#0F2042]">{item.title}</span>
                            <span className="text-slate-500"> — {item.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Himalayan Expertise */}
                <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-3 font-['Poppins'] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B3864B]" />
                      Core Himalayan Expertise
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Over 70% of drinking water in Uttarakhand hill villages depends directly on natural springs. Our work ensures these critical mountain lifelines remain perennial.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Fracture vs. Seepage Hydrogeology:</strong> Precision recharge micro-siting based on structural geology, not guesswork.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Naula &amp; Dhara Preservation:</strong> Integrating architectural conservation of heritage water shrines with modern watershed science.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Van Panchayat Empowerment:</strong> Training village youth and women as barefoot hydrogeologists to protect aquifer recharge zones.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : isService06 ? (
            /* SERVICE 06 DETAILED SPECIALIZED VIEW */
            <div className="space-y-6">
              {/* Service 06 Banner */}
              <div
                id="service-06-banner-container"
                className="rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-[#04192d]"
              >
                <img
                  id="service-06-banner-img"
                  src={service6Banner}
                  loading="lazy"
                  decoding="async"
                  alt="06 Environmental Impact Assessment GEOVERSED Almora"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overview */}
              <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  We conduct EIA for roads, buildings, hydropower, and tourism projects in eco-sensitive hill zones with mitigation plans.
                </p>
              </div>

              {/* What We Do */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  What We Do
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    {
                      title: 'Baseline Data Collection',
                      desc: 'Multi-season air quality (PM2.5/PM10), water chemistry testing, noise levels, soil stability, and biodiversity inventories.',
                      icon: Activity,
                    },
                    {
                      title: 'Impact Prediction',
                      desc: 'GIS-driven spatial impact modeling on forest fragmentation, slope stability, river siltation, and wildlife corridors.',
                      icon: Compass,
                    },
                    {
                      title: 'EMP (Environment Management Plan)',
                      desc: 'Tailored hill mitigation plans, bio-engineering slope stabilization, compensatory afforestation, and muck disposal layouts.',
                      icon: ShieldCheck,
                    },
                    {
                      title: 'Public Consultation Mapping',
                      desc: 'Stakeholder & community consultation maps, local grievance analysis, and bilingual presentation materials for public hearings.',
                      icon: Users,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#B3864B]/40 transition-colors shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-[#0F2042]/5 flex items-center justify-center text-[#B3864B]">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                            {item.title}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Hill-Zone Compliance Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#B3864B]" />
                      Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {[
                        {
                          title: 'Comprehensive EIA Report',
                          detail: 'Full environmental impact assessment compliant with MoEF&CC and SEIAA Uttarakhand guidelines.',
                        },
                        {
                          title: 'Environment Management Plan (EMP)',
                          detail: 'Actionable slope stabilization, green belt development, muck disposal, and budget allocations.',
                        },
                        {
                          title: 'GIS Sensitivity & Consultation Atlas',
                          detail: 'Thematic GIS maps for baseline sensitivities, project buffer impacts, and community public consultation hearings.',
                        },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#0F2042]">{item.title}</span>
                            <span className="text-slate-500"> — {item.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Eco-Sensitive Hill Zones Focus */}
                <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-3 font-['Poppins'] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B3864B]" />
                      Himalayan Eco-Sensitive Expertise
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      High altitude roads, run-of-river dams, eco-resorts, and bridges demand mountain-specific ecological safeguards.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Slope &amp; Landslide Prone Zoning:</strong> Identifying critical slip surfaces and landslide zones prior to excavation.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Aquifer &amp; Spring Protection:</strong> Ensuring construction doesn't breach recharge catchments of drinking water springs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Transparent Public Hearing:</strong> Enabling local Himalayan communities to review spatial impacts in accessible local terms.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : isService07 ? (
            /* SERVICE 07 DETAILED SPECIALIZED VIEW */
            <div className="space-y-6">
              {/* Service 07 Banner */}
              <div
                id="service-07-banner-container"
                className="rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-[#041c38]"
              >
                <img
                  id="service-07-banner-img"
                  src={service7Banner}
                  loading="lazy"
                  decoding="async"
                  alt="07 Climate Change Studies GEOVERSED Almora"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overview */}
              <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Assessing climate impacts on Himalayas — temperature trends, rainfall variability, glacial retreat, crop shifts, and community vulnerability.
                </p>
              </div>

              {/* Climate Assessment Pillars */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  What We Do &amp; Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {[
                    {
                      title: 'Temperature & Rainfall Trends',
                      desc: 'Multi-decadal trend analysis across IMD & automatic weather stations (AWS), tracking warming rate anomalies and erratic rainfall spells.',
                      icon: Thermometer,
                    },
                    {
                      title: 'Glacial Retreat & Ice Melt',
                      desc: 'Multi-temporal satellite imagery mapping retreat rates, terminus migration, snowline dynamics, and moraine-dammed glacial lakes (GLOF).',
                      icon: MountainSnow,
                    },
                    {
                      title: 'Crop Shifts & Agronomy',
                      desc: 'Documenting upward migration of apple and temperate fruit belts, shift in traditional crop cycles, and horticulture heat-stress indices.',
                      icon: TrendingUp,
                    },
                    {
                      title: 'Community Vulnerability',
                      desc: 'Household and Gram Panchayat vulnerability indices combining socio-economic exposure, spring depletion, and hazard exposure.',
                      icon: Users,
                    },
                    {
                      title: 'High-Altitude Monitoring',
                      desc: 'Ground truth field observations with GPS, weather data loggers, time-lapse glacial monitoring, and community citizen science.',
                      icon: Compass,
                    },
                    {
                      title: 'Climate Modeling & GIS',
                      desc: 'Downscaling CMIP6 climate model projections for Himalayan river basins, catchment discharge shifts, and flood surge predictions.',
                      icon: Layers,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#B3864B]/40 transition-colors shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-[#0F2042]/5 flex items-center justify-center text-[#B3864B]">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                            {item.title}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Himalayan Adaptation Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#B3864B]" />
                      Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {[
                        {
                          title: 'Vulnerability Maps',
                          detail: 'Village-level and watershed-scale GIS vulnerability atlases detailing exposure, climate hazards, and coping capacity.',
                        },
                        {
                          title: 'Adaptation Plans for Hill Villages & Cities',
                          detail: 'Community-level and municipal climate adaptation blueprints — drought mitigation, snowmelt harvesting, and resilient town infrastructure.',
                        },
                        {
                          title: 'Climate Impact & Glacial Assessment Reports',
                          detail: 'Technical scientific DPRs, temperature and precipitation time-series dossiers, and policy briefs for state and district authorities.',
                        },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#0F2042]">{item.title}</span>
                            <span className="text-slate-500"> — {item.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Himalayan Adaptation Focus */}
                <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-3 font-['Poppins'] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B3864B]" />
                      Mountain Climate Resilience
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      The Himalayas are warming faster than the global mean. Our grounded research bridges satellite records with village-level realities.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Glacier &amp; Stream Correlative Data:</strong> Tracking how upstream glacial shrinkage impacts downstream perennial drinking water sources.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Hill Agro-Ecological Shift:</strong> Spatial mapping of changing crop altitudes to safeguard mountain farming livelihoods.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>City &amp; Village Adaptation:</strong> Actionable strategies for water conservation, storm runoff diversion, and building safety in hill towns.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : isService08 ? (
            /* SERVICE 08 DETAILED SPECIALIZED VIEW */
            <div className="space-y-6">
              {/* Service 08 Banner */}
              <div
                id="service-08-banner-container"
                className="rounded-xl overflow-hidden border border-slate-200/90 shadow-sm bg-[#5c3e21]"
              >
                <img
                  id="service-08-banner-img"
                  src={service8Banner}
                  loading="lazy"
                  decoding="async"
                  alt="08 Carrying Capacity of Hill Cities and Towns GEOVERSED Almora"
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overview */}
              <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Our flagship service for Almora, Nainital, Mussoorie-type towns. We calculate ecological, physical, and social carrying capacity to control over-tourism and construction.
                </p>
              </div>

              {/* Method: Data Integration */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Method: Water, Waste, Traffic, Housing &amp; Hazard Data Integration in GIS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {[
                    {
                      title: 'Hill Town Buildings & Slopes',
                      desc: 'GIS slope stability analysis, building footprint density, built-up vs. slope limits, and structural load on fragile hill contours.',
                      icon: Mountain,
                    },
                    {
                      title: 'Water Supply & Springs',
                      desc: 'Spring recharge capacity, daily per-capita availability vs. peak tourism demand, and municipal supply deficits.',
                      icon: Droplets,
                    },
                    {
                      title: 'Waste Management',
                      desc: 'Municipal solid waste generation metrics, sewage treatment capacity (STPs), and plastic influx during holiday weekends.',
                      icon: ShieldAlert,
                    },
                    {
                      title: 'Road & Traffic Capacity',
                      desc: 'Arterial hill road saturation thresholds, bottle-neck choke points, parking deficit analysis, and emergency egress safety.',
                      icon: Car,
                    },
                    {
                      title: 'Ecological & Social Balance',
                      desc: 'Equilibrium modeling between local community living quality, forest cover retention, and economic tourism pressures.',
                      icon: Scale,
                    },
                    {
                      title: 'Environmental Limit Gauge',
                      desc: 'Seismic zoning, landslide vulnerability overlay, flash flood corridors, and composite carrying capacity saturation alerts.',
                      icon: AlertTriangle,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white hover:border-[#B3864B]/40 transition-colors shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-7 h-7 rounded-lg bg-[#0F2042]/5 flex items-center justify-center text-[#B3864B]">
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                            {item.title}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Flagship Focus */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-5 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[#B3864B]" />
                      Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {[
                        {
                          title: 'Carrying Capacity Report',
                          detail: 'Exhaustive scientific assessment calculating ecological, physical, infrastructural, and social saturation levels.',
                        },
                        {
                          title: 'Policy Brief for Government',
                          detail: 'Actionable executive policy briefs for Urban Development Directorate (UDD), District Administrations, and Municipal Boards.',
                        },
                        {
                          title: 'Zoning & Master Plan Guidelines',
                          detail: 'Hill building height restrictions, slope development prohibitions, and dynamic tourist vehicle entry caps.',
                        },
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-[#0F2042]">{item.title}</span>
                            <span className="text-slate-500"> — {item.detail}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Flagship Impact */}
                <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-3 font-['Poppins'] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#B3864B]" />
                      Flagship Hill Town Protection
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      Uncontrolled construction and over-tourism push hill stations like Almora, Nainital, and Mussoorie past their breaking points.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-200">
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Slope &amp; Subsidence Prevention:</strong> Pinpointing critical overload on fragile slopes to prevent Joshimath-like subsidence crises.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Water Security Equilibrium:</strong> Determining exact population and visitor limits before municipal water supply fails.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Smart Decongestion:</strong> Decentralizing commercial density toward sustainable satellite locations.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : isService09 ? (
            /* SERVICE 09 DETAILED SPECIALIZED VIEW */
            <div className="space-y-6">
              {/* Photo-accurate Infographic Banner */}
              <div className="rounded-xl overflow-hidden border border-slate-200/80 shadow-xs relative group bg-slate-900">
                <div className="relative w-full overflow-hidden bg-slate-950">
                  <img
                    src={service9Banner}
                    loading="lazy"
                    decoding="async"
                    alt="Natural and Human Resource Mapping - GEOVERSED Smart Solution Almora"
                    className="w-full h-auto object-contain max-h-[380px] sm:max-h-[440px] mx-auto group-hover:scale-[1.01] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* 3 Core Pillars Ribbon (Matching bottom ribbon in photo) */}
                <div className="bg-[#0F2042] text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-['Poppins'] border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Sparkles className="w-3.5 h-3.5 text-[#B3864B]" />
                    <span className="font-semibold">Skills &amp; Capacity Building</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Compass className="w-3.5 h-3.5 text-[#B3864B]" />
                    <span className="font-semibold">Data-Driven Analysis</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B3864B]" />
                    <span className="font-semibold">Resource Optimization</span>
                  </div>
                </div>
              </div>

              {/* Photo-accurate Live Scientific Indicators Strip (4 Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Metric 1: Forest Cover */}
                <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-slate-200/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Forest Cover</span>
                    <TreePine className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-base font-extrabold text-[#0F2042] font-['Poppins']">
                    45.4% (24,305 km²)
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Dense: <strong className="text-emerald-700">32%</strong> • Open: <strong>13%</strong>
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                    FSI 2024 Official Census
                  </div>
                </div>

                {/* Metric 2: Water Resources */}
                <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-slate-200/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Water Resources</span>
                    <Droplets className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-base font-extrabold text-blue-600 font-['Poppins']">
                    120+ Rivers &amp; Lakes
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Catchments: <strong className="text-slate-800">12 Major Watersheds</strong>
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                    Naini, Bhimtal &amp; Glacial sources
                  </div>
                </div>

                {/* Metric 3: Population & Demographics */}
                <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-slate-200/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Population</span>
                    <Users className="w-4 h-4 text-[#B3864B]" />
                  </div>
                  <div className="text-base font-extrabold text-[#0F2042] font-['Poppins']">
                    ~11.4 Million
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Literacy: <strong className="text-slate-800">79.6%</strong>
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                    Rural: 70% • Urban: 30%
                  </div>
                </div>

                {/* Metric 4: Workforce Profile */}
                <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-slate-200/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-slate-500 uppercase">Workforce Profile</span>
                    <Briefcase className="w-4 h-4 text-[#B3864B]" />
                  </div>
                  <div className="text-base font-extrabold text-[#B3864B] font-['Poppins']">
                    ~4.2M Skilled
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Agri: <strong>48%</strong> • Serv: <strong>34%</strong> • Ind: <strong>18%</strong>
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                    ITI &amp; Polytechnic database
                  </div>
                </div>
              </div>

              {/* Tagline Callout */}
              <div className="bg-[#B3864B]/10 border-l-4 border-[#B3864B] p-4 rounded-r-xl">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-5 h-5 text-[#B3864B] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase font-bold text-[#B3864B] tracking-wider mb-1">
                      State Resource Credo
                    </div>
                    <p className="text-[#0F2042] font-medium text-xs sm:text-sm leading-relaxed italic">
                      "GIS Service • Resource Atlas for Uttarakhand — Thematic Mapping — Forest &amp; Land Use • Hydrology &amp; Watersheds • Mineral Deposits &amp; Geology • Population &amp; Demographics • Agricultural Zones • Human Resources &amp; Infrastructure — Know What Uttarakhand Has."
                    </p>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
                  <p>
                    A state cannot be planned without knowing what it has. Uttarakhand possesses <strong className="text-[#0F2042]">45.4% forest cover (24,305 km²)</strong>, 120+ rivers, rich limestone and magnesite deposits, and an <strong className="text-[#0F2042]">11.4 million population with 79.6% literacy</strong>. However, this critical data has historically been scattered across disconnected department files and paper records.
                  </p>
                  <p>
                    <strong className="text-[#0F2042]">GEOVERSED</strong> creates integrated Natural &amp; Human Resource Mapping — a comprehensive, authoritative <strong className="text-[#0F2042]">GIS Resource Atlas of Uttarakhand</strong> where every natural asset, watershed, mineral vein, and human demographic capability is geocoded, quantified, and cross-linked.
                  </p>
                  <p className="font-semibold text-[#B3864B]">
                    "From dense forest to skilled workforce — one atlas, complete picture."
                  </p>
                </div>
              </div>

              {/* The 6 Thematic Maps Gallery (Matching the 6 boxes in the photo: Forest, Water, Minerals, Soil, Population, Livestock) */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  The 6 Core Resource Inventory Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {/* Thematic 1: Forest - Forest Cover & Biodiversity */}
                  <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-emerald-200 bg-gradient-to-b from-emerald-500/5 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <TreePine className="w-4 h-4 text-emerald-700" />
                      <h5 className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                        1. Forest Cover &amp; Biodiversity
                      </h5>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">•</span>
                        <span><strong>Density Classes:</strong> Dense Forest 32%, Open Forest 13%, Non-Forest/Scrub 55% as per FSI standards.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">•</span>
                        <span><strong>Species-Wise Mapping:</strong> Oak (Banj), Chir Pine, Himalayan Deodar, Rhododendron, and Sal forest tracts.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">•</span>
                        <span><strong>Community Stewardship:</strong> Van Panchayat boundaries, sacred groves, NTFP harvest zones, and wildlife corridors.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Thematic 2: Water - Water Resources & Watershed */}
                  <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-blue-200 bg-gradient-to-b from-blue-500/5 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="w-4 h-4 text-blue-600" />
                      <h5 className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                        2. Water Resources &amp; Watershed
                      </h5>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Drainage Networks:</strong> 120+ perennial rivers, glacial melt streams, and seasonal Gadheras with discharge indices.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>Lakes &amp; Reservoirs:</strong> High-altitude tarns, Kumaon lake cluster (Naini, Bhimtal, Naukuchiatal), and hydel dams.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-blue-600 font-bold">•</span>
                        <span><strong>12 Major Watersheds:</strong> Catchment water balances, natural spring inventories, and rural drinking aquifers.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Thematic 3: Minerals - Mineral Deposits & Reserves */}
                  <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-amber-200 bg-gradient-to-b from-amber-500/5 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <Gem className="w-4 h-4 text-amber-700" />
                      <h5 className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                        3. Mineral Deposits &amp; Reserves
                      </h5>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-start gap-1.5">
                        <span className="text-amber-700 font-bold">•</span>
                        <span><strong>Key Mineral Formations:</strong> High-grade Limestone, crystalline Magnesite, Gypsum, Soapstone, and Slate.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-amber-700 font-bold">•</span>
                        <span><strong>Resource Clusters:</strong> Detailed geo-referenced deposits across Pithoragarh, Almora, Bageshwar, Chamoli, and Dehradun.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-amber-700 font-bold">•</span>
                        <span><strong>Statutory GIS Cadastre:</strong> Legal mining lease boundaries, eco-sensitive buffer enforcement, and overburden tracking.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Thematic 4: Soil - Soil Quality & Land Use */}
                  <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-amber-300/60 bg-gradient-to-b from-amber-700/5 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <Sprout className="w-4 h-4 text-amber-800" />
                      <h5 className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                        4. Soil Quality &amp; Land Use
                      </h5>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-start gap-1.5">
                        <span className="text-amber-800 font-bold">•</span>
                        <span><strong>Soil Profile Mapping:</strong> Mountain brown forest soils, glacial gravels, terai alluvium, and terrace fertility indices.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-amber-800 font-bold">•</span>
                        <span><strong>Erosion &amp; Degradation:</strong> Slope run-off vulnerability, topsoil loss risk zonation, and soil conservation mapping.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-amber-800 font-bold">•</span>
                        <span><strong>Land Capability Classes:</strong> Terraced agriculture (Mandua, Jhangora, Bhatt), horticulture belts, and fallow revival.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Thematic 5: Population - Population Distribution & Demographics */}
                  <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-[#B3864B]" />
                      <h5 className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                        5. Population &amp; Demographics
                      </h5>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Spatial Demographics:</strong> ~11.4M population, 79.6% literacy rate, and habitation settlement distribution across 13 districts.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Density Stratification:</strong> Plains corridor (&gt;500/km²), hill mid-valleys (200–500/km²), high mountains (&lt;200/km²).</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-[#B3864B] font-bold">•</span>
                        <span><strong>Human Capital &amp; Skills:</strong> Technical training centers, polytechnic &amp; ITI graduates, and youth out-migration vectors.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Thematic 6: Livestock - Livestock & Animal Resources */}
                  <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-emerald-300/60 bg-gradient-to-b from-emerald-600/5 to-transparent">
                    <div className="flex items-center gap-2 mb-2">
                      <Compass className="w-4 h-4 text-emerald-800" />
                      <h5 className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                        6. Livestock &amp; Animal Resources
                      </h5>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-800 font-bold">•</span>
                        <span><strong>Livestock Census Mapping:</strong> Indigenous hill cattle (Badri cow), buffaloes, sheep, and nomadic high-altitude goat flocks.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-800 font-bold">•</span>
                        <span><strong>Pasture &amp; Bugyal Resources:</strong> Transhumance seasonal grazing corridors, alpine meadows, and fodder availability zones.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <span className="text-emerald-800 font-bold">•</span>
                        <span><strong>Livelihood Economics:</strong> Mountain dairy cooperatives, wool processing clusters, and community poultry micro-enterprises.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* What We Offer: Integrated Details Grid */}
              <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  What We Offer: End-to-End Resource Integration
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                    <strong className="text-[#0F2042] block mb-1">A. Natural Resource Inventory</strong>
                    <p className="text-slate-600">
                      Comprehensive forest canopy density, NTFP gathering tracts, perennial spring &amp; watershed flows, mineral beds (limestone/magnesite), renewable solar/wind potential, and micro-hydro sites.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                    <strong className="text-[#0F2042] block mb-1">B. Human &amp; Livelihood Analytics</strong>
                    <p className="text-slate-600">
                      Village-wise demographic distributions, agricultural terraced yield indices, livestock censuses, youth vocational skill catalogs, and road/healthcare/digital connectivity accessibility heatmaps.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                    <strong className="text-[#0F2042] block mb-1">C. Integrated Web-GIS Atlas</strong>
                    <p className="text-slate-600">
                      Interactive Web-GIS portal linking natural resources with human custodians (e.g. Forest cover + Van Panchayat rights + youth agro-enterprise capacity) with village-level search and layer export.
                    </p>
                  </div>
                </div>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Methodology
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">
                      1. Multi-Department Data Collection
                    </div>
                    <p className="text-slate-600">
                      Collation of Uttarakhand State GIS layers, Census of India 2024, Forest Survey of India (FSI), Dept. of Mines &amp; Geology, and Agriculture Dept. records.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">
                      2. Satellite Interpretation &amp; LULC
                    </div>
                    <p className="text-slate-600">
                      High-resolution multi-spectral remote sensing for Land Use Land Cover (LULC), forest canopy density classification, and mineral spectral signatures.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">
                      3. Ground Truthing &amp; Participatory GIS
                    </div>
                    <p className="text-slate-600">
                      Community-led field surveys walking forests with Van Panchayat women, farmer collectives, ITI students, and local youth for ground verification.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">
                      4. Relational GIS Database Creation
                    </div>
                    <p className="text-slate-600">
                      Structured Geodatabase with 50+ feature layers, standardized attribute schemas, national symbology standards, and UTM Zone 44N projection.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-slate-200/80 bg-white sm:col-span-2 lg:col-span-1">
                    <div className="font-bold text-[#0F2042] mb-1">
                      5. Atlas Publication &amp; Web Portal
                    </div>
                    <p className="text-slate-600">
                      Publication of the authoritative printed A0 State Resource Atlas, digital high-res cartographic volumes, and live interactive Web-GIS search portal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Deliverables & Applications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#B3864B]" />
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'Resource Atlas: Printed A0 State Resource Atlas & high-resolution digital cartographic volume with all 6 thematic layers (Forest, Water, Soil, Minerals, Demographics, Livestock)',
                      'GIS Database: Spatial Geodatabase & Shapefiles with 50+ relational attribute layers, standardized schemas, and cadastral boundary overlays',
                      'Livelihood Planning Blueprints: Actionable village and watershed livelihood plans linking local natural resource wealth with youth vocational training & employment',
                      'Key Statistics Report 2024: Verified baseline metrics on 45.4% forest cover, 120+ perennial rivers, 12 watersheds, and 79.6% literacy rate',
                      'Interactive Web-GIS Portal: Live searchable map portal with village/panchayat search, spatial resource query filters, and high-res vector downloads',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#B3864B]" />
                    Applications
                  </h4>
                  <div className="space-y-2.5 text-xs text-slate-700">
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Landmark className="w-3.5 h-3.5 text-[#B3864B]" /> State Planning &amp; Rural Development:
                      </span>
                      <p className="text-slate-600 pl-4.5">Uttarakhand Planning Commission, UDD, Rural Development Dept. for resource-based state planning</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#B3864B]" /> District Administration (All 13 Districts):
                      </span>
                      <p className="text-slate-600 pl-4.5">District Magistrates, CDOs, and DDOs for block-level planning, GPDP integration, and infrastructure allocation</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#B3864B]" /> Sustainable Investment &amp; Enterprise:
                      </span>
                      <p className="text-slate-600 pl-4.5">Location suitability for mineral extraction, agro-processing, eco-tourism circuits, and run-of-the-river hydropower</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-[#B3864B]" /> Academic &amp; Research Institutions:
                      </span>
                      <p className="text-slate-600 pl-4.5">Universities, colleges, and research bodies (WIHG, GBPNIHE) utilizing the official Uttarakhand Resource Atlas</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#B3864B]" /> NGOs, CSR &amp; Skill Missions:
                      </span>
                      <p className="text-slate-600 pl-4.5">Youth skill-mapping, livelihood enhancement, and Van Panchayat micro-enterprise development projects</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why GEOVERSED? */}
              <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-2 font-['Poppins']">
                  Why GEOVERSED?
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  We mapped Almora's forests by walking with Van Panchayat women and mapped human skills by talking to youth in Haridwar ITIs. We know forest cover is not just a percentage but a Van Panchayat's winter fuelwood. We link natural resource to human hands that use it. Our atlas is not just maps, it is Uttarakhand's wealth inventory — <em>Jal, Jungle, Jameen, and Jan</em>.
                </p>
              </div>
            </div>
          ) : isService10 ? (
            /* SERVICE 10 DETAILED SPECIALIZED VIEW */
            <div className="space-y-6">
              {/* Photo-accurate High-Tech Infographic Banner */}
              <div className="rounded-xl overflow-hidden border border-slate-700/80 shadow-md relative group bg-[#080d1a]">
                <div className="relative w-full overflow-hidden bg-[#090e1d]">
                  <img
                    src={service10Banner}
                    loading="lazy"
                    decoding="async"
                    alt="10 AI-Empowered Services - GEOVERSED Smart Solution Almora"
                    className="w-full h-auto object-contain max-h-[380px] sm:max-h-[440px] mx-auto group-hover:scale-[1.01] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* 3 Core Pillars Ribbon (Matching bottom ribbon in photo) */}
                <div className="bg-[#0b1226] text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-['Poppins'] border-t border-purple-500/20">
                  <div className="flex items-center gap-1.5 text-purple-300">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    <span className="font-semibold">AI-Driven • Secure • Scalable</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-300">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-semibold">Real-Time Insights</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-semibold">Sustainable Solutions</span>
                  </div>
                </div>
              </div>

              {/* Tagline Callout */}
              <div className="bg-[#0F2042]/5 border-l-4 border-[#0F2042] p-4 rounded-r-xl">
                <div className="flex items-start gap-2.5">
                  <Zap className="w-5 h-5 text-[#B3864B] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase font-bold text-[#B3864B] tracking-wider mb-1">
                      Next-Generation AI Geospatial Technology
                    </div>
                    <p className="text-[#0F2042] font-medium text-xs sm:text-sm leading-relaxed">
                      "We use AI/ML for automated feature extraction from satellite imagery, landslide prediction, crop classification, and change detection."
                    </p>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
                  <p>
                    Traditional GIS workflows take months for comprehensive mapping — relying on slow manual digitizing, polygon tracing, and arduous ground campaigns. At <strong className="text-[#0F2042]">GEOVERSED Smart Solution Almora</strong>, we use AI/ML for automated feature extraction from satellite imagery, landslide prediction, crop classification, and change detection.
                  </p>
                  <p>
                    Our neural networks and deep learning models, trained specifically on high-altitude Himalayan topography, automatically extract road networks, building footprints, forest canopy masks, and landslide slips with <strong className="text-[#0F2042]">96.2% certified accuracy</strong>.
                  </p>
                  <p className="font-semibold text-[#B3864B]">
                    "GIS that learns, predicts, and automates."
                  </p>
                </div>
              </div>

              {/* What we do: 4 Core AI Solutions */}
              <div className="bg-[#F8F9FA] rounded-xl p-4 sm:p-5 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  What We Do
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  {/* Item 1 */}
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2 text-[#0F2042] font-bold mb-1.5">
                      <Layers className="w-4 h-4 text-[#B3864B]" />
                      <span>Deep Learning for LULC</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      Automated Land Use / Land Cover segmentation using CNNs &amp; Vision Transformers for mountain terrain, crop parcels, forest cover, and urban boundaries.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2 text-[#0F2042] font-bold mb-1.5">
                      <Droplets className="w-4 h-4 text-[#B3864B]" />
                      <span>AI Spring Potential Mapping</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      Predictive hydrogeological models combining fracture lineaments, lithology, rainfall percolation, and recharge zones to map mountain drinking water springs.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2 text-[#0F2042] font-bold mb-1.5">
                      <MessageSquare className="w-4 h-4 text-[#B3864B]" />
                      <span>Chatbot for Web-GIS</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      Conversational Geo-AI assistant integrated into spatial web portals for natural language querying of land records, hazard buffers, and infrastructure.
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2 text-[#0F2042] font-bold mb-1.5">
                      <FileSpreadsheet className="w-4 h-4 text-[#B3864B]" />
                      <span>Auto-Report Generation</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px]">
                      Instant automated PDF intelligence summaries compiled from satellite orbits, including acreage deltas, risk classifications, and policy recommendations.
                    </p>
                  </div>
                </div>
              </div>

              {/* What We Offer: The 3-Stage Pipeline */}
              <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  A. AI Analysis Pipeline &amp; Neural Architecture
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
                  {/* Stage 1 */}
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2 text-[#0F2042] font-bold mb-1.5">
                      <Scan className="w-4 h-4 text-[#B3864B]" />
                      <span>1. Satellite &amp; Drone Input</span>
                    </div>
                    <ul className="space-y-1 text-slate-600">
                      <li>• <strong>Sentinel-2:</strong> 10m multi-spectral bands (Oct 2024).</li>
                      <li>• <strong>High-Res Feeds:</strong> PlanetScope 3m, Drone 5cm GSD, ISRO Cartosat.</li>
                      <li>• <strong>Preprocessing:</strong> Automated cloud removal, shadow masking, radiometric correction, and mountain photometric normalization.</li>
                    </ul>
                  </div>

                  {/* Stage 2 */}
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2 text-[#0F2042] font-bold mb-1.5">
                      <Cpu className="w-4 h-4 text-[#B3864B]" />
                      <span>2. Neural Network Models</span>
                    </div>
                    <ul className="space-y-1 text-slate-600">
                      <li>• <strong>Segmentation:</strong> CNN + Transformer + U-Net for terrain classes (Forest, Agri, Urban, Water).</li>
                      <li>• <strong>Object Detection (YOLOv8 + SAM):</strong> Road network extraction (<strong>1,432 km</strong> detected).</li>
                      <li>• <strong>Building Footprints:</strong> <strong>8,901 buildings</strong> identified at 92% confidence; <strong>127 water bodies</strong> mapped.</li>
                    </ul>
                  </div>

                  {/* Stage 3 */}
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200/80">
                    <div className="flex items-center gap-2 text-[#0F2042] font-bold mb-1.5">
                      <Binary className="w-4 h-4 text-[#B3864B]" />
                      <span>3. Automated Extraction</span>
                    </div>
                    <ul className="space-y-1 text-slate-600">
                      <li>• <strong>Vectorization:</strong> Automated polygonization of roads, buildings, trees, and plots without manual tracing.</li>
                      <li>• <strong>Attribute Synthesis:</strong> Auto-computation of building heights, slope angles, and road widths.</li>
                      <li>• <strong>Export:</strong> Instant GeoJSON, Shapefile, and PostGIS streaming.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Deep Learning Insights & Automated Detection */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  B. Deep Learning Insights &amp; Real-Time Analytics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-slate-200/80">
                    <div className="font-bold text-[#0F2042] mb-1.5 flex items-center gap-1.5">
                      <PieChart className="w-4 h-4 text-[#B3864B]" />
                      Land Use Classification
                    </div>
                    <p className="text-slate-600 mb-2">
                      Instant multi-spectral segmentation from Sentinel-2 orbits:
                    </p>
                    <div className="space-y-1 text-[11px] font-medium text-slate-700">
                      <div className="flex justify-between"><span>Forest Canopy:</span> <strong className="text-emerald-700">68%</strong></div>
                      <div className="flex justify-between"><span>Agricultural Terraces:</span> <strong className="text-amber-700">21%</strong></div>
                      <div className="flex justify-between"><span>Urban / Built-Up:</span> <strong className="text-blue-700">9%</strong></div>
                      <div className="flex justify-between"><span>Water Bodies:</span> <strong className="text-blue-600">2%</strong></div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-slate-200/80">
                    <div className="font-bold text-[#0F2042] mb-1.5 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4 text-amber-600" />
                      Automated Change Detection
                    </div>
                    <ul className="space-y-1.5 text-slate-600 text-[11px]">
                      <li>• <strong>+12% Urban Growth:</strong> Detected automatically between 2023–2024 satellite sweeps.</li>
                      <li>• <strong>Deforestation Alerts:</strong> Rapid flagging of tree loss on reserve boundaries.</li>
                      <li>• <strong>Encroachment Alarms:</strong> Automated alerts for unauthorized construction on steep slopes.</li>
                      <li>• <strong>Glacial Monitoring:</strong> Automated terminus retreat tracking.</li>
                    </ul>
                  </div>

                  <div className="p-3.5 bg-[#F8F9FA] rounded-xl border border-slate-200/80">
                    <div className="font-bold text-[#0F2042] mb-1.5 flex items-center gap-1.5">
                      <ShieldAlert className="w-4 h-4 text-red-600" />
                      Predictive Risk Assessment
                    </div>
                    <ul className="space-y-1.5 text-slate-600 text-[11px]">
                      <li>• <strong>23 Landslide Zones:</strong> Flagged in current scan based on slope saturation.</li>
                      <li>• <strong>Wildfire Probability:</strong> Fuel moisture + wind vector fire spread modeling.</li>
                      <li>• <strong>Flood Inundation:</strong> Simulation maps rendered within 2 hours of rainfall spikes.</li>
                      <li>• <strong>Seismic Vulnerability:</strong> Building structural collapse risk scoring.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Custom Himalayan AI Models (D) */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Custom Himalayan AI Model Suite
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg border border-emerald-200 bg-emerald-50/40 text-xs">
                    <div className="font-bold text-emerald-800 text-xs mb-1">GEO-AI-Forest v3.1</div>
                    <p className="text-slate-600 text-[11px]">
                      Himalayan canopy density estimation, species classification (Oak vs Chir Pine), and illegal tree felling alerts.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-blue-200 bg-blue-50/40 text-xs">
                    <div className="font-bold text-blue-800 text-xs mb-1">GEO-AI-Urban</div>
                    <p className="text-slate-600 text-[11px]">
                      Automated building footprint polygonization, ridge road network extraction, and sprawl encroachment mapping.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-amber-200 bg-amber-50/40 text-xs">
                    <div className="font-bold text-amber-800 text-xs mb-1">GEO-AI-Hazard</div>
                    <p className="text-slate-600 text-[11px]">
                      Rainfall-triggered landslide slip detection, flash-flood flow modeling, and forest fire ignition prediction.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-purple-200 bg-purple-50/40 text-xs">
                    <div className="font-bold text-purple-800 text-xs mb-1">GEO-AI-Crop</div>
                    <p className="text-slate-600 text-[11px]">
                      Mountain terraced crop type recognition, NDVI vegetative health tracking, and pest outbreak forecasting.
                    </p>
                  </div>
                </div>
              </div>

              {/* Methodology */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Methodology: From Training to Live Inference
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-xs">
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">1. Dataset Prep</div>
                    <p className="text-slate-600 text-[11px]">
                      10,000+ hand-labeled satellite &amp; drone tiles capturing Uttarakhand's terraced valleys and ridges.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">2. Cloud Training</div>
                    <p className="text-slate-600 text-[11px]">
                      CNN &amp; ViT fine-tuning on GPU clusters. Training loss dropped 84% from 0.82 to 0.14.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">3. Live Inference</div>
                    <p className="text-slate-600 text-[11px]">
                      Instant automated segmentation applied as soon as new satellite orbits or drone runs arrive.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">4. Field Validation</div>
                    <p className="text-slate-600 text-[11px]">
                      Ground truthing and confusion matrix verification achieving 96.2% certified classification accuracy.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-white sm:col-span-2 lg:col-span-1">
                    <div className="font-bold text-[#0F2042] mb-1">5. Deployment</div>
                    <p className="text-slate-600 text-[11px]">
                      Integration via live Web-GIS dashboards, high-speed REST APIs, and automated intelligence briefs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Deliverables & Applications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#B3864B]" />
                    Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {[
                      'AI Models — Trained deep learning & machine learning neural networks (.onnx, PyTorch) fine-tuned for Himalayan terrain feature extraction, LULC segmentation, and landslide prediction',
                      'Automated Maps — Automated high-resolution vector GIS layers for roads, building footprints, land cover, and change detection without manual digitizing',
                      'Predictive Dashboards — Real-time interactive Web-GIS dashboards featuring live satellite streams, predictive landslide alerts, and crop classification telemetry',
                      'Conversational Web-GIS Chatbot — Embedded Geo-AI chatbot module enabling natural language spatial queries and automated map layer generation',
                      'Auto-Report Generation System — Scheduled automated PDF intelligence summaries covering acreage metrics, hazard vulnerability, and policy recommendations',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#B3864B]" />
                    Applications
                  </h4>
                  <div className="space-y-2.5 text-xs text-slate-700">
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Landmark className="w-3.5 h-3.5 text-[#B3864B]" /> Uttarakhand Government Departments:
                      </span>
                      <p className="text-slate-600 pl-4.5">UDD, Forest, USDMA Disaster Management, and Agriculture for rapid automated mapping</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-[#B3864B]" /> Smart Cities (Dehradun &amp; Haridwar):
                      </span>
                      <p className="text-slate-600 pl-4.5">Automated building footprint extraction for master plans, property tax GIS, and road asset updates</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Globe className="w-3.5 h-3.5 text-[#B3864B]" /> Space &amp; Remote Sensing Agencies (ISRO / NRSC):
                      </span>
                      <p className="text-slate-600 pl-4.5">Collaborative AI-assisted mountain terrain mapping and automated LULC classification pipelines</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5 text-[#B3864B]" /> Private Sector &amp; Insurance:
                      </span>
                      <p className="text-slate-600 pl-4.5">Real estate sprawl evaluation, infrastructure corridor audits, and rapid parametric crop/flood loss assessment</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Microscope className="w-3.5 h-3.5 text-[#B3864B]" /> Himalayan Research Institutes:
                      </span>
                      <p className="text-slate-600 pl-4.5">Institutes requiring high-speed regional automated land-cover modeling across high-altitude watersheds</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why GEOVERSED? */}
              <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-2 font-['Poppins']">
                  Why GEOVERSED?
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  We trained AI on Himalayan terrain — not on US cities. Our models understand terraced fields, dense Deodar forests, scattered hill houses — where global models fail. We combine 15 years of Himalayan GIS experience with latest AI — making GIS 10x faster and 10x scalable. Traditional GIS says mapping will take 6 months — our AI says done in 6 hours with 96.2% accuracy.
                </p>
              </div>
            </div>
          ) : isService11 ? (
            /* SERVICE 11 DETAILED SPECIALIZED VIEW */
            <div className="space-y-6">
              {/* Photo Banner */}
              <div className="rounded-xl overflow-hidden border border-slate-200/80 shadow-md relative group bg-slate-900">
                <div className="relative w-full overflow-hidden bg-slate-950">
                  <img
                    src={service11Banner}
                    loading="lazy"
                    decoding="async"
                    alt="11 Capacity Building of Stakeholders - GEOVERSED Smart Solution Almora"
                    className="w-full h-auto object-contain max-h-[380px] sm:max-h-[440px] mx-auto group-hover:scale-[1.01] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* 3 Core Pillars Ribbon (Matching bottom ribbon in photo) */}
                <div className="bg-[#0F2042] text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-['Poppins'] border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-[#B3864B]" />
                    <span className="font-semibold">3-Day to 15-Day Programs</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Compass className="w-3.5 h-3.5 text-[#B3864B]" />
                    <span className="font-semibold">Hands-on Field Practicum</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Award className="w-3.5 h-3.5 text-[#B3864B]" />
                    <span className="font-semibold">Govt &amp; Academic Accreditation</span>
                  </div>
                </div>
              </div>

              {/* Tagline Callout */}
              <div className="bg-[#B3864B]/10 border-l-4 border-[#B3864B] p-4 rounded-r-xl">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-5 h-5 text-[#B3864B] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs uppercase font-bold text-[#B3864B] tracking-wider mb-1">
                      Professional Geospatial Capacity Building
                    </div>
                    <p className="text-[#0F2042] font-medium text-xs sm:text-sm leading-relaxed">
                      "Training for govt officers, teachers, students, NGOs on GIS, Web-GIS, GPS, and data analysis."
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Conducted as 3-day to 15-day residential trainings at Almora with recognized certifications and course handouts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
                  <p>
                    <strong className="text-[#0F2042]">GEOVERSED Smart Solution Almora</strong> conducts structured, hands-on capacity building and skill-enhancement programs tailored for government department officers, school and university teachers, research scholars, undergraduate/postgraduate students, and non-governmental organizations (NGOs).
                  </p>
                  <p>
                    Our residential training programs at Almora range from <strong className="text-[#0F2042]">3-day intensive workshops to 15-day comprehensive masterclasses</strong>, combining classroom theory, geospatial laboratory software sessions (QGIS, ArcGIS, Google Earth Engine), and rigorous field survey exercises using DGPS, RTK GNSS, and mapping drones across diverse Himalayan landforms.
                  </p>
                  <p className="font-semibold text-[#B3864B]">
                    "Bridging the geospatial technology divide in the Himalayas through hands-on technical empowerment."
                  </p>
                </div>
              </div>

              {/* 4 Core Stakeholder Training Groups */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Target Stakeholder Groups &amp; Customized Syllabi
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {/* Group 1: Govt Officers */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-6 h-6 rounded-md bg-[#0F2042]/10 text-[#0F2042] flex items-center justify-center font-bold text-xs">
                        1
                      </div>
                      <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                        Government Officers &amp; Urban Planners
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">
                      Officers from Forest Dept, Disaster Management (DDMA/USDMA), Town Planning, Jal Sansthan, and Revenue.
                    </p>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/70 text-xs text-slate-700">
                      <strong>Curriculum:</strong> Decision support systems, asset mapping, statutory GIS compliance, and hazard-sensitive zoning bylaws.
                    </div>
                  </div>

                  {/* Group 2: Teachers & Academics */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-6 h-6 rounded-md bg-[#B3864B]/10 text-[#B3864B] flex items-center justify-center font-bold text-xs">
                        2
                      </div>
                      <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                        College &amp; University Teachers
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">
                      Faculty in Geography, Geology, Environmental Science, Civil Engineering, and Forestry.
                    </p>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/70 text-xs text-slate-700">
                      <strong>Curriculum:</strong> Pedagogical GIS teaching, open-source QGIS laboratory setup, project-based teaching modules, and research mentoring.
                    </div>
                  </div>

                  {/* Group 3: Students & Scholars */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-6 h-6 rounded-md bg-emerald-600/10 text-emerald-700 flex items-center justify-center font-bold text-xs">
                        3
                      </div>
                      <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                        Undergraduate, PG &amp; Research Scholars
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">
                      Students seeking high-employability geospatial skills and thesis research guidance.
                    </p>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/70 text-xs text-slate-700">
                      <strong>Curriculum:</strong> Remote sensing classification, spatial statistics, dissertation data analysis, and professional portfolio development.
                    </div>
                  </div>

                  {/* Group 4: NGOs & Civil Society */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-6 h-6 rounded-md bg-purple-600/10 text-purple-700 flex items-center justify-center font-bold text-xs">
                        4
                      </div>
                      <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                        NGOs &amp; Community Development Teams
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 mb-2">
                      Field coordinators, watershed committees, Van Panchayat animators, and grassroots volunteers.
                    </p>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/70 text-xs text-slate-700">
                      <strong>Curriculum:</strong> Mobile GPS data collection, spring inventorying, participatory GIS (PGIS), and community impact reporting.
                    </div>
                  </div>
                </div>
              </div>

              {/* The 4 Core Technical Modules */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  The 4 Technical Training Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {/* Mod 1: GIS */}
                  <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="w-4 h-4 text-[#B3864B]" />
                      <h5 className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                        1. Geographic Information Systems (GIS)
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      Vector and raster data models, coordinate systems, projection transformations, map composition, multi-criteria spatial decision analysis (MCDA).
                    </p>
                    <div className="p-2 bg-white rounded-md border border-slate-200/70 text-[11px] text-slate-700">
                      <strong>Tools:</strong> QGIS, ArcGIS Pro, Google Earth Pro, GeoPandas.
                    </div>
                  </div>

                  {/* Mod 2: GPS */}
                  <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2">
                      <Compass className="w-4 h-4 text-blue-600" />
                      <h5 className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                        2. GPS &amp; DGPS / GNSS Survey
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      Satellite constellations, base-rover configurations, RTK correction workflows, sub-meter waypoint capture, geotagged photographic verification.
                    </p>
                    <div className="p-2 bg-white rounded-md border border-slate-200/70 text-[11px] text-slate-700">
                      <strong>Tools:</strong> Handheld GPS, Differential GNSS, Mobile Survey Apps.
                    </div>
                  </div>

                  {/* Mod 3: Drone Survey */}
                  <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-purple-600" />
                      <h5 className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                        3. Drone Survey &amp; Photogrammetry
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      Flight mission planning, Ground Control Points (GCPs), high-resolution aerial imaging, 3D point cloud generation, Orthomosaic compilation, DEM creation.
                    </p>
                    <div className="p-2 bg-white rounded-md border border-slate-200/70 text-[11px] text-slate-700">
                      <strong>Tools:</strong> Survey Drones, Mission Planner, WebODM, Pix4D.
                    </div>
                  </div>

                  {/* Mod 4: Data Analysis */}
                  <div className="bg-[#F8F9FA] rounded-xl p-3.5 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2">
                      <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
                      <h5 className="font-bold text-[#0F2042] text-xs sm:text-sm font-['Poppins']">
                        4. Spatial Data Analysis &amp; Modeling
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      Satellite image processing, NDVI vegetation health indices, terrain elevation analysis, slope hazard modeling, statistical thematic charts.
                    </p>
                    <div className="p-2 bg-white rounded-md border border-slate-200/70 text-[11px] text-slate-700">
                      <strong>Tools:</strong> Sentinel-2, Landsat, DEM Rasters, Excel &amp; Python.
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Formats: 3-Day to 15-Day Programs at Almora */}
              <div className="bg-[#F8F9FA] rounded-xl p-4 sm:p-5 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#B3864B]" />
                  Residential Training Formats at Almora Campus
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <div className="font-bold text-[#0F2042] text-sm mb-1">3-Day Executive Capsule</div>
                      <p className="text-slate-600 text-[11px] leading-relaxed mb-2">
                        Designed for senior administrators, department heads, and busy professionals needing a clear overview of GIS tools, decision dashboards, and policy application.
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-[#B3864B] uppercase tracking-wider">Fast-Track Orientation</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <div className="font-bold text-[#0F2042] text-sm mb-1">7-Day Practitioner Immersion</div>
                      <p className="text-slate-600 text-[11px] leading-relaxed mb-2">
                        Hands-on practical training covering end-to-end field GPS/drone survey, spatial database creation, georeferencing, and cartographic map layout.
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-[#B3864B] uppercase tracking-wider">Core Practical Skills</span>
                  </div>
                  <div className="p-3.5 bg-white rounded-lg border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <div className="font-bold text-[#0F2042] text-sm mb-1">15-Day Masterclass Residency</div>
                      <p className="text-slate-600 text-[11px] leading-relaxed mb-2">
                        Comprehensive professional masterclass with real-world Himalayan project execution, independent field survey, advanced remote sensing, and certified capstone.
                      </p>
                    </div>
                    <span className="text-[10px] font-bold text-[#B3864B] uppercase tracking-wider">Professional Mastery</span>
                  </div>
                </div>
              </div>

              {/* Deliverables & Training Facilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#B3864B]" />
                    Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      '3-Day to 15-Day Residential Trainings at Almora — Fully equipped GIS laboratory sessions and mountain field practicum',
                      'Official Course Completion Certificates — Accredited geospatial capacity building credentials for resumes and career advancement',
                      'Comprehensive Course Handouts & Manuals — Printed and digital step-by-step laboratory tutorial guides and software workflows',
                      'Himalayan Geospatial Sample Datasets — High-resolution satellite rasters, vector shapefiles, and field GPS ground truth points',
                      'Post-Training Mentorship & Support — Ongoing technical guidance for dissertation projects and departmental GIS implementations',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications & Facilities */}
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-[#B3864B]" />
                    Almora Residential Campus Facilities
                  </h4>
                  <div className="space-y-2.5 text-xs text-slate-700">
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Laptop className="w-3.5 h-3.5 text-[#B3864B]" /> Dedicated Geospatial Computing Lab:
                      </span>
                      <p className="text-slate-600 pl-4.5">High-speed dual-monitor workstations equipped with licensed &amp; open-source GIS software, image processing suites, and high-speed cloud internet.</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Bot className="w-3.5 h-3.5 text-[#B3864B]" /> Advanced Surveying Equipment:
                      </span>
                      <p className="text-slate-600 pl-4.5">Differential GPS (DGPS) sets, handheld Garmin receivers, and RTK surveying quadcopter drones for mountain topography surveys.</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Landmark className="w-3.5 h-3.5 text-[#B3864B]" /> Himalayan Field Demonstration Terrains:
                      </span>
                      <p className="text-slate-600 pl-4.5">Immediate access to Kumaon ridge lines, terraced farming parcels, and river valley catchments for realistic hands-on training.</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-[#B3864B]" /> Comfortable Residential Accommodations:
                      </span>
                      <p className="text-slate-600 pl-4.5">Hygienic boarding, regional mountain hospitality, and interactive evening discussion salons overlooking the Himalayan panorama.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why GEOVERSED? */}
              <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-2 font-['Poppins']">
                  Why GEOVERSED Almora?
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Located in the cultural and academic heart of Kumaon at Almora, GEOVERSED offers a uniquely immersive learning environment. Unlike conventional city-based software centers, our trainees step directly from modern GIS workstations into real Himalayan mountain terrain to deploy DGPS rovers and launch survey drones, ensuring practical mastery that translates directly into professional impact.
                </p>
              </div>
            </div>
          ) : isService12 ? (
            /* SERVICE 12 DETAILED SPECIALIZED VIEW */
            <div className="space-y-6">
              {/* Photo Banner */}
              <div className="rounded-xl overflow-hidden border border-slate-200/80 shadow-md relative group bg-slate-900">
                <div className="relative w-full overflow-hidden bg-slate-950">
                  <img
                    src={service12Banner}
                    loading="lazy"
                    decoding="async"
                    alt="12 Curriculum Designing and Dissertation Supervising - GEOVERSED Smart Solution"
                    className="w-full h-auto object-contain max-h-[380px] sm:max-h-[440px] mx-auto group-hover:scale-[1.01] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* 5 Core Highlights Ribbon */}
                <div className="bg-[#0F2042] text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs font-['Poppins'] border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <BookOpen className="w-3.5 h-3.5 text-[#B3864B]" />
                    <span className="font-semibold">NEP 2020 Syllabus</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Layers className="w-3.5 h-3.5 text-[#B3864B]" />
                    <span className="font-semibold">Practical Modules</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <Globe className="w-3.5 h-3.5 text-[#B3864B]" />
                    <span className="font-semibold">Online Guidance</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B3864B]" />
                    <span className="font-semibold">Plagiarism Check</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-200">
                    <FileText className="w-3.5 h-3.5 text-[#B3864B]" />
                    <span className="font-semibold">Publication Support</span>
                  </div>
                </div>
              </div>

              {/* Tagline Callouts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-[#B3864B]/10 border-l-4 border-[#B3864B] p-3.5 rounded-r-xl">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#B3864B] tracking-wider mb-0.5">
                        Academic Curriculum Design
                      </div>
                      <p className="text-[#0F2042] font-semibold text-xs leading-relaxed italic">
                        "We design UG/PG/Diploma curriculam in Geography, and Environmental Science aligned strictly with NEP 2020 outcome-based frameworks."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0F2042]/5 border-l-4 border-[#0F2042] p-3.5 rounded-r-xl">
                  <div className="flex items-start gap-2">
                    <Microscope className="w-4 h-4 text-[#0F2042] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-[#0F2042] tracking-wider mb-0.5">
                        Dissertation &amp; Thesis Supervision
                      </div>
                      <p className="text-[#0F2042] font-semibold text-xs leading-relaxed italic">
                        "End-to-end dissertation and thesis mentoring across all academic levels — from proposal formulation to plagiarism audits and Scopus publications."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-2 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Overview
                </h4>
                <div className="space-y-3 text-slate-600 leading-relaxed text-xs sm:text-sm">
                  <p>
                    <strong className="text-[#0F2042]">Service 12</strong> represents GEOVERSED's academic core: partnering with universities, colleges, autonomous institutes, and research scholars to design state-of-the-art <strong className="text-[#0F2042]">UG, PG, and Diploma curricula</strong> in <strong className="text-[#0F2042]">Geoinformatics, Geography, and Environmental Science</strong>, while providing comprehensive, hands-on <strong className="text-[#0F2042]">dissertation and thesis supervision</strong> for all academic levels.
                  </p>
                  <p>
                    We bridge the critical gap between academic theory and practical geospatial field science. From drafting outcome-based education (OBE) syllabi under NEP 2020 guidelines to designing hands-on practical laboratory workbooks, one-on-one virtual research mentoring, rigorous plagiarism audits, and high-impact manuscript publication in Scopus and UGC CARE journals, we empower scholars and institutions to attain scholarly distinction.
                  </p>
                </div>
              </div>

              {/* What We Do: The 5 Core Pillars */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  What We Do: The 5 Core Pillars
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {/* Pillar 1: Syllabus as per NEP 2020 */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-md bg-blue-600/10 text-blue-700 flex items-center justify-center font-bold text-xs">
                          1
                        </div>
                        <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                          Syllabus as per NEP 2020
                        </h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                        Outcome-Based Education (OBE) curriculum architecture with Course Outcomes (COs), Program Outcomes (POs), Choice-Based Credit System (CBCS), and multidisciplinary elective tracks.
                      </p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/70 text-[11px] text-slate-700">
                      <strong>Focus:</strong> Credit structures • Skill enhancement courses (SEC) • Value addition courses (VAC) • UGC model syllabus alignment.
                    </div>
                  </div>

                  {/* Pillar 2: Practical Modules */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-md bg-amber-600/10 text-amber-700 flex items-center justify-center font-bold text-xs">
                          2
                        </div>
                        <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                          Practical Modules &amp; Datasets
                        </h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                        Step-by-step laboratory exercise workbooks, ready-to-deploy QGIS &amp; ArcGIS tutorials, real Himalayan satellite datasets, DEM modeling workflows, and GPS field survey routines.
                      </p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/70 text-[11px] text-slate-700">
                      <strong>Focus:</strong> Lab manual creation • Open-source GIS workflows • Himalayan rasters • Mobile GPS &amp; drone survey practicums.
                    </div>
                  </div>

                  {/* Pillar 3: Online Guidance */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-md bg-emerald-600/10 text-emerald-700 flex items-center justify-center font-bold text-xs">
                          3
                        </div>
                        <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                          Online Guidance &amp; Supervision
                        </h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                        One-on-one virtual supervisory consultations, research problem definition, hypothesis framing, quantitative spatial statistical analysis, and milestone progress reviews.
                      </p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/70 text-[11px] text-slate-700">
                      <strong>Focus:</strong> Flexible schedule • Research timeline planning • Methodology validation • Viva voce mock defense prep.
                    </div>
                  </div>

                  {/* Pillar 4: Plagiarism Check */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-md bg-purple-600/10 text-purple-700 flex items-center justify-center font-bold text-xs">
                          4
                        </div>
                        <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                          Plagiarism Check &amp; Integrity
                        </h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                        Comprehensive similarity indexing using certified detection tools (Turnitin / Ouriginal), citation format audits (APA, Chicago, IEEE), and similarity reduction recommendations.
                      </p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/70 text-[11px] text-slate-700">
                      <strong>Focus:</strong> Certified similarity report • Academic integrity compliance • Reference standard check • Rephrasing guidance.
                    </div>
                  </div>

                  {/* Pillar 5: Publication Support */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80 flex flex-col justify-between lg:col-span-2">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-md bg-[#B3864B]/10 text-[#B3864B] flex items-center justify-center font-bold text-xs">
                          5
                        </div>
                        <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                          Publication Support &amp; Journal Drafting
                        </h5>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                        Manuscript drafting from thesis chapters, journal selection for Scopus, Web of Science, and UGC CARE-listed journals, responses to peer-review revisions, and conference presentation slide decks.
                      </p>
                    </div>
                    <div className="p-2.5 bg-white rounded-lg border border-slate-200/70 text-[11px] text-slate-700">
                      <strong>Focus:</strong> Journal identification • Reviewer feedback rebuttal • Figure &amp; cartographic refinement • High citation impact.
                    </div>
                  </div>
                </div>
              </div>

              {/* The 3 Core Academic Disciplines */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  The 3 Core Academic Disciplines We Specialize In
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                  {/* Discipline 1: Geoinformatics */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="w-4 h-4 text-[#B3864B]" />
                      <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                        1. Geoinformatics (GIS &amp; RS)
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                      Curriculum and thesis mentoring in spatial databases, satellite image processing, photogrammetry, Web-GIS architectures, spatial programming (Python/R), and terrain analysis.
                    </p>
                    <div className="space-y-1 text-[11px] text-slate-600">
                      <div>• Spatial modeling &amp; Multi-Criteria Decision Analysis (MCDA)</div>
                      <div>• Machine learning in satellite imagery classification</div>
                      <div>• Drone survey &amp; RTK photogrammetry workflows</div>
                    </div>
                  </div>

                  {/* Discipline 2: Geography */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-4 h-4 text-blue-600" />
                      <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                        2. Geography (Physical &amp; Human)
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                      Comprehensive syllabi and dissertation guidance across mountain geomorphology, fluvial hydrology, settlement geography, demographic dynamics, and cultural landscapes.
                    </p>
                    <div className="space-y-1 text-[11px] text-slate-600">
                      <div>• Mountain hazard susceptibility (landslides &amp; flash floods)</div>
                      <div>• Land use / land cover change (LULC) trajectories</div>
                      <div>• Rural-urban migration &amp; hill town growth patterns</div>
                    </div>
                  </div>

                  {/* Discipline 3: Environmental Science */}
                  <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                    <div className="flex items-center gap-2 mb-2">
                      <TreePine className="w-4 h-4 text-emerald-600" />
                      <h5 className="font-bold text-[#0F2042] text-sm font-['Poppins']">
                        3. Environmental Science
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2.5">
                      Designing advanced courses and supervising research on Himalayan forest ecosystems, biodiversity buffers, climate change adaptation, and environmental impact assessment.
                    </p>
                    <div className="space-y-1 text-[11px] text-slate-600">
                      <div>• Mountain watershed &amp; spring-shed eco-hydrology</div>
                      <div>• Carbon sequestration &amp; forest biomass estimation</div>
                      <div>• Environmental Management Plans (EMP) for hill infrastructure</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Levels We Support */}
              <div className="bg-[#F8F9FA] rounded-xl p-4 sm:p-5 border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#B3864B]" />
                  Academic Levels &amp; Degree Programs Supported (All Levels)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 bg-white rounded-lg border border-slate-200/70">
                    <div className="font-bold text-[#0F2042] text-xs mb-1">Undergraduate (UG)</div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      B.Sc. &amp; B.A. programs in Geography, Geology, Environmental Studies, and Geoinformatics minor tracks with NEP 4-year honors structures.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200/70">
                    <div className="font-bold text-[#0F2042] text-xs mb-1">Postgraduate (PG)</div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      M.Sc., M.A., and M.Tech programs in Geoinformatics, Remote Sensing, Applied Geography, and Environmental Management.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200/70">
                    <div className="font-bold text-[#0F2042] text-xs mb-1">Diplomas &amp; Certificates</div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      6-month and 1-year PGDGIS, drone surveying certifications, Web-GIS professional diplomas, and vocational spatial skill credentials.
                    </p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-slate-200/70">
                    <div className="font-bold text-[#0F2042] text-xs mb-1">Ph.D. &amp; Research Scholars</div>
                    <p className="text-slate-600 text-[11px] leading-relaxed">
                      Doctoral thesis mentoring from synopsis framing and literature review to geospatial methodology, empirical modeling, and viva defense.
                    </p>
                  </div>
                </div>
              </div>

              {/* 5-Stage Supervising & Curriculum Methodology */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B3864B]" />
                  Continuous 5-Stage Supervising &amp; Curriculum Methodology
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 text-xs">
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">1. Need &amp; NEP Align</div>
                    <p className="text-slate-600 text-[11px]">
                      Curricular mapping against NEP 2020 guidelines, UGC model syllabi, and departmental credit requirements.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">2. Practical Modules</div>
                    <p className="text-slate-600 text-[11px]">
                      Creation of practical laboratory exercises, QGIS tutorial geodatabases, and real Himalayan satellite datasets.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">3. Online Guidance</div>
                    <p className="text-slate-600 text-[11px]">
                      Bi-weekly virtual consultations, data verification, spatial analysis coaching, and chapter review feedback.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-white">
                    <div className="font-bold text-[#0F2042] mb-1">4. Plagiarism Check</div>
                    <p className="text-slate-600 text-[11px]">
                      Turnitin / Ouriginal similarity screening, reference formatting, academic ethics review, and clearance certificate.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border border-slate-200/80 bg-white sm:col-span-2 lg:col-span-1">
                    <div className="font-bold text-[#0F2042] mb-1">5. Publish &amp; Defend</div>
                    <p className="text-slate-600 text-[11px]">
                      Journal manuscript drafting for Scopus/UGC CARE, peer review rebuttal support, and mock viva defense coaching.
                    </p>
                  </div>
                </div>
              </div>

              {/* Deliverables & Applications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Deliverables */}
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-[#B3864B]" />
                    Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {[
                      'Accredited Curricula & Syllabi Packages — UG, PG, and Diploma course outlines structured as per NEP 2020 guidelines',
                      'Practical Laboratory Workbooks & Geodatabases — Step-by-step QGIS tutorials and authentic Himalayan satellite datasets',
                      'Personalized Online Dissertation Guidance — Scheduled virtual mentoring notes, methodology reviews, and chapter revisions',
                      'Official Plagiarism Clearance Certificates — Comprehensive Turnitin / Ouriginal similarity reports with citation checks',
                      'Publication-Ready Journal Manuscripts — Formatted submissions for Scopus, Web of Science, and UGC CARE indexed journals',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications & Academic Beneficiaries */}
                <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/80">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#0F2042] mb-3 font-['Poppins'] flex items-center gap-1.5">
                    <School className="w-4 h-4 text-[#B3864B]" />
                    Academic Beneficiaries
                  </h4>
                  <div className="space-y-2.5 text-xs text-slate-700">
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <School className="w-3.5 h-3.5 text-[#B3864B]" /> Central &amp; State Universities:
                      </span>
                      <p className="text-slate-600 pl-4.5">Board of Studies consultancy, modernizing syllabus as per NEP 2020, and establishing new Geoinformatics degree programs.</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-[#B3864B]" /> Postgraduate &amp; Doctoral Scholars:
                      </span>
                      <p className="text-slate-600 pl-4.5">Hands-on dissertation thesis supervision, spatial data processing, hypothesis testing, plagiarism checking, and viva prep.</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Microscope className="w-3.5 h-3.5 text-[#B3864B]" /> Academic Faculty &amp; Colleges:
                      </span>
                      <p className="text-slate-600 pl-4.5">Faculty development programs, practical GIS lab setup, open-source tutorial resources, and teaching pedagogy enhancement.</p>
                    </div>
                    <div>
                      <span className="font-bold text-[#0F2042] flex items-center gap-1">
                        <Landmark className="w-3.5 h-3.5 text-[#B3864B]" /> Research Institutes &amp; NGOs:
                      </span>
                      <p className="text-slate-600 pl-4.5">Collaborative research mentoring, joint scientific paper publication, and Himalayan field documentation support.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why GEOVERSED? */}
              <div className="bg-[#0F2042] text-white rounded-xl p-5 border border-slate-700">
                <h4 className="font-bold text-xs uppercase tracking-wider text-[#B3864B] mb-2 font-['Poppins']">
                  Why GEOVERSED Almora for Academic Excellence?
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Headquartered in Almora — the cultural and intellectual heart of Uttarakhand — GEOVERSED bridges academic theory and frontier Himalayan geoscience. Founded by seasoned university mentors and GIS researchers with active teaching credentials in regional institutions, we understand both NEP 2020 statutory mandates and practical field realities. We do not provide dry, generic textbooks; we deliver accredited curricula, verified datasets, and personalized dissertation mentoring that launch high-impact scholarly careers.
                </p>
              </div>
            </div>
          ) : (
            /* STANDARD VIEW FOR OTHER SERVICES (02 to 12) */
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-xs uppercase tracking-wider text-blue-600 mb-2 font-['Poppins']">
                  Overview
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200/70">
                <h4 className="font-semibold text-xs uppercase tracking-wider text-[#0F2042] mb-1 font-['Poppins']">
                  Regional Himalayan Focus
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {currentDetails.keyFocus}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xs uppercase tracking-wider text-blue-600 mb-2 font-['Poppins']">
                  Scientific Methodology &amp; Tools
                </h4>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  {currentDetails.methodology}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xs uppercase tracking-wider text-blue-600 mb-3 font-['Poppins']">
                  Standard Deliverables
                </h4>
                <ul className="space-y-2">
                  {currentDetails.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
          <button
            id="service-detail-modal-dismiss-btn"
            onClick={onClose}
            className="text-xs font-medium text-slate-500 hover:text-slate-800 px-4 py-2 cursor-pointer"
          >
            Close
          </button>
          <button
            id="service-detail-modal-quote-btn"
            onClick={() => {
              onClose();
              onRequestQuote(service);
            }}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-blue-500/20 cursor-pointer font-['Poppins']"
          >
            <span>Request Quote For This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
