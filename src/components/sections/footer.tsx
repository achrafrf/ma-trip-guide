"use client";

import React from 'react';
import { Mountain, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-white to-[#F5F5F5] border-t border-[#B8BCC2] mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mountain className="w-8 h-8 text-[#2D5016]" />
              <h3 className="text-xl font-bold text-[#2D5016]">{t('footer.title')}</h3>
            </div>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#2D5016] mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('day-hikes')}
                  className="text-sm text-[#6B7280] hover:text-[#4A7C2C] transition-colors"
                >
                  {t('footer.dayHikes')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('multi-day')}
                  className="text-sm text-[#6B7280] hover:text-[#4A7C2C] transition-colors"
                >
                  {t('footer.multiDay')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('beaches')}
                  className="text-sm text-[#6B7280] hover:text-[#4A7C2C] transition-colors"
                >
                  {t('footer.beaches')}
                </button>
              </li>
              <li>
                <Link 
                  href="/blogger"
                  className="text-sm text-[#6B7280] hover:text-[#4A7C2C] transition-colors block"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#2D5016] mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@loscoihues.com" 
                className="flex items-center space-x-2 text-sm text-[#6B7280] hover:text-[#4A7C2C] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>itsachrafrafiq@gmail.com</span>
              </a>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold text-[#2D5016] mb-3 text-sm">{t('footer.followUs')}</h5>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-[#F5F5F5] hover:bg-[#4A7C2C] flex items-center justify-center transition-colors group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-[#6B7280] group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-[#F5F5F5] hover:bg-[#4A7C2C] flex items-center justify-center transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-[#6B7280] group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-[#F5F5F5] hover:bg-[#4A7C2C] flex items-center justify-center transition-colors group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-[#6B7280] group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-[#F5F5F5] hover:bg-[#4A7C2C] flex items-center justify-center transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-[#6B7280] group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#B8BCC2]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#6B7280]">
              © {new Date().getFullYear()} achraf rafiq . {t('footer.rights')}
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-[#6B7280] hover:text-[#4A7C2C] transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-sm text-[#6B7280] hover:text-[#4A7C2C] transition-colors">
                {t('footer.privacy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}