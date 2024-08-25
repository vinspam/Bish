import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const accordionData = [
  {
    title: "What's a BISH! code?",
    content:
      "Every home has been allocated a BISH! code. A BISH! code is another name for a discount code. Get yours today to save BIG!",
  },
  {
    title: "So my home has a BISH! code?",
    content:
      "Yes, that's right. Every home has a BISH! code waiting to be activated.",
  },
  {
    title: "How do I get my home’s BISH! code?",
    content:
      "Just enter your postcode to get started. Please note that BISH! codes are only available in certain towns right now.",
  },
];

const FaqSec = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    console.log(index);
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faqContainer">
      <div className="faqWrapper">
        <div style={{ width: "83%", margin: "auto" }}>
          <div className="faqTitle">FAQ</div>
          <div>
            {accordionData.map((item, index) => (
              <div style={{ marginBottom: "45px" }} key={index} onClick={() => toggleFAQ(index)}>
                <div
                  className={`faq-header ${activeIndex === index ? "faq-header-active" : ""
                    }`}
                >
                  <h3
                    className={`faq-label ${activeIndex === index ? "faq-label-active" : ""
                      }`}
                  >
                    {item.title}
                    <FaChevronDown
                      className={`chevron-icon ${activeIndex === index ? "chevron-rotated" : ""
                        }`}
                    />
                  </h3>
                  <div
                    className={`faq-content ${activeIndex === index ? "faq-content-open" : ""
                      }`}
                  >
                    {item.content}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSec;
