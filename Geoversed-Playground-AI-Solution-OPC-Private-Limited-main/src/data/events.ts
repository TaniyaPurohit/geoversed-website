import { EventItem, EventCategory } from '../types';

// Genuine ATI Nainital Event Photos
import atiPhoto1 from '../assets/events/ATI/Aug2026/Photo1.JPG.jpeg';
import atiPhoto2 from '../assets/events/ATI/Aug2026/Photo2.JPG.jpeg';
import atiPhoto3 from '../assets/events/ATI/Aug2026/Photo3.JPG.jpeg';
import atiPhoto4 from '../assets/events/ATI/Aug2026/Photo4.JPG.jpeg';
import atiPhoto5 from '../assets/events/ATI/Aug2026/Photo5.JPG.jpeg';
import atiPhoto6 from '../assets/events/ATI/Aug2026/Photo6.JPG.jpeg';
import atiPhoto7 from '../assets/events/ATI/Aug2026/Photo7.JPG.jpeg';
import atiPhoto8 from '../assets/events/ATI/Aug2026/Photo8.JPG.jpeg';
import atiPhoto9 from '../assets/events/ATI/Aug2026/Photo9.JPG.jpeg';
import atiPhoto10 from '../assets/events/ATI/Aug2026/Photo10.JPG.jpeg';
import groupphoto from '../assets/events/ATI/Aug2026/groupphoto.jpg';

// Genuine ATI Nainital Event Photos & Videos - Feb 2026
import atiFebPhoto1 from '../assets/events/ATI/Feb2026/FebPhoto1.jpg';
import atiFebPhoto2 from '../assets/events/ATI/Feb2026/FebPhoto2.jpg';
import atiFebPhoto3 from '../assets/events/ATI/Feb2026/FebPhoto3.jpg';
import atiFebPhoto4 from '../assets/events/ATI/Feb2026/FebPhoto4.jpg';
import atiFebPhoto5 from '../assets/events/ATI/Feb2026/FebPhoto5.jpg';
import atiFebPhoto6 from '../assets/events/ATI/Feb2026/FebPhoto6.jpg';

// Genuine ATI Nainital Event Photos - Feb 2023
import atiFeb2023Photo1 from '../assets/events/ATI/Feb2023/Photo1.jpg';
import atiFeb2023Photo2 from '../assets/events/ATI/Feb2023/Photo2.jpg';
import atiFeb2023Photo3 from '../assets/events/ATI/Feb2023/Photo3.jpg';
import atiFeb2023Photo4 from '../assets/events/ATI/Feb2023/Photo4.jpg';
import atiFeb2023Photo5 from '../assets/events/ATI/Feb2023/Photo5.jpg';
import atiFeb2023Photo6 from '../assets/events/ATI/Feb2023/Photo6.jpg';
import atiFeb2023Photo7 from '../assets/events/ATI/Feb2023/Photo7.jpg';
import atiFeb2023Photo8 from '../assets/events/ATI/Feb2023/Photo8.jpg';
import atiFeb2023Photo9 from '../assets/events/ATI/Feb2023/Photo9.jpg';


// CDO Office Almora Event Media - Oct 2025
import cdoAlmoraPhoto1 from '../assets/events/CDO Office/Meeting/CDOAlmoraPhoto1.png';
import cdoAlmoraPhoto2 from '../assets/events/CDO Office/Meeting/CDOAlmoraPhoto2.jpg';

// Springshed Management & Climate Adaptation Workshop Media - Aug 2026
import workshopPhoto1 from '../assets/events/CDO Office/Workshop/Photo1.jpg';
import workshopPhoto2 from '../assets/events/CDO Office/Workshop/Photo2.jpg';
import workshopPhoto3 from '../assets/events/CDO Office/Workshop/Photo3.jpg';
import workshopPhoto4 from '../assets/events/CDO Office/Workshop/Photo4.jpg';

// Uttarakhand Forestry Training Academy Guest Lecture Media - Sep 2026
import guestLecturePhoto1 from '../assets/events/Guest Lecture/Photo1.jpeg';
import guestLecturePhoto2 from '../assets/events/Guest Lecture/Photo2.jpeg';
import guestLecturePhoto3 from '../assets/events/Guest Lecture/Photo3.jpeg';

// DIET Didihat Event Media - March 2024
import dietDidihatPhoto1 from '../assets/events/DIET-Didihat/Photo1.jpg';
import dietDidihatPhoto2 from '../assets/events/DIET-Didihat/Photo2.jpg';
import dietDidihatPhoto3 from '../assets/events/DIET-Didihat/Photo3.jpg';
import dietDidihatPhoto4 from '../assets/events/DIET-Didihat/Photo4.jpg';
import dietDidihatPhoto5 from '../assets/events/DIET-Didihat/Photo5.jpg';
import dietDidihatPhoto6 from '../assets/events/DIET-Didihat/Photo6.jpg';
import dietDidihatPhoto7 from '../assets/events/DIET-Didihat/Photo7.jpg';
import dietDidihatPhoto8 from '../assets/events/DIET-Didihat/Photo8.jpg';

// Manaskhand Science Centre Event Media - Sep 2026
import manaskhandPhoto1 from '../assets/events/Manaskhand/Photo1.jpg';
import manaskhandPhoto2 from '../assets/events/Manaskhand/Photo2.jpg';
import manaskhandPhoto3 from '../assets/events/Manaskhand/Photo3.jpg';

