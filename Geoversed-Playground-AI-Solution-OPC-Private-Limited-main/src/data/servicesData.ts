import { ServiceItem, NavItem, InsightItem } from '../types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Events', href: '#events' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
  { label: 'Certifications', href: '#certifications' },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: '01',
    title: 'GIS and Web-GIS Development',
    description: 'GEOVERSED develops custom GIS platforms and Web-GIS portals for government, academia, and industry. We build end-to-end systems: spatial database design (PostGIS), QGIS plugins, and interactive Web-GIS dashboards using Leaflet, Mapbox, and GeoServer.',
    category: 'Digital Geospatial',
  },
  {
    id: '02',
    title: 'Application of GIS in Education and Research',
    description: 'We bring GIS into classrooms and labs. We help universities and schools set up GIS labs, develop practical curricula, and guide UG/PG/PhD research using spatial methods.',
    category: 'Education & Research',
  },
  {
    id: '03',
    title: 'Application of GIS and Web-GIS for Developing g-Governance',
    description: 'We provide digital governance solutions using geospatial intelligence. We create village-level to district-level g-Governance portals for asset mapping, scheme monitoring, and public service delivery.',
    category: 'g-Governance & Policy',
  },
  {
    id: '04',
    title: 'Urban and Rural Planning',
    description: 'We provide data-driven master plans for hill towns and villages where carrying capacity is critical. Our plans integrate slope, landslide, water, and livelihood data.',
    category: 'Urban & Rural Planning',
  },
  {
    id: '05',
    title: 'Springs and River Rejuvenation',
    description: 'Core Himalayan expertise. We map springs, delineate recharge zones, and design recharge pits, check dams, and community-based rejuvenation plans.',
    category: 'Springshed & Water Conservation',
  },
  {
    id: '06',
    title: 'Environmental Impact Assessment (EIA)',
    description: 'We conduct EIA for roads, buildings, hydropower, and tourism projects in eco-sensitive hill zones with mitigation plans.',
    category: 'EIA & Ecological Protection',
  },
  {
    id: '07',
    title: 'Climate Change Studies',
    description: 'Assessing climate impacts on Himalayas — temperature trends, rainfall variability, glacial retreat, crop shifts, and community vulnerability.',
    category: 'Glaciology & Climate Science',
  },
  {
    id: '08',
    title: 'Carrying Capacity of Hill Cities and Towns',
    description: 'Our flagship service for Almora, Nainital, Mussoorie-type towns. We calculate ecological, physical, and social carrying capacity to control over-tourism and construction.',
    category: 'Hill Town Carrying Capacity',
  },
  {
    id: '09',
    title: 'Natural and Human Resource Mapping',
    description: 'Inventory and mapping of forests, water, soils, minerals and human resources — population, skills, livelihoods, infrastructure.',
    category: 'State Resource Atlas & Planning',
  },
  {
    id: '10',
    title: 'AI-Empowered Services',
    description: 'We use AI/ML for automated feature extraction from satellite imagery, landslide prediction, crop classification, and change detection.',
    category: 'AI/ML Geospatial Services',
  },
  {
    id: '11',
    title: 'Capacity Building of Stakeholders',
    description: 'Training for govt officers, teachers, students, NGOs on GIS, Web-GIS and GPS and data analysis.',
    category: 'Stakeholder Training & Capacity',
  },
  {
    id: '12',
    title: 'Curriculum Designing and Dissertation Supervising',
    description: 'We design UG/PG/Diploma curricula in Digital Cartography, Climate Change Science, Geography, Environmental Science and supervise dissertations/thesis for all levels.',
    category: 'Curriculum & Dissertation Supervising',
  },
];

export interface ProjectItem {
  id: number;
  title: string;
  region: string;
  category: string;
  tag: string;
  summary: string;
  highlights?: string;
  reportUrl?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    title: 'Rejuvenation Strategy of Dying Springs and Naulas in Dhargad Watershed (Jaigan Valley, District Bageshwar, Uttarakhand)',
    region: 'Jaigan Valley, District Bageshwar',
    category: 'Hydrology',
    tag: 'Water Security & Aviral Ganga',
    summary: 'Phase-I Rejuvenation of Springs & Naulas of Jatha & Pass Villages — Official GIScience-based micro-plans for groundwater augmentation (Towards Aviral Ganga) by Prof. J.S. Rawat, Er. Varun Rawat, Dr. N.C. Pant.',
    highlights: 'Springshed hydrogeology & recharge zones',
    reportUrl: '/reports/Dhargad_Watershed_Rejuvenation_Report_2026.pdf',
  },
  {
    id: 2,
    title: 'Rejuvenation Strategy of Dying Springs and Naulas in Panyali Gadgera Watershed, Village Bhalyuta (Jaigan Waterhed, District Bageshwar Uttarakhand)',
    region: 'Upper Himalayan Settlements',
    category: 'Hydrology',
    tag: 'Water Security & Aviral Ganga',
    summary: 'The Baluyata spring 29°44 4.41 N Lat and 79°46 54.34E Long lies at the height of 1170m from the msl in the northern part of the lesser Himalaya experimental recharge zone area.',
    highlights: 'Springshed hydrogeology & recharge zones',
    reportUrl: '/reports/Bhalyuta_Spring_Panyali_Gadgera_Rejuvenation_Report_2026.pdf',
  },
  {
    id: 3,
    title: ' Rejuvenation strategy of rainfed jamakhal stream in the lessor himalayan region district Dehradun (Uttarakhand)',
    region: 'Kotimycheck and Thana Jamankhal Watershed',
    category: 'Web-GIS',
    tag: 'Digital Governance',
    summary: 'Interactive enterprise geospatial platform providing real-time spatial analytics, land-use zoning layers, Flood Risk Zoning Layers and disaster mitigation dashboards.',
    highlights: 'Real-time spatial analytics & disaster mitigation dashboards',
    reportUrl: '/reports/HASCO_Final.pdf',
  },
  {
    id: 4,
    title: 'PM Gati-Shakti Infrastructure Corridor Survey',
    region: 'Himalayan Connectivity Networks',
    category: 'Infrastructure',
    tag: 'PM Gati-Shakti',
    summary: 'Integrated spatial data infrastructure, slope-sensitive multi-modal corridor alignment, and terrain cross-sectional modeling.',
    highlights: 'Slope-sensitive multi-modal corridor alignment & terrain modeling',
  },
  {
    id: 5,
    title: 'Jal Jeevan Mission Springshed Cadastral Survey',
    region: 'Rural Himalayan Catchments',
    category: 'Hydrology',
    tag: 'Jal Jeevan Mission',
    summary: 'High-precision GPS & drone survey for spring source sustainability, tap water pipeline routing, and catchment conservation DPRs.',
    highlights: 'Spring source sustainability & pipeline network layout',
  },
  {
    id: 6,
    title: 'Namami Gange Catchment & River Rejuvenation',
    region: 'Ganga Tributary Basins',
    category: 'Environment',
    tag: 'Namami Gange',
    summary: 'Riparian buffer mapping, sewage outflow tracking, erosion hazard zoning, and ecological restoration DPR preparation.',
    highlights: 'Riparian buffer mapping & erosion hazard zoning',
  },
];

