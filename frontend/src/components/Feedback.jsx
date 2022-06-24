import { useEffect, useState } from "react";
import { ServoiceFeedback } from 'react-feedback-widget';


import 'react-responsive-modal/styles.css';


const Feedback = () => {
  
  const [open, setOpen] = useState(false);

  const config = {
    servId: '1111111',
    servPID: 'kjh34kl2jh4kj234',
    userEmail: 'test@feedbackisgreat.com',
    userFirstName: 'David',
    userLastName: 'Groechel',
  };

  

  return (
    <div className="cart-container">
      <h2>Feedback</h2>
      <div className="App">
      <ServoiceFeedback config={config}>
        <button type="button">Feedback</button>
      </ServoiceFeedback>
    </div>
    </div>
  );
};

export default Feedback;