// ICAR-VPKAS Event Media - May 2024
import icarVpkasPhoto1 from '../assets/events/ICAR-Vpkas/Photo1.jpg';
import icarVpkasPhoto2 from '../assets/events/ICAR-Vpkas/Photo2.jpg';
import icarVpkasPhoto3 from '../assets/events/ICAR-Vpkas/Photo3.jpg';
import icarVpkasPhoto4 from '../assets/events/ICAR-Vpkas/Photo4.jpg';
import icarVpkasPhoto5 from '../assets/events/ICAR-Vpkas/Photo5.jpg';
import icarVpkasPhoto6 from '../assets/events/ICAR-Vpkas/Photo6.jpg';
import icarVpkasPhoto7 from '../assets/events/ICAR-Vpkas/Photo7.jpg';

// HNB Garhwal University Event Media - May 2024
import hnbGroupPhoto from '../assets/events/HNB Garwal University/Group photo.jpg';
import hnbPhoto1 from '../assets/events/HNB Garwal University/Photo1.jpg';
import hnbPhoto2 from '../assets/events/HNB Garwal University/Photo2.jpg';
import hnbPhoto3 from '../assets/events/HNB Garwal University/Photo3.jpg';
import hnbPhoto4 from '../assets/events/HNB Garwal University/Photo4.jpg';
import hnbPhoto5 from '../assets/events/HNB Garwal University/Photo5.jpg';
import hnbPhoto6 from '../assets/events/HNB Garwal University/Photo6.jpg';
import hnbPhoto7 from '../assets/events/HNB Garwal University/Photo7.jpg';

// Champawat DM Office Event Media - July 2024
import champawatPhoto1 from '../assets/events/Champawat DM Office/Photo1.jpg';
import champawatPhoto2 from '../assets/events/Champawat DM Office/Photi2.png';


/**
 * Normalizes image URLs:
 * - Converts Google Drive share links to direct streaming image URLs
 * - Optimizes picsum.photos URLs for thumbnails or full-size lightbox
 * - Supports local bundled assets and static paths seamlessly
 */
