import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BarChart3, 
  Mail, 
  MessageCircle, 
  FileText, 
  Zap,
  ArrowRight,
  Globe,
  Target,
  Users,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SaaS Website & Landing Page Optimization",
      description: "Transform your website into a conversion machine with strategic copy that turns visitors into trial users and customers.",
      features: [
        "High-converting homepage copy",
        "Product & feature page optimization",
        "Landing pages for lead generation",
        "Strategic pricing page copy"
      ],
      image: "https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Nurturing & Conversion Sequences",
      description: "Guide prospects through your funnel with strategic email sequences that educate, engage, and convert.",
      features: [
        "Lead nurturing sequences",
        "Trial-to-paid conversion flows",
        "Onboarding email series",
        "Retention & upsell campaigns"
      ],
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "In-App Messaging & UX Copy",
      description: "Enhance user experience with clear, compelling micro-copy that drives product adoption and reduces churn.",
      features: [
        "Onboarding tooltips & walkthroughs",
        "User-friendly error messages",
        "Optimized CTA buttons",
        "Feature announcement copy"
      ],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "SaaS Content Strategy & Copywriting",
      description: "Build thought leadership and attract organic traffic with strategic content that positions you as an industry expert.",
      features: [
        "SEO-optimized blog posts",
        "Compelling case studies",
        "Lead-generating whitepapers",
        "Webinar promotion copy"
      ],
      image: "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ad Copy for SaaS Campaigns",
      description: "Maximize your ad spend ROI with high-impact copy that captures attention and drives qualified clicks.",
      features: [
        "Google Ads optimization",
        "LinkedIn & Facebook ad copy",
        "Display advertising copy",
        "Retargeting campaign copy"
      ],
      image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg"
    }
  ];

  return (
    <section className="py-24 bg-brand-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-black mb-6">
            How I Help SaaS Companies
            <span className="text-brand-accent"> Scale</span>
          </h2>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto">
            Strategic copywriting services designed specifically for SaaS companies to optimize every touchpoint in your customer journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-brand-accent/10 rounded-lg text-brand-accent mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-brand-black">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-brand-grey mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-brand-grey">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/btn w-full bg-brand-accent hover:bg-brand-accent-dark text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-brand-black hover:bg-brand-dark-grey text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl"
          >
            Schedule Your Free Strategy Session
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;