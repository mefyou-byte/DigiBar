import { useState } from "react";
import 'react-responsive-modal/styles.css';
import { Rating } from 'react-simple-star-rating';

// import { ServoiceFeedback } from 'react-feedback-widget';



/* export default function Feedback() {
  const [rating, setRating] = useState(100)
  
  const handleRating = (rate) => {
    setRating(rate)
  }

  return (
    <div className="cart-container">
      <h2>Feedback</h2>
      <Rating 
        onClick={handleRating}
        ratingValue={rating} 
        transition
      />  
    </div>
  )
}; */
  


const Feedback = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(false)
 const config = {
  servId: '1111111',
     servPID: 'kjh34kl2jh4kj234',
  userEmail: 'test@feedbackisgreat.com',
    userFirstName: 'David',
   userLastName: 'Groechel',
  };

  const handleRating = (rate) => {
    setRating(rate)
  }
 return (
    <div className="cart-container">
      <h2>Feedback</h2>
      <Rating 
        onClick={handleRating}
        ratingValue={rating} 
        transition
      />  
    </div>
  )
  
}

export default Feedback;


// const Stars = () => {

  
//   // const [open, setOpen] = useState(false);

//   // const config = {
//   //   servId: '1111111',
//   //   servPID: 'kjh34kl2jh4kj234',
//   //   userEmail: 'test@feedbackisgreat.com',
//   //   userFirstName: 'David',
//   //   userLastName: 'Groechel',
//   // };

  
//   // Catch Rating value


//   return (
//     <Rating 
//       onClick={handleRating}
//       ratingValue={rating} 
//       transition
//     />
//   )
// }

// const Feedback = () => {
//   return (
//     <div className="cart-container">
//       <h2>Feedback</h2>
//       <Rating />
//     </div>
//   )
// }

//  export default Feedback




 //      /* <ServoiceFeedback config={config}>
//        <button type="button">Feedback</button>
 //     </ServoiceFeedback> */
/*  window.React1 = require('react');

 console.log("here");
// Add this in your component file
require('react-dom');
console.log(window.React1 === window.React2); */

