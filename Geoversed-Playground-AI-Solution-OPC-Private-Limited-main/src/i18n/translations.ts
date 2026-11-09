export type TranslationKey =
  // Navigation
  | 'nav.home'
  | 'nav.about'
  | 'nav.services'
  | 'nav.projects'
  | 'nav.insights'
  | 'nav.events'
  | 'nav.contact'
  | 'nav.sitemap'
  | 'nav.getQuote'
  | 'nav.corporateMandate'
  | 'nav.vision'
  | 'nav.visionSubtitle'
  | 'nav.mission'
  | 'nav.missionSubtitle'
  | 'nav.objective'
  | 'nav.objectiveSubtitle'
  | 'nav.overviewProfile'
  | 'nav.all12Services'
  | 'nav.featuredProjects'
  | 'nav.knowledgeHub'
  | 'nav.reportsPdf'
  | 'nav.exploreAll'

  // Hero Section
  | 'hero.badge'
  | 'hero.heading1'
  | 'hero.heading2'
  | 'hero.exploreServices'
  | 'hero.viewProjects'

  // Services Section
  | 'services.badge'
  | 'services.title'
  | 'services.subtitle'
  | 'services.searchPlaceholder'
  | 'services.filterAll'
  | 'services.viewSpecifications'
  | 'services.requestQuote'
  | 'services.noResults'

  // About Section
  | 'about.badge'
  | 'about.title'
  | 'about.description'
  | 'about.tab.profile'
  | 'about.tab.objects'
  | 'about.tab.missions'
  | 'about.tab.governance'
  | 'about.vision.title'
  | 'about.vision.tag'
  | 'about.vision.heading'
  | 'about.vision.text'
  | 'about.mission.title'
  | 'about.mission.tag'
  | 'about.mission.heading'
  | 'about.mission.text'
  | 'about.objective.badge'
  | 'about.objective.title'
  | 'about.objective.subtitle'
  | 'about.objective.all'
  | 'about.objective.main'
  | 'about.objective.furtherance'
  | 'about.statutoryData'
  | 'about.certificateBtn'
  | 'about.founderTitle'
  | 'about.founderRole'
  | 'about.registeredOffice'

  // Projects Section
  | 'projects.badge'
  | 'projects.title'
  | 'projects.subtitle'
  | 'projects.reportBtn'
  | 'projects.inquireBtn'

  // Insights / Knowledge Hub Section
  | 'insights.badge'
  | 'insights.title'
  | 'insights.subtitle'
  | 'insights.dprHeading'
  | 'insights.dprBadge'
  | 'insights.openReport'

  // Contact Section
  | 'contact.badge'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.headquarters'
  | 'contact.locationLabel'
  | 'contact.phoneLabel'
  | 'contact.emailLabel'
  | 'contact.sendMessage'
  | 'contact.formSubtitle'
  | 'contact.nameLabel'
  | 'contact.namePlaceholder'
  | 'contact.emailFieldLabel'
  | 'contact.emailPlaceholder'
  | 'contact.subjectLabel'
  | 'contact.subjectPlaceholder'
  | 'contact.messageLabel'
  | 'contact.messagePlaceholder'
  | 'contact.sendBtn'
  | 'contact.sending'
  | 'contact.successTitle'
  | 'contact.successMsg'

  // Events Section
  | 'events.badge'
  | 'events.title'
  | 'events.subtitle'
  | 'events.all'
  | 'events.searchPlaceholder'
  | 'events.allYears'
  | 'events.loadMore'
  | 'events.noResults'
  | 'events.viewAll'
  | 'events.backToEvents'
  | 'events.previous'
  | 'events.next'
  | 'events.photosSection'
  | 'events.videosSection'
  | 'events.latestTitle'
  | 'events.latestSubtitle'

  // Footer
  | 'footer.tagline'
  | 'footer.quickLinks'
  | 'footer.contactUs'
  | 'footer.privacy'
  | 'footer.terms'
  | 'footer.backToTop'
  | 'footer.rights'

  // Language selector
  | 'lang.selectorLabel'
  | 'lang.en'
  | 'lang.hi'
  | 'lang.te'
  | 'lang.mr'
  | 'lang.bn';