export const INSIGHTS_ARTICLES: InsightItem[] = [
  {
    id: 'hydrogeology-springshed-modelling',
    title: 'Structural Hydrogeology & Recharge Zone Delineation in Fragile Himalayan Terrains',
    date: 'November 2025',
    category: 'Research Paper',
    readTime: '7 min read',
    excerpt: 'Lithological fracture mapping, lineament density modeling, and recharge zone spatial protection protocols for perennial mountain spring conservation.',
    buttonText: 'Read Article',
  },
  {
    id: 'urban-carrying-capacity',
    title: 'Urban Carrying Capacity Frameworks for Hill Settlements',
    date: 'August 2024',
    category: 'Whitepaper',
    readTime: '8 min read',
    excerpt: 'Methodological synthesis of slope factor of safety, foundation overburden, and municipal drinking water constraints in tourist-dense towns.',
    buttonText: 'Read Article',
  },
  {
    id: 'landslide-hazard-mapping',
    title: 'GIS and Remote Sensing in Post-Monsoon Landslide Hazard Mapping',
    date: 'July 2024',
    category: 'Technical Note',
    readTime: '5 min read',
    excerpt: 'Integrating high-resolution LiDAR with multi-temporal Sentinel-2 imagery for slope deformation tracking and early warning systems.',
    buttonText: 'Read Article',
  },
];

export const PUBLISHED_REPORTS = [
  {
    title: 'Dhargad Watershed Rejuvenation Technical Report (2026)',
    shortTitle: 'Dhargad Springs Rejuvenation Report',
    region: 'Jaigan Valley, Bageshwar',
    pdfUrl: '/reports/Dhargad_Watershed_Rejuvenation_Report_2026.pdf',
    authors: 'Prof. J.S. Rawat, Er. Varun Rawat, Dr. N.C. Pant',
  },
  {
    title: 'Bhalyuta Spring & Panyali Gadgera Rejuvenation Report (2026)',
    shortTitle: 'Bhalyuta Spring Rejuvenation Report',
    region: 'Village Bhalyuta, Bageshwar',
    pdfUrl: '/reports/Bhalyuta_Spring_Panyali_Gadgera_Rejuvenation_Report_2026.pdf',
    authors: 'Prof. J.S. Rawat, Dr. Naresh Pant, Er. Varun Rawat',
  },
  {
    title: 'Jamakhal Stream Rejuvenation in Lesser Himalaya Dehradun',
    shortTitle: 'Jamakhal Stream Rejuvenation Report',
    region: 'Kotimycheck & Thana Watershed, Dehradun',
    pdfUrl: '/reports/HASCO_Final.pdf',
    authors: 'Himalayan Action Research / GEOVERSED Field Study',
  },
  {
    title: 'Certificate of Incorporation (MCA, Govt. of India)',
    shortTitle: 'Certificate of Incorporation',
    region: 'Almora, Uttarakhand',
    pdfUrl: '/reports/Certificate_of_incorporation.pdf',
    authors: 'Ministry of Corporate Affairs, Govt. of India',
  },
];

export const RESEARCH_REPORTS = PUBLISHED_REPORTS;

export const COMPANY_INFO = {
  name: 'GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED',
  shortName: 'GEOVERSED',
  tagline: 'Geoscience Intelligence for Sustainable Solutions',
  heroH1: 'Where Field Expertise Meets Smart Technology',
  heroH2: 'Geoscience Intelligence for Sustainable Solutions',
  location: 'Almora, Uttarakhand 263601, India',
  email: 'geoversedmailbox@gmail.com',
  phone: '8273753398',
  phoneDisplay: 'Ph: 8273753398',
  phone2: '7533983533',
  phone2Display: 'Ph: 7533983533',
  servicesSubheading: 'Comprehensive geospatial and geological intelligence solutions tailored for Himalayan ecology, sustainable infrastructure, and resilient regional governance.',
};

