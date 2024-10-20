import React from 'react';

const EmailList = ({ emails, fetchEmailBody }) => {
  return (
    <div>
      <h2>Email List</h2>
      {emails.map((email) => (
        <div key={email.id} onClick={() => fetchEmailBody(email.id)}>
          <p>{email.id},{email.subject},{email.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EmailList;
