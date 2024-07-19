import { useState } from 'react';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes('@')) {
      alert('Please enter a valid email address.');
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <section id="contact" className="py-12 bg-yellow-500 text-white">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center">Contact Us</h3>
        <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button type="submit" className="w-full p-2 bg-purple-600 text-white rounded">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