export function resolveImageUrl(url: string, variant?: 'thumb' | 'full'): string {
  if (!url) return url;
  
  // Google Drive link support (converts view link to direct image URL)
  const gDriveMatch = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)/);
  if (gDriveMatch && gDriveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${gDriveMatch[1]}`;
  }

  // Picsum sizing variants
  if (url.includes('picsum.photos')) {
    if (variant === 'thumb') return url.replace(/\/\d+\/\d+$/, '/600/400');
    if (variant === 'full') return url.replace(/\/\d+\/\d+$/, '/1600/1000');
  }

  return url;
}

/**
 * Checks if a given media URL is a video asset (e.g. mp4, webm, mov)
 */
export function isVideoUrl(url?: string): boolean {
  if (!url) return false;
  return /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url) || url.toLowerCase().includes('.mp4');
}

/**
 * ============================================================================
 * GEOVERSED EVENTS DATABASE
 * ============================================================================
 * 
 * HOW TO ADD A NEW EVENT:
 * 1. Open this file (src/data/events.ts).
 * 2. Copy the template block below and add it to the top of the `EVENTS_DATA` array.
 * 3. Fill in the required fields:
 *    - `id`: unique URL-friendly slug (e.g. "annual-geo-summit-2025")
 *    - `title`: Event title
 *    - `date`: YYYY-MM-DD format (e.g. "2025-03-20")
 *    - `category`: 'Training' | 'Workshop' | 'MoU' | 'Meeting' | 'Field Visit'
 *    - `location`: City / District / Institution (e.g. "Almora, Uttarakhand")
 *    - `summary`: Short 1-2 sentence overview for cards and previews
 *    - `description`: Detailed paragraph(s) describing objectives, attendees, outcomes
 *    - `cover`: High-resolution cover photo URL or imported asset
 *    - `photos`: Array of photo URLs or imported assets for the gallery
 *    - `videos`: Array of { videoUrl?: string, youtubeId?: string, title: string }
 * ============================================================================
 */

export const EVENT_CATEGORIES: EventCategory[] = [
  'Training',
  'Workshop',
  'MoU',
  'Meeting',
  'Field Visit',
  'Guest Lecture',
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: '1. workshop ati nainital august 2026',
    title: 'Capacity Building of newly inducted PCS Officers of Remote Sensing and GIS',
    date: '2026-08-01',
    category: 'Training',
    location: 'Dr. R.S. Tolia Uttarakhand Academy of Administration (ATI), Nainital, Uttarakhand, India',
    summary: 'A high-impact capacity building workshop training newly inducted PCS Officers on Remote Sensing, ESRI ArcGIS, QGIS, and the Uttarakhand Geo Portal.',
    description: `🌍 Empowering Uttarakhand's Future Administrators with GIS Power! 🗺️✨
Incredibly proud and excited to share that I recently had the privilege of being a Resource Person at the Dr. R.S. Tolia Uttarakhand Academy of Administration, Nainital 

🏛️ — Training our newly selected/inducted PCS Officers as part of the 16th Foundation Training Programme for Uttarakhand State Civil/Subordinate Services! 🎯

Getting to stand in front of the officers who will soon be shaping governance, land management, disaster response, and river rejuvenation strategies across our beautiful Himalayan state — and equip them with GIS as a decision-making tool — is genuinely one of the most fulfilling experiences of my career. 💪🙌

🖥️ Desktop GIS Session:
✅ Walked them through the GIS software landscape — ESRI ArcGIS (industry standard) vs QGIS (powerful open-source alternative) 🆓
✅ Hands-on installation & setup guidance 🔧
✅ Loading and managing spatial data — shapefiles, attribute tables, projections 📂
✅ Live digitization demo — creating points, lines & polygons from scratch, turning raw imagery into meaningful spatial datasets 📍〰️🔺

🌐 Web GIS Session:
✅ Showcased the Uttarakhand Geo Portal 👉 https://lnkd.in/gGpKyz43
✅ Deep-dived into every feature & functionality — layers, search, visualization tools 🛠️
✅ Pulled back the curtain on the tech stack — React ⚛️, TypeScript, Leaflet.js 🗺️, MongoDB Atlas 🍃, Express/Node.js ⚙️ — showing officers exactly how modern Web GIS platforms are architected and deployed
✅ Discussed the database design and how real-time district-level geospatial data flows from backend to interactive map 📊

Seeing PCS officers — who will soon be District Magistrates, SDMs, and department heads — light up 💡 while realizing how GIS can drive evidence-based governance, river rejuvenation planning, and disaster mitigation strategy was pure job satisfaction. 🙏🌊🏞️

Huge gratitude to the Academy leadership for the trust and opportunity to keep contributing to capacity-building in public administration through technology. 🎓🤝

This is exactly why I do what I do — where GIS + full-stack engineering + governance intersect to create real impact on the ground. 🚀`,
    cover: atiPhoto3,
    photos: [
      atiPhoto1,
      atiPhoto2,
      atiPhoto3,
      atiPhoto4,
      atiPhoto5,
      atiPhoto6,
      atiPhoto7,
      atiPhoto8,
      atiPhoto9,
      atiPhoto10,
      groupphoto,
    ],
    videos: [
      {
        youtubeId: 'LmlKYn02zao',
        videoUrl: 'https://www.youtube.com/watch?v=LmlKYn02zao',
        title: 'PCS Officers GIS Digitization & Training Session (ATI Nainital)',
      },
      {
        youtubeId: 'widORvzQ_kE',
        videoUrl: 'https://www.youtube.com/watch?v=widORvzQ_kE',
        title: 'Uttarakhand Geo Portal Architecture & Tech Stack Demonstration',
      },
      {
        youtubeId: 'TLfm8UCS6fU',
        videoUrl: 'https://www.youtube.com/watch?v=TLfm8UCS6fU',
        title: 'Desktop & Web GIS Interactive Hands-on Lab Session',
      },
    ],
  },
  
  {
    id:'2. CDO office octuber 2025',
    title: 'BDO meet for the capacity building and software implementation of Remote Sensing and GIS at CDO office ALmora Uttarakhand India',
    date: '2025-10-12',
    category: 'Meeting',
    location: 'CDO office Almora, Uttarakhand, India',
    summary: 'The author led a hands-on QGIS and Google Earth Pro training at a Two-Day Workshop on GIS Development and its Applications in District Planning and Administration in Almora, Uttarakhand. The session covered georeferencing, digitization, and digital mapping for Heads of Departments and their teams. The author thanked the District Administration Almora and SSJ University for organizing the event and looks forward to continued GIS capacity building in Uttarakhand and beyond.',
    description: `I had the privilege to lead the hands-on training session on QGIS and Google Earth Pro software at the recent Two-Day Workshop on GIS Development and its Applications in District Planning and Administration, held at Vikash Bhawan, Almora, Uttarakhand India. 

It was an enriching experience sharing practical skills on georeferencing, digitization of spatial features, and digital mapping using QGIS with the enthusiastic participants—including Heads of Departments and their teams. Seeing the commitment of district officials to leverage GIS technology for better planning and resource management was truly inspiring.

A big thank you to the District Administration Almora and SSJ University for organizing this important workshop. Looking forward to continuing to support GIS capacity building in Uttarakhand and beyond.`,
    cover: cdoAlmoraPhoto1,
    photos: [
      cdoAlmoraPhoto1,
      cdoAlmoraPhoto2,
    ],
    videos: [
      {
        youtubeId: 'kqgsvI8MyAk',
        videoUrl: 'https://www.youtube.com/shorts/kqgsvI8MyAk',
        title: 'BDO GIS & Remote Sensing Workshop - CDO Office Almora',
      },
    ],
  },
  {
    id: '3. workshop ati nainital february 2026',
    title: 'Capacity building among diverse group of 30+ PWD officers',
    date: '2026-02-13',
    category: 'Training',
    location: 'Trishul Hall, Administrative Training Institute, Nainital, Uttarakhsnd India',
    summary: 'Formalization of a bilateral Memorandum of Understanding (MoU) between GEOVERSED and academic faculties to advance spatial AI and student field research.',
    description: `🌟 Sharing the Success of Our One-Day GIS Workshop at ATI Nainital!🌟

What an incredible day it was! 👏 On this vibrant occasion at the prestigious Dr. Raghunandan Singh Tolia Uttarakhand Academy of Administration (ATI Nainital) – the apex training hub for government officers in Uttarakhand [1][2] – we conducted a power-packed One-Day Workshop on GIS and Remote Sensing Applications exclusively for government officers from the Public Works Department (PWD). 🏗️📊 As a seasoned GIS expert with hands-on experience in spatial data infrastructure projects like the Sri Lanka National Spatial Data Infrastructure and Uttarakhand SDI, I had the honor of leading the sessions! 😊

Workshop Highlights ✨
- Hands-On GIS Training: Officers dived deep into QGIS, ArcGIS tools, spatial analysis for infrastructure planning, flood plain mapping, and road network optimization – perfect for PWD's real-world challenges like survey applications and water resource management. 🗺️💻
- Interactive Sessions: From basics of remote sensing to advanced data visualization and API integrations for web-based dashboards. Everyone got to work on live projects! 🔥
- Expert Demonstrations: Covered land use change detection, 3D mapping, and integrating GIS with DevOps for efficient workflows – drawing from my 7+ years in ArcGIS, PostgreSQL, and RESTful APIs. 🚀

The energy in the room was electric! 🙌 Picture this: A diverse group of 30+ PWD officers, eagerly huddled around laptops, brainstorming solutions for Uttarakhand's hilly terrains. Group photos captured the joy, my presentation at the podium with live demos, classroom sessions in full swing, and even a video recap of the highlights. The respected chief guest in traditional attire added that perfect touch of inspiration! 👨‍🏫🇮🇳

Key Learnings & Impact 💡
Participants walked away equipped to leverage GIS for better project execution – think precise asset mapping, disaster-resilient infrastructure, and data-driven decisions for PWD initiatives. Their feedback? "Transformative!" One officer shared, "This will revolutionize our road surveys!" 😍 The workshop aligns perfectly with ATI Nainital's legacy of empowering officers through cutting-edge programs like those on urban planning and governance.

Feeling deeply grateful for this opportunity to contribute to Uttarakhand's development as a Resource Person in GIS & Remote Sensing. A huge shoutout to ATI Nainital's team for flawless coordination, and to all PWD officers for their enthusiasm! 🙏 Let's keep pushing the boundaries of geospatial tech for a smarter India. 🇮🇳`,
     cover: atiFebPhoto3,
    photos: [
      atiFebPhoto1,
      atiFebPhoto2,
      atiFebPhoto3,
      atiFebPhoto4,
      atiFebPhoto5,
      atiFebPhoto6,
    ],
    videos: [
      {
        youtubeId: 'iKR-1aP_Q_4',
        videoUrl: 'https://www.youtube.com/shorts/iKR-1aP_Q_4',
        title: 'GIS Software and its implementation Session (ATI Nainital)',
      },
      {
        youtubeId: 'uspRp06RkGY',
        videoUrl: 'https://www.youtube.com/watch?v=uspRp06RkGY',
        title: 'PWD Officers GIS Digitization & Training Session (ATI Nainital)',
      },
    ],
  },

