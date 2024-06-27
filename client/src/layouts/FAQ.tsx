import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is Cake Hub?',
      answer: 'Cake Hub is an online platform where you can order custom cakes for any occasion.',
    },
    {
      question: 'How do I place an order?',
      answer:
        'To place an order, browse our selection of cakes, choose your desired cake, customize it, and proceed to checkout.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept various payment methods including credit/debit cards, PayPal, and bank transfers.',
    },
    {
      question: 'Can I track my order?',
      answer: "Yes, you can track your order through the 'Order History' section in your account.",
    },
    {
      question: 'What is the return policy?',
      answer:
        'If you are not satisfied with your order, please contact us within 24 hours of delivery for a possible refund or exchange.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-gray-100 px-4 py-10">
      <div className="container mx-auto">
        <h1 className="mb-8 text-center text-4xl font-semibold">Các câu hỏi thường gặp</h1>
        <div className="rounded-lg bg-white p-6 shadow-lg">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div onClick={() => toggleFAQ(index)} className="flex cursor-pointer items-center">
                <span className={`${activeIndex === index ? 'text-yellow-500' : 'text-primary-500'} mr-2 text-xl`}>
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
                <h2 className="text-xl font-semibold">{faq.question}</h2>
              </div>
              {activeIndex === index && <p className="mt-2 pl-7 text-gray-800">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
