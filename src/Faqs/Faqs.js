import './Faqs.css';
import { useState } from 'react';

const Faqs = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState();
    const [modalContent, setModalContent] = useState();

    const faqTitles = ["How is OM different from other meditation apps?", "Why can't I log in and save my sessions?", "Why 10 minutes?", "Something isn't working."];

    const faqContents = [
        "OM is a meditation trainer designed for short term use, whether by beginners or by more seasoned meditators who are just having a difficult day. It is designed to give you personalized, encouraging feedback in a short session you can do anywhere.", 
        "Developing mindfulness is not a linear process. Rather than focusing on quantifiable outcomes, OM helps you stay in the moment.", 
        "OM is a unique approach to meditation that does involve some screen time, so we encourage you to train with it for just ten minutes. If you wish to extend your session, you can always do so by restarting the timer or continuing on your own.", 
        "For concerns and questions contact incidentalbuddhist@gmail.com."
    ]

    const toggleModal = (num) => {
        setModalOpen(!modalOpen);
        setModalTitle(faqTitles[num]);
        setModalContent(faqContents[num]);
    }

    return (
        <div className="faqs">
        <div className="faq-column" id="faqs">
          <h2>FAQs</h2>
          <ul>
            {faqTitles.map((title, num)=>
            <button key={title} onClick={()=>{toggleModal(num);}} className="button is-ghost link"><li>{title}</li></button>
            )}
          </ul>
        </div>
        <div className={`modal modal-faq ${modalOpen ? 'is-active' : ''}`}>
          <div className="modal-background"></div>
            <div className="modal-content faq-modal-content">
              <h2 className="modal-title">{modalTitle}</h2>
              <hr></hr>
              <p className='modal-content'>{modalContent}</p>
            </div>
          <button className="modal-close is-large" aria-label="close" onClick={()=>{toggleModal();}}></button>
        </div>
      </div>
    )
}
export default Faqs;