{
    id: '4. Workshop on Springshed Management & Climate Adaptation',
    title: 'Springshed Management & Climate Adaptation',
    date: '2026-08-06',
    category: 'Workshop',
    location: 'CDO Office Vikash Bhawan Almora, Uttarakhsnd India',
    summary: 'Attended a CHIRAG/Tata Trusts springshed management workshop in Almora (6 Aug 2026) on GIS mapping, community-led climate adaptation, and CHIRAG nine step springshed approach, climate-resilient himalaya ecosystems.',
    description: `🌊 Springshed Management & Climate Adaptation Workshop — Almora Uttarakhand India 🏔️

💧Grateful to have attended this impactful workshop by CHIRAG (Central Himalayan Rural Action Group), in collaboration with Tata Trusts, and supported by the Govt. of Uttarakhand, Watershed Management Directorate, and SARRA. 🙌

📍Vikas Bhawan Sabhagar, CDO Office, Almora.
📅 6th August 2026

💦 Why it matters: Nearly 200 million people across the Himalayas depend on spring water — yet almost half of India's perennial Himalayan springs have dried up or turned seasonal (NITI Aayog, 2018) 😟. Rising temperatures 🌡️, erratic rainfall 🌧️, deforestation 🌳, and seismic activity are accelerating this crisis, adding to water insecurity and the burden on rural population👩‍🌾

🎯 Key highlights:
🔹 Keynote by Shri Anshul Singh, IAS, District Magistrate, Almora Uttarakhand.
🔹 Spring hydrogeology & KOSI catchment mapping insights.
🔹 NGO perspectives on GPS, GIS & participatory mapping 🗺️
🔹 Community-led climate adaptation strategies 🤝
🔹 Govt. partnerships for scale & convergence.

🌟 Standout takeaway CHIRAG's 9-Step Springshed Approach:
Pre-Feasibility ➡️ Baseline Survey ➡️ Village Institutions ➡️ Capacity Building ➡️ Technical Assessment ➡️ Treatment Plan ➡️ Implementation ➡️ Awareness & Advocacy ➡️ Monitoring & Impact Assessment

📊 A powerful blend of science, community ownership, and geospatial tech! 🛰️

💡 As someone working in GIS-based governance for Uttarakhand, this reaffirmed how vital mapping technology and community collaboration are for climate-resilient mountain ecosystems. 🌱🗺️`,
    cover: workshopPhoto1,
    photos: [
      workshopPhoto1,
      workshopPhoto2,
      workshopPhoto3,
      workshopPhoto4,
    ],
    videos: [
      {
        youtubeId: '4PSQhC5FCGU',
        videoUrl: 'https://www.youtube.com/watch?v=4PSQhC5FCGU',
        title: 'Spring hydrogeology & KOSI catchment mapping insights (Almora)',
      },
    ],
  },



  {
    id: '5. Uttarakhand Forestry Institute',
    title: 'Hands on training on Apllication of GIS and Remote Sensing in Forestry.',
    date: '2026-09-16',
    category: 'Guest Lecture',
    location: 'Uttarakhand Forestry Training and Achedmy',
    summary: 'Guest Lecturer at Uttarakhand Forestry Training Academy, Haldwani on 16 Sept 2026, delivering a session on "Application of Web-based GIS" to Forest Range Officers (Probationers) from Meghalaya, Mizoram, Madhya Pradesh & J&K — covering GIS/Web GIS for forest & water conservation.',
    description: `🌲📢 Honoured to be invited as a Guest Lecturer! 🎓💻

I'm delighted to share that I've received an invitation from the Uttarakhand Forestry Training Academy, Haldwani 🌳 to deliver a lecture to the Forest Range Officers (Probationers) undergoing their 18-month foundational training. 🧑‍🏫🌿

📅 Date: 16.09.2026
🗣️ My Session: Application of Web-based GIS 🌐🗺️

It's a privilege to contribute to the training of officers from Meghalaya, Mizoram, Madhya Pradesh & Jammu-Kashmir 🏔️🤝 — sharing knowledge on GIS & Web GIS for Forest & Water Conservation. 💧🌲

Grateful to the Academy for this opportunity, and to Shri Jeevan Singh Rawat for the kind association. 🙏✨

Looking forward to an engaging session with the future guardians of our forests! 🌳🦌🐘`,
    cover: guestLecturePhoto1,
    photos: [
      guestLecturePhoto1,
      guestLecturePhoto2,
      guestLecturePhoto3,
    ],
    videos: [
      {
        youtubeId: 'WwoSxIFZOlg',
        videoUrl: 'https://www.youtube.com/watch?v=WwoSxIFZOlg',
        title: 'Hands-on Web GIS Training for Forest Range Officers',
      },
      {
        youtubeId: 'o7iXUc2mfAc',
        videoUrl: 'https://www.youtube.com/watch?v=o7iXUc2mfAc',
        title: 'GIS & Remote Sensing in Forest & Water Conservation Demonstration',
      },
      {
        youtubeId: 'd_CMBdqB6-0',
        videoUrl: 'https://www.youtube.com/shorts/d_CMBdqB6-0',
        title: 'Interactive Q&A Session with Officer Trainees (UFTA Haldwani)',
      },
    ],
  },

