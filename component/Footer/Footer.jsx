import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white font-sans selection:bg-[#ff3b30]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Column 1: Logo Brand Area (4 columns wide) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <div className="flex items-center gap-3">
              {/* Custom Designed Inline Albatroz Logo Graphic */}
              <div className="relative  flex items-center justify-center">
               
              </div>
              <div className="leading-tight ">
                <img src="/images/nla.svg" alt="dsdsds" className=""  />
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 columns wide) */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold tracking-wide mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm font-medium">
              {['About Us', 'Solution', 'Services', 'Prebuilt Plugins', 'Careers', 'Blogs'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-[#ff3b30] transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Reach Us (3 columns wide) */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold tracking-wide mb-6 text-white">Reach Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#ff3b30] mt-0.5 flex-shrink-0" />
                <span className="leading-snug text-gray-300">+91 93848 12035 / 93848 12039</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#ff3b30] flex-shrink-0" />
                <a href="mailto:info@albatrozsolutions.com" className="hover:text-[#ff3b30] transition-colors text-gray-300">
                  info@albatrozsolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#ff3b30] mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed text-gray-300">
                  DC-43, Development Center, 4th Floor,<br />
                  TIDEL Park, ELCOSEZ, Civil Aerodrome Post,<br />
                  Coimbatore, Tamil Nadu - 641014
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow on Us & Location Map Preview (3 columns wide) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-xl font-bold tracking-wide mb-4 text-white">Follow on Us</h4>
            
            {/* Custom SVG Social Grid Layout matching screenshot brand styles */}
            <div className="flex items-center gap-5 mb-6 text-gray-400">
              {/* Instagram */}
              <a href="#instagram" className="hover:text-[#ff3b30] text-gray-300 transition-colors">
                <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#facebook" className="hover:text-[#ff3b30] text-gray-300 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.5.5-1 1-1h2V2h-3a4 4 0 0 0-4 4v2z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#linkedin" className="hover:text-[#ff3b30] text-gray-300 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#x" className="hover:text-[#ff3b30] text-gray-300 transition-colors">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Map Preview Container Component Box */}
            <div className="w-full h-24 rounded-xl overflow-hidden relative border border-neutral-800 bg-neutral-900 group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=300&q=80" 
                alt="Map Snapshot Placeholder" 
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              {/* Mock Map Marker Dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-[#ff3b30] animate-ping absolute"></div>
                <div className="w-3 h-3 rounded-full bg-[#ff3b30] relative z-10 border border-white"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Accent Strip */}
      <div className="bg-[#ff3b30] text-white text-center py-3 text-xs md:text-sm font-medium tracking-wide">
        ©2026 All right reserved. albatrozsolutions Limited
      </div>
    </footer>
  );
}