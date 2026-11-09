import React, { useState } from 'react';
import { MessageCircle, X, ExternalLink, Share2, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesData';

interface WhatsAppFloatingButtonProps {
  onOpenShare?: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ onOpenShare }) => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '918273753398';
  const displayPhone = '+91 8273753398';
  const siteUrl = 'https://geoversed-playground-ai-solution-opc.netlify.app/?v=logo';

  const defaultMessage = `Hello GEOVERSED Team, I would like to inquire about your geospatial, GIS, and geoscience consultancy services.`;
  const whatsappChatUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(siteUrl)}`;

  return (
    <div
      id="whatsapp-floating-widget"
      className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2 select-none"
    >
      {/* Quick Popup Card */}
      {isOpen && (
        <div
          className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-4 w-72 sm:w-80 animate-in slide-in-from-bottom-3 duration-200"
          role="dialog"
          aria-label="WhatsApp quick contact and share"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 font-['Poppins']">
                  GEOVERSED on WhatsApp
                </h4>
                <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online Technical Support
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="py-3 space-y-2.5">
            <div className="bg-[#E7FFDB] rounded-xl p-3 text-xs text-[#075E54] border border-[#25D366]/20">
              <p className="font-semibold text-[11px] mb-0.5">Er. Varun Rawat / GEOVERSED Team</p>
              <p className="text-[11px] leading-relaxed text-slate-700">
                Hi! 👋 Connect directly with our Himalayan geospatial and AI engineering specialists.
              </p>
              <div className="mt-1 text-[10px] text-slate-500 font-medium">
                Direct: {displayPhone}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-1">
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-2.5 px-4 rounded-xl shadow-xs transition-colors cursor-pointer font-['Poppins']"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold py-2 px-3 rounded-xl transition-colors cursor-pointer font-['Poppins']"
                title="Generates WhatsApp rich preview card with company logo"
              >
                <Share2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Share Link with Preview Card</span>
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
            <span>Almora, Uttarakhand</span>
            {onOpenShare && (
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenShare();
                }}
                className="text-blue-600 hover:underline font-semibold cursor-pointer"
              >
                View Social Card
              </button>
            )}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer ring-4 ring-emerald-400/30"
          aria-label="Open WhatsApp quick contact and share"
          title="Connect or Share via WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current transition-transform group-hover:scale-110" />

          {/* Pulse notification badge */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-white animate-ping" />
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white" />
        </button>

        {/* Small collapsed label badge */}
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-slate-200/80 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-800 shadow-md hover:bg-slate-50 transition-colors cursor-pointer font-['Poppins']"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>WhatsApp Support</span>
          </button>
        )}
      </div>
    </div>
  );
};
