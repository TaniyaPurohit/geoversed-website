import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Share2,
  ExternalLink,
  Globe,
  Sparkles,
  Info,
  MessageCircle,
  Smartphone,
  Layers,
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  shareUrl = 'https://geoversed-playground-ai-solution-opc.netlify.app/',
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'social'>('whatsapp');

  if (!isOpen) return null;

  const title = 'GEOVERSED Playground AI Solution (OPC) Pvt. Ltd. | Geoscience Intelligence & GIS';
  const description =
    'Where Field Expertise Meets Smart Technology. Enterprise AI, GIS, SaaS and Geoscience Intelligence in Almora, Uttarakhand.';

  // Clean canonical URL - no special parameters required
  const cleanShareUrl = shareUrl.replace(/\/+$/, '') + '/';

  const bannerImage = '/og-image.jpg';
  const whatsappImage = '/whatsapp-preview.jpg';

  const handleCopy = (textToCopy: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  // WhatsApp Link Preview requires ONLY the URL to trigger the rich image preview card
  const whatsappPreviewUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(cleanShareUrl)}`;

  const whatsappFullTextUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `*${title}*\n\n${description}\n\n${cleanShareUrl}`
  )}`;

  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    cleanShareUrl
  )}`;

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    cleanShareUrl
  )}&text=${encodeURIComponent(title)}`;

  const fbDebuggerUrl = `https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(
    shareUrl
  )}`;
  const linkedInInspectorUrl = `https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(
    shareUrl
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden transform transition-all animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 id="share-modal-title" className="text-base sm:text-lg font-bold text-slate-900 font-['Poppins']">
                WhatsApp &amp; Social Share Preview
              </h3>
              <p className="text-xs text-slate-500">Official Link Preview Card with Company Logo</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
            aria-label="Close share dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector: WhatsApp vs Standard Social */}
        <div className="px-5 sm:px-6 pt-3 flex items-center gap-2 border-b border-slate-100">
          <button
            type="button"
            onClick={() => setActiveTab('whatsapp')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold border-b-2 transition-all cursor-pointer font-['Poppins'] ${
              activeTab === 'whatsapp'
                ? 'border-[#25D366] text-[#075E54] bg-emerald-50/50 rounded-t-lg'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp Preview</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('social')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold border-b-2 transition-all cursor-pointer font-['Poppins'] ${
              activeTab === 'social'
                ? 'border-blue-600 text-blue-700 bg-blue-50/50 rounded-t-lg'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Standard Social Card (1200×630)</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          {activeTab === 'whatsapp' ? (
            /* WhatsApp Specific Chat Simulation Card */
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-['Poppins'] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  Simulated WhatsApp Chat Message
                </span>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  Auto-Unfurls in Chat
                </span>
              </div>

              {/* WhatsApp Chat Container */}
              <div className="rounded-2xl bg-[#EFEAE2] p-3 sm:p-4 border border-slate-200/80 shadow-inner">
                {/* Outgoing Message Bubble (WhatsApp style) */}
                <div className="max-w-[92%] ml-auto bg-[#E7FFDB] rounded-2xl rounded-tr-xs p-2.5 shadow-sm border border-[#D0F4BE] text-left text-xs space-y-1.5">
                  {/* Embedded Rich Preview Card */}
                  <div className="bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-2xs">
                    <div className="w-full aspect-[16/9] bg-white flex items-center justify-center p-2 border-b border-slate-100">
                      <img
                        src={bannerImage}
                        alt="GEOVERSED Logo with Company Name"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-2.5 bg-slate-50/90">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        geoversed-playground-ai-solution-opc.netlify.app
                      </div>
                      <div className="text-xs font-bold text-slate-900 leading-tight mt-0.5 line-clamp-1 font-['Poppins']">
                        {title}
                      </div>
                      <div className="text-[11px] text-slate-600 leading-snug line-clamp-2 mt-1">
                        {description}
                      </div>
                    </div>
                  </div>

                  {/* Clean URL link inside bubble */}
                  <div className="pt-0.5 text-blue-600 underline font-mono text-[11px] break-all">
                    {cleanShareUrl}
                  </div>

                  {/* Timestamp & double blue ticks */}
                  <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 pt-0.5">
                    <span>Just now</span>
                    <span className="text-sky-500 font-bold">✓✓</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Standard Social Banner (1200x630) */
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-['Poppins']">
                  Social Link Preview Card
                </span>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  1200×630 Standard OG Image
                </span>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden shadow-xs hover:border-slate-300 transition-colors">
                <div className="relative w-full aspect-[1.91/1] bg-white flex items-center justify-center p-2 border-b border-slate-200/70">
                  <img
                    src={bannerImage}
                    alt="GEOVERSED Playground AI Solution OPC Pvt Ltd Logo"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="p-3.5 bg-white">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    <Globe className="w-3 h-3 text-slate-400" />
                    <span className="truncate">geoversed-playground-ai-solution-opc.netlify.app</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-['Poppins'] leading-snug line-clamp-1">
                    {title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 line-clamp-2 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* WhatsApp Unfurl Guide Banner */}
          <div className="bg-emerald-50/80 border border-emerald-200/70 rounded-xl p-3 text-left">
            <div className="flex items-start gap-2 text-xs text-emerald-950">
              <Info className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-semibold text-emerald-950 font-['Poppins']">
                  WhatsApp Link Preview Ready
                </p>
                <p className="text-[11px] leading-relaxed text-emerald-800">
                  When you paste <strong>{cleanShareUrl}</strong> directly into any WhatsApp chat, WhatsApp automatically fetches and displays the <strong>GEOVERSED Logo card</strong> above your message. No special codes or query parameters needed!
                </p>
              </div>
            </div>
          </div>

          {/* Primary Action: One-Click WhatsApp Share */}
          <div className="space-y-2">
            <a
              href={whatsappPreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-semibold py-3 px-4 rounded-xl shadow-md shadow-emerald-500/20 hover:shadow-lg transition-all cursor-pointer font-['Poppins']"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Share to WhatsApp (Auto-Generates Preview Card)</span>
            </a>
          </div>

          {/* Share URL Input & Copy Button */}
          <div>
            <label htmlFor="share-url-input" className="block text-xs font-semibold text-slate-700 mb-1 font-['Poppins']">
              Official Website URL:
            </label>
            <div className="flex items-center gap-2">
              <input
                id="share-url-input"
                type="text"
                readOnly
                value={cleanShareUrl}
                className="flex-1 text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-700 select-all focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="button"
                onClick={() => handleCopy(cleanShareUrl)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-all duration-200 shadow-xs hover:shadow-md cursor-pointer shrink-0 font-['Poppins']"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Secondary Share Links */}
          <div className="pt-1 flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-500 text-[11px]">Also share to:</span>
            <div className="flex items-center gap-2">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors"
              >
                <span>Twitter / X</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={fbDebuggerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-blue-600 text-xs font-medium transition-colors"
                title="Clears Facebook & WhatsApp OpenGraph cache"
              >
                <span>Clear Cache</span>
                <ExternalLink className="w-3 h-3 text-blue-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Configured with 1200×630 OG banner &amp; 600×600 WhatsApp square logo</span>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
