import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    {
      question: 'CakeHub là gì?',
      answer: 'CakeHub là một nền tảng trực tuyến nơi bạn có thể đặt bánh tự trang trí cho bất kì dịp đặc biệt hay ngày lễ nào.',
    },
    {
      question: 'Làm sao để bạn có thể đặt hàng?',
      answer:
        'Để đặt đơn hàng, duyệt qua mục lựa chọn bánh của chúng tôi, chọn loại bánh bạn muốn, trang trí cho nó và tiến hành thanh toán.',
    },
    {
      question: 'Những phương thức thanh toán nào được chấp nhận?',
      answer: 'Chúng tôi chấp nhận rất nhiều các loại phương thức thanh toán khác nhau bao gồm các loại thẻ tín dụng/thẻ ghi nợ, PayPal, và chuyển khoản qua ngân hàng.',
    },
    {
      question: 'Bạn có thể theo dõi đơn hàng của bạn chứ?',
      answer: "Hoàn toàn có thể, bạn có thể theo dõi đơn hàng của bạn qua mục 'Lịch sử đơn hàng' trong tài khoản của bạn.",
    },
    {
      question: 'Chính sách trả hàng là gì?',
      answer:
        'Nếu bạn cảm thấy không hài lòng với đơn hàng của bạn, xin hãy liên hệ với chúng tôi trong vòng 24 tiếng kể từ khi giao hàng để có thể hoàn tiền hoặc đổi bánh.',
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
