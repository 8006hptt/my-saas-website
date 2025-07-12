import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  ArrowRight,
  BarChart3,
  Mail,
  MousePointer
} from 'lucide-react';

const Results = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const caseStudies = [
    {
      company: "TechFlow SaaS",
      industry: "Project Management",
      challenge: "Low trial-to-paid conversion rate of 8%",
      solution: "Rewrote onboarding emails and in-app messaging",
      results: [
        { metric: "Trial-to-Paid Conversion", before: "8%", after: "22%", increase: "175%" },
        { metric: "Monthly Recurring Revenue", before: "$45K", after: "$98K", increase: "118%" },
        { metric: "User Activation Rate", before: "34%", after: "67%", increase: "97%" }
      ],
      image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg"
    },
    {
      company: "DataSync Pro",
      industry: "Data Analytics",
      challenge: "Website visitors not converting to trials",
      solution: "Optimized homepage and pricing page copy",
      results: [
        { metric: "Website Conversion Rate", before: "2.1%", after: "5.8%", increase: "176%" },
        { metric: "Trial Sign-ups", before: "180/month", after: "485/month", increase: "169%" },
        { metric: "Cost Per Acquisition", before: "$180", after: "$68", increase: "62% reduction" }
      ],
      image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25"
    }
  ];

  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "150%",
      label: "Average Conversion Increase",
      description: "Across all client projects"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "50+",
      label: "SaaS Companies",
      description: "Successfully transformed"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      number: "$2M+",
      label: "Revenue Generated",
      description: "For client businesses"
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "98%",
      label: "Client Satisfaction",
      description: "Rate across all projects"
    }
  ];

  return (
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Proven Results That
            <span className="text-brand-accent"> Drive Growth</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's how I've helped SaaS companies achieve measurable growth through strategic copywriting.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <div className="text-brand-accent mb-4 flex justify-center">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {metric.number}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-gray-300">
                {metric.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-6">
                    <span className="inline-block bg-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {study.industry}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      {study.company}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Challenge:</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Solution:</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <img 
                    src={study.image} 
                    alt={`${study.company} dashboard`}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="text-xl font-semibold text-white mb-6">Results:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-sm text-gray-300 mb-2">{result.metric}</div>
                      <div className="flex justify-center items-center space-x-2 mb-2">
                        <span className="text-gray-400">{result.before}</span>
                        <ArrowRight className="w-4 h-4 text-brand-accent" />
                        <span className="text-white font-semibold">{result.after}</span>
                      </div>
                      <div className="text-brand-accent font-bold">{result.increase}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-brand-accent hover:bg-brand-accent-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl"
          >
            Get Similar Results for Your SaaS
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;