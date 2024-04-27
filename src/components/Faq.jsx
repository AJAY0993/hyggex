import { useState } from "react";

const sampleData = [
  {
    question: "Can education flashcards be used for all age groups?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis, minus cupiditate quibusdam dolorem tenetur, impedit dignissimos eum at odit officia aliquam placeat!",
    id: 1,
  },
  {
    question: "How do education flashcards work?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis, minus cupiditate quibusdam dolorem tenetur, impedit dignissimos eum at odit officia aliquam placeat!",
    id: 2,
  },
  {
    question: "CCan education flashcards be used for test preparation?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus perferendis, minus cupiditate quibusdam dolorem tenetur, impedit dignissimos eum at odit officia aliquam placeat!",
    id: 3,
  },
];

function Faq() {
  return (
    <div>
      <h2 className="bg-gradient-to-b from-blue-900 to-blue-600 bg-clip-text text-5xl font-bold uppercase text-transparent">
        Faq
      </h2>
      {sampleData.map((q) => (
        <FaqItem question={q} key={q.id} />
      ))}
    </div>
  );
}

function FaqItem({ question }) {
  const [isOpen, setIsOpen] = useState();
  return (
    <div
      className="relative mt-8 max-w-[848px]  cursor-pointer rounded-xl border-2 border-blue-800 p-4"
      onClick={() => setIsOpen((s) => !s)}
    >
      <div
        className={`absolute right-4 top-1/2 -translate-y-1/2 ${isOpen ? "rotate-180" : ""} transition-all duration-300`}
      >
        <img src="faqIcon.svg" alt="open" />
      </div>
      <p className="mb-2 text-base font-semibold">{question.question}</p>
      <p
        className={`max-w-[80ch] font-medium  transition-all duration-300 ${isOpen ? "h-auto" : "h-0 "} overflow-hidden`}
      >
        {question.answer}
      </p>
    </div>
  );
}

export default Faq;
