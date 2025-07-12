import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "SaaS Companies", icon: <Users className="w-6 h-6" /> },
    { number: "150%", label: "Avg. Conversion Boost", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "$2M+", label: "Revenue Generated", icon: <Target className="w-6 h-6" /> }
  ];

  const credentials = [
    "Data-driven copywriting specialist focused exclusively on SaaS",
    "Deep understanding of SaaS metrics: LTV, CAC, churn, activation",
    "Proven track record of increasing trial-to-paid conversions",
    "Strategic partner, not just a copywriter",
    "Results-oriented approach with measurable outcomes"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-accent/20 to-brand-accent-light/20 rounded-2xl blur-lg"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <img 
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  alt="Professional headshot - Your Name"
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="text-center p-4 bg-brand-light-grey rounded-xl"
                    >
                      <div className="text-brand-accent mb-2 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-brand-black mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-brand-grey">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-black mb-6">
                Your Strategic Partner in
                <span className="text-brand-accent"> SaaS Growth</span>
              </h2>
              <p className="text-xl text-brand-grey leading-relaxed mb-8">
                I don't just write copy—I craft strategic messaging that transforms your complex SaaS features into compelling benefits that drive measurable business results.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-display font-semibold text-brand-black mb-4">
                What Sets Me Apart:
              </h3>
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-5 h-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-brand-grey">{credential}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-brand-light-grey p-6 rounded-2xl">
              <h3 className="text-lg font-display font-semibold text-brand-black mb-3">
                My Approach:
              </h3>
              <p className="text-brand-grey leading-relaxed">
                Every piece of copy I create is backed by data analysis, user psychology, and deep understanding of the SaaS customer journey. I don't just write—I optimize for specific business outcomes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-brand-accent hover:bg-brand-accent-dark text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
              >
                Let's Discuss Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
              >
                View My Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;