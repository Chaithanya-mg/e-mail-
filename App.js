import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import EmailList from './components/EmailList';
import EmailBody from './components/EmailBody';
import "./Api";

function App() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'favorite', 'read', 'unread'

  // Fetch all emails when the component mounts
  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get('https://flipkart-email-mock.now.sh/');
        setEmails(response.data.list);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };
    fetchEmails();
  }, []);

  // Fetch a specific email's body
  const fetchEmailBody = async (id) => {
    try {
      const response = await axios.get(`https://flipkart-email-mock.now.sh/?id=${id}`);
      setSelectedEmail(response.data);
    } catch (error) {
      console.error('Error fetching email body:', error);
    }
  };

  // Mark an email as favorite
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId) => favId !== id) // Remove from favorites
        : [...prevFavorites, id] // Add to favorites
    );
  };

  // Apply filter to emails
  const filteredEmails = emails.filter((email) => {
    if (filter === 'favorite') {
      return favorites.includes(email.id);
    }
    if (filter === 'read') {
      return email.read;
    }
    if (filter === 'unread') {
      return !email.read;
    }
    return true; // Show all emails by default
  });

  return (
    <div className="App">
      <header>
        <h1>Email Client</h1>
        <div className="filters">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('favorite')}>Favorites</button>
          <button onClick={() => setFilter('read')}>Read</button>
          <button onClick={() => setFilter('unread')}>Unread</button>
        </div>
      </header>

      <div className="email-client">
        <EmailList
          emails={filteredEmails}
          fetchEmailBody={fetchEmailBody}
          favorites={favorites}
        />
        {selectedEmail && (
          <EmailBody
            email={selectedEmail}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.includes(selectedEmail.id)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
