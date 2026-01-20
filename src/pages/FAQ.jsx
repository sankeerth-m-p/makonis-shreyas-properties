import React, { useState } from "react";

const faqs = [
  {
    question: "Who is Siddanth Developers?",
    answer:
      "Siddanth Developers is a leading real estate company specializing in premium residential, commercial, hospitality, and plotted developments in Bengaluru.",
  },
  {
    question: "When was Siddanth Developers established?",
    answer:
      "Siddanth Developers was established with a vision to deliver high-quality, sustainable, and innovative real estate solutions.",
  },
  {
    question: "What types of properties does Siddanth Developers offer?",
    answer:
      "They offer residential apartments, villas, commercial spaces, hospitality projects, and premium plotted developments.",
  },
  {
    question: "Are Siddanth Developers' projects legally approved?",
    answer:
      "Yes, all projects are legally approved and comply with RERA and local government regulations.",
  },
  {
    question: "Does Siddanth Developers assist with home loans?",
    answer:
      "Yes, they assist customers with home loan approvals through leading national and private banks.",
  },
  {
    question: "What amenities do Siddanth Developers' projects include?",
    answer:
      "Amenities include landscaped gardens, clubhouse, gym, swimming pool, children’s play area, security, and more.",
  },
  {
    question: "What is the typical project completion timeline?",
    answer:
      "Project timelines vary by development, but they are delivered as per committed schedules with quality assurance.",
  },
  {
    question: "Does Siddanth Developers offer joint development opportunities?",
    answer:
      "Yes, they welcome landowners for joint development partnerships and strategic collaborations.",
  },
  {
    question: "How can I book a site visit for Siddanth Developers project?",
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
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="bg-white pt-5 pb-20 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="flex justify-center mb-6">
          <div className="border border-orange-500 text-orange-500 px-6 py-2 font-semibold tracking-wide">
            FREQUENTLY ASKED QUESTIONS (FAQ)
          </div>
        </div>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
          Frequently Asked Questions (FAQs) provide quick and clear answers to common queries, helping customers make informed
          decisions. They enhance transparency, save time, and improve the overall experience by addressing key concerns efficiently.
        </p>

        {/* FAQ List */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {faqs.map((item, index) => (
            <div key={index} className="border-b last:border-none">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 font-semibold flex justify-between items-center hover:bg-gray-50"
              >
                {item.question}
                <span className="text-orange-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;
