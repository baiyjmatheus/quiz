import React from 'react';

import './MessageBox.css';

const MessageBox = ({isAnswerCorrect, correctResultMessage, solution}) => {  
  const content = (
    isAnswerCorrect
      ? <div className="alert alert-success"><p>{correctResultMessage}</p></div>
      : <div className="alert alert-danger"><p>Correct solution: {solution}</p></div>
  );

  return (
    <div className="message-box">
      { content }
    </div>
  );
};


export default MessageBox;
