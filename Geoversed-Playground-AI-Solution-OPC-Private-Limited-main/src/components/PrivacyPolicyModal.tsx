import React, { useEffect, useRef } from 'react';
import { X, ShieldCheck, Printer, ArrowUp, Mail, Phone, MapPin, Building, Lock } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
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

  return (
    <div
      id="privacy-policy-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
    >
      <div
        id="privacy-policy-modal-container"
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[92vh] flex flex-col overflow-hidden border border-slate-200/80 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0F2042] text-white px-6 py-5 flex items-center justify-between shrink-0 border-b border-[#162c5c] relative">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#B3864B] shadow-inner">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#B3864B] text-[11px] font-semibold uppercase tracking-wider">
                <Lock className="w-3 h-3" />
                Statutory Data Protection & Compliance
              </div>
              <h2 id="privacy-policy-title" className="text-xl sm:text-2xl font-bold font-['Poppins']">
                Privacy Policy
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white text-xs font-medium transition-colors cursor-pointer"
              title="Print document"
            >
              <Printer className="w-3.5 h-3.5 text-[#B3864B]" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-header meta bar */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 shrink-0">
          <div>
            <span className="font-semibold text-slate-800">GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED</span>
            <span className="mx-2 text-slate-300">|</span>
            <span>Last Updated: <strong className="text-slate-700">September 26, 2026</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium text-[11px]">
              DPDP Act 2023 Compliant
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div ref={contentRef} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-700 text-sm leading-relaxed scroll-smooth">
          
          {/* Quick Nav Anchors */}
          <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200 text-xs">
            <div className="font-semibold text-slate-800 uppercase tracking-wider text-[11px] mb-2 font-['Poppins']">
              Table of Contents
            </div>
            <div className="flex flex-wrap gap-2 text-slate-600">
              {[
                { id: 'sec-1', label: '1. Introduction' },
                { id: 'sec-2', label: '2. Definitions' },
                { id: 'sec-3', label: '3. Information We Collect' },
                { id: 'sec-4', label: '4. How We Use' },
                { id: 'sec-5', label: '5. Legal Basis' },
                { id: 'sec-6', label: '6. Cookies' },
                { id: 'sec-7', label: '7. Data Sharing' },
                { id: 'sec-8', label: '8. Retention' },
                { id: 'sec-9', label: '9. Data Security' },
                { id: 'sec-10', label: '10. Your Rights' },
                { id: 'sec-11', label: '11. Children' },
                { id: 'sec-12', label: '12. International' },
                { id: 'sec-13', label: '13. Third-Party' },
                { id: 'sec-14', label: '14. Changes' },
                { id: 'sec-15', label: '15. Grievance Redressal' },
                { id: 'sec-16', label: '16. Governing Law' },
                { id: 'sec-17', label: '17. Consent' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="px-2.5 py-1 rounded bg-white hover:bg-slate-100 hover:text-[#0F2042] text-slate-700 border border-slate-200 transition-colors cursor-pointer text-[11px]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 1 */}
          <section id="sec-1" className="space-y-3 pt-2">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">1.</span> Introduction
            </h3>
            <p>
              <strong>GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED</strong> (&ldquo;GEOVERSED,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, store, and safeguard information when you visit our website at{' '}
              <a
                href="https://geoversed-playground-ai-solution-opc.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B3864B] hover:underline font-medium"
              >
                https://geoversed-playground-ai-solution-opc.netlify.app
              </a>{' '}
              (the &ldquo;Website&rdquo;) or engage with our geospatial, GIS, and geoscience services.
            </p>
            <p>
              This policy applies to all visitors, clients, research collaborators, government partners, students, and other users of our Website and services. By accessing or using our Website, you consent to the practices described in this Privacy Policy.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs mt-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B3864B] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-slate-800">Registered Office:</div>
                  <div className="text-slate-600">Khatyari, Manoj Vihar, Almora, Uttarakhand – 263601, India</div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#B3864B] shrink-0" />
                  <span>Email: <a href="mailto:info@geoversed.com" className="text-[#B3864B] hover:underline">info@geoversed.com</a> / <a href="mailto:geoversedmailbox@gmail.com" className="text-[#B3864B] hover:underline">geoversedmailbox@gmail.com</a></span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#B3864B] shrink-0" />
                  <span>Phone: <a href="tel:8273753398" className="text-[#B3864B] hover:underline">8273753398</a></span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-2" className="space-y-3">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">2.</span> Definitions
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>&ldquo;Personal Data&rdquo;</strong> means any information relating to an identified or identifiable natural person.
              </li>
              <li>
                <strong>&ldquo;Sensitive Personal Data&rdquo;</strong> means data such as passwords, financial information, health data, biometric data, and geolocation data requiring heightened protection.
              </li>
              <li>
                <strong>&ldquo;Processing&rdquo;</strong> means any operation performed on Personal Data, including collection, storage, use, disclosure, and deletion.
              </li>
              <li>
                <strong>&ldquo;Data Principal&rdquo;</strong> means the individual to whom the Personal Data relates.
              </li>
              <li>
                <strong>&ldquo;Data Fiduciary&rdquo;</strong> means GEOVERSED, which determines the purpose and means of processing Personal Data.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="sec-3" className="space-y-4">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">3.</span> Information We Collect
            </h3>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900">3.1 Information You Provide Voluntarily</h4>
              <p>We may collect the following information when you voluntarily submit it through our Website or communicate with us:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Identity Data:</strong> Full name, title, designation, organization name</li>
                <li><strong>Contact Data:</strong> Email address, telephone number, postal address</li>
                <li><strong>Inquiry Data:</strong> Project requirements, research interests, collaboration proposals, messages submitted through contact forms</li>
                <li><strong>Professional Data:</strong> Academic qualifications, institutional affiliation, research topics (for students, researchers, and collaborators)</li>
                <li><strong>Transactional Data:</strong> Records of communications, service requests, and engagement history</li>
                <li>Any other information you choose to provide in correspondence with us</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900">3.2 Information Collected Automatically</h4>
              <p>When you visit our Website, we may automatically collect certain technical information, including:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Technical Data:</strong> IP address, browser type and version, operating system, device type, screen resolution</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, navigation paths, referring URLs, clickstream data</li>
                <li><strong>Location Data:</strong> Approximate geographic location derived from IP address (not precise GPS location)</li>
                <li><strong>Cookie Data:</strong> Information collected through cookies and similar tracking technologies (see Section 6)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900">3.3 Information from Third Parties</h4>
              <p>We may receive information about you from third-party sources, including:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Government departments and agencies (for project collaboration and compliance)</li>
                <li>Academic institutions and research partners</li>
                <li>Business associates and referral partners</li>
                <li>Publicly available sources and professional networking platforms</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900">3.4 Sensitive Personal Data</h4>
              <p>We generally do not seek to collect Sensitive Personal Data. However, in specific circumstances related to our services, we may process:</p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Geospatial data that may indirectly identify individuals (e.g., property boundaries, land records)</li>
                <li>Financial information for billing and payment processing (processed through secure payment gateways)</li>
                <li>Aadhaar or government identification where legally required for statutory project compliance</li>
              </ul>
              <p className="text-xs text-slate-500 italic mt-1">
                Any such data is collected only where necessary, with your consent, and handled under heightened security measures.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sec-4" className="space-y-4">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">4.</span> How We Use Your Information
            </h3>
            <p>We process Personal Data for the following lawful purposes:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1.5">
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider text-[#B3864B]">4.1 Service Delivery</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>Responding to inquiries and providing requested information</li>
                  <li>Delivering GIS, Web-GIS, and geospatial consultancy services</li>
                  <li>Preparing detailed project reports (DPRs), technical studies, and assessments</li>
                  <li>Conducting field surveys, drone surveys, and spatial data acquisition</li>
                  <li>Providing training, capacity building, and curriculum development</li>
                  <li>Supervising dissertations and research projects</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1.5">
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider text-[#B3864B]">4.2 Communication</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>Sending administrative messages, service updates, and responses</li>
                  <li>Notifying you of changes to our services, policies, or terms</li>
                  <li>Sharing newsletters, research publications, and knowledge updates (where opted in)</li>
                  <li>Seeking feedback on our services</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1.5">
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider text-[#B3864B]">4.3 Business Operations</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>Processing payments and maintaining financial records</li>
                  <li>Managing contracts, agreements, and statutory compliance</li>
                  <li>Conducting internal analysis to improve our services</li>
                  <li>Protecting our legal rights and preventing fraud</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-1.5">
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider text-[#B3864B]">4.4 Legal & Regulatory</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>Complying with applicable Indian laws, including Companies Act, 2013</li>
                  <li>Responding to lawful requests from government authorities</li>
                  <li>Meeting obligations under Digital Personal Data Protection Act, 2023</li>
                  <li>Enforcing our rights under applicable contracts and agreements</li>
                </ul>
              </div>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-semibold text-slate-900">4.5 Research & Development</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Developing AI/ML models for geospatial applications</li>
                <li>Conducting anonymized and aggregated research</li>
                <li>Publishing scientific papers and technical notes (using de-identified data only)</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-5" className="space-y-3">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">5.</span> Legal Basis for Processing
            </h3>
            <p>Under the Digital Personal Data Protection Act, 2023, and other applicable Indian laws, we process Personal Data based on:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Consent:</strong> Where you have given clear, specific, and informed consent</li>
              <li><strong>Contractual Necessity:</strong> Where processing is necessary to perform a contract with you</li>
              <li><strong>Legal Obligation:</strong> Where processing is required to comply with the law</li>
              <li><strong>Legitimate Uses:</strong> Where processing is for purposes specified by law, including employment, medical emergencies, and public interest activities</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section id="sec-6" className="space-y-3">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">6.</span> Cookies and Tracking Technologies
            </h3>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900">6.1 Types of Cookies We Use</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Essential Cookies:</strong> Necessary for the Website to function (e.g., session management, security)</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use the Website (e.g., page views, traffic sources)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                <li><strong>Third-Party Cookies:</strong> Set by embedded content or analytics providers (e.g., Netlify hosting analytics)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-slate-900">6.2 Managing Cookies</h4>
              <p>You can control and manage cookies through your browser settings. Disabling certain cookies may affect Website functionality. Most browsers allow you to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>View stored cookies and delete them</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section id="sec-7" className="space-y-3">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">7.</span> Data Sharing and Disclosure
            </h3>
            <p>We do not sell, rent, or trade your Personal Data. We may share your information in the following limited circumstances:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>7.1 Service Providers:</strong> Third-party vendors who assist us in website hosting (Netlify), payment processing, email communication, data analytics, and cloud storage/computing. These providers are contractually bound to protect your data and use it only for specified purposes.
              </li>
              <li>
                <strong>7.2 Government & Statutory Bodies:</strong> Where required by law or as part of statutory projects (e.g., PM Gati-Shakti, Jal Jeevan Mission, Namami Gange, CAMPA, Disaster Management), we may share relevant data with authorized government departments.
              </li>
              <li>
                <strong>7.3 Academic & Research Partners:</strong> For collaborative research and publications, we share only de-identified or aggregated data, unless specific consent has been obtained.
              </li>
              <li>
                <strong>7.4 Legal Requirements:</strong> We may disclose Personal Data when required to comply with legal obligations, court orders, regulatory requirements, or to protect our rights, property, safety, or that of our users or the public.
              </li>
              <li>
                <strong>7.5 Business Transfers:</strong> In the event of a merger, acquisition, reorganization, or sale of assets, Personal Data may be transferred. We will notify you of any such change.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section id="sec-8" className="space-y-3">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">8.</span> Data Retention
            </h3>
            <p>We retain Personal Data only as long as necessary to fulfill the purposes for which it was collected, or as required by law:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Inquiry and contact data:</strong> Retained for up to 3 years from last contact</li>
              <li><strong>Client and project data:</strong> Retained for the duration of the engagement plus 7 years (statutory record-keeping)</li>
              <li><strong>Financial records:</strong> Retained for 8 years as per Indian tax and company law</li>
              <li><strong>Research data:</strong> Retained as per institutional and publication requirements, typically de-identified after project completion</li>
              <li><strong>Website analytics data:</strong> Retained for up to 26 months</li>
            </ul>
            <p className="text-xs text-slate-500 italic">When data is no longer needed, we securely delete or anonymize it.</p>
          </section>

          {/* Section 9 */}
          <section id="sec-9" className="space-y-3">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">9.</span> Data Security
            </h3>
            <p>We implement appropriate technical and organizational measures to protect Personal Data, including:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-2 text-[#0F2042]">9.1 Technical Measures</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>Encryption of data in transit (HTTPS/SSL)</li>
                  <li>Secure servers and cloud infrastructure</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Firewalls and intrusion detection systems</li>
                  <li>Regular data backups</li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider mb-2 text-[#0F2042]">9.2 Organizational Measures</h4>
                <ul className="list-disc pl-4 space-y-1 text-xs">
                  <li>Employee confidentiality agreements</li>
                  <li>Role-based access to Personal Data</li>
                  <li>Data protection training for staff</li>
                  <li>Incident response and breach notification procedures</li>
                  <li>Vendor security assessments</li>
                </ul>
              </div>
            </div>

            <div className="text-xs text-slate-500 bg-amber-50/60 border border-amber-200/70 p-3 rounded-lg mt-2">
              <strong>9.3 Limitations:</strong> While we strive to protect your data, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security but will notify you of any material breach as required by law.
            </div>
          </section>

          {/* Section 10 */}
          <section id="sec-10" className="space-y-3">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">10.</span> Your Rights as a Data Principal
            </h3>
            <p>Under the Digital Personal Data Protection Act, 2023, and applicable laws, you have the following rights:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Right to Access:</strong> Request a summary of Personal Data we process about you</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your Personal Data, subject to legal retention requirements</li>
              <li><strong>Right to Grievance Redressal:</strong> Lodge complaints with our Data Protection Officer</li>
              <li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights in case of death or incapacity</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time (without affecting prior lawful processing)</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, commonly used format (where technically feasible)</li>
            </ul>
            <p className="text-xs bg-slate-100 p-3 rounded-lg">
              To exercise these rights, contact us at{' '}
              <a href="mailto:info@geoversed.com" className="text-[#B3864B] font-semibold hover:underline">
                info@geoversed.com
              </a>{' '}
              or{' '}
              <a href="mailto:geoversedmailbox@gmail.com" className="text-[#B3864B] font-semibold hover:underline">
                geoversedmailbox@gmail.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          {/* Section 11 */}
          <section id="sec-11" className="space-y-2">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">11.</span> Children&apos;s Privacy
            </h3>
            <p>
              Our Website and services are not directed at children under 18 years of age. We do not knowingly collect Personal Data from children. If we become aware that we have inadvertently collected data from a child, we will delete it promptly. Parents or guardians who believe their child has provided data should contact us immediately.
            </p>
          </section>

          {/* Section 12 */}
          <section id="sec-12" className="space-y-2">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">12.</span> International Data Transfers
            </h3>
            <p>
              Our primary operations are in India. If we transfer Personal Data outside India (e.g., to cloud service providers), we ensure:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Appropriate safeguards are in place</li>
              <li>Transfers comply with the DPDP Act and other applicable laws</li>
              <li>Recipients are bound by confidentiality and data protection obligations</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section id="sec-13" className="space-y-2">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">13.</span> Third-Party Links
            </h3>
            <p>
              Our Website may contain links to third-party websites (e.g., government portals, research publications, partner sites). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any Personal Data.
            </p>
          </section>

          {/* Section 14 */}
          <section id="sec-14" className="space-y-2">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">14.</span> Changes to This Privacy Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. The &ldquo;Last Updated&rdquo; date at the top indicates when the policy was last revised.
            </p>
            <p>Material changes will be notified via:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>A prominent notice on our Website</li>
              <li>Email notification (where we have your contact details)</li>
              <li>Other appropriate means</li>
            </ul>
            <p className="text-xs text-slate-500 italic">
              Your continued use of our Website after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Section 15 */}
          <section id="sec-15" className="space-y-3">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">15.</span> Grievance Redressal & Contact
            </h3>
            <p>If you have questions, concerns, or complaints regarding this Privacy Policy or our data practices, please contact:</p>
            <div className="bg-[#0F2042] text-white p-5 rounded-xl space-y-2 text-xs">
              <div className="font-semibold text-[#B3864B] uppercase tracking-wider">Data Protection Officer / Grievance Officer</div>
              <div className="font-bold text-sm text-slate-100">GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED</div>
              <div className="text-slate-300">Khatyari, Manoj Vihar, Almora, Uttarakhand – 263601, India</div>
              <div className="pt-2 flex flex-wrap gap-4 text-slate-300">
                <span>Email: <a href="mailto:info@geoversed.com" className="text-white underline">info@geoversed.com</a> / <a href="mailto:geoversedmailbox@gmail.com" className="text-white underline">geoversedmailbox@gmail.com</a></span>
                <span>Phone: <a href="tel:8273753398" className="text-white underline">8273753398</a></span>
                <span>Hours: Monday – Saturday, 9:00 AM – 6:00 PM IST</span>
              </div>
            </div>
            <p className="text-xs text-slate-500">
              If you are not satisfied with our response, you may escalate the matter to the <strong>Data Protection Board of India</strong> as established under the Digital Personal Data Protection Act, 2023.
            </p>
          </section>

          {/* Section 16 */}
          <section id="sec-16" className="space-y-2">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">16.</span> Governing Law and Jurisdiction
            </h3>
            <p>
              This Privacy Policy is governed by the laws of India. Any disputes arising in connection with this policy shall be subject to the exclusive jurisdiction of the courts in Almora, Uttarakhand, India.
            </p>
          </section>

          {/* Section 17 */}
          <section id="sec-17" className="space-y-3">
            <h3 className="text-lg font-bold text-[#0F2042] font-['Poppins'] pb-1 border-b border-slate-200 flex items-center gap-2">
              <span className="text-[#B3864B]">17.</span> Consent
            </h3>
            <p>By using our Website, engaging our services, or providing us with your Personal Data, you:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Acknowledge that you have read and understood this Privacy Policy</li>
              <li>Consent to the collection, use, and disclosure of your Personal Data as described herein</li>
              <li>Confirm that you are at least 18 years of age or have the consent of a parent/guardian</li>
            </ul>
            <p className="text-xs text-slate-500 italic">
              You may withdraw your consent at any time by contacting us, though this may affect our ability to provide certain services.
            </p>
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
              This Privacy Policy is drafted in compliance with the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, the Companies Act, 2013, and other applicable Indian laws and regulations.
            </div>
            <div className="pt-2 text-center text-xs text-slate-400">
              &copy; 2026 GEOVERSED PLAYGROUND AI SOLUTION (OPC) PRIVATE LIMITED. All rights reserved.
            </div>
          </section>

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Top of Document</span>
          </button>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#0F2042] hover:bg-[#162c5c] text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-sm"
            >
              Close Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
