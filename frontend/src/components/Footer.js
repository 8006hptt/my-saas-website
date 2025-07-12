import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Calendar, 
  Linkedin, 
  Twitter, 
  ArrowRight,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const services = [
    "Website & Landing Page Copy",
    "Email Nurturing Sequences",
    "In-App Messaging & UX Copy",
    "Content Strategy & Copywriting",
    "Ad Copy for SaaS Campaigns"
  ];

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#results" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-brand-black text-white">
      {/* Pre-footer CTA */}
      <div className="bg-gradient-to-r from-brand-accent to-brand-accent-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Ready to Transform Your
                <br />
                SaaS Copy into Revenue?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Let's discuss how strategic copywriting can accelerate your growth. 
                Schedule a free 30-minute strategy session—no strings attached.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white text-brand-accent hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule Free Strategy Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Send Message
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                SaaS Copywriting Expert
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I empower SaaS companies to accelerate growth by crafting data-driven conversion copy that transforms complex features into compelling benefits, driving higher trial sign-ups, user activation, and customer retention.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-brand-accent">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span className="font-semibold">150% Avg. Conversion Increase</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 SaaS Copywriting Expert. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;