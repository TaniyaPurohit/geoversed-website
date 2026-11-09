const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');

function generateBhalyutaReport() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  const primaryColor = [17, 34, 68];      // Deep Navy
  const accentColor = [179, 134, 75];     // Gold/Bronze #B3864B
  const slateDark = [51, 65, 85];        // Text slate
  const slateMuted = [100, 116, 139];    // Muted slate
  const tealBanner = [20, 120, 150];

  function addHeaderFooter(pageNum, totalPages) {
    if (pageNum === 1) return; // Skip cover

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(...slateMuted);

    // Running Header
    doc.text(
      'Towards Aviral Ganga • Rejuvenation Strategy of Bhalyuta Spring & Panyali Gadgera',
      margin,
      12
    );
    doc.setDrawColor(220, 225, 230);
    doc.setLineWidth(0.3);
    doc.line(margin, 14, pageWidth - margin, 14);

    // Running Footer
    doc.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
    doc.text(
      'GEOVERSED Geoscience Intelligence • Sponsored by AMAN Almora',
      margin,
      pageHeight - 8
    );
    doc.text(
      `Page ${pageNum} of ${totalPages}`,
      pageWidth - margin,
      pageHeight - 8,
      { align: 'right' }
    );
  }

  // ================= PAGE 1: COVER =================
  // Left decorative band
  doc.setFillColor(...tealBanner);
  doc.rect(0, 0, 18, pageHeight, 'F');

  // Decorative border
  doc.setDrawColor(...accentColor);
  doc.setLineWidth(0.8);
  doc.rect(24, 15, pageWidth - 32, pageHeight - 30);
  doc.setLineWidth(0.3);
  doc.rect(26, 17, pageWidth - 36, pageHeight - 34);

  // Vertical text along left band
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(255, 255, 255);
  doc.text('Towards Aviral Ganga', 11, pageHeight / 2, { angle: 90, align: 'center' });

  // Main Report Title
  const startY = 55;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(...primaryColor);

  const titleLines = [
    'REJUVENATION STRATEGY OF THE',
    'BHALYUTA SPRING & PANYALI GADGERA',
    'VILLAGE BHALYUTA, DISTRICT BAGESHWAR',
    'IN JAIGAN WATERSHED',
  ];
  doc.text(titleLines, (pageWidth + 18) / 2, startY, { align: 'center', lineHeightFactor: 1.35 });

  // Subheading
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(13);
  doc.setTextColor(...accentColor);
  doc.text('A Technical Research & Action Plan Report', (pageWidth + 18) / 2, startY + 36, { align: 'center' });

  // Center divider line
  doc.setDrawColor(...accentColor);
  doc.setLineWidth(0.6);
  doc.line((pageWidth + 18) / 2 - 35, startY + 44, (pageWidth + 18) / 2 + 35, startY + 44);

  // Photo / Badge Box
  const badgeY = startY + 54;
  doc.setFillColor(245, 247, 250);
  doc.setDrawColor(200, 210, 220);
  doc.roundedRect((pageWidth + 18) / 2 - 45, badgeY, 90, 48, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...primaryColor);
  doc.text('SURFACE RECHARGE ZONE & WATERSHED STUDY', (pageWidth + 18) / 2, badgeY + 12, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...slateDark);
  doc.text('Location: Baluyata Spring (29°44\'4.41"N, 79°46\'54.34"E)', (pageWidth + 18) / 2, badgeY + 20, { align: 'center' });
  doc.text('Elevation: 1,170 m to 1,800 m above MSL', (pageWidth + 18) / 2, badgeY + 26, { align: 'center' });
  doc.text('Watershed Area: 0.95 km² (95 Hectares)', (pageWidth + 18) / 2, badgeY + 32, { align: 'center' });
  doc.text('Lesser Himalayan Rainfed River Regime, Jaigan Valley', (pageWidth + 18) / 2, badgeY + 38, { align: 'center' });

  // Authors
  const authorsY = badgeY + 68;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('Prof. J.S. Rawat', (pageWidth + 18) / 2, authorsY, { align: 'center' });
  doc.text('Dr. Naresh Pant', (pageWidth + 18) / 2, authorsY + 7, { align: 'center' });
  doc.text('Er. Varun Rawat', (pageWidth + 18) / 2, authorsY + 14, { align: 'center' });

  // Sponsor & Date
  const sponsorY = authorsY + 32;
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.5);
  doc.setTextColor(...slateMuted);
  doc.text('Sponsored by:', (pageWidth + 18) / 2, sponsorY, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11.5);
  doc.setTextColor(...accentColor);
  doc.text('AMAN', (pageWidth + 18) / 2, sponsorY + 6, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...slateDark);
  doc.text('Eastern Pokherkhali, Almora, Uttarakhand, India', (pageWidth + 18) / 2, sponsorY + 12, { align: 'center' });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...primaryColor);
  doc.text('August, 2026', (pageWidth + 18) / 2, sponsorY + 20, { align: 'center' });

  // ================= PAGE 2: TABLE OF CONTENTS =================
  doc.addPage();
  let curY = 24;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(...primaryColor);
  doc.text('CONTENTS', pageWidth / 2, curY, { align: 'center' });

  doc.setDrawColor(...accentColor);
  doc.setLineWidth(0.5);
  doc.line(margin, curY + 4, pageWidth - margin, curY + 4);

  curY += 14;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...slateMuted);
  doc.text('SECTION / CHAPTER', margin, curY);
  doc.text('PAGE', pageWidth - margin, curY, { align: 'right' });
  curY += 6;

  const tocItems = [
    { title: '1.0 INTRODUCTION', page: '3', bold: true },
    { title: '   1.1 About the Bhalyuta Spring', page: '3' },
    { title: '   1.2 Land use Pattern in Panyali Watershed', page: '3' },
    { title: '2.0 REJUVENATION TREATMENT MEASURES', page: '4', bold: true },
    { title: '   2.1 Mechanical Treatment Measures', page: '4' },
    { title: '      2.1.1 Particular & General Objectives', page: '4' },
    { title: '      2.1.2 Specific Mechanical Treatment Measures', page: '4' },
    { title: '         2.1.2.1 Infiltration Holes (5 holes/m²)', page: '4' },
    { title: '         2.1.2.2 Infiltration Trenches (1.0m x 0.5m x 0.3m)', page: '5' },
    { title: '         2.1.2.3 Bio-Plugs (Pine Needles & Vegetative)', page: '5' },
    { title: '         2.1.2.4 Rill / Gully Plugs (Loose Stone Plugs)', page: '5' },
    { title: '         2.1.2.5 Check Dams across Intermittent Streams', page: '5' },
    { title: '         2.1.2.6 Contour Bunds along Agricultural Terraces', page: '6' },
    { title: '         2.1.2.7 Terrace Ponds for Rainwater Storage', page: '6' },
    { title: '         2.1.2.8 Rooftop Rainwater Harvesting for Domestic Use', page: '6' },
    { title: '         2.1.2.9 Building Rainwater Harvesting for Groundwater Augmentation', page: '6' },
    { title: '   2.2 Biological Treatment Measures', page: '7', bold: true },
    { title: '      2.2.1 Afforestation & Broad-Leaved Species Plantation', page: '7' },
    { title: '      2.2.2 Community Horticulture & Nursery Development', page: '7' },
    { title: '3.0 MICRO-PLANS FOR REJUVENATION MEASURES', page: '8', bold: true },
    { title: '   3.1 Mechanical Treatment Engineering Plan (Table 1)', page: '8' },
    { title: '   3.2 Biological Treatment & Land Management Summary', page: '8' },
  ];

  doc.setFontSize(9);
  tocItems.forEach((item) => {
    if (item.bold) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(...primaryColor);
    } else {
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...slateDark);
    }

    doc.text(item.title, margin, curY);

    // Dots between title and page
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(180, 190, 200);
    const titleWidth = doc.getTextWidth(item.title);
    const dotStart = margin + titleWidth + 3;
    const dotEnd = pageWidth - margin - 8;
    if (dotEnd > dotStart) {
      const dots = '. '.repeat(Math.floor((dotEnd - dotStart) / 3));
      doc.text(dots, dotStart, curY);
    }

    doc.setTextColor(...primaryColor);
    doc.setFont('helvetica', item.bold ? 'bold' : 'normal');
    doc.text(item.page, pageWidth - margin, curY, { align: 'right' });
    curY += 7.5;
  });

  // ================= PAGE 3: INTRODUCTION & STUDY AREA =================
  doc.addPage();
  curY = 24;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryColor);
  doc.text('1.0 INTRODUCTION', margin, curY);
  curY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...slateDark);
  const p1 =
    'Skilled human resources and sufficient funds are critically needed for reversing the steady transformation of perennial naulas, springs, and streams into ephemeral/intermittent water regimes across the Central and Lesser Himalayas. There is currently an acute scarcity of both scientific interventions and dedicated capital. In view of this challenge, the work of rejuvenation of the Panyali Watershed water resources must be carried out in systematic phases.';
  const p1Lines = doc.splitTextToSize(p1, contentWidth);
  doc.text(p1Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += p1Lines.length * 5 + 4;

  const p2 =
    'In the first phase — as per the pressing requirements of the local inhabitants of Village Bhalyuta — a GIScience-based strategy has been formulated by delineating the surface recharge zone to rejuvenate the dying Bhalyuta springs and the Panyali seasonal stream network.';
  const p2Lines = doc.splitTextToSize(p2, contentWidth);
  doc.text(p2Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += p2Lines.length * 5 + 8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('1.1 About the Bhalyuta Spring', margin, curY);
  curY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...slateDark);
  const p3 =
    'The Bhalyuta Spring lies at coordinates 29°44\'4.41"N Latitude and 79°46\'54.34"E Longitude at an elevation of 1,170 m above mean sea level in the northern recharge segment of the Lesser Himalayan experimental zone in District Bageshwar (Jaigan Valley). The spring traditionally supported human consumption, livestock, and localized terrace irrigation before experiencing steep discharge depletion during post-monsoon and summer windows.';
  const p3Lines = doc.splitTextToSize(p3, contentWidth);
  doc.text(p3Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += p3Lines.length * 5 + 8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('1.2 Geographical Delineation & Land Use Pattern', margin, curY);
  curY += 6;

  const p4 =
    'The Panyali Watershed encompasses an area of 0.95 km² (95 hectares) lying between 29°43\'52.158"N to 29°44\'47.547"N Latitude and 79°46\'51.248"E to 79°47\'36.248"E Longitude. The altitude in this micro-watershed ranges from 1,100 m at the Jaigan River confluence to 1,800 m along the upper ridge line. Climatically, it falls within cool-to-cold temperate zones with significant monsoonal precipitation. Geologically, the bedrock belongs to the Raut Gara Formation of the Damta Group (Valdiya, 1985), composed of fractured quartzites, metamorphic phyllites, and slate.';
  const p4Lines = doc.splitTextToSize(p4, contentWidth);
  doc.text(p4Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += p4Lines.length * 5 + 6;

  // Land use Table Box
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(215, 222, 230);
  doc.roundedRect(margin, curY, contentWidth, 54, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...primaryColor);
  doc.text('Table A: Land Use / Land Cover Distribution of Panyali Watershed (0.95 km²)', margin + 4, curY + 6);

  const landRows = [
    ['Land Category', 'Area (km²)', 'Percentage (%)', 'Current Condition & Strategy'],
    ['Barren Land', '0.50 km²', '53.11%', 'Degraded slopes; prime target for mechanical infiltration trenches & holes'],
    ['Forest / Plants', '0.41 km²', '43.01%', 'Sparse/degraded forest; enrichment with broad-leaved water harvesting species'],
    ['Agricultural Land', '0.03 km²', '3.20%', 'Predominantly abandoned terraced fields; suitable for contour bunds & ponds'],
    ['Road Network', '0.01 km²', '0.84%', 'Newly constructed motor road; requires runoff mitigation and culvert bio-plugs'],
    ['Settlements', '0.001 km²', '0.35%', 'Village hamlets; ideal for rooftop rainwater harvesting systems'],
  ];

  let tableY = curY + 12;
  landRows.forEach((r, idx) => {
    if (idx === 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFillColor(235, 240, 246);
      doc.rect(margin + 2, tableY - 3.5, contentWidth - 4, 6, 'F');
      doc.setTextColor(...primaryColor);
    } else {
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...slateDark);
    }
    doc.text(r[0], margin + 4, tableY);
    doc.text(r[1], margin + 42, tableY);
    doc.text(r[2], margin + 68, tableY);
    doc.text(r[3], margin + 96, tableY);
    tableY += 6.5;
  });

  // ================= PAGE 4: REJUVENATION MEASURES =================
  doc.addPage();
  curY = 24;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryColor);
  doc.text('2.0 REJUVENATION TREATMENT MEASURES', margin, curY);
  curY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...slateDark);
  const p5 =
    'The rejuvenation measures for the springs, naulas, and stream network (gadgeras) of the experimental area are categorized into two complementary pillars: (1) Mechanical Treatment Measures and (2) Biological Treatment Measures.';
  const p5Lines = doc.splitTextToSize(p5, contentWidth);
  doc.text(p5Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += p5Lines.length * 5 + 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('2.1 Mechanical Treatment Measures', margin, curY);
  curY += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...slateDark);
  const mechDesc =
    'Biological measures require extended maturation periods to alter subterranean percolation. Therefore, for immediate and rapid groundwater augmentation during high-intensity monsoonal cloudbursts, mechanical civil interventions are indispensable.';
  const mechDescLines = doc.splitTextToSize(mechDesc, contentWidth);
  doc.text(mechDescLines, margin, curY, { lineHeightFactor: 1.35 });
  curY += mechDescLines.length * 4.8 + 6;

  // Objectives Box
  doc.setFillColor(245, 248, 252);
  doc.setDrawColor(210, 220, 235);
  doc.roundedRect(margin, curY, contentWidth, 38, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...primaryColor);
  doc.text('Core Engineering Objectives:', margin + 4, curY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...slateDark);
  const objectives = [
    '• Groundwater Augmentation: Enhancing bedrock percolation capacity to recharge fracture and fault aquifers.',
    '• Soil Moisture Enrichment: Maximizing topsoil and subsoil moisture retention across slopes.',
    '• Flood & Runoff Control: Attenuating surface peak runoff velocity across steep Himalayan topography.',
    '• Accelerated Erosion Control: Trapping sediment, stabilizing rills, and preventing stream bank incisive cutting.',
    '• "Hariyali" Revival: Restoring green vegetative cover and revitalizing local agrarian self-sufficiency.',
  ];
  let objY = curY + 12;
  objectives.forEach((obj) => {
    doc.text(obj, margin + 4, objY);
    objY += 5.2;
  });
  curY += 44;

  // 2.1.2 Specific measures
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...primaryColor);
  doc.text('2.1.2 Recommended Mechanical Structures', margin, curY);
  curY += 6;

  const struct1 =
    '2.1.2.1 Infiltration Holes: Small cylindrical depressions (10-15 cm depth, 5 cm diameter, density 5 per m²) excavated into degraded barren slopes and open pine forests using crowbars/picks. These catch raindrop impact energy and channel sheet flow directly into fractures.';
  const struct1Lines = doc.splitTextToSize(struct1, contentWidth);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.text(struct1Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += struct1Lines.length * 4.8 + 5;

  const struct2 =
    '2.1.2.2 Infiltration Trenches: Staggered contour cuts measuring 1.0 m length x 0.5 m width x 0.3 m depth, excavated along contour intervals of 5 m to 10 m across convex slopes (average 20° slope). They arrest overland sheet wash and promote sustained aquifer infiltration.';
  const struct2Lines = doc.splitTextToSize(struct2, contentWidth);
  doc.text(struct2Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += struct2Lines.length * 4.8 + 5;

  const struct3 =
    '2.1.2.3 Infiltration Bio-Plugs: Permeable barriers constructed across ephemeral 1st-order gullies using packed pine needle bundles (pirul), vegetative brushwood, and compacted soil lashed with natural rope to retard torrential runoff and capture silt.';
  const struct3Lines = doc.splitTextToSize(struct3, contentWidth);
  doc.text(struct3Lines, margin, curY, { lineHeightFactor: 1.35 });

  // ================= PAGE 5: MECHANICAL STRUCTURES CONTINUED =================
  doc.addPage();
  curY = 24;

  const struct4 =
    '2.1.2.4 Rill / Gully Plugs: Dry loose stone masonry structures placed in lower channel reaches across 1st- and 2nd-order rills. These dissipate destructive hydraulic kinetic energy, stabilize ravine beds, and deposit fertile topsoil.';
  const struct4Lines = doc.splitTextToSize(struct4, contentWidth);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...slateDark);
  doc.text(struct4Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += struct4Lines.length * 4.8 + 6;

  const struct5 =
    '2.1.2.5 Check Dams: Masonry and gabion barriers measuring 1.0 m to 1.5 m in height built across 2nd- and 3rd-order streams at 30 m to 50 m intervals to check intermittent flood surges, establish sediment traps, and facilitate persistent groundwater recharge.';
  const struct5Lines = doc.splitTextToSize(struct5, contentWidth);
  doc.text(struct5Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += struct5Lines.length * 4.8 + 6;

  const struct6 =
    '2.1.2.6 Contour Bunds: Earthen and vegetative embankments erected along terrace margins of abandoned agricultural fields to capture monsoon showers, eliminate terrace collapse, and retain moisture for crop cultivation.';
  const struct6Lines = doc.splitTextToSize(struct6, contentWidth);
  doc.text(struct6Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += struct6Lines.length * 4.8 + 6;

  const struct7 =
    '2.1.2.7 Terrace Ponds: Shallow trapezoidal retention ponds (10-20 m² area, 1.0-2.0 m depth) excavated on gentle terraces. Lined with local clay or bio-membranes, they capture ephemeral rill flow for lean-season irrigation and deep aquifer percolation.';
  const struct7Lines = doc.splitTextToSize(struct7, contentWidth);
  doc.text(struct7Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += struct7Lines.length * 4.8 + 6;

  const struct8 =
    '2.1.2.8 & 2.1.2.9 Rooftop Rainwater Harvesting: Gutters, first-flush filters, and storage tanks installed on village dwellings. Excess overflows are connected to gravity recharge pits to recharge the village spring aquifer while satisfying domestic non-potable water needs.';
  const struct8Lines = doc.splitTextToSize(struct8, contentWidth);
  doc.text(struct8Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += struct8Lines.length * 4.8 + 10;

  // Stream Hierarchy Box
  doc.setFillColor(250, 248, 244);
  doc.setDrawColor(...accentColor);
  doc.roundedRect(margin, curY, contentWidth, 38, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...primaryColor);
  doc.text('Hydrological Network Metrics of Panyali Watershed:', margin + 4, curY + 6);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...slateDark);
  const streamInfo = [
    '• Stream Order Network: 1st Order Streams (4 channels), 2nd Order Streams (1 channel) — Total = 5 streams.',
    '• Channel Lengths: Ephemeral channels (2.02 km cumulative length), Non-perennial drainage (1.12 km).',
    '• Drainage Confluence: Panyali Gadhera discharges directly into Jaigan River at an elevation of 1,100 m MSL.',
    '• Critical Threat: Rapid downcutting along 1st-order channels is draining hillside recharge and causing spring drying.',
  ];
  let sY = curY + 12;
  streamInfo.forEach((s) => {
    doc.text(s, margin + 4, sY);
    sY += 5.5;
  });

  // ================= PAGE 6: BIOLOGICAL MEASURES =================
  doc.addPage();
  curY = 24;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryColor);
  doc.text('2.2 BIOLOGICAL TREATMENT MEASURES', margin, curY);
  curY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...slateDark);
  const bioIntro =
    'Past empirical experiences in Himalayan springshed revival demonstrate that no biological plantation can succeed without community fire protection and livestock browsing control. Mechanical structures provide immediate infiltration, but long-term sustained percolation relies on deep root networks and natural humus layers created by broad-leaved indigenous forests.';
  const bioIntroLines = doc.splitTextToSize(bioIntro, contentWidth);
  doc.text(bioIntroLines, margin, curY, { lineHeightFactor: 1.35 });
  curY += bioIntroLines.length * 5 + 8;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('2.2.1 Afforestation & Plantation Strategy (0.50 km² Barren Land)', margin, curY);
  curY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...slateDark);
  const afforest =
    'Approximately 0.50 km² (53.11% of the watershed) is currently barren or severely degraded scrubland. A massive social forestry campaign is mandated to replace combustible pine needle carpets with indigenous moisture-retaining trees:';
  const afforestLines = doc.splitTextToSize(afforest, contentWidth);
  doc.text(afforestLines, margin, curY, { lineHeightFactor: 1.35 });
  curY += afforestLines.length * 4.8 + 4;

  const speciesList = [
    '• Banjh Oak (Quercus leucotrichophora): High sponge capacity, deep root infiltration, year-round leaf mulching.',
    '• Utis (Alnus nepalensis): Rapid nitrogen-fixing colonization on landslides and steep eroded concave gullies.',
    '• Burans (Rhododendron arboreum): Moisture conservation and subsoil ecological stability.',
    '• Napier & Vetiver Grasses: Vegetative contour hedgerows planted on terrace risers to arrest soil creeping.',
  ];
  speciesList.forEach((sp) => {
    doc.text(sp, margin + 4, curY);
    curY += 5.2;
  });
  curY += 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('2.2.2 Community Horticulture & Nursery Development', margin, curY);
  curY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...slateDark);
  const horti =
    'Because the newly paved village link road passes through the center of Bhalyuta, economic horticulture can thrive alongside ecological conservation. Abandoned terraced plots (0.03 km²) will be cultivated with walnut, apple, citrus fruits, and medicinal herbs. Decentralized village nurseries operated by women’s self-help groups (Mahila Mangal Dals) will nurture native saplings, ensuring localized employment and guaranteed survival rates for afforestation seedlings.';
  const hortiLines = doc.splitTextToSize(horti, contentWidth);
  doc.text(hortiLines, margin, curY, { lineHeightFactor: 1.35 });

  // ================= PAGE 7: MICRO-PLANS & TABLE =================
  doc.addPage();
  curY = 24;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryColor);
  doc.text('3.0 MICRO-PLANS FOR REJUVENATION MEASURES', margin, curY);
  curY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...slateDark);
  const microIntro =
    'Based on hydrogeological survey standards, 1m contour slope modeling, and geomorphic landform classification, specific quantitative targets for mechanical and biological treatments in the Panyali Watershed have been calculated as detailed in Table 1 below:';
  const microIntroLines = doc.splitTextToSize(microIntro, contentWidth);
  doc.text(microIntroLines, margin, curY, { lineHeightFactor: 1.35 });
  curY += microIntroLines.length * 5 + 6;

  // Master Micro-Plan Table
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(...primaryColor);
  doc.text('Table 1: Quantified Mechanical Treatment Interventions in Panyali Watershed', margin, curY);
  curY += 4;

  const tableHeaders = ['Mechanical Treatment', 'Forest Land', 'Barren Land', 'Abandoned Ag.', 'Ag. Land', 'Total Target'];
  const tableData = [
    ['Infiltration Holes (5/m²)', '1,450,000', '1,050,000', '—', '—', '2,500,000 units'],
    ['Infiltration Trenches (1.0x0.5x0.3m)', '4,610', '3,468', '—', '—', '8,078 trenches'],
    ['Bio-Plugs across 1st-order rills', '—', '—', '20 units in upper reaches', '—', '20 bio-plugs'],
    ['Rill / Gully Plugs across channels', '45', '—', '5 units in lower reaches', '—', '50 gully plugs'],
    ['Terrace Ponds (10-20 m²)', '—', '2', '10', '20', '32 ponds'],
    ['Contour Bunds along field terraces', '—', '—', '—', '5,000 meters', '5,000 running m'],
    ['Check Dams (1.0m to 1.5m height)', '58', '—', '2 near gully confluence', '—', '60 check dams'],
  ];

  // Draw Table
  const colWidths = [48, 22, 22, 28, 24, 26];
  const rowHeight = 7.5;

  // Header row
  doc.setFillColor(17, 34, 68);
  doc.rect(margin, curY, contentWidth, rowHeight, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);

  let cX = margin;
  tableHeaders.forEach((h, i) => {
    doc.text(h, cX + 2, curY + 5);
    cX += colWidths[i];
  });
  curY += rowHeight;

  // Data rows
  tableData.forEach((row, rIdx) => {
    doc.setFillColor(rIdx % 2 === 0 ? 255 : 246, rIdx % 2 === 0 ? 255 : 249, rIdx % 2 === 0 ? 255 : 252);
    doc.rect(margin, curY, contentWidth, rowHeight, 'F');
    doc.setDrawColor(220, 228, 236);
    doc.rect(margin, curY, contentWidth, rowHeight, 'D');

    cX = margin;
    row.forEach((cell, cIdx) => {
      doc.setFont('helvetica', cIdx === 0 || cIdx === 5 ? 'bold' : 'normal');
      doc.setFontSize(7.8);
      doc.setTextColor(...(cIdx === 5 ? accentColor : primaryColor));
      doc.text(cell, cX + 2, curY + 5);
      cX += colWidths[cIdx];
    });
    curY += rowHeight;
  });

  curY += 8;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(...primaryColor);
  doc.text('3.2 Implementation Strategy & Community Partnership', margin, curY);
  curY += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(...slateDark);
  const impText =
    'The implementation will be carried out collaboratively by Village Panchayat Bhalyuta, AMAN NGO, and the Uttarakhand Forest & Watershed Management Departments. Following 2 monsoon seasons, silt-settled infiltration holes will be refreshed and planted with saplings, converting mechanical structures into permanent biological moisture stores.';
  const impLines = doc.splitTextToSize(impText, contentWidth);
  doc.text(impLines, margin, curY, { lineHeightFactor: 1.35 });

  // ================= PAGE 8: ACKNOWLEDGEMENT & SUMMARY =================
  doc.addPage();
  curY = 24;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryColor);
  doc.text('ACKNOWLEDGEMENT & PROJECT SIGN-OFF', margin, curY);
  curY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.2);
  doc.setTextColor(...slateDark);
  const ack1 =
    'This Technical Research & Action Plan Report is the outcome of intensive field assessments, GIScience contour spatial modeling, and community stakeholder consultations conducted across Village Bhalyuta and the Panyali Watershed in the Jaigan Valley, District Bageshwar.';
  const ack1Lines = doc.splitTextToSize(ack1, contentWidth);
  doc.text(ack1Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += ack1Lines.length * 5 + 6;

  const ack2 =
    'Sincere gratitude is extended to the Gram Panchayat of Bhalyuta, local elders, and Mahila Mangal Dal members for their enthusiastic participation and invaluable field insights during springshed delineations. Special thanks are due to AMAN (Eastern Pokherkhali, Almora) for sponsoring and facilitating all logistics, and to the Centre of Excellence for Natural Resources Data Management System (NRDMS) for geospatial analytical support.';
  const ack2Lines = doc.splitTextToSize(ack2, contentWidth);
  doc.text(ack2Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += ack2Lines.length * 5 + 14;

  // Sign-off Box
  doc.setFillColor(248, 250, 253);
  doc.setDrawColor(...accentColor);
  doc.roundedRect(margin, curY, contentWidth, 54, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...primaryColor);
  doc.text('INVESTIGATION TEAM & EDITORIAL SIGN-OFF', margin + 6, curY + 8);

  const signCols = [
    { name: 'Prof. J.S. Rawat', title: 'Senior Hydrogeologist & Geoscientist', org: 'Former Professor & Head, Kumaun University' },
    { name: 'Dr. Naresh Pant', title: 'Co-Principal Investigator', org: 'Watershed & Environmental Scientist' },
    { name: 'Er. Varun Rawat', title: 'Geospatial Engineer & Founder', org: 'GEOVERSED Geoscience Intelligence' },
  ];

  const colW = (contentWidth - 12) / 3;
  signCols.forEach((sig, idx) => {
    const sX = margin + 6 + idx * colW;
    const sBoxY = curY + 18;

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(...primaryColor);
    doc.text(sig.name, sX, sBoxY);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(7.8);
    doc.setTextColor(...accentColor);
    doc.text(sig.title, sX, sBoxY + 5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(...slateDark);
    const orgLines = doc.splitTextToSize(sig.org, colW - 4);
    doc.text(orgLines, sX, sBoxY + 10);
  });

  curY += 66;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...accentColor);
  doc.text('TOWARDS AVIRAL GANGA • SCIENTIFIC SPRINGS REJUVENATION INITIATIVE', pageWidth / 2, curY, { align: 'center' });

  // Add headers/footers to all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    addHeaderFooter(i, totalPages);
  }

  // Save to public/reports
  const outDir = path.resolve(__dirname, '../public/reports');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, 'Bhalyuta_Spring_Panyali_Gadgera_Rejuvenation_Report_2026.pdf');
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outPath, pdfBuffer);
  console.log(`Successfully generated ${outPath} (${pdfBuffer.length} bytes, ${totalPages} pages)`);

  // Also copy to dist if dist/reports exists
  const distDir = path.resolve(__dirname, '../dist/reports');
  if (fs.existsSync(path.resolve(__dirname, '../dist'))) {
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    fs.writeFileSync(path.join(distDir, 'Bhalyuta_Spring_Panyali_Gadgera_Rejuvenation_Report_2026.pdf'), pdfBuffer);
    console.log(`Copied to dist/reports`);
  }
}

generateBhalyutaReport();