export const TRANSLATIONS: Record<'en' | 'hi' | 'te' | 'mr' | 'bn', Record<TranslationKey, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.insights': 'Insights',
    'nav.events': 'Events',
    'nav.contact': 'Contact',
    'nav.sitemap': 'Site Map',
    'nav.getQuote': 'Get Quote',
    'nav.corporateMandate': 'Corporate Mandate',
    'nav.vision': 'Vision',
    'nav.visionSubtitle': 'Category-defining global technology enterprise',
    'nav.mission': 'Mission',
    'nav.missionSubtitle': 'Transforming e-Governance into intelligent g-Governance',
    'nav.objective': 'Objective',
    'nav.objectiveSubtitle': 'Main Objects & matters for furtherance',
    'nav.overviewProfile': 'Overview & Profile',
    'nav.all12Services': '12 Core Geospatial & Geoscience Services',
    'nav.featuredProjects': 'Featured Geoscience & GIS Projects',
    'nav.knowledgeHub': 'Geoscience Insights & Publications',
    'nav.reportsPdf': 'Official Technical Reports (PDF)',
    'nav.exploreAll': 'Explore All',

    // Hero Section
    'hero.badge': 'Geospatial Excellence & Field Geosciences',
    'hero.heading1': 'Where Field Expertise Meets Smart Technology and',
    'hero.heading2': 'Geo Spatial Intelligence for Sustainable Solutions',
    'hero.exploreServices': 'Explore Our Services',
    'hero.viewProjects': 'View Projects',

    // Services Section
    'services.badge': 'Core Capabilities',
    'services.title': '12 Pillar Geoscience & GIS Services',
    'services.subtitle': 'Ground-truthed Himalayan field methodologies combined with cloud GIS, remote sensing rasters, and spatial AI modeling.',
    'services.searchPlaceholder': 'Search by service name, keyword (e.g. drone, springs, AI, carrying capacity)...',
    'services.filterAll': 'All 12 Services',
    'services.viewSpecifications': 'Specifications & Scope',
    'services.requestQuote': 'Request Quote',
    'services.noResults': 'No services match your search filter.',

    // About Section
    'about.badge': 'Statutory Corporate Profile & Mission',
    'about.title': 'Pioneering Geoscience Intelligence & Enterprise AI Solutions',
    'about.description': 'Incorporated under the Companies Act, 2013 (Ministry of Corporate Affairs, Government of India), GEOVERSED unites on-ground Himalayan field exploration with enterprise-grade Artificial Intelligence, satellite remote sensing, and national infrastructure consulting.',
    'about.tab.profile': 'Corporate Overview',
    'about.tab.objects': 'e-MOA Objects & SaaS',
    'about.tab.missions': 'National Flagship Missions',
    'about.tab.governance': 'Statutory & R&D Mandate',
    'about.vision.title': 'OUR VISION',
    'about.vision.tag': 'Global Leadership',
    'about.vision.heading': 'Category-Defining Global Technology Enterprise',
    'about.vision.text': 'To build a category-defining global technology enterprise at the intersection of SaaS, AI, and geospatial intelligence—delivering scalable, high-impact platforms that drive digital transformation, unlock operational efficiency, and generate long-term enterprise and institutional value.',
    'about.mission.title': 'OUR MISSION',
    'about.mission.tag': 'g-Governance & Digital India',
    'about.mission.heading': 'Transforming e-Governance into Intelligent g-Governance',
    'about.mission.text': 'Our mission is to design, develop, and scale enterprise-grade SaaS platforms and AI-driven software solutions that empower businesses, governments, and institutions to automate operations, unlock data intelligence, and accelerate digital transformation.',
    'about.objective.badge': 'Statutory Corporate Memorandum',
    'about.objective.title': 'OUR OBJECTIVE',
    'about.objective.subtitle': 'Chartered under Section 4 and Schedule I of the Companies Act, 2013 (INC-33 e-MOA).',
    'about.objective.all': 'All (15)',
    'about.objective.main': 'A. Main Objective (9)',
    'about.objective.furtherance': 'B. Furtherance (6)',
    'about.statutoryData': 'Official Incorporation Data',
    'about.certificateBtn': 'Certificate',
    'about.founderTitle': 'Founder & Director',
    'about.founderRole': 'Director & Chief Geospatial Architect',
    'about.registeredOffice': 'Registered Office Address',

    // Projects Section
    'projects.badge': 'Featured Engagements',
    'projects.title': 'Selected Geo Spatial Science Projects',
    'projects.subtitle': 'Real-world implementations demonstrating the convergence of rigorous field science and cutting-edge GIS technology.',
    'projects.reportBtn': 'Report',
    'projects.inquireBtn': 'Inquire for Similar',

    // Insights / Knowledge Hub Section
    'insights.badge': 'Knowledge Hub',
    'insights.title': 'Geoscience Insights & Publications',
    'insights.subtitle': 'Official technical research reports, ground-truthed hydrological micro-plans, and geospatial methodologies published by GEOVERSED researchers.',
    'insights.dprHeading': 'Published Watershed Rejuvenation Technical Reports',
    'insights.dprBadge': 'Full Technical PDFs Available',
    'insights.openReport': 'Report',

    // Contact Section
    'contact.badge': 'Get In Touch',
    'contact.title': 'Connect With Our Geoversed Team',
    'contact.subtitle': 'Located in Almora, Uttarakhand. Reach out for research collaborations, GIS consultancy, or government technical partnerships.',
    'contact.headquarters': 'Headquarters',
    'contact.locationLabel': 'Office Location',
    'contact.phoneLabel': 'Telephone',
    'contact.emailLabel': 'Official Email',
    'contact.sendMessage': 'Send a Direct Message',
    'contact.formSubtitle': 'Inquire about technical studies, GIS data licensing, or collaborative research.',
    'contact.nameLabel': 'Your Name',
    'contact.namePlaceholder': 'Name or Designation',
    'contact.emailFieldLabel': 'Email Address',
    'contact.emailPlaceholder': 'email@organization.in',
    'contact.subjectLabel': 'Subject',
    'contact.subjectPlaceholder': 'e.g., Watershed Survey in Almora / GIS Training Workshop',
    'contact.messageLabel': 'Message',
    'contact.messagePlaceholder': 'Briefly describe your requirements, area of interest, or timeline...',
    'contact.sendBtn': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.successTitle': 'Message Sent',
    'contact.successMsg': 'Thank you for reaching out to GEOVERSED. Our team in Almora will respond promptly.',

    // Footer
    'footer.tagline': 'Geoscience Intelligence for Sustainable Solutions',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.backToTop': 'Back to top',
    'footer.rights': 'All rights reserved.',

    // Events Section
    'events.badge': 'Field Engagements & Milestones',
    'events.title': 'Our Events',
    'events.subtitle': 'Trainings, workshops, MoUs, governance meetings, and high-altitude field expeditions led by GEOVERSED.',
    'events.all': 'All',
    'events.searchPlaceholder': 'Search events by title or location...',
    'events.allYears': 'All Years',
    'events.loadMore': 'Load More Events',
    'events.noResults': 'No events found matching your search or filter.',
    'events.viewAll': 'View All Events',
    'events.backToEvents': 'Back to Events',
    'events.previous': 'Previous Event',
    'events.next': 'Next Event',
    'events.photosSection': 'Event Photo Gallery',
    'events.videosSection': 'Video Highlights',
    'events.latestTitle': 'Recent Events & Field Engagements',
    'events.latestSubtitle': 'Discover our latest capacity-building workshops, academic MoUs, and Himalayan field missions.',

    // Language selector
    'lang.selectorLabel': 'Language',
    'lang.en': 'English',
    'lang.hi': 'हिन्दी',
    'lang.te': 'తెలుగు',
    'lang.mr': 'मराठी',
    'lang.bn': 'বাংলা',
  },

  hi: {
    // Navigation
    'nav.home': 'मुख्य पृष्ठ',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएँ',
    'nav.projects': 'परियोजनाएँ',
    'nav.insights': 'ज्ञान केंद्र',
    'nav.events': 'कार्यक्रम',
    'nav.contact': 'संपर्क करें',
    'nav.sitemap': 'साइट मैप',
    'nav.getQuote': 'कोटेशन लें',
    'nav.corporateMandate': 'वैधानिक अधिदेश',
    'nav.vision': 'हमारा दृष्टिकोण (Vision)',
    'nav.visionSubtitle': 'वैश्विक श्रेणी-परिभाषित प्रौद्योगिकी उपक्रम',
    'nav.mission': 'हमारा लक्ष्य (Mission)',
    'nav.missionSubtitle': 'ई-गवर्नेंस को बुद्धिमान जी-गवर्नेंस में रूपांतरित करना',
    'nav.objective': 'हमारे उद्देश्य (Objective)',
    'nav.objectiveSubtitle': 'मुख्य उद्देश्य एवं अग्रसारण के विषय (INC-33)',
    'nav.overviewProfile': 'अवलोकन एवं कंपनी प्रोफाइल',
    'nav.all12Services': '12 प्रमुख भू-स्थानिक एवं भू-विज्ञान सेवाएँ',
    'nav.featuredProjects': 'प्रमुख भू-विज्ञान एवं जीआईएस परियोजनाएँ',
    'nav.knowledgeHub': 'भू-विज्ञान अंतर्दृष्टि एवं शोध प्रकाशन',
    'nav.reportsPdf': 'आधिकारिक तकनीकी शोध रिपोर्ट (PDF)',
    'nav.exploreAll': 'सभी देखें',

    // Hero Section
    'hero.badge': 'भू-स्थानिक उत्कृष्टता एवं हिमालयी क्षेत्रीय भू-विज्ञान',
    'hero.heading1': 'जहाँ धरातलीय अनुभव एवं स्मार्ट तकनीक का संगम होता है,',
    'hero.heading2': 'सतत समाधानों हेतु आधुनिक भू-स्थानिक अभिसूचना',
    'hero.exploreServices': 'हमारी सेवाएँ देखें',
    'hero.viewProjects': 'परियोजनाएँ देखें',

    // Services Section
    'services.badge': 'प्रमुख क्षमताएँ',
    'services.title': '12 आधारभूत भू-विज्ञान एवं जीआईएस सेवाएँ',
    'services.subtitle': 'प्रमाणित हिमालयी धरातलीय कार्यप्रणाली, क्लाउड जीआईएस, उपग्रह रिमोट सेंसिंग और स्थानिक एआई मॉडलिंग का समन्वय।',
    'services.searchPlaceholder': 'सेवा नाम या कीवर्ड द्वारा खोजें (जैसे: ड्रोन, जलधारा, एआई, धारण क्षमता)...',
    'services.filterAll': 'सभी 12 सेवाएँ',
    'services.viewSpecifications': 'विशिष्टताएँ एवं कार्यक्षेत्र',
    'services.requestQuote': 'कोटेशन अनुरोध',
    'services.noResults': 'आपकी खोज के अनुरूप कोई सेवा नहीं मिली।',

    // About Section
    'about.badge': 'वैधानिक कॉर्पोरेट प्रोफ़ाइल एवं अधिदेश',
    'about.title': 'अग्रणी भू-विज्ञान अभिसूचना एवं एंटरप्राइज एआई समाधान',
    'about.description': 'कंपनी अधिनियम, 2013 (कॉर्पोरेट कार्य मंत्रालय, भारत सरकार) के अंतर्गत निगमित, जियोवर्स्ड हिमालयी धरातलीय सर्वेक्षणों को उन्नत आर्टिफिशियल इंटेलिजेंस, उपग्रह रिमोट सेंसिंग एवं राष्ट्रीय अवसंरचना परामर्श के साथ जोड़ता है।',
    'about.tab.profile': 'कॉर्पोरेट परिचय',
    'about.tab.objects': 'ई-एमओए उद्देश्य व सास',
    'about.tab.missions': 'राष्ट्रीय प्रमुख मिशन',
    'about.tab.governance': 'वैधानिक व शोध अधिदेश',
    'about.vision.title': 'हमारा दृष्टिकोण',
    'about.vision.tag': 'वैश्विक नेतृत्व',
    'about.vision.heading': 'श्रेणी-परिभाषित वैश्विक प्रौद्योगिकी उपक्रम',
    'about.vision.text': 'सास (SaaS), एआई और भू-स्थानिक अभिसूचना के संगम पर एक अग्रणी वैश्विक उद्यम का निर्माण करना—जो डिजिटल रूपांतरण, परिचालन दक्षता और दीर्घकालिक संस्थागत मूल्य प्रदान करे।',
    'about.mission.title': 'हमारा मिशन',
    'about.mission.tag': 'जी-गवर्नेंस एवं डिजिटल इंडिया',
    'about.mission.heading': 'ई-गवर्नेंस को बुद्धिमान जी-गवर्नेंस में रूपांतरित करना',
    'about.mission.text': 'हमारा उद्देश्य एंटरप्राइज-ग्रेड सास प्लेटफॉर्म और एआई-संचालित सॉफ्टवेयर विकसित करना है, जो जल संसाधन, आपदा प्रबंधन, नगर नियोजन और बुनियादी ढाँचे में पारदर्शिता और गति लाएँ।',
    'about.objective.badge': 'वैधानिक कॉर्पोरेट ज्ञापन',
    'about.objective.title': 'हमारे उद्देश्य (OBJECTIVE)',
    'about.objective.subtitle': 'कंपनी अधिनियम, 2013 की धारा 4 व अनुसूची I (INC-33 e-MOA) के अधीन अधिकृत।',
    'about.objective.all': 'सभी (15)',
    'about.objective.main': 'क. मुख्य उद्देश्य (9)',
    'about.objective.furtherance': 'ख. सहायक उद्देश्य (6)',
    'about.statutoryData': 'आधिकारिक निगमन विवरण',
    'about.certificateBtn': 'निगमन प्रमाणपत्र',
    'about.founderTitle': 'संस्थापक एवं निदेशक',
    'about.founderRole': 'निदेशक एवं मुख्य भू-स्थानिक वास्तुकार',
    'about.registeredOffice': 'पंजीकृत कार्यालय का पता',

    // Projects Section
    'projects.badge': 'विशेष परियोजनाएँ',
    'projects.title': 'चयनित भू-स्थानिक विज्ञान परियोजनाएँ',
    'projects.subtitle': 'कठिन हिमालयी क्षेत्रों में वैज्ञानिक धरातलीय सत्यता और आधुनिक जीआईएस तकनीक के सफल क्रियान्वयन के उदाहरण।',
    'projects.reportBtn': 'शोध रिपोर्ट',
    'projects.inquireBtn': 'समान कार्य हेतु पूछताछ',

    // Insights / Knowledge Hub Section
    'insights.badge': 'ज्ञान केंद्र',
    'insights.title': 'भू-विज्ञान शोध एवं प्रकाशन',
    'insights.subtitle': 'जियोवर्स्ड शोधकर्ताओं द्वारा प्रकाशित आधिकारिक तकनीकी शोध रिपोर्टें, जल-पुनर्जीवन सूक्ष्म-योजनाएँ एवं भू-स्थानिक पद्धतियाँ।',
    'insights.dprHeading': 'प्रकाशित जलागम पुनर्जीवन तकनीकी रिपोर्टें',
    'insights.dprBadge': 'पूर्ण तकनीकी पीडीएफ उपलब्ध',
    'insights.openReport': 'रिपोर्ट पढ़ें',

    // Contact Section
    'contact.badge': 'संपर्क सूत्र',
    'contact.title': 'हमारी जियोवर्स्ड टीम से संपर्क करें',
    'contact.subtitle': 'अल्मोड़ा, उत्तराखण्ड में स्थित। शोध साझेदारी, जीआईएस परामर्श या सरकारी तकनीकी परियोजनाओं हेतु संपर्क करें।',
    'contact.headquarters': 'प्रधान कार्यालय',
    'contact.locationLabel': 'कार्यालय का पता',
    'contact.phoneLabel': 'दूरभाष',
    'contact.emailLabel': 'आधिकारिक ईमेल',
    'contact.sendMessage': 'सीधा संदेश भेजें',
    'contact.formSubtitle': 'तकनीकी अध्ययन, जीआईएस डेटा लाइसेंसिंग या संयुक्त शोध परामर्श हेतु पूछताछ करें।',
    'contact.nameLabel': 'आपका नाम',
    'contact.namePlaceholder': 'नाम अथवा पदनाम',
    'contact.emailFieldLabel': 'ईमेल पता',
    'contact.emailPlaceholder': 'email@organization.in',
    'contact.subjectLabel': 'विषय',
    'contact.subjectPlaceholder': 'उदा. अल्मोड़ा में जलागम सर्वेक्षण / जीआईएस कार्यशाला',
    'contact.messageLabel': 'संदेश',
    'contact.messagePlaceholder': 'अपनी आवश्यकता, अध्ययन क्षेत्र अथवा समय-सीमा का संक्षेप में विवरण दें...',
    'contact.sendBtn': 'संदेश प्रेषित करें',
    'contact.sending': 'भेजा जा रहा है...',
    'contact.successTitle': 'संदेश सफलतापूर्वक भेजा गया',
    'contact.successMsg': 'जियोवर्स्ड से संपर्क करने हेतु धन्यवाद। अल्मोड़ा स्थित हमारी तकनीकी टीम शीघ्र उत्तर देगी।',

    // Footer
    'footer.tagline': 'सतत समाधानों हेतु आधुनिक भू-विज्ञान अभिसूचना',
    'footer.quickLinks': 'त्वरित संपर्क',
    'footer.contactUs': 'हमसे संपर्क करें',
    'footer.privacy': 'गोपनीयता नीति (Privacy Policy)',
    'footer.terms': 'सेवा की शर्तें (Terms of Service)',
    'footer.backToTop': 'शीर्ष पर जाएँ',
    'footer.rights': 'सर्वाधिकार सुरक्षित।',

    // Events Section
    'events.badge': 'क्षेत्रीय कार्यक्रम एवं उपलब्धियाँ',
    'events.title': 'हमारे कार्यक्रम',
    'events.subtitle': 'जियोवर्सड द्वारा आयोजित प्रशिक्षण, कार्यशालाएँ, एमओयू, शासन बैठकें और उच्च-हिमालयी क्षेत्रीय अभियान।',
    'events.all': 'सभी',
    'events.searchPlaceholder': 'शीर्षक या स्थान द्वारा कार्यक्रम खोजें...',
    'events.allYears': 'सभी वर्ष',
    'events.loadMore': 'और कार्यक्रम देखें',
    'events.noResults': 'कोई कार्यक्रम नहीं मिला।',
    'events.viewAll': 'सभी कार्यक्रम देखें',
    'events.backToEvents': 'कार्यक्रम सूची पर वापस जाएँ',
    'events.previous': 'पिछला कार्यक्रम',
    'events.next': 'अगला कार्यक्रम',
    'events.photosSection': 'कार्यक्रम चित्र वीथिका (Photos)',
    'events.videosSection': 'वीडियो हाइलाइट्स',
    'events.latestTitle': 'हाल के कार्यक्रम एवं क्षेत्रीय अभियान',
    'events.latestSubtitle': 'हमारी हालिया क्षमता-विकास कार्यशालाएँ, शैक्षणिक समझौते और हिमालयी वैज्ञानिक मिशन।',

    // Language selector
    'lang.selectorLabel': 'भाषा',
    'lang.en': 'English',
    'lang.hi': 'हिन्दी',
    'lang.te': 'తెలుగు',
    'lang.mr': 'मराठी',
    'lang.bn': 'বাংলা',
  },

  te: {
    // Navigation
    'nav.home': 'హోమ్',
    'nav.about': 'మా గురించి',
    'nav.services': 'సేవలు',
    'nav.projects': 'ప్రాజెక్టులు',
    'nav.insights': 'పరిజ్ఞాన కేంద్రం',
    'nav.events': 'ఈవెంట్లు',
    'nav.contact': 'సంప్రదించండి',
    'nav.sitemap': 'సైట్ మ్యాప్',
    'nav.getQuote': 'కోటేషన్ పొందండి',
    'nav.corporateMandate': 'కార్పొరేట్ ఆదేశం',
    'nav.vision': 'మా దార్శనికత (Vision)',
    'nav.visionSubtitle': 'కేటగిరీని పునర్నిర్వచించే గ్లోబల్ టెక్నాలజీ ఎంటర్‌ప్రైజ్',
    'nav.mission': 'మా లక్ష్యం (Mission)',
    'nav.missionSubtitle': 'ఇ-పాలనను ఇంటెలిజెంట్ జి-పాలనగా మార్చడం',
    'nav.objective': 'మా లక్ష్యాలు (Objective)',
    'nav.objectiveSubtitle': 'ప్రధాన లక్ష్యాలు & మరింత పురోగతి అంశాలు (INC-33)',
    'nav.overviewProfile': 'అవలోకనం & కంపెనీ ప్రొఫైల్',
    'nav.all12Services': '12 ప్రధాన జియోస్పేషియల్ & జియోసైన్స్ సేవలు',
    'nav.featuredProjects': 'ప్రముఖ జియోసైన్స్ & GIS ప్రాజెక్టులు',
    'nav.knowledgeHub': 'జియోసైన్స్ పరిశోధనలు & ప్రచురణలు',
    'nav.reportsPdf': 'అధికారిక సాంకేతిక నివేదికలు (PDF)',
    'nav.exploreAll': 'అన్నీ చూడండి',

    // Hero Section
    'hero.badge': 'జియోస్పేషియల్ ఎక్సలెన్స్ & హిమాలయ ఫీల్డ్ జియోసైన్సెస్',
    'hero.heading1': 'క్షేత్ర నైపుణ్యం మరియు స్మార్ట్ సాంకేతికత కలయిక,',
    'hero.heading2': 'స్థిరమైన పరిష్కారాల కోసం జియోస్పేషియల్ ఇంటెలిజెన్స్',
    'hero.exploreServices': 'మా సేవలను అన్వేషించండి',
    'hero.viewProjects': 'ప్రాజెక్టులను చూడండి',

    // Services Section
    'services.badge': 'ప్రధాన సామర్థ్యాలు',
    'services.title': '12 ప్రధాన జియోసైన్స్ & GIS సేవలు',
    'services.subtitle': 'హిమాలయ ఫీల్డ్ మెథడాలజీలు, క్లౌడ్ GIS, రిమోట్ సెన్సింగ్ రాస్టర్స్ మరియు స్పేషియల్ AI మోడలింగ్ సమన్వయం.',
    'services.searchPlaceholder': 'సర్వీస్ పేరు లేదా కీవర్డ్ ద్వారా శోధించండి (ఉదా: డ్రోన్, స్ప్రింగ్స్, AI, మోసే సామర్థ్యం)...',
    'services.filterAll': 'మొత్తం 12 సేవలు',
    'services.viewSpecifications': 'వివరాలు & పరిధి',
    'services.requestQuote': 'కోటేషన్ అభ్యర్థించండి',
    'services.noResults': 'మీ శోధనకు సరిపోలే సేవలేవీ లేవు.',

    // About Section
    'about.badge': 'చట్టబద్ధమైన కార్పొరేట్ ప్రొఫైల్ & ఆదేశం',
    'about.title': 'జియోసైన్స్ ఇంటెలిజెన్స్ & ఎంటర్‌ప్రైజ్ AI సొల్యూషన్స్ అగ్రగామి',
    'about.description': 'కంపెనీల చట్టం, 2013 (కార్పొరేట్ వ్యవహారాల మంత్రిత్వ శాఖ, భారత ప్రభుత్వం) క్రింద నమోదు చేయబడిన జియోవర్స్డ్, క్షేత్ర పరిశోధనలను ఆధునిక ఆర్టిఫిషియల్ ఇంటెలిజెన్స్, శాటిలైట్ రిమోట్ సెన్సింగ్ మరియు జాతీయ మౌలిక సదుపాయాల కన్సల్టింగ్‌తో ఏకీకృతం చేస్తుంది.',
    'about.tab.profile': 'కార్పొరేట్ అవలోకనం',
    'about.tab.objects': 'e-MOA లక్ష్యాలు & SaaS',
    'about.tab.missions': 'జాతీయ ముఖ్య మిషన్లు',
    'about.tab.governance': 'చట్టబద్ధ & R&D ఆదేశం',
    'about.vision.title': 'మా దార్శనికత (OUR VISION)',
    'about.vision.tag': 'గ్లోబల్ లీడర్‌షిప్',
    'about.vision.heading': 'కేటగిరీని పునర్నిర్వచించే గ్లోబల్ టెక్నాలజీ ఎంటర్‌ప్రైజ్',
    'about.vision.text': 'SaaS, AI మరియు జియోస్పేషియల్ ఇంటెలిజెన్స్ సంగమంలో గ్లోబల్ ఎంటర్‌ప్రైజ్‌ను నిర్మించడం—డిజిటల్ పరివర్తనను ప్రోత్సహించడం, కార్యాచరణ సామర్థ్యాన్ని పెంచడం మరియు దీర్ఘకాలిక విలువను సృష్టించడం.',
    'about.mission.title': 'మా మిషన్ (OUR MISSION)',
    'about.mission.tag': 'జి-పాలన & డిజిటల్ ఇండియా',
    'about.mission.heading': 'ఇ-పాలనను ఇంటెలిజెంట్ జి-పాలనగా మార్చడం',
    'about.mission.text': 'వ్యాపారాలు, ప్రభుత్వాలు మరియు సంస్థలు కార్యకలాపాలను ఆటోమేట్ చేయడానికి, డేటా ఇంటెలిజెన్స్ అన్‌లాక్ చేయడానికి సహాయపడే ఎంటర్‌ప్రైజ్-గ్రేడ్ SaaS ప్లాట్‌ఫారమ్‌లు మరియు AI పరిష్కారాలను రూపొందించడం.',
    'about.objective.badge': 'చట్టబద్ధమైన కార్పొరేట్ మెమోరాండమ్',
    'about.objective.title': 'మా లక్ష్యాలు (OUR OBJECTIVE)',
    'about.objective.subtitle': 'కంపెనీల చట్టం, 2013 యొక్క సెక్షన్ 4 మరియు షెడ్యూల్ I కింద అధికారం పొందింది (INC-33 e-MOA).',
    'about.objective.all': 'అన్నీ (15)',
    'about.objective.main': 'A. ప్రధాన లక్ష్యాలు (9)',
    'about.objective.furtherance': 'B. సహాయక లక్ష్యాలు (6)',
    'about.statutoryData': 'అధికారిక ఇన్కార్పొరేషన్ డేటా',
    'about.certificateBtn': 'సర్టిఫికేట్',
    'about.founderTitle': 'వ్యవస్థాపకుడు & డైరెక్టర్',
    'about.founderRole': 'డైరెక్టర్ & చీఫ్ జియోస్పేషియల్ ఆర్కిటెక్ట్',
    'about.registeredOffice': 'రిజిస్టర్డ్ కార్యాలయ చిరునామా',

    // Projects Section
    'projects.badge': 'ప్రత్యేక ప్రాజెక్టులు',
    'projects.title': 'ఎంచుకున్న జియోస్పేషియల్ సైన్స్ ప్రాజెక్టులు',
    'projects.subtitle': 'హిమాలయ ప్రాంతాలలో శాస్త్రీయ క్షేత్ర సత్యత మరియు అత్యాధునిక GIS సాంకేతికత సమన్వయానికి నిజమైన ఉదాహరణలు.',
    'projects.reportBtn': 'నివేదిక',
    'projects.inquireBtn': 'విచారించండి',

    // Insights / Knowledge Hub Section
    'insights.badge': 'నాలెడ్జ్ హబ్',
    'insights.title': 'జియోసైన్స్ పరిశోధనలు & ప్రచురణలు',
    'insights.subtitle': 'జియోవర్స్డ్ పరిశోధకులు ప్రచురించిన అధికారిక సాంకేతిక నివేదికలు, జలవనరుల పునరుజ్జీవన ప్రణాళికలు మరియు పద్ధతులు.',
    'insights.dprHeading': 'ప్రచురించబడిన వాటర్‌షెడ్ పునరుజ్జీవన సాంకేతిక నివేదికలు',
    'insights.dprBadge': 'పూర్తి సాంకేతిక PDF అందుబాటులో ఉంది',
    'insights.openReport': 'నివేదిక చూడండి',

    // Contact Section
    'contact.badge': 'సంప్రదించండి',
    'contact.title': 'మా జియోవర్స్డ్ బృందంతో మాట్లాడండి',
    'contact.subtitle': 'అల్మోరా, ఉత్తరాఖండ్‌లో ఉంది. పరిశోధన భాగస్వామ్యాలు, GIS కన్సల్టెన్సీ లేదా ప్రాజెక్ట్‌ల కోసం సంప్రదించండి.',
    'contact.headquarters': 'ప్రధాన కార్యాలయం',
    'contact.locationLabel': 'కార్యాలయ స్థానం',
    'contact.phoneLabel': 'టెలిఫోన్',
    'contact.emailLabel': 'అధికారిక ఇమెయిల్',
    'contact.sendMessage': 'సందేశం పంపండి',
    'contact.formSubtitle': 'సాంకేతిక అధ్యయనాలు, GIS డేటా లేదా సంయుక్త పరిశోధనల కోసం విచారించండి.',
    'contact.nameLabel': 'మీ పేరు',
    'contact.namePlaceholder': 'పేరు లేదా హోదా',
    'contact.emailFieldLabel': 'ఇమెయిల్ చిరునామా',
    'contact.emailPlaceholder': 'email@organization.in',
    'contact.subjectLabel': 'విషయం',
    'contact.subjectPlaceholder': 'ఉదా. అల్మోరాలో వాటర్‌షెడ్ సర్వే / GIS వర్క్‌షాప్',
    'contact.messageLabel': 'సందేశం',
    'contact.messagePlaceholder': 'మీ అవసరాలు, ఆసక్తి ఉన్న ప్రాంతం లేదా సమయ పరిమితిని వివరించండి...',
    'contact.sendBtn': 'సందేశం పంపండి',
    'contact.sending': 'పంపుతోంది...',
    'contact.successTitle': 'సందేశం పంపబడింది',
    'contact.successMsg': 'జియోవర్స్డ్‌ను సంప్రదించినందుకు ధన్యవాదాలు. అల్మోరాలోని మా బృందం వెంటనే ప్రతిస్పందిస్తుంది.',

    // Footer
    'footer.tagline': 'స్థిరమైన పరిష్కారాల కోసం జియోసైన్స్ ఇంటెలిజెన్స్',
    'footer.quickLinks': 'శీఘ్ర లింకులు',
    'footer.contactUs': 'మమ్మల్ని సంప్రదించండి',
    'footer.privacy': 'గోప్యతా విధానం (Privacy Policy)',
    'footer.terms': 'సేవా నిబంధనలు (Terms of Service)',
    'footer.backToTop': 'పైకి వెళ్లండి',
    'footer.rights': 'సర్వహక్కులు ప్రత్యేకించబడ్డాయి.',

    // Events Section
    'events.badge': 'క్షేత్ర ఈవెంట్లు & మైలురాళ్ళు',
    'events.title': 'మా ఈవెంట్లు',
    'events.subtitle': 'జియోవర్స్డ్ నేతృత్వంలోని శిక్షణలు, వర్క్‌షాప్‌లు, అవగాహన ఒప్పందాలు (MoU) మరియు క్షేత్రస్థాయి యాత్రలు.',
    'events.all': 'అన్నీ',
    'events.searchPlaceholder': 'శీర్షిక లేదా స్థానం ద్వారా శోధించండి...',
    'events.allYears': 'అన్ని సంవత్సరాలు',
    'events.loadMore': 'మరిన్ని ఈవెంట్లను లోడ్ చేయండి',
    'events.noResults': 'ఎటువంటి ఈవెంట్లు కనుగొనబడలేదు.',
    'events.viewAll': 'అన్ని ఈవెంట్లను చూడండి',
    'events.backToEvents': 'ఈవెంట్లకు తిరిగి వెళ్లండి',
    'events.previous': 'మునుపటి ఈవెంట్',
    'events.next': 'తరువాతి ఈవెంట్',
    'events.photosSection': 'ఈవెంట్ ఫోటో గ్యాలరీ',
    'events.videosSection': 'వీడియో ముఖ్యాంశాలు',
    'events.latestTitle': 'ఇటీవలి ఈవెంట్లు & ఫీల్డ్ మిషన్లు',
    'events.latestSubtitle': 'మా తాజా కెపాసిటీ బిల్డింగ్ వర్క్‌షాప్‌లు, అకడమిక్ ఒప్పందాలు మరియు ఫీల్డ్ మిషన్లను కనుగొనండి.',

    // Language selector
    'lang.selectorLabel': 'భాష',
    'lang.en': 'English',
    'lang.hi': 'हिन्दी',
    'lang.te': 'తెలుగు',
    'lang.mr': 'मराठी',
    'lang.bn': 'বাংলা',
  },

  mr: {
    // Navigation
    'nav.home': 'मुख्यपृष्ठ',
    'nav.about': 'आमच्याबद्दल',
    'nav.services': 'सेवा',
    'nav.projects': 'प्रकल्प',
    'nav.insights': 'ज्ञान केंद्र',
    'nav.events': 'कार्यक्रम',
    'nav.contact': 'संपर्क',
    'nav.sitemap': 'साइट मॅप',
    'nav.getQuote': 'कोटेशन मिळवा',
    'nav.corporateMandate': 'वैधानिक आदेश',
    'nav.vision': 'आमचा दृष्टिकोन (Vision)',
    'nav.visionSubtitle': 'जागतिक तंत्रज्ञान उपक्रम',
    'nav.mission': 'आमचे ध्येय (Mission)',
    'nav.missionSubtitle': 'ई-प्रशासनाचे बुद्धिमान जी-प्रशासनात रूपांतर',
    'nav.objective': 'आमची उद्दिष्टे (Objective)',
    'nav.objectiveSubtitle': 'मुख्य उद्दिष्टे आणि संवर्धन बाबी (INC-33)',
    'nav.overviewProfile': 'आढावा आणि कंपनी प्रोफाइल',
    'nav.all12Services': '12 मुख्य भू-स्थानिक व भू-विज्ञान सेवा',
    'nav.featuredProjects': 'प्रमुख भू-विज्ञान व जीआयएस प्रकल्प',
    'nav.knowledgeHub': 'भू-विज्ञान संशोधन व प्रकाशने',
    'nav.reportsPdf': 'अधिकृत तांत्रिक अहवाल (PDF)',
    'nav.exploreAll': 'सर्व पहा',

    // Hero Section
    'hero.badge': 'भू-स्थानिक उत्कृष्टता आणि हिमालयीन भू-विज्ञान',
    'hero.heading1': 'जेथे प्रत्यक्ष क्षेत्रीय अनुभव आणि स्मार्ट तंत्रज्ञान एकत्र येतात,',
    'hero.heading2': 'शाश्वत उपायांसाठी आधुनिक भू-स्थानिक बुद्धिमत्ता',
    'hero.exploreServices': 'आमच्या सेवा एक्सप्लोर करा',
    'hero.viewProjects': 'प्रकल्प पहा',

    // Services Section
    'services.badge': 'मुख्य क्षमता',
    'services.title': '12 मूलभूत भू-विज्ञान आणि जीआयएस सेवा',
    'services.subtitle': 'प्रमाणित हिमालयीन क्षेत्रीय पद्धती, क्लाउड जीआयएस, उपग्रह रिमोट सेन्सिंग आणि स्थानिक एआय मॉडेलिंगचा समन्वय.',
    'services.searchPlaceholder': 'सेवेचे नाव किंवा कीवर्डद्वारे शोधा (उदा. ड्रोन, झरे, एआय, वहन क्षमता)...',
    'services.filterAll': 'सर्व 12 सेवा',
    'services.viewSpecifications': 'तपशील आणि व्याप्ती',
    'services.requestQuote': 'कोटेशन विनंती',
    'services.noResults': 'आपल्या शोधाशी जुळणारी सेवा आढळली नाही.',

    // About Section
    'about.badge': 'वैधानिक कॉर्पोरेट प्रोफाइल व आदेश',
    'about.title': 'अग्रणी भू-विज्ञान बुद्धिमत्ता व एंटरप्राइज एआय सोल्यूशन्स',
    'about.description': 'कंपनी कायदा, 2013 (कॉर्पोरेट व्यवहार मंत्रालय, भारत सरकार) अंतर्गत नोंदणीकृत, जिओव्हर्स्ड हिमालयीन क्षेत्रीय संशोधनाला प्रगत कृत्रिम बुद्धिमत्ता, उपग्रह रिमोट सेन्सिंग आणि राष्ट्रीय पायाभूत सल्लागाराशी जोडते.',
    'about.tab.profile': 'कॉर्पोरेट आढावा',
    'about.tab.objects': 'ई-एमओए उद्दिष्टे व SaaS',
    'about.tab.missions': 'राष्ट्रीय प्रमुख मोहिमा',
    'about.tab.governance': 'वैधानिक व संशोधन आदेश',
    'about.vision.title': 'आमचा दृष्टिकोन (OUR VISION)',
    'about.vision.tag': 'जागतिक नेतृत्व',
    'about.vision.heading': 'श्रेणी-परिभाषित जागतिक तंत्रज्ञान उपक्रम',
    'about.vision.text': 'SaaS, AI आणि भू-स्थानिक बुद्धिमत्तेच्या संगमावर जागतिक तंत्रज्ञान उपक्रम उभारणे—जे डिजिटल रूपांतरणाला गती देईल, कार्यक्षमता वाढवेल आणि संस्थात्मक मूल्य निर्माण करेल.',
    'about.mission.title': 'आमचे ध्येय (OUR MISSION)',
    'about.mission.tag': 'जी-प्रशासन आणि डिजिटल इंडिया',
    'about.mission.heading': 'ई-प्रशासनाचे बुद्धिमान जी-प्रशासनात रूपांतर करणे',
    'about.mission.text': 'उद्योगांसाठी एंटरप्राइज दर्जाचे SaaS प्लॅटफॉर्म्स आणि AI-सक्षम सॉफ्टवेअर सोल्यूशन्स विकसित करणे, ज्यामुळे जलसंधारण, आपत्ती व्यवस्थापन आणि नगरनियोजनाला गती मिळेल.',
    'about.objective.badge': 'वैधानिक कॉर्पोरेट मेमोरँडम',
    'about.objective.title': 'आमची उद्दिष्टे (OUR OBJECTIVE)',
    'about.objective.subtitle': 'कंपनी कायदा, 2013 चे कलम 4 आणि अनुसूची I (INC-33 e-MOA) अन्वये अधिकृत.',
    'about.objective.all': 'सर्व (15)',
    'about.objective.main': 'A. मुख्य उद्दिष्टे (9)',
    'about.objective.furtherance': 'B. पूरक उद्दिष्टे (6)',
    'about.statutoryData': 'अधिकृत नोंदणी तपशील',
    'about.certificateBtn': 'प्रमाणपत्र',
    'about.founderTitle': 'संस्थापक आणि संचालक',
    'about.founderRole': 'संचालक व मुख्य भू-स्थानिक वास्तुविशारद',
    'about.registeredOffice': 'नोंदणीकृत कार्यालयाचा पत्ता',

    // Projects Section
    'projects.badge': 'विशेष प्रकल्प',
    'projects.title': 'निवडक भू-स्थानिक विज्ञान प्रकल्प',
    'projects.subtitle': 'कठिन हिमालयीन प्रदेशात शास्त्रीय क्षेत्रीय सत्यता आणि अत्याधुनिक जीआयएस तंत्रज्ञानाच्या यशस्वी अंमलबजावणीची उदाहरणे.',
    'projects.reportBtn': 'अहवाल',
    'projects.inquireBtn': 'चौकशी करा',

    // Insights / Knowledge Hub Section
    'insights.badge': 'ज्ञान केंद्र',
    'insights.title': 'भू-विज्ञान संशोधन आणि प्रकाशने',
    'insights.subtitle': 'जिओव्हर्स्ड संशोधकांनी प्रकाशित केलेले अधिकृत तांत्रिक अहवाल, पाणलोट पुनरुज्जीवन सूक्ष्म-योजना आणि भू-स्थानिक पद्धती.',
    'insights.dprHeading': 'प्रकाशित पाणलोट पुनरुज्जीवन तांत्रिक अहवाल',
    'insights.dprBadge': 'पूर्ण तांत्रिक PDF उपलब्ध',
    'insights.openReport': 'अहवाल वाचा',

    // Contact Section
    'contact.badge': 'संपर्क साधा',
    'contact.title': 'आमच्या जिओव्हर्स्ड टीमशी संपर्क साधा',
    'contact.subtitle': 'अल्मोडा, उत्तराखंड येथे स्थित. संशोधन सहकार्य, जीआयएस सल्ला किंवा प्रकल्पांसाठी संपर्क साधा.',
    'contact.headquarters': 'मुख्य कार्यालय',
    'contact.locationLabel': 'कार्यालयाचे ठिकाण',
    'contact.phoneLabel': 'दूरध्वनी',
    'contact.emailLabel': 'अधिकृत ईमेल',
    'contact.sendMessage': 'थेट संदेश पाठवा',
    'contact.formSubtitle': 'तांत्रिक अभ्यास, जीआयएस डेटा किंवा संयुक्त संशोधनासाठी चौकशी करा.',
    'contact.nameLabel': 'आपले नाव',
    'contact.namePlaceholder': 'नाव किंवा पद',
    'contact.emailFieldLabel': 'ईमेल पत्ता',
    'contact.emailPlaceholder': 'email@organization.in',
    'contact.subjectLabel': 'विषय',
    'contact.subjectPlaceholder': 'उदा. अल्मोडामध्ये पाणलोट सर्वेक्षण / जीआयएस कार्यशाळा',
    'contact.messageLabel': 'संदेश',
    'contact.messagePlaceholder': 'आपल्या गरजा, अभ्यास क्षेत्र किंवा वेळेची मर्यादा थोडक्यात सांगा...',
    'contact.sendBtn': 'संदेश पाठवा',
    'contact.sending': 'पाठवत आहे...',
    'contact.successTitle': 'संदेश यशस्वीरित्या पाठवला',
    'contact.successMsg': 'जिओव्हर्स्डशी संपर्क साधल्याबद्दल धन्यवाद. आमची अल्मोडा येथील टीम लवकरच उत्तर देईल.',

    // Footer
    'footer.tagline': 'शाश्वत उपायांसाठी आधुनिक भू-विज्ञान बुद्धिमत्ता',
    'footer.quickLinks': 'द्रुत दुवे',
    'footer.contactUs': 'आमच्याशी संपर्क साधा',
    'footer.privacy': 'गोपनीयता धोरण (Privacy Policy)',
    'footer.terms': 'सेवा अटी (Terms of Service)',
    'footer.backToTop': 'वर जा',
    'footer.rights': 'सर्व हक्क राखीव.',

    // Events Section
    'events.badge': 'क्षेत्रीय उपक्रम व महत्त्वपूर्ण टप्पे',
    'events.title': 'आमचे कार्यक्रम',
    'events.subtitle': 'जिओव्हर्स्ड द्वारे आयोजित प्रशिक्षण, कार्यशाळा, सामंजस्य करार (MoU) आणि हिमालयीन क्षेत्रीय मोहिमा.',
    'events.all': 'सर्व',
    'events.searchPlaceholder': 'शीर्षक किंवा स्थानानुसार कार्यक्रम शोधा...',
    'events.allYears': 'सर्व वर्षे',
    'events.loadMore': 'आणखी कार्यक्रम लोड करा',
    'events.noResults': 'कोणतेही कार्यक्रम आढळले नाहीत.',
    'events.viewAll': 'सर्व कार्यक्रम पहा',
    'events.backToEvents': 'कार्यक्रमांकडे परत जा',
    'events.previous': 'मागील कार्यक्रम',
    'events.next': 'पुढील कार्यक्रम',
    'events.photosSection': 'कार्यक्रम छायाचित्र दालन (Photos)',
    'events.videosSection': 'व्हिडिओ हायलाइट्स',
    'events.latestTitle': 'नुकतेच पार पडलेले कार्यक्रम व मोहिमा',
    'events.latestSubtitle': 'आमच्या कार्यशाळा, शैक्षणिक करार आणि वैज्ञानिक क्षेत्रीय मोहिमांचा आढावा घ्या.',

    // Language selector
    'lang.selectorLabel': 'भाषा',
    'lang.en': 'English',
    'lang.hi': 'हिन्दी',
    'lang.te': 'తెలుగు',
    'lang.mr': 'मराठी',
    'lang.bn': 'বাংলা',
  },

  bn: {
    // Navigation
    'nav.home': 'নীড়পাতা',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.services': 'সেবাসমূহ',
    'nav.projects': 'প্রকল্পসমূহ',
    'nav.insights': 'জ্ঞান কেন্দ্র',
    'nav.events': 'ইভেন্টস',
    'nav.contact': 'যোগাযোগ',
    'nav.sitemap': 'সাইট ম্যাপ',
    'nav.getQuote': 'কোটেশন পান',
    'nav.corporateMandate': 'সংবিধিবদ্ধ নির্দেশ',
    'nav.vision': 'আমাদের রূপকল্প (Vision)',
    'nav.visionSubtitle': 'শ্রেণী-নির্ধারক গ্লোবাল টেকনোলজি এন্টারপ্রাইজ',
    'nav.mission': 'আমাদের মিশন (Mission)',
    'nav.missionSubtitle': 'ই-গভর্ন্যান্সকে ইন্টেলিজেন্ট জি-গভর্ন্যান্সে রূপান্তর',
    'nav.objective': 'আমাদের উদ্দেশ্য (Objective)',
    'nav.objectiveSubtitle': 'প্রধান উদ্দেশ্য ও সহায়ক বিষয়াবলী (INC-33)',
    'nav.overviewProfile': 'সংক্ষিপ্ত পরিচিতি ও প্রোফাইল',
    'nav.all12Services': '১২টি প্রধান ভূ-স্থানিক ও ভূ-বিজ্ঞান পরিষেবা',
    'nav.featuredProjects': 'বিশিষ্ট ভূ-বিজ্ঞান ও জিআইএস প্রকল্পসমূহ',
    'nav.knowledgeHub': 'ভূ-বিজ্ঞান গবেষণা ও প্রকাশনা',
    'nav.reportsPdf': 'অফিসিয়াল প্রযুক্তিগত প্রতিবেদন (PDF)',
    'nav.exploreAll': 'সবগুলো দেখুন',

    // Hero Section
    'hero.badge': 'ভূ-স্থানিক উৎকর্ষ ও হিমালয় ফিল্ড ভূ-বিজ্ঞান',
    'hero.heading1': 'যেখানে বাস্তব মাঠপর্যায়ের অভিজ্ঞতা ও স্মার্ট প্রযুক্তির মিলন ঘটে,',
    'hero.heading2': 'টেকসই সমাধানের জন্য আধুনিক ভূ-স্থানিক বুদ্ধিমত্তা',
    'hero.exploreServices': 'আমাদের সেবাসমূহ দেখুন',
    'hero.viewProjects': 'প্রকল্পসমূহ দেখুন',

    // Services Section
    'services.badge': 'প্রধান সক্ষমতা',
    'services.title': '১২টি ভিত্তিপ্রস্তর ভূ-বিজ্ঞান ও জিআইএস পরিষেবা',
    'services.subtitle': 'হিমালয়ের মাঠপর্যায়ের পদ্ধতি, ক্লাউড জিআইএস, রিমোট সেন্সিং ও স্থানিক এআই মডেলিং-এর সমন্বয়।',
    'services.searchPlaceholder': 'পরিষেবার নাম বা কীওয়ার্ড দিয়ে খুঁজুন (যেমন: ড্রোন, ঝর্ণা, এআই, বহনক্ষমতা)...',
    'services.filterAll': 'সমস্ত ১২টি পরিষেবা',
    'services.viewSpecifications': 'বিবরণ ও কাজের পরিধি',
    'services.requestQuote': 'কোটেশন অনুরোধ',
    'services.noResults': 'আপনার অনুসন্ধানের সাথে মেলে এমন কোনো পরিষেবা পাওয়া যায়নি।',

    // About Section
    'about.badge': 'সংবিধিবদ্ধ কর্পোরেট প্রোফাইল ও আদেশ',
    'about.title': 'অগ্রগামী ভূ-বিজ্ঞান বুদ্ধিমত্তা ও এন্টারপ্রাইজ এআই সমাধান',
    'about.description': 'কোম্পানি আইন, ২০১৩ (কর্পোরেট বিষয়ক মন্ত্রণালয়, ভারত সরকার)-এর অধীনে নিগমবদ্ধ, জিওভার্সড মাঠপর্যায়ের ভূ-বিজ্ঞানকে কৃত্রিম বুদ্ধিমত্তা, উপগ্রহ রিমোট সেন্সিং এবং জাতীয় অবকাঠামো পরামর্শের সাথে যুক্ত করে।',
    'about.tab.profile': 'কর্পোরেট পরিচিতি',
    'about.tab.objects': 'ই-এমওএ উদ্দেশ্য ও SaaS',
    'about.tab.missions': 'জাতীয় প্রধান মিশনসমূহ',
    'about.tab.governance': 'সংবিধিবদ্ধ ও গবেষণা আদেশ',
    'about.vision.title': 'আমাদের রূপকল্প (OUR VISION)',
    'about.vision.tag': 'বৈশ্বিক নেতৃত্ব',
    'about.vision.heading': 'শ্রেণী-নির্ধারক গ্লোবাল প্রযুক্তি এন্টারপ্রাইজ',
    'about.vision.text': 'SaaS, AI এবং ভূ-স্থানিক বুদ্ধিমত্তার সংযোগস্থলে একটি বিশ্বমানের এন্টারপ্রাইজ গড়ে তোলা—যা ডিজিটাল রূপান্তরকে ত্বরান্বিত করবে ও দীর্ঘমেয়াদী প্রাতিষ্ঠানিক মূল্য সৃষ্টি করবে।',
    'about.mission.title': 'আমাদের মিশন (OUR MISSION)',
    'about.mission.tag': 'জি-গভর্ন্যান্স ও ডিজিটাল ইন্ডিয়া',
    'about.mission.heading': 'ই-গভর্ন্যান্সকে ইন্টেলিজেন্ট জি-গভর্ন্যান্সে রূপান্তর করা',
    'about.mission.text': 'উন্নত এন্টারপ্রাইজ SaaS প্ল্যাটফর্ম ও এআই-চালিত সফ্টওয়্যার তৈরি করা যা জলসম্পদ, দুর্যোগ ব্যবস্থাপনা ও নগর পরিকল্পনায় গতি ও স্বচ্ছতা নিশ্চিত করে।',
    'about.objective.badge': 'সংবিধিবদ্ধ কর্পোরেট স্মারকলিপি',
    'about.objective.title': 'আমাদের উদ্দেশ্য (OUR OBJECTIVE)',
    'about.objective.subtitle': 'কোম্পানি আইন, ২০১৩-এর ধারা ৪ ও তফসিল ১ (INC-33 e-MOA) অনুযায়ী অনুমোদিত।',
    'about.objective.all': 'সকল (১৫)',
    'about.objective.main': 'ক. মূল উদ্দেশ্যসমূহ (৯)',
    'about.objective.furtherance': 'খ. সহায়ক উদ্দেশ্যসমূহ (৬)',
    'about.statutoryData': 'অফিসিয়াল অন্তর্ভুক্তি তথ্য',
    'about.certificateBtn': 'সনদপত্র',
    'about.founderTitle': 'প্রতিষ্ঠাতা ও পরিচালক',
    'about.founderRole': 'পরিচালক ও প্রধান ভূ-স্থানিক স্থপতি',
    'about.registeredOffice': 'নিবন্ধিত কার্যালয়ের ঠিকানা',

    // Projects Section
    'projects.badge': 'বিশিষ্ট প্রকল্পসমূহ',
    'projects.title': 'নির্বাচিত ভূ-স্থানিক বিজ্ঞান প্রকল্প',
    'projects.subtitle': 'হিমালয়ের দুর্গম অঞ্চলে বৈজ্ঞানিক বাস্তব সত্যতা এবং আধুনিক জিআইএস প্রযুক্তির সফল প্রয়োগের নিদর্শন।',
    'projects.reportBtn': 'প্রতিবেদন',
    'projects.inquireBtn': 'অনুসন্ধান করুন',

    // Insights / Knowledge Hub Section
    'insights.badge': 'জ্ঞান কেন্দ্র',
    'insights.title': 'ভূ-বিজ্ঞান অন্তর্দৃষ্টি ও প্রকাশনা',
    'insights.subtitle': 'জিওভার্সড গবেষকদের দ্বারা প্রকাশিত অফিসিয়াল প্রযুক্তিগত গবেষণা প্রতিবেদন, জল-পুনরুজ্জীবন পরিকল্পনা ও ভূ-স্থানিক পদ্ধতিসমূহ।',
    'insights.dprHeading': 'প্রকাশিত জলাধার পুনরুজ্জীবন প্রযুক্তিগত প্রতিবেদন',
    'insights.dprBadge': 'সম্পূর্ণ প্রযুক্তিগত PDF উপলব্ধ',
    'insights.openReport': 'প্রতিবেদন পড়ুন',

    // Contact Section
    'contact.badge': 'যোগাযোগ করুন',
    'contact.title': 'আমাদের জিওভার্সড টিমের সাথে যুক্ত হোন',
    'contact.subtitle': 'আলমোড়া, উত্তরাখণ্ডে অবস্থিত। গবেষণা অংশীদারিত্ব, জিআইএস পরামর্শ বা সরকারি প্রযুক্তিগত প্রকল্পের জন্য যোগাযোগ করুন।',
    'contact.headquarters': 'প্রধান কার্যালয়',
    'contact.locationLabel': 'কার্যালয়ের অবস্থান',
    'contact.phoneLabel': 'টেলিফোন',
    'contact.emailLabel': 'অফিসিয়াল ইমেল',
    'contact.sendMessage': 'সরাসরি বার্তা পাঠান',
    'contact.formSubtitle': 'প্রযুক্তিগত গবেষণা, জিআইএস ডেটা লাইসেন্সিং বা যৌথ গবেষণার জন্য অনুসন্ধান করুন।',
    'contact.nameLabel': 'আপনার নাম',
    'contact.namePlaceholder': 'নাম বা পদবী',
    'contact.emailFieldLabel': 'ইমেল ঠিকানা',
    'contact.emailPlaceholder': 'email@organization.in',
    'contact.subjectLabel': 'বিষয়',
    'contact.subjectPlaceholder': 'উদা: আলমোড়ায় জলবিভাজিকা সমীক্ষা / জিআইএস কর্মশালা',
    'contact.messageLabel': 'বার্তা',
    'contact.messagePlaceholder': 'আপনার প্রয়োজনীয়তা, আগ্রহের ক্ষেত্র বা সময়সীমা সংক্ষেপে লিখুন...',
    'contact.sendBtn': 'বার্তা পাঠান',
    'contact.sending': 'পাঠানো হচ্ছে...',
    'contact.successTitle': 'বার্তা সফলভাবে পাঠানো হয়েছে',
    'contact.successMsg': 'জিওভার্সডের সাথে যোগাযোগ করার জন্য ধন্যবাদ। আলমোড়ার আমাদের কারিগরি টিম দ্রুত উত্তর দেবে।',

    // Footer
    'footer.tagline': 'টেকসই সমাধানের জন্য আধুনিক ভূ-বিজ্ঞান বুদ্ধিমত্তা',
    'footer.quickLinks': 'গুরুত্বপূর্ণ লিঙ্ক',
    'footer.contactUs': 'যোগাযোগ করুন',
    'footer.privacy': 'গোপনীয়তা নীতি (Privacy Policy)',
    'footer.terms': 'সেবার শর্তাবলী (Terms of Service)',
    'footer.backToTop': 'উপরে যান',
    'footer.rights': 'সর্বস্বত্ব সংরক্ষিত।',

    // Events Section
    'events.badge': 'ফিল্ড এনগেজমেন্ট ও মাইলফলক',
    'events.title': 'আমাদের ইভেন্টস',
    'events.subtitle': 'জিওভার্সড পরিচালিত প্রশিক্ষণ, কর্মশালা, সমঝোতা স্মারক (MoU) ও হিমালয় ফিল্ড অভিযানসমূহ।',
    'events.all': 'সবগুলো',
    'events.searchPlaceholder': 'শিরোনাম বা স্থান দিয়ে ইভেন্ট খুঁজুন...',
    'events.allYears': 'সব বছর',
    'events.loadMore': 'আরও ইভেন্ট লোড করুন',
    'events.noResults': 'কোনো ইভেন্ট পাওয়া যায়নি।',
    'events.viewAll': 'সব ইভেন্ট দেখুন',
    'events.backToEvents': 'ইভেন্ট তালিকায় ফিরে যান',
    'events.previous': 'পূর্ববর্তী ইভেন্ট',
    'events.next': 'পরবর্তী ইভেন্ট',
    'events.photosSection': 'ইভেন্ট ফটো গ্যালারি',
    'events.videosSection': 'ভিডিও হাইলাইটস',
    'events.latestTitle': 'সাম্প্রতিক ইভেন্টস ও ফিল্ড অভিযান',
    'events.latestSubtitle': 'আমাদের সাম্প্রতিক কর্মশালা, অ্যাকাডেমিক সমঝোতা স্মারক এবং হিমালয় বৈজ্ঞানিক মিশনসমূহ।',

    // Language selector
    'lang.selectorLabel': 'ভাষা',
    'lang.en': 'English',
    'lang.hi': 'हिन्दी',
    'lang.te': 'తెలుగు',
    'lang.mr': 'मराठी',
    'lang.bn': 'বাংলা',
  },
};
