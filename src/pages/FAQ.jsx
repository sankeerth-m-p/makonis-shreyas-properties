import React, { useState } from "react";
import AnimatedHeading from "../components/animatedHeading";

const faqs = [
  {
    question: "Who is Shreyas Infra ?",
    answer:
      "Shreyas Infra  is a leading real estate company specializing in premium residential, commercial, hospitality, and plotted developments in Bengaluru.",
  },
  {
    question: "When was Shreyas Infra  established?",
    answer:
      "Shreyas Infra  was established with a vision to deliver high-quality, sustainable, and innovative real estate solutions.",
  },
  {
    question: "What types of properties does Shreyas Infra  offer?",
    answer:
      "They offer residential apartments, villas, commercial spaces, hospitality projects, and premium plotted developments.",
  },
  {
    question: "Are Shreyas Infra ' projects legally approved?",
    answer:
      "Yes, all projects are legally approved and comply with RERA and local government regulations.",
  },
  {
    question: "Does Shreyas Infra  assist with home loans?",
    answer:
      "Yes, they assist customers with home loan approvals through leading national and private banks.",
  },
  {
    question: "What amenities do Shreyas Infra ' projects include?",
    answer:
      "Amenities include landscaped gardens, clubhouse, gym, swimming pool, children’s play area, security, and more.",
  },
  {
    question: "What is the typical project completion timeline?",
    answer:
      "Project timelines vary by development, but they are delivered as per committed schedules with quality assurance.",
  },
  {
    question: "Does Shreyas Infra  offer joint development opportunities?",
    answer:
      "Yes, they welcome landowners for joint development partnerships and strategic collaborations.",
  },
  {
    question: "How can I book a site visit for Shreyas Infra  project?",
    answer:
      "You can book a site visit through their official website, phone, or by contacting their sales team directly.",
  },
  {
    question: "How can I stay updated on new projects and offers?",
    answer:
      "You can subscribe to newsletters, follow social media channels, or register your details on their website.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-white pt-16 pb-20 px-4">
      <div className="max-w-6xl mx-auto px-6">

        {/* Animated Heading */}
        <div className="relative z-10 mx-auto max-w-5xl text-center px-4 md:px-6 pt-6 mb-6">
          <AnimatedHeading
            as="h2"
            delay={0}
            className="text-[20px] md:text-[38px] font-medium leading-tight text-black"
          >
            Frequently Asked Questions(FAQ)
          </AnimatedHeading>
        </div>

        <p className="text-center text-black text-base max-w-3xl mx-auto mb-12">
          Frequently Asked Questions (FAQs) provide quick and clear answers to common queries,
          helping customers make informed decisions. They enhance transparency, save time,
          and improve the overall experience by addressing key concerns efficiently.
        </p>

        {/* FAQ List */}
        <div className="bg-white rounded-[20px] overflow-hidden border">
          {faqs.map((item, index) => (
            <div key={index} className="border-b last:border-none">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 font-medium flex justify-between items-center hover:bg-gray-50 transition text-black"
              >
                {item.question}
                <span className="text-orange-500 text-2xl transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 opacity-100 pb-5" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-black text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
