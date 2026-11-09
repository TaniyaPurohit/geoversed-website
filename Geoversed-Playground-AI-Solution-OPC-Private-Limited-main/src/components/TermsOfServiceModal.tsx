import React, { useEffect, useRef } from 'react';
import { X, FileText, Printer, ArrowUp, Mail, Phone, MapPin, Scale, ShieldAlert, Award } from 'lucide-react';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({
  isOpen,
  onClose,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'tos-sec-1', title: '1. Introduction & Acceptance' },
    { id: 'tos-sec-2', title: '2. Definitions' },
    { id: 'tos-sec-3', title: '3. Eligibility' },
    { id: 'tos-sec-4', title: '4. Scope of Services' },
    { id: 'tos-sec-5', title: '5. Use of Website' },
    { id: 'tos-sec-6', title: '6. Intellectual Property' },
    { id: 'tos-sec-7', title: '7. User Content' },
    { id: 'tos-sec-8', title: '8. Client Obligations' },
    { id: 'tos-sec-9', title: '9. Fees, Payment & Taxes' },
    { id: 'tos-sec-10', title: '10. Timelines & Delivery' },
    { id: 'tos-sec-11', title: '11. Confidentiality' },
    { id: 'tos-sec-12', title: '12. Data Protection' },
    { id: 'tos-sec-13', title: '13. Disclaimers' },
    { id: 'tos-sec-14', title: '14. Liability Limits' },
    { id: 'tos-sec-15', title: '15. Indemnification' },
    { id: 'tos-sec-16', title: '16. Termination' },
    { id: 'tos-sec-17', title: '17. Force Majeure' },
    { id: 'tos-sec-18', title: '18. Dispute Resolution' },
    { id: 'tos-sec-19', title: '19. Governing Law' },
    { id: 'tos-sec-20', title: '20. Modifications' },
    { id: 'tos-sec-21', title: '21. Severability' },
    { id: 'tos-sec-22', title: '22. Waiver' },
    { id: 'tos-sec-23', title: '23. Assignment' },
    { id: 'tos-sec-24', title: '24. Entire Agreement' },
    { id: 'tos-sec-25', title: '25. Contact & Corporate' },
    { id: 'tos-sec-26', title: '26. Acknowledgment' },
  ];

  return (
    <div
      id="terms-of-service-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-of-service-title"
    >
      <div
        id="terms-of-service-modal-container"
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[92vh] flex flex-col overflow-hidden border border-slate-200/80 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0F2042] text-white p-5 sm:p-6 relative shrink-0 border-b border-[#1b3469]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close Terms of Service dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2 text-[#B3864B] text-xs font-semibold uppercase tracking-wider mb-1.5">
            <Scale className="w-4 h-4" />
            <span>Statutory Legal Terms & Service Agreement</span>
          </div>
          
          <h2 id="terms-of-service-title" className="text-xl sm:text-2xl font-bold font-['Poppins']">
            Terms of Service
          </h2>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-300 mt-1 font-medium">
            <span>GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="text-amber-300/90">Last Updated: September 26, 2026</span>
          </div>

          {/* Quick Header Action Bar */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Indian Contract Act, 1872 & DPDP Act, 2023 Compliant</span>
            </div>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-colors cursor-pointer text-xs font-medium"
              title="Print Terms of Service"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print Document</span>
            </button>
          </div>
        </div>

        {/* Quick Jump TOC Bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 overflow-x-auto shrink-0 flex items-center gap-2 no-scrollbar">
          <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
            <FileText className="w-3 h-3 text-[#B3864B]" />
            Jump To:
          </span>
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:text-[#0F2042] hover:bg-white rounded-md transition-colors border border-transparent hover:border-slate-200 shrink-0 cursor-pointer whitespace-nowrap"
            >
              {sec.title}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Content */}
        <div
          ref={contentRef}
          className="p-6 sm:p-8 overflow-y-auto space-y-8 text-slate-700 text-sm leading-relaxed scroll-smooth flex-1 font-sans"
        >
          {/* Statutory Header Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-amber-50/60 border border-amber-200/70 text-amber-950 text-xs sm:text-sm">
            <p className="font-semibold text-amber-900 mb-1 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-700" />
              Legally Binding Agreement
            </p>
            <p className="text-amber-800/90 leading-relaxed text-xs">
              By accessing, browsing, or utilizing the website at{' '}
              <a
                href="https://geoversed-playground-ai-solution-opc.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium text-amber-900"
              >
                https://geoversed-playground-ai-solution-opc.netlify.app
              </a>{' '}
              or engaging with our geospatial, GIS, geoscience, consulting, training, or research services, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </div>

          {/* Section 1 */}
          <section id="tos-sec-1" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              1. Introduction and Acceptance of Terms
            </h3>
            <p>
              Welcome to <strong>GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED</strong> ("GEOVERSED," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website located at{' '}
              <a
                href="https://geoversed-playground-ai-solution-opc.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F2042] font-medium underline"
              >
                https://geoversed-playground-ai-solution-opc.netlify.app
              </a>{' '}
              (the "Website") and all related geospatial, GIS, geoscience, consulting, training, and research services (collectively, the "Services").
            </p>
            <p>
              By accessing, browsing, or using our Website or Services, you ("User," "you," or "your") acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must immediately discontinue use of the Website and Services.
            </p>
            <p className="font-medium text-[#0F2042]">
              These Terms constitute a legally binding agreement between you and GEOVERSED.
            </p>
          </section>

          {/* Section 2 */}
          <section id="tos-sec-2" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              2. Definitions
            </h3>
            <ul className="space-y-2 pl-2">
              <li>
                <strong>"Website"</strong> means the GEOVERSED website and all associated pages, subdomains, and content.
              </li>
              <li>
                <strong>"Services"</strong> means all geospatial, GIS, Web-GIS, geoscience, environmental, AI/ML, training, research, and consultancy services offered by GEOVERSED.
              </li>
              <li>
                <strong>"Content"</strong> means all text, graphics, images, data, maps, software, code, reports, and other materials on the Website.
              </li>
              <li>
                <strong>"User Content"</strong> means any data, information, or materials you submit to GEOVERSED.
              </li>
              <li>
                <strong>"Deliverables"</strong> means reports, maps, datasets, software, models, or other outputs provided as part of paid Services.
              </li>
              <li>
                <strong>"Client"</strong> means any individual or entity that engages GEOVERSED for paid Services under a separate agreement.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="tos-sec-3" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              3. Eligibility
            </h3>
            <p>To use our Website and Services, you must:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
              <li>Be at least 18 years of age or have the consent of a parent or legal guardian.</li>
              <li>Have the legal capacity to enter into binding contracts under Indian law.</li>
              <li>Not be barred from using the Services under any applicable law.</li>
              <li>Provide accurate, current, and complete information when required.</li>
            </ul>
            <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-200">
              If you are using the Services on behalf of an organization, firm, or educational institution, you represent and warrant that you have the formal authority to bind that entity to these Terms.
            </p>
          </section>

          {/* Section 4 */}
          <section id="tos-sec-4" className="space-y-4 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              4. Scope of Services
            </h3>
            <p>GEOVERSED provides the following specialized categories of Services:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-xs sm:text-sm text-[#0F2042]">
                  4.1 Geospatial and GIS Services
                </h4>
                <ul className="list-disc pl-4 text-xs space-y-1 text-slate-600 mt-1.5">
                  <li>GIS and Web-GIS development</li>
                  <li>Spatial database design (PostGIS)</li>
                  <li>QGIS plugins and custom tools</li>
                  <li>Interactive dashboards (Leaflet, Mapbox, GeoServer)</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-xs sm:text-sm text-[#0F2042]">
                  4.2 Geoscience and Environmental Services
                </h4>
                <ul className="list-disc pl-4 text-xs space-y-1 text-slate-600 mt-1.5">
                  <li>Springshed and water conservation</li>
                  <li>Environmental Impact Assessment (EIA)</li>
                  <li>Glaciology and climate change studies</li>
                  <li>Hill town carrying capacity assessments</li>
                  <li>Natural and human resource mapping</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-xs sm:text-sm text-[#0F2042]">
                  4.3 Planning and Governance Services
                </h4>
                <ul className="list-disc pl-4 text-xs space-y-1 text-slate-600 mt-1.5">
                  <li>Urban and rural planning</li>
                  <li>g-Governance portal development</li>
                  <li>State resource atlas and planning</li>
                  <li>Disaster management support</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-xs sm:text-sm text-[#0F2042]">
                  4.4 AI/ML and Technology Services
                </h4>
                <ul className="list-disc pl-4 text-xs space-y-1 text-slate-600 mt-1.5">
                  <li>Automated feature extraction</li>
                  <li>Landslide prediction</li>
                  <li>Crop classification</li>
                  <li>Satellite change detection</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-xs sm:text-sm text-[#0F2042]">
                  4.5 Education and Capacity Building
                </h4>
                <ul className="list-disc pl-4 text-xs space-y-1 text-slate-600 mt-1.5">
                  <li>GIS lab setup and curriculum design</li>
                  <li>Stakeholder training</li>
                  <li>Dissertation and thesis supervision</li>
                  <li>Research guidance</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-xs sm:text-sm text-[#0F2042]">
                  4.6 Consulting and Advisory
                </h4>
                <ul className="list-disc pl-4 text-xs space-y-1 text-slate-600 mt-1.5">
                  <li>Detailed Project Reports (DPRs)</li>
                  <li>Technical studies and assessments</li>
                  <li>Policy and planning advisory</li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-slate-600 italic">
              Specific project scope, deliverables, timelines, and fees are governed by separate Service Agreements, Work Orders, or Statements of Work (SOW) executed between GEOVERSED and the Client.
            </p>
          </section>

          {/* Section 5 */}
          <section id="tos-sec-5" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              5. Use of the Website
            </h3>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">5.1 Permitted Use</h4>
              <p className="text-xs text-slate-600">You may use the Website for lawful purposes only, including:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
                <li>Learning about our Services and research</li>
                <li>Contacting us for project estimates and technical inquiries</li>
                <li>Accessing publicly available resources and publications</li>
                <li>Engaging with our knowledge hub content</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="font-semibold text-red-900 text-xs sm:text-sm">5.2 Prohibited Conduct</h4>
              <p className="text-xs text-slate-600">You agree NOT to:</p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
                <li>Use the Website for any unlawful, fraudulent, or malicious purpose</li>
                <li>Attempt to gain unauthorized access to any part of the Website, servers, or databases</li>
                <li>Introduce viruses, malware, or any harmful code</li>
                <li>Scrape, crawl, or harvest data without written permission</li>
                <li>Copy, reproduce, or redistribute Content without authorization</li>
                <li>Impersonate GEOVERSED, its employees, or any other person</li>
                <li>Interfere with or disrupt the Website's operation</li>
                <li>Use the Website to transmit spam, chain letters, or unsolicited communications</li>
                <li>Violate any applicable local, national, or international law</li>
                <li>Reverse engineer, decompile, or disassemble any software provided</li>
              </ul>
              <p className="text-xs text-red-800 bg-red-50 p-2.5 rounded-lg border border-red-200">
                Violation of these prohibitions may result in immediate termination of access and statutory legal action under the Information Technology Act, 2000.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="tos-sec-6" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              6. Intellectual Property Rights
            </h3>
            
            <div>
              <h4 className="font-semibold text-slate-900 text-xs sm:text-sm mb-1">6.1 GEOVERSED Ownership</h4>
              <p className="text-xs text-slate-600">
                All Content on the Website — including text, graphics, logos, maps, satellite imagery, software, code, databases, reports, methodologies, and AI models — is the exclusive property of GEOVERSED or its licensors and is protected under:
              </p>
              <ul className="list-disc pl-5 text-xs text-slate-700 mt-1 space-y-0.5">
                <li>The Copyright Act, 1957</li>
                <li>The Trade Marks Act, 1999</li>
                <li>The Patents Act, 1970</li>
                <li>The Geographical Indications of Goods Act, 1999</li>
                <li>Applicable international intellectual property laws</li>
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="font-semibold text-slate-900 text-xs sm:text-sm mb-1">6.2 Limited License</h4>
              <p className="text-xs text-slate-600">
                You are granted a limited, non-exclusive, non-transferable, revocable license to access and view the Website Content for personal, non-commercial, informational purposes only. This license does not permit reproduction, distribution, public display, modification, derivative works, commercial exploitation, or removal of copyright/proprietary notices.
              </p>
            </div>

            <div className="pt-2">
              <h4 className="font-semibold text-slate-900 text-xs sm:text-sm mb-1">6.3 Deliverables and Client Work</h4>
              <p className="text-xs text-slate-600">
                Ownership of Deliverables created under paid engagements is governed by the applicable Service Agreement. Unless otherwise specified:
              </p>
              <ul className="list-disc pl-5 text-xs text-slate-700 mt-1 space-y-1">
                <li><strong>Custom Deliverables:</strong> (reports, maps, databases) become the property of the Client upon full payment, subject to a perpetual, royalty-free license granted to GEOVERSED for internal use, portfolio display, and methodological development.</li>
                <li><strong>Underlying Tools, Models, and IP:</strong> (algorithms, frameworks, code libraries) remain the property of GEOVERSED.</li>
                <li><strong>Third-Party Data:</strong> is subject to the respective licensors' terms.</li>
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="font-semibold text-slate-900 text-xs sm:text-sm mb-1">6.4 Publication and Citation</h4>
              <p className="text-xs text-slate-600">
                Clients and collaborators agree to acknowledge GEOVERSED appropriately in any publication, presentation, or derivative work based on our Services. Requests for co-authorship shall be discussed in good faith.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="tos-sec-7" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              7. User Content
            </h3>
            <div>
              <h4 className="font-semibold text-slate-900 text-xs sm:text-sm mb-1">7.1 Your Responsibility</h4>
              <p className="text-xs text-slate-600">You are solely responsible for any User Content you submit. You represent and warrant that you own or have the necessary rights, that it does not infringe third-party rights, is accurate and lawful, and does not contain malicious code.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-xs sm:text-sm mb-1">7.2 License to GEOVERSED</h4>
              <p className="text-xs text-slate-600">By submitting User Content, you grant GEOVERSED a worldwide, non-exclusive, royalty-free, perpetual license to use, reproduce, modify, and display the content for the purpose of providing Services, consistent with our Privacy Policy.</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-xs sm:text-sm mb-1">7.3 Removal</h4>
              <p className="text-xs text-slate-600">We reserve the right to remove any User Content that violates these Terms or applicable law, without notice.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="tos-sec-8" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              8. Client Obligations
            </h3>
            <p className="text-xs text-slate-600">If you engage GEOVERSED for paid Services, you agree to:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
              <li>Provide accurate, timely, and complete information required for the project</li>
              <li>Cooperate with reasonable requests for data, access, or approvals</li>
              <li>Ensure you have the legal right to share any data provided to us</li>
              <li>Obtain necessary permissions for field surveys, drone operations, or site access</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Pay all fees as per the agreed payment schedule</li>
              <li>Designate a single responsible point of contact for project coordination</li>
            </ul>
            <p className="text-xs text-slate-500 italic">
              Delays caused by Client non-cooperation may result in revised timelines and additional costs.
            </p>
          </section>

          {/* Section 9 */}
          <section id="tos-sec-9" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              9. Fees, Payment, and Taxes
            </h3>
            <div className="space-y-2 text-xs text-slate-700">
              <p><strong>9.1 Fees:</strong> Fees for Services are specified in the applicable Service Agreement, Work Order, or Quotation. Fees are quoted in Indian Rupees (INR) unless otherwise stated.</p>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <p className="font-semibold text-slate-800 mb-1">9.2 Payment Terms (Standard Milestone Structure):</p>
                <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                  <li>50% advance upon signing the agreement / commencement</li>
                  <li>40% on delivery of draft deliverables / interim review</li>
                  <li>10% on final acceptance / sign-off</li>
                </ul>
                <p className="text-[11px] text-slate-500 mt-1">Specific payment schedules may be negotiated per project agreement.</p>
              </div>
              <p><strong>9.3 Taxes:</strong> All fees are exclusive of GST and other applicable statutory taxes, which will be added as per prevailing government rates.</p>
              <p><strong>9.4 Late Payment:</strong> Late payments may attract interest at 18% per annum or the maximum permitted by law, whichever is lower. We reserve the right to suspend Services for non-payment.</p>
              <p><strong>9.5 Refunds:</strong> Refund policies are specified in the Service Agreement. Generally, advance payments are non-refundable once technical work has commenced; refunds for undelivered work are evaluated on a case-by-case basis through good-faith negotiation.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="tos-sec-10" className="space-y-2 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              10. Project Timelines and Delivery
            </h3>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700">
              <li>Timelines are estimates based on scientific parameters and information available at the time of agreement.</li>
              <li>Delays due to force majeure, extreme weather, terrain hazards, Client non-cooperation, or unforeseen circumstances will extend timelines accordingly.</li>
              <li>Delivery is considered complete upon submission of Deliverables via agreed digital or physical channels.</li>
              <li>Client must provide structured feedback within 15 days of delivery; silence beyond this period constitutes formal acceptance.</li>
              <li>Revisions beyond the agreed project scope may attract additional technical fees.</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section id="tos-sec-11" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              11. Confidentiality
            </h3>
            <div className="space-y-2 text-xs text-slate-700">
              <p><strong>11.1 Mutual Confidentiality:</strong> Both parties agree to keep confidential all non-public information disclosed during the engagement ("Confidential Information").</p>
              <p><strong>11.2 Obligations:</strong> The receiving party shall use Confidential Information solely for the purpose of the engagement, not disclose it to third parties without prior written consent, protect it with reasonable care, and return or destroy it upon request or termination.</p>
              <p><strong>11.3 Exceptions:</strong> Obligations do not apply to information that is publicly available through no fault of the receiver, already known, independently developed, or required to be disclosed by law or court order.</p>
              <p><strong>11.4 Duration:</strong> Confidentiality obligations survive termination for a period of 5 years, or longer where required by law.</p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="tos-sec-12" className="space-y-2 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              12. Data Protection and Privacy
            </h3>
            <p className="text-xs text-slate-700">
              Your use of the Website and Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. By using our Services, you consent to the collection, use, and processing of your data as described in the Privacy Policy.
            </p>
            <p className="text-xs text-slate-700">
              Clients providing geospatial, land-record, or personal data warrant that they have the necessary consents and legal basis under the Digital Personal Data Protection Act, 2023, to share such data with GEOVERSED.
            </p>
          </section>

          {/* Section 13 */}
          <section id="tos-sec-13" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              13. Disclaimers
            </h3>
            <div className="space-y-2 text-xs text-slate-700">
              <p><strong>13.1 "As Is" Basis:</strong> The Website and publicly available Content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including merchantability, fitness for a particular purpose, non-infringement, accuracy, or uninterrupted operation.</p>
              <p><strong>13.2 Professional Advice:</strong> Content on the Website is for informational purposes only and does not constitute professional geoscience, legal, financial, or engineering advice. You should seek specific professional advice before acting on any information.</p>
              <p><strong>13.3 Scientific Uncertainty:</strong> Geospatial, geological, and environmental data are inherently subject to natural variance and uncertainty. While GEOVERSED applies rigorous scientific methodologies, we do not guarantee absolute accuracy of maps/models or specific outcomes from planning recommendations.</p>
              <p><strong>13.4 Third-Party Data:</strong> Our Services may incorporate third-party data (satellite imagery, government cadastral records, sensor telemetry). We are not responsible for errors or omissions originating from external sources.</p>
              <p><strong>13.5 No Legal or Statutory Authority:</strong> GEOVERSED is an incorporated private company. Unless explicitly commissioned by a government agency under statutory authority, our advisory outputs do not automatically carry legislative force.</p>
            </div>
          </section>

          {/* Section 14 */}
          <section id="tos-sec-14" className="space-y-2 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              14. Limitation of Liability
            </h3>
            <p className="text-xs text-slate-600">To the maximum extent permitted by applicable Indian law:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
              <li>GEOVERSED shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, business, or goodwill.</li>
              <li>Our total aggregate liability arising from or related to any engagement shall not exceed the total fees paid by the Client for the specific Service giving rise to the claim.</li>
              <li>We are not liable for delays or failures caused by events beyond our reasonable control (force majeure).</li>
              <li>We are not liable for any loss arising from reliance on preliminary estimates or third-party web content.</li>
              <li>Nothing in these Terms excludes liability that cannot be excluded under applicable Indian statutory laws.</li>
            </ul>
          </section>

          {/* Section 15 */}
          <section id="tos-sec-15" className="space-y-2 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              15. Indemnification
            </h3>
            <p className="text-xs text-slate-700">
              You agree to indemnify, defend, and hold harmless GEOVERSED, its directors, officers, employees, agents, and partners from any claims, damages, losses, liabilities, costs, or expenses (including legal fees) arising from:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party intellectual property or privacy rights</li>
              <li>Your use of the Website or Services in an unlawful manner</li>
              <li>Any User Content you submit</li>
              <li>Any spatial or field data you provide that infringes third-party rights or violates privacy laws</li>
            </ul>
          </section>

          {/* Section 16 */}
          <section id="tos-sec-16" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              16. Termination
            </h3>
            <div className="space-y-2 text-xs text-slate-700">
              <p><strong>16.1 By GEOVERSED:</strong> We may suspend or terminate your access to the Website or Services, without notice, if you breach these Terms, if required by law, if provision is no longer commercially viable, or if we discontinue a Service.</p>
              <p><strong>16.2 By You:</strong> You may terminate your use of the Website at any time. Termination of paid Services is governed by the applicable Service Agreement.</p>
              <p><strong>16.3 Effect of Termination:</strong> Upon termination, your right to use the Website ceases immediately, outstanding fees become due, and confidentiality, IP, indemnity, and liability provisions continue in full force.</p>
            </div>
          </section>

          {/* Section 17 */}
          <section id="tos-sec-17" className="space-y-2 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              17. Force Majeure
            </h3>
            <p className="text-xs text-slate-700">
              GEOVERSED shall not be liable for any failure or delay in performance caused by events beyond its reasonable control, including natural disasters (earthquakes, landslides, cloudbursts, floods in Himalayan terrain), pandemics or epidemics, war, terrorism, civil unrest, government embargoes or regulatory changes, telecommunications or cloud infrastructure failures, and strikes or labor disputes. Affected obligations shall be suspended for the duration of the event.
            </p>
          </section>

          {/* Section 18 */}
          <section id="tos-sec-18" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              18. Dispute Resolution
            </h3>
            <div className="space-y-2 text-xs text-slate-700">
              <p><strong>18.1 Amicable Resolution:</strong> Parties shall first attempt to resolve disputes through good-faith negotiation within 30 days of written notice.</p>
              <p><strong>18.2 Mediation:</strong> If negotiation fails, disputes may be referred to mediation by a mutually agreed mediator.</p>
              <p><strong>18.3 Arbitration:</strong> Unresolved disputes shall be referred to arbitration under the Arbitration and Conciliation Act, 1996:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-xs text-slate-600">
                <li>Seat and venue of arbitration: <strong>Almora, Uttarakhand, India</strong></li>
                <li>Language of arbitration: English</li>
                <li>Arbitrator: Sole arbitrator mutually appointed</li>
                <li>Award: Final, conclusive, and binding on both parties</li>
              </ul>
              <p><strong>18.4 Jurisdiction:</strong> Subject to the above arbitration provisions, courts at Almora, Uttarakhand, shall have exclusive jurisdiction.</p>
            </div>
          </section>

          {/* Section 19 */}
          <section id="tos-sec-19" className="space-y-2 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              19. Governing Law
            </h3>
            <p className="text-xs text-slate-700">
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India, without regard to conflict of law principles.
            </p>
          </section>

          {/* Section 20 */}
          <section id="tos-sec-20" className="space-y-2 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              20. Modifications to Terms
            </h3>
            <p className="text-xs text-slate-700">
              GEOVERSED reserves the right to modify these Terms at any time. Changes will be effective upon posting to the Website, with the "Last Updated" date revised accordingly. Material changes will be notified via prominent notice or direct communication. Your continued use of the Website after changes constitutes acceptance.
            </p>
          </section>

          {/* Section 21 - 24 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <section id="tos-sec-21" className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
              <h4 className="font-semibold text-xs sm:text-sm text-[#0F2042]">21. Severability</h4>
              <p className="text-xs text-slate-600">If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall continue in full force and effect, with the invalid term replaced by a valid provision matching original intent.</p>
            </section>
            
            <section id="tos-sec-22" className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
              <h4 className="font-semibold text-xs sm:text-sm text-[#0F2042]">22. Waiver</h4>
              <p className="text-xs text-slate-600">No failure or delay by GEOVERSED in exercising any right under these Terms shall constitute a waiver of that right. Any waiver must be in writing and signed by an authorized representative.</p>
            </section>

            <section id="tos-sec-23" className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
              <h4 className="font-semibold text-xs sm:text-sm text-[#0F2042]">23. Assignment</h4>
              <p className="text-xs text-slate-600">You may not assign or transfer your rights under these Terms without prior written consent. GEOVERSED may assign its rights to any affiliate or successor without restriction.</p>
            </section>

            <section id="tos-sec-24" className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-1">
              <h4 className="font-semibold text-xs sm:text-sm text-[#0F2042]">24. Entire Agreement</h4>
              <p className="text-xs text-slate-600">These Terms, together with the Privacy Policy and any applicable Service Agreement, constitute the entire agreement between you and GEOVERSED, superseding all prior communications.</p>
            </section>
          </div>

          {/* Section 25 */}
          <section id="tos-sec-25" className="space-y-4 pt-4">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              25. Contact Information & Corporate Identity
            </h3>
            <p className="text-xs text-slate-600">
              For questions, clarifications, notices, or official communications regarding these Terms of Service, please contact:
            </p>

            <div className="bg-[#0F2042] text-white p-5 rounded-xl space-y-3 text-xs">
              <div className="font-bold text-sm text-[#B3864B]">
                GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED
              </div>
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                <span>Khatyari, Manoj Vihar, Almora, Uttarakhand – 263601, India</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300 pt-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#B3864B] shrink-0" />
                  <span>Email: <a href="mailto:info@geoversed.com" className="text-white hover:underline">info@geoversed.com</a> / <a href="mailto:geoversedmailbox@gmail.com" className="text-white hover:underline">geoversedmailbox@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#B3864B] shrink-0" />
                  <span>Phone: <a href="tel:8273753398" className="text-white hover:underline">8273753398</a></span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/10 text-slate-400 space-y-1 text-[11px]">
                <p><strong>Founder & Director:</strong> Varun Rawat, Director & Chief Geospatial Architect</p>
                <p><strong>Corporate Status:</strong> One Person Company (OPC), Limited by Shares</p>
                <p><strong>Incorporation:</strong> Companies Act, 2013, Ministry of Corporate Affairs, Government of India</p>
                <p><strong>Hours:</strong> Monday – Saturday, 9:00 AM – 6:00 PM IST</p>
              </div>
            </div>
          </section>

          {/* Section 26 */}
          <section id="tos-sec-26" className="space-y-3 pt-2">
            <h3 className="text-base sm:text-lg font-bold text-[#0F2042] font-['Poppins'] border-b border-slate-200 pb-2">
              26. Acknowledgment
            </h3>
            <p className="text-xs text-slate-600">
              By using the Website or engaging GEOVERSED for Services, you acknowledge that:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
              <li>You have read, understood, and agree to these Terms of Service.</li>
              <li>You have read and agree to our Privacy Policy.</li>
              <li>You have the legal capacity to enter into this agreement.</li>
              <li>You accept all disclaimers, scientific limitations, and limitations of liability herein.</li>
            </ul>
          </section>

          {/* Statutory Sign-off */}
          <div className="p-4 rounded-xl bg-slate-100 text-slate-600 text-xs text-center border border-slate-200/80 space-y-1 mt-6">
            <p className="font-semibold text-slate-800">
              © 2026 GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-500 max-w-2xl mx-auto">
              These Terms of Service are drafted in compliance with the Indian Contract Act, 1872, the Information Technology Act, 2000, the Digital Personal Data Protection Act, 2023, the Companies Act, 2013, the Arbitration and Conciliation Act, 1996, and other applicable Indian laws and regulations.
            </p>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#0F2042] font-medium transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top of Document</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-200 rounded-full transition-colors cursor-pointer border border-slate-300"
            >
              Print Terms
            </button>
            <button
              onClick={onClose}
              className="bg-[#0F2042] hover:bg-[#162c5c] text-white text-xs font-semibold px-5 py-1.5 rounded-full transition-all cursor-pointer shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