{
    id: '6. ATI April2023',
    title: 'Hands-on GIS training at ATI Nainital showed how paper toposheets become decision-ready digital map.',
    date: '2023-04-16',
    category: 'Guest Lecture',
    location: 'Dr. R.s Tolia ATI Uttrakhand India',
    summary: '🌍🗺️Capacity Building and GIS Training in Action! 🚀✨',
    description: `Teaching GIS is one of the most rewarding parts of my work. 🎓💡 Recently I ran an interactive hands-on session on digitizing maps and creating spatial data from scratch at the Administrative Training Institute (ATI), Nainital. 🏔️🏛️

Here’s what we covered. 👇

📌 1️⃣ Understanding GIS Data Layers
Every map is built from three basic feature types:
🔴 Point layers: handpumps, trees, buildings, villages 🏘️
🟦 Line layers: roads, canals, rivers, railway lines 🛤️🌊
🟩 Polygon layers: village boundaries, forest areas, blocks, tehsils, districts 🌲🏞️

📌 2️⃣ Working with a Toposheet
We started with a scanned toposheet 🗺️ and loaded it into the GIS software as the base map. 🖥️

📌 3️⃣ Georeferencing 📍
Before digitizing, the map must be tied to real-world coordinates, so every feature we draw lands in the right place on Earth. 🌐🎯

📌 4️⃣ Creating a New Shapefile 📂
👉 Click “Create New Shapefile”
👉 Select the geometry type (Point / Line / Polygon)
👉 Define attributes and save ✅

📌 5️⃣ Digitization in Action ✍️
🔹 Point digitization: toggle editing ✏️, add a point feature, mark a village on the map and type its name 🏡
🔹 Line digitization: trace a river 🌊, then label it
🔹 Polygon digitization: draw village boundaries 🔷 and see the result as a clean, layered map 🎨

💥 The highlight of the session: watching participants go from a plain scanned sheet 📜 to a vibrant, multi-layered digital map with villages, boundaries, rivers, and terrain. 🌄🟢 Seeing that “aha!” moment never gets old. 😍

🏛️ Why this matters for governance:
Digitized, georeferenced data is the backbone of better planning 📊, resource management 🌱, disaster preparedness 🚨, and evidence-based decision making 🧠. When administrators understand GIS, maps become decisions. 🚀Detailed Proceedings & Field Scope
🌍🛰️ From Paper Toposheets to Digital Maps: A Hands-On GIS Training Session! 🗺️✨

Teaching GIS is one of the most rewarding parts of my work. 🎓💡 Recently I ran an interactive hands-on session on digitizing maps and creating spatial data from scratch at the Administrative Training Institute (ATI), Nainital. 🏔️🏛️

Here’s what we covered. 👇

📌 1️⃣ Understanding GIS Data Layers
Every map is built from three basic feature types:
🔴 Point layers: handpumps, trees, buildings, villages 🏘️
🟦 Line layers: roads, canals, rivers, railway lines 🛤️🌊
🟩 Polygon layers: village boundaries, forest areas, blocks, tehsils, districts 🌲🏞️

📌 2️⃣ Working with a Toposheet
We started with a scanned toposheet 🗺️ and loaded it into the GIS software as the base map. 🖥️

📌 3️⃣ Georeferencing 📍
Before digitizing, the map must be tied to real-world coordinates, so every feature we draw lands in the right place on Earth. 🌐🎯

📌 4️⃣ Creating a New Shapefile 📂
👉 Click “Create New Shapefile”
👉 Select the geometry type (Point / Line / Polygon)
👉 Define attributes and save ✅

📌 5️⃣ Digitization in Action ✍️
🔹 Point digitization: toggle editing ✏️, add a point feature, mark a village on the map and type its name 🏡
🔹 Line digitization: trace a river 🌊, then label it
🔹 Polygon digitization: draw village boundaries 🔷 and see the result as a clean, layered map 🎨

💥 The highlight of the session: watching participants go from a plain scanned sheet 📜 to a vibrant, multi-layered digital map with villages, boundaries, rivers, and terrain. 🌄🟢 Seeing that “aha!” moment never gets old. 😍

🏛️ Why this matters for governance:
Digitized, georeferenced data is the backbone of better planning 📊, resource management 🌱, disaster preparedness 🚨, and evidence-based decision making 🧠. When administrators understand GIS, maps become decisions. 🚀`,
    cover: atiFeb2023Photo1,
    photos: [
      atiFeb2023Photo1,
      atiFeb2023Photo2,
      atiFeb2023Photo3,
      atiFeb2023Photo4,
      atiFeb2023Photo5,
      atiFeb2023Photo6,
      atiFeb2023Photo7,
      atiFeb2023Photo8,
      atiFeb2023Photo9,
    ],
    videos: [
      {
        youtubeId: 'MKe2d9wzzjQ',
        videoUrl: 'https://www.youtube.com/watch?v=MKe2d9wzzjQ',
        title: 'From Paper Toposheets to Digital Maps: Hands-On GIS Training (ATI Nainital)',
      },
    ],
  },

