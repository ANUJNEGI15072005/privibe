import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showMore, setShowMore] = useState(false);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const faqs = [
    {
      question: "What materials are used in your jewelry?",
      answer: "Our artificial jewelry is crafted from high-quality materials such as alloy, brass, and gold/silver plating. We also use crystals, beads, and rhinestones for added elegance.",
    },
    {
      question: "How should I care for my jewelry?",
      answer: "We recommend keeping your jewelry clean and dry. Store it in a soft pouch when not in use, and avoid exposure to harsh chemicals or extreme conditions.",
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-7 business days within the country.",
    },
    {
      question: "Do you have a physical store?",
      answer: "Currently, we are an online-only store. However, we occasionally participate in pop-up events.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order has shipped, you will receive messages on your provided contact number & WhatsApp.",
    },
    {
      question: "Can I customize my order?",
      answer: "Yes, you can customize your order with the jewelry you want & some chocolates, but you cannot customize the jewelry.",
    },
    {
      question: "What is the price of a customized order?",
      answer: "It depends on the jewelry you select & additional stuff.",
    },
  ];

  const visibleFaqs = showMore ? faqs : faqs.slice(0, 4);

  return (
    <div className='w-auto mt-10 h-screen'>
      <div className='flex justify-center items-center h-18 m-5'>
        <h2 className='text-4xl font-montserrat'>FREQUENTLY ASKED QUESTIONS</h2>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-3/4'>
          {visibleFaqs.map((faq, index) => (
            <div className='border-b py-4' key={index}>
              <div className='flex items-center'>
                <button 
                  onClick={() => toggleAnswer(index)} 
                  className='mr-2 focus:outline-none'
                >
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <p className='font-bold font-lato text-lg'>{faq.question}</p>
              </div>
              {openIndex === index && (
                <p className='text-lg font-lato mt-2'>
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
          <div className='flex justify-center items-center mt-4'>
            <button 
              onClick={toggleShowMore} 
              className='flex items-center text-black font-montserrat font-semibold focus:outline-none'
            >
              {showMore ? 'See Less' : 'See More'}
              <span className='ml-2'>
                {showMore ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
