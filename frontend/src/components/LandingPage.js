import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Target, 
  Users, 
  BarChart3, 
  Mail, 
  MessageCircle, 
  FileText, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Quote,
  Calendar,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Results from './Results';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <About />
      <Results />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;