{
    id: '7. DIET Didihat March2024',
    title: 'Guest Lecture at District Institute of Education and Technology showed how paper toposheets become decision-ready digital map.',
    date: '2024-03-12',
    category: 'Guest Lecture',
    location: 'DIET Didihat Uttrakhand India',
    summary: '🌍🗺️ From Maps to Mastery: Hands-On GIS Training in Action! 🚀✨',
    description: `Today was all about learning by doing! 💻🖱️ I had the privilege of conducting a hands-on GIS training session 🎓📡 where participants got practical experience with real geospatial workflows, not just theory! 🙌

📍 What we explored:
🔹 Georeferencing: aligning scanned maps to real-world coordinates 🌐📌
🔹 Adding and managing control points ➕🎯
🔹 Working with spatial data layers 🗂️🛰️
🔹 Turning raw maps into usable digital geospatial data 📊🧭

👨‍💻 Seeing every participant on their own system, clicking, experimenting, and asking questions, is what makes training truly rewarding! 🤩💡 The curiosity and enthusiasm in the room was inspiring! 🔥👏

🏛️ Why this matters:
GIS is no longer just a technical skill, it’s a governance tool 🏔️🏢 that powers better planning, smarter decisions, and transparent administration! 📈🤝 Building these skills on the ground is how we create real change in the way we manage land, resources, and development. 🌱🌄

🙏 A big thank you to all the participants for their active involvement and to the organizers for making this session possible! 💐✨

🔁 The journey continues: more data, more maps, more impact! 🚀🌏`,
    cover: dietDidihatPhoto1,
    photos: [
      dietDidihatPhoto1,
      dietDidihatPhoto2,
      dietDidihatPhoto3,
      dietDidihatPhoto4,
      dietDidihatPhoto5,
      dietDidihatPhoto6,
      dietDidihatPhoto7,
      dietDidihatPhoto8,
    ],
    videos: [
      {
        youtubeId: 'KYLstiozNto',
        videoUrl: 'https://www.youtube.com/shorts/KYLstiozNto',
        title: 'Georeferencing & Spatial Data Workflow Hands-On Session (DIET Didihat)',
      },
      {
        youtubeId: '2joSXr2GYMw',
        videoUrl: 'https://www.youtube.com/shorts/2joSXr2GYMw',
        title: 'Interactive GIS Lab Session & Participant Practical Training (DIET Didihat)',
      },
    ],
  },

  {
    id: '8. Manaskhand March2024',
    title: 'Database Management Systems (DBMS) Session at Manaskhand Science Centre, Almora',
    date: '2026-09-24',
    category: 'Guest Lecture',
    location: 'Manaskhand Science Center Almora Uttrakhand India',
    summary: '🚀 Learning in action at Manaskhand Science Centre, Almora! 🔭',
    description: `🚀 Learning in action at Manaskhand Science Centre Almora 🔭 Todays session was all about Database Management Systems DBMS the backbone of every modern application 🗄️💡 📌 What we covered ✅ What a database is and why we need a DBMS ✅ Importance of DBMS data security 🔐 data integrity ✔️ reduced redundancy multi user access 👥 and efficient data retrieval ⚡ ✅ How applications the DBMS and the database work together 🔄 Whether youre building a web app 🌐 a GIS portal 🗺️ or an AI driven solution 🤖 a solid grasp of database fundamentals is what turns good software into reliable scalable software 📈 It was great to see such engaged participants asking questions and connecting theory with real world use cases 🙌 Sessions like these are how we build a strong tech community in Uttarakhand 🏔️💻 A big thank you to the Manaskhand Science Centre team for hosting 🙏`,
    cover: manaskhandPhoto1,
    photos: [
      manaskhandPhoto1,
      manaskhandPhoto2,
      manaskhandPhoto3,
    ],
    videos: [
      {
        youtubeId: 'unLZqSTGKF0',
        videoUrl: 'https://www.youtube.com/shorts/unLZqSTGKF0',
        title: 'Database Management Systems (DBMS) Fundamentals Session (Manaskhand)',
      },
      {
        youtubeId: 'j0LPY-hbjXc',
        videoUrl: 'https://www.youtube.com/watch?v=j0LPY-hbjXc',
        title: 'Interactive Technical Discussion & Practical Applications (Manaskhand)',
      },
    ],
  },

