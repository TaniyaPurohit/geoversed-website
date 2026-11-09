const fs = require('fs');
const path = require('path');
const { jsPDF } = require('jspdf');

function generateDhargadReport() {
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
      'Towards Aviral Ganga • Rejuvenation Strategy of Dhargad Watershed (Jatha & Pass Villages)',
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
  doc.setFillColor(...tealBanner);
  doc.rect(0, 0, 18, pageHeight, 'F');

  doc.setDrawColor(...accentColor);
  doc.setLineWidth(0.8);
  doc.rect(24, 15, pageWidth - 32, pageHeight - 30);
  doc.setLineWidth(0.3);
  doc.rect(26, 17, pageWidth - 36, pageHeight - 34);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(255, 255, 255);
  doc.text('Towards Aviral Ganga', 11, pageHeight / 2, { angle: 90, align: 'center' });

  const startY = 55;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(...primaryColor);

  const titleLines = [
    'REJUVENATION STRATEGY OF THE',
    'DYING SPRINGS AND NAULAS IN',
    'DHARGAD WATERSHED (JAIGAN VALLEY)',
    'DISTRICT BAGESHWAR, UTTARAKHAND',
  ];
  doc.text(titleLines, (pageWidth + 18) / 2, startY, { align: 'center', lineHeightFactor: 1.35 });

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(13);
  doc.setTextColor(...accentColor);
  doc.text('Phase-I Rejuvenation of Springs & Naulas in Jatha & Pass Villages', (pageWidth + 18) / 2, startY + 36, { align: 'center' });

  doc.setDrawColor(...accentColor);
  doc.setLineWidth(0.6);
  doc.line((pageWidth + 18) / 2 - 35, startY + 44, (pageWidth + 18) / 2 + 35, startY + 44);

  const badgeY = startY + 54;
  doc.setFillColor(245, 247, 250);
  doc.setDrawColor(200, 210, 220);
  doc.roundedRect((pageWidth + 18) / 2 - 45, badgeY, 90, 48, 3, 3, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...primaryColor);
  doc.text('SPRINGSHED DELINEATION & AQUIFER RECHARGE', (pageWidth + 18) / 2, badgeY + 12, { align: 'center' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...slateDark);
  doc.text('Target Settlements: Jatha & Pass Villages', (pageWidth + 18) / 2, badgeY + 20, { align: 'center' });
  doc.text('Watershed: Dhargad Sub-Catchment, Jaigan Valley', (pageWidth + 18) / 2, badgeY + 26, { align: 'center' });
  doc.text('Elevation: 1,150 m to 1,920 m above MSL', (pageWidth + 18) / 2, badgeY + 32, { align: 'center' });
  doc.text('Integrated Geospatial Hydrology & Field Micro-Plans', (pageWidth + 18) / 2, badgeY + 38, { align: 'center' });

  const authorsY = badgeY + 68;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('Prof. J.S. Rawat', (pageWidth + 18) / 2, authorsY, { align: 'center' });
  doc.text('Er. Varun Rawat', (pageWidth + 18) / 2, authorsY + 7, { align: 'center' });
  doc.text('Dr. N.C. Pant', (pageWidth + 18) / 2, authorsY + 14, { align: 'center' });

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
  doc.text('July, 2026', (pageWidth + 18) / 2, sponsorY + 20, { align: 'center' });

  // ================= PAGE 2: EXECUTIVE SUMMARY =================
  doc.addPage();
  let curY = 24;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryColor);
  doc.text('1.0 EXECUTIVE OVERVIEW & STUDY AREA', margin, curY);
  curY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...slateDark);
  const p1 =
    'The Dhargad Watershed is an integral tributary catchment within the Jaigan River basin in District Bageshwar, Uttarakhand. Perennial springs (Dharas) and traditional subterranean recharge step-wells (Naulas) have formed the lifeline of drinking water and terraced agriculture for generations in Jatha and Pass villages. Over recent decades, intensified monsoonal runoff, structural fracture dislocation, and changes in vegetative land cover have severely reduced lean-season spring discharge, precipitating acute seasonal water scarcity.';
  const p1Lines = doc.splitTextToSize(p1, contentWidth);
  doc.text(p1Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += p1Lines.length * 5 + 6;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(...primaryColor);
  doc.text('1.1 Geospatial Hydrogeology & Recharge Zone Delineation', margin, curY);
  curY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...slateDark);
  const p2 =
    'Using high-resolution Digital Elevation Models (DEMs), multi-spectral satellite imagery, and on-ground geologic fracture tracing, the recharge zones contributing to the principal dying springs of Jatha and Pass were precisely mapped. The study area extends across 1.42 km² of mountainous terrain, characterized by folded quartzite, phyllite bedrock, and thin colluvial slope mantles.';
  const p2Lines = doc.splitTextToSize(p2, contentWidth);
  doc.text(p2Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += p2Lines.length * 5 + 8;

  // Key Interventions
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(215, 222, 230);
  doc.roundedRect(margin, curY, contentWidth, 54, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...primaryColor);
  doc.text('Table 1: Planned Civil & Biological Treatments in Dhargad Watershed', margin + 4, curY + 6);

  const tableRows = [
    ['Treatment Measure', 'Unit Target', 'Target Zone', 'Hydrological Function'],
    ['Infiltration Holes (5/m²)', '3,200,000 units', 'Degraded ridge slopes', 'Direct fracture infiltration & runoff arrest'],
    ['Infiltration Trenches (1.0x0.5x0.3m)', '11,400 trenches', 'Barren & scrub slopes', 'Contour detention of monsoon sheet wash'],
    ['Pine Needle Bio-Plugs', '45 units', 'Upper 1st-order rills', 'Sediment trapping and runoff velocity dissipation'],
    ['Loose Stone Gully Plugs', '72 units', '2nd-order gullies', 'Preventing incisive channel downcutting'],
    ['Broad-Leaved Afforestation', '18,500 saplings', 'Catchment commons', 'Quercus leucotrichophora (Oak) & Alnus (Utis)'],
  ];

  let tY = curY + 12;
  tableRows.forEach((r, idx) => {
    if (idx === 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFillColor(235, 240, 246);
      doc.rect(margin + 2, tY - 3.5, contentWidth - 4, 6, 'F');
      doc.setTextColor(...primaryColor);
    } else {
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...slateDark);
    }
    doc.text(r[0], margin + 4, tY);
    doc.text(r[1], margin + 55, tY);
    doc.text(r[2], margin + 92, tY);
    doc.text(r[3], margin + 128, tY);
    tY += 6.5;
  });

  // ================= PAGE 3: RECOMMENDATIONS & SIGN-OFF =================
  doc.addPage();
  curY = 24;

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...primaryColor);
  doc.text('2.0 ACTION PLAN & IMPLEMENTATION ROADMAP', margin, curY);
  curY += 6;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(...slateDark);
  const p3 =
    'The action plan emphasizes participatory springshed management by establishing Village Water User Committees (Gram Jal Samitis) in Jatha and Pass. Community labor combined with micro-watershed engineering ensures low-cost, high-durability recharge infrastructure that stabilizes local potable water access year-round.';
  const p3Lines = doc.splitTextToSize(p3, contentWidth);
  doc.text(p3Lines, margin, curY, { lineHeightFactor: 1.35 });
  curY += p3Lines.length * 5 + 14;

  doc.setFillColor(248, 250, 253);
  doc.setDrawColor(...accentColor);
  doc.roundedRect(margin, curY, contentWidth, 54, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(...primaryColor);
  doc.text('INVESTIGATION TEAM & EDITORIAL SIGN-OFF', margin + 6, curY + 8);

  const signCols = [
    { name: 'Prof. J.S. Rawat', title: 'Senior Hydrogeologist & Geoscientist', org: 'Former Professor & Head, Kumaun University' },
    { name: 'Er. Varun Rawat', title: 'Geospatial Engineer & Founder', org: 'GEOVERSED Geoscience Intelligence' },
    { name: 'Dr. N.C. Pant', title: 'Co-Principal Investigator', org: 'Watershed & Environmental Scientist' },
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

  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    addHeaderFooter(i, totalPages);
  }

  const outDir = path.resolve(__dirname, '../public/reports');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const outPath = path.join(outDir, 'Dhargad_Watershed_Rejuvenation_Report_2026.pdf');
  const pdfBuffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outPath, pdfBuffer);
  console.log(`Successfully generated ${outPath} (${pdfBuffer.length} bytes, ${totalPages} pages)`);
}

generateDhargadReport();
