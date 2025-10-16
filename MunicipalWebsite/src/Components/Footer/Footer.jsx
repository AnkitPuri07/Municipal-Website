// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-700 mt-2">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Municipality Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">About the Municipality</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our municipality is dedicated to transparent governance, sustainable development, and
            improving the daily lives of our citizens through innovation and community engagement.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Quick Links</h2>
          <ul className="space-y-1 text-sm text-slate-300">
            <li><a href="/notices" className="hover:text-blue-400 transition">Notices</a></li>
            <li><a href="/services" className="hover:text-blue-400 transition">Services</a></li>
            <li><a href="/suggestions" className="hover:text-blue-400 transition">Suggestions</a></li>
            <li><a href="/complaints" className="hover:text-blue-400 transition">Complaints</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Contact Us</h2>
          <p className="text-sm text-slate-300">Municipality Office, Dudhauli, Sindhuli</p>
          <p className="text-sm text-slate-300">📞 +977-47-XXXXXXX</p>
          <p className="text-sm text-slate-300">✉️ info@dudhauli.gov.np</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3 text-white">Connect With Us</h2>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-400 transition">🌐</a>
            <a href="#" className="hover:text-blue-400 transition">📘</a>
            <a href="#" className="hover:text-blue-400 transition">🐦</a>
            <a href="#" className="hover:text-blue-400 transition">📸</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm py-4 bg-slate-800 text-slate-400 border-t border-slate-700">
        © {new Date().getFullYear()} Dudhauli Municipality. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