{
    id: '9. ICAR-VPKAS May2024',
    title: 'One Day meeting at ICAR-VPKAS',
    date: '2024-05-24',
    category: 'Meeting',
    location: 'ICAR-VPKAS, Almora, Uttarakhand, India',
    summary: '🚁🌾 Drones Meet Agriculture: A Day of Learning at ICAR-VPKAS, Almora! 🌾🚁',
    description: `It was an inspiring day at ICAR-VPKAS (Vivekananda Parvatiya Krishi Anusandhan Sansthan), Almora 🏔️, where I had the opportunity to attend a one-day interactive meeting and live drone demonstration in agriculture! 🤩

🎓 Indoor Session
We began with an insightful discussion with scientists, faculty and bright young students 👩‍🎓👨‍🎓, exploring how modern technology can transform farming in hill regions. 💡📚

🌱 Field Demonstration
The real excitement happened in the open fields! 🌤️ We witnessed a live demonstration of an agricultural spraying drone 🚁💧 and learned how it works, including:

✅ Precision spraying of pesticides and nutrients 🎯
✅ Saving time, water and labour ⏱️💦
✅ Reducing farmers’ exposure to chemicals 🧑‍🌾🛡️
✅ Covering difficult hill terrain with ease ⛰️
✅ Data-driven, smart farming decisions 📊🛰️

💭 Key Takeaway
When Drones + GIS + AI come together, they can revolutionize agriculture 🌍🤖. This is especially valuable for Uttarakhand’s mountainous landscape, where traditional methods face many challenges. 🏞️

🙏 Heartfelt thanks to the ICAR-VPKAS team, scientists and the enthusiastic students for making this session so engaging and informative! 👏✨

The future of farming is smart, precise and sustainable! 🌿🚀`,
    cover: icarVpkasPhoto1,
    photos: [
      icarVpkasPhoto1,
      icarVpkasPhoto2,
      icarVpkasPhoto3,
      icarVpkasPhoto4,
      icarVpkasPhoto5,
      icarVpkasPhoto6,
      icarVpkasPhoto7,
    ],
    videos: [],
  },

{
    id: '10. HNB Garwal University May2024',
    title: 'Guest Lecture at HNB Garwal University Tehri, Uttarakhand India',
    date: '2025-11-13',
    category: 'Guest Lecture',
    location: 'HNB Garwal University Tehri, Uttarakhand, India',
    summary: '🌄🎓 Sharing Geospatial Knowledge in the Remote Sendsing and GIS Tools, Technology and Research Methodology Course, HNBGU 🗺️✨',
    description: `I’m honoured and delighted to have been invited as a Resource Person for the Ten Days Research Methodology Course for Ph.D., M.Phil. and Post-Doctoral Scholars in Social Sciences 📚🔬

🏛️ Organised by: Department of Defence, Strategic and Geo-political Studies, S.R.T. Campus, Tehri Garhwal, Hemvati Nandan Bahuguna Garhwal University 🇮🇳
🤝 Sponsored by: Indian Council of Social Science Research (ICSSR), New Delhi
📅 Dates: 21–30 July 2025
📍 Venue: Tehri Garhwal, Uttarakhand ⛰️

🧭 What I covered in my session

🔹 Introduction to GIS and why spatial thinking matters in social science research 🌍
🔹 Hands-on QGIS, the open-source powerhouse for mapping and spatial analysis 💻🗺️
🔹 Basemaps and data sources: adding OpenStreetMap through XYZ Tiles, and connecting to WMS/WMTS, WFS and other data services 🌐
🔹 Exploring real Uttarakhand data, with live demonstrations on the Almora region: roads, settlements, terrain and administrative features 🏔️🛣️
🔹 From maps to insights: how GIS can strengthen field surveys, demographic studies, governance research, and evidence-based policy 📊🏛️

💡 Why this matters

Social science research increasingly depends on where things happen, not just what happens 📍. Whether it’s migration, public service delivery, land use, disaster risk or district planning, geospatial tools turn raw data into clear, actionable stories 🎯. Open-source tools like QGIS put this power in the hands of every scholar, with no expensive licences needed 🙌💚

🌟 Highlights

✅ Enthusiastic, curious scholars from diverse social science backgrounds 👩‍🎓👨‍🎓
✅ Lively interaction, questions and practical hands-on learning 🙋‍♀️🙋‍♂️
✅ Warm felicitation with a memento, shawl and gifts, a gesture I truly cherish 🎁🧣🙏
✅ A memorable group photo with the whole cohort 📸🤩

🙏 Gratitude

A heartfelt thank you to:
🌸 The Department of Defence, Strategic and Geo-political Studies, HNBGU, for the invitation and hospitality
🌸 Dr. Anil Kumar Meena, Organising Secretary, and the entire organising team [please verify and add Course Director / Head of Department names] 👏
🌸 ICSSR, New Delhi, for supporting research capacity-building across India 🇮🇳
🌸 Every participant, for your energy, questions and curiosity. You made the session truly special! 💫

🚀 Working on geospatial governance technology across Uttarakhand’s districts, I strongly believe that knowledge sharing is the best way to build a stronger research and governance ecosystem 🤝🌱. Moments like these remind me why I do what I do: bridging GIS, technology and research for a smarter, data-driven Uttarakhand 💻🏔️❤️`,
    cover: hnbGroupPhoto,
    photos: [
      hnbGroupPhoto,
      hnbPhoto1,
      hnbPhoto2,
      hnbPhoto3,
      hnbPhoto4,
      hnbPhoto5,
      hnbPhoto6,
      hnbPhoto7,
    ],
    videos: [
      {
        youtubeId: 'HKgABQIbdkA',
        videoUrl: 'https://www.youtube.com/watch?v=HKgABQIbdkA',
        title: 'Geospatial Tools & QGIS Hands-on Session (HNB Garhwal University)',
      },
      {
        youtubeId: 'yUX2DR-yobc',
        videoUrl: 'https://www.youtube.com/watch?v=yUX2DR-yobc',
        title: 'Interactive Spatial Analysis Demonstration (HNB Garhwal University)',
      },
    ],
  },


