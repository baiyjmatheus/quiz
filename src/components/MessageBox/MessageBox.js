import React from 'react';

import './MessageBox.css';

const MessageBox = ({isAnswerCorrect, correctResultMessage, solution}) => {  
  const content = (
    isAnswerCorrect
      ? <p>{correctResultMessage}</p>
      : <p>Correct solution: {solution}</p>
  );

  return (
    <div className={`message-box ${isAnswerCorrect ? 'alert-success' : 'alert-danger'}`}>
      { content }
    </div>
  );
};


export default MessageBox;
