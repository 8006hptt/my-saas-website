import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do you ensure the copy aligns with our SaaS metrics and goals?",
      answer: "I start every project with a comprehensive audit of your current metrics (conversion rates, CAC, LTV, churn) and business goals. My copy is crafted specifically to impact these KPIs, with clear tracking mechanisms to measure success. I speak your language—MRR, activation rates, and retention—not just 'engagement.'"
    },
    {
      question: "What's your typical timeline for a website copy project?",
      answer: "Most website copy projects take 2-4 weeks, depending on scope. This includes: Week 1: Research and strategy phase, Week 2-3: Writing and initial drafts, Week 4: Revisions and finalization. I provide regular updates and work collaboratively to ensure we meet your launch deadlines."
    },
    {
      question: "Do you work with early-stage SaaS companies or only established ones?",
      answer: "I work with SaaS companies at various stages—from pre-revenue startups to established enterprises. My approach adapts to your stage: early-stage companies get foundational messaging and positioning, while established companies get optimization and conversion improvements. What matters most is your commitment to growth."
    },
    {
      question: "How do you measure the success of your copywriting?",
      answer: "Success is measured through concrete metrics: conversion rate improvements, increased trial sign-ups, higher user activation rates, reduced churn, and ultimately, revenue growth. I provide before/after comparisons and work with your team to track performance over time."
    },
    {
      question: "Can you help with both acquisition and retention copy?",
      answer: "Absolutely. I specialize in the full customer lifecycle—from initial awareness and acquisition copy (ads, landing pages, website) to activation and retention copy (onboarding emails, in-app messaging, lifecycle campaigns). This holistic approach ensures consistent messaging throughout the user journey."
    },
    {
      question: "What information do you need to get started?",
      answer: "I'll need access to your current analytics, user personas, competitive landscape, and existing copy. We'll also discuss your specific challenges, goals, and success metrics. I provide a detailed onboarding questionnaire to gather all necessary information efficiently."
    },
    {
      question: "Do you offer ongoing copywriting support or just one-time projects?",
      answer: "I offer both. Many clients start with a specific project (like website copy or email sequences) and then move to ongoing retainer arrangements for continuous optimization, new feature launches, and campaign development. I'm flexible based on your needs and growth stage."
    },
    {
      question: "How is your approach different from other copywriters?",
      answer: "I'm exclusively focused on SaaS, which means I understand your unique challenges: complex products, long sales cycles, the importance of activation and retention. I combine copywriting with strategic thinking about your business model, user journey, and growth metrics—I'm not just writing words, I'm solving business problems."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-brand-black mb-6">
            Frequently Asked
            <span className="text-brand-accent"> Questions</span>
          </h2>
          <p className="text-xl text-brand-grey max-w-3xl mx-auto">
            Got questions about working together? Here are answers to the most common questions from SaaS leaders.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-brand-light-grey rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-inset hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-brand-black pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 text-brand-accent">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-brand-grey leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
          <div className="bg-brand-accent/10 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-brand-black mb-4">
              Still Have Questions?
            </h3>
            <p className="text-brand-grey mb-6">
              Let's schedule a free 30-minute strategy session to discuss your specific needs and how I can help grow your SaaS.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-brand-accent hover:bg-brand-accent-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center mx-auto"
            >
              Schedule Free Strategy Session
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;