{
    id: '11. Champawat Dm Office July2024',
    title: 'Meeting with DM at Champawat, Uttarakhand India',
    date: '2024-07-25',
    category: 'Meeting',
    location: 'DM Office Champawat, Uttarakhand, India',
    summary: '🌊🏞️ Reviving Our Rivers, Securing Our Future: River Rejuvenation Meeting at the DM Office, Champawat 🏞️🌊',
    description: `Honored to be part of the river rejuvenation meeting at the District Magistrate’s Office, Champawat 🏛️ on [date]. 🙏

Rivers are the lifelines of the Himalayas 🏔️💧. They feed our springs, farms, forests and communities, and many of them are under stress from changing rainfall, drying springs and growing human pressure. 🌦️🌱

🤝 Who was in the room?
Officials from the district administration 👨‍💼👩‍💼, All departments, and technical experts, all working toward one goal: bringing our rivers back to life. 💙

📌 Key discussion points
✅ Current condition of rivers and tributaries in the district 🗺️
✅ Spring-shed and catchment revival 💦
✅ Watershed management and recharge structures 🌳
✅ Community participation and awareness 👥
✅ Monitoring, data and long-term planning 📊
✅ [Add specific decisions or action points]

🛰️ Where technology comes in
Sustainable rejuvenation starts with good data. 🧭 With GIS, remote sensing and Web GIS portals 🌍💻 we can:
📍 Map river courses, catchments and springs
📍 Identify degraded stretches and priority areas
📍 Track the impact of interventions over time
📍 Support evidence-based decisions for administrators

Having built Web GIS district portals across Uttarakhand, I’m convinced that geospatial technology + good governance = lasting change. 🚀✨

💡 Takeaway
River rejuvenation is not a one-time project. It’s a continuous, collaborative effort between administration, scientists, technologists and local communities. 🌿🤲

A big thank you to the District Administration, Champawat 🙏 for the opportunity and for their commitment to protecting our water resources. 💐`,
    cover: champawatPhoto1,
    photos: [
      champawatPhoto1,
      champawatPhoto2,
    ],
    videos: [
      {
        youtubeId: 'K0ZTRQ99paw',
        videoUrl: 'https://www.youtube.com/watch?v=K0ZTRQ99paw',
        title: 'River Rejuvenation & Springshed Revival Discussion (DM Office Champawat)',
      },
      {
        youtubeId: 'Q2v_0fyPANM',
        videoUrl: 'https://www.youtube.com/watch?v=Q2v_0fyPANM',
        title: 'Geospatial Technology & Web GIS Solutions for Water Conservation (Champawat)',
      },
    ],
  },

];

/**
 * Helper to get all events sorted chronologically (newest first)
 */
export function getAllEvents(): EventItem[] {
  return [...EVENTS_DATA].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEventById(id: string): EventItem | undefined {
  if (!id) return undefined;
  const normalized = decodeURIComponent(id).toLowerCase().trim();
  const slugified = normalized.replace(/[\s_]+/g, '-');
  
  // 1. Exact match first
  const exact = EVENTS_DATA.find((ev) => {
    const evId = ev.id.toLowerCase().trim();
    const evSlug = evId.replace(/[\s_]+/g, '-');
    return evId === normalized || evSlug === slugified;
  });
  if (exact) return exact;

  // 2. Fallback to substring matching
  return EVENTS_DATA.find((ev) => {
    const evId = ev.id.toLowerCase();
    const evSlug = evId.replace(/[\s_]+/g, '-');
    return (
      normalized.includes(evSlug) ||
      evSlug.includes(slugified)
    );
  });
}

/**
 * Helper to get the top N most recent events for previews
 */
export function getLatestEvents(count = 3): EventItem[] {
  return getAllEvents().slice(0, count);
}

/**
 * Helper to extract unique years from all recorded events
 */
export function getEventYears(): number[] {
  const years = new Set<number>();
  EVENTS_DATA.forEach((ev) => {
    const d = new Date(ev.date);
    if (!isNaN(d.getFullYear())) {
      years.add(d.getFullYear());
    }
  });
  return Array.from(years).sort((a, b) => b - a);
}
