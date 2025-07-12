import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Marketing",
      company: "TechFlow SaaS",
      content: "The copy transformation was incredible. Our trial-to-paid conversion rate jumped from 8% to 22% in just 6 weeks. The strategic approach to messaging really resonated with our target audience.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5ac?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO & Founder",
      company: "DataSync Pro",
      content: "Finally, someone who understands SaaS metrics! The homepage rewrite increased our conversion rate by 176%. The ROI on this investment was immediate and substantial.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Thompson",
      role: "Head of Growth",
      company: "CloudStack Solutions",
      content: "The email sequences were game-changing. Our user activation rate improved by 89%, and customer retention is the highest it's ever been. Highly strategic and results-driven approach.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Park",
      role: "Product Marketing Manager",
      company: "InnovateSaaS",
      content: "The in-app messaging optimization reduced our support tickets by 40% while increasing feature adoption. The copy perfectly bridges the gap between complex features and user benefits.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const companyLogos = [
    "TechFlow", "DataSync", "CloudStack", "InnovateSaaS", "GrowthLab", "ScaleUp"
  ];

  return (
    <section className="py-24 bg-brand-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-black mb-6">
            What SaaS Leaders Are
            <span className="text-brand-accent"> Saying</span>
          </h2>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto">
            Don't just take my word for it. Here's feedback from SaaS executives who've seen transformative results.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-brand-accent/20">
                <Quote className="w-8 h-8" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-brand-grey text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-brand-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-brand-grey text-sm">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-brand-grey mb-8">
            Trusted by leading SaaS companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos.map((logo, index) => (
              <div key={index} className="text-brand-dark-grey font-semibold text-xl">
                {logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-accent mb-2">98%</div>
              <div className="text-brand-grey">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-accent mb-2">150%</div>
              <div className="text-brand-grey">Average Conversion Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-accent mb-2">50+</div>
              <div className="text-brand-grey">SaaS Companies Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;