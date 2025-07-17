"use client";
import { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function FAQServices({ Faqs }) {
  console.log(Faqs);

  const [openIndex, setOpenIndex] = useState(null);
  function createMarkup(item) {
    return { __html: item };
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="main_section">
        <div className="section-title">
          <h3 className="">FAQs</h3>
          <h2 className="" data-cursor="-opaque">
            Frequently Asked{" "}
            <span className="text-[var(--rv-primary)]">Questions</span>
          </h2>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom">
            Find answers to common questions about our financial services,
            investment plans, and how we support your financial journey.
          </p>
        </div>

        {Faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="mb-2 border border-white rounded-2xl overflow-hidden text-white group hover:text-[var(--rv-secondary)]"
            variants={childFade}
          >
            <button
              className="items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow w-full flex justify-between text-left whitespace-normal p-5 bg-[var(--rv-primary)] group-hover:text-[var(--rv-secondary)] gap-5"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-[16px] md:text-lg font-bold text-left break-words transition-colors group-hover:text-[var(--rv-secondary)]">
                {faq.question}
              </span>
              {openIndex === index ? (
                <MinusIcon className="w-5 h-5 transition-colors group-hover:text-[var(--rv-secondary)]" />
              ) : (
                <PlusIcon className="w-5 h-5 transition-colors group-hover:text-[var(--rv-secondary)]" />
              )}
            </button>
            {openIndex === index && (
              <div
                dangerouslySetInnerHTML={createMarkup(faq?.answer)}
                className="p-4 bg-[var(--rv-primary)] text-white border-t"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
