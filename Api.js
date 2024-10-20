import axios from 'axios';

export const fetchEmails = async () => {
  return await axios.get(`https://flipkart-email-mock.now.sh/?id=${id}`);
};

export const fetchEmailBody = async (id) => {
  return await axios.get(`https://flipkart-email-mock.now.sh/?id=${id}`);
};
