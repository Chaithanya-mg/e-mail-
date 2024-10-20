import React from 'react';

const EmailBody = ({ email }) => {
  return (
    <div>
      <h2>Email Body</h2>
      <p>{email.body}</p>
    </div>
  );
};

export default EmailBody;
