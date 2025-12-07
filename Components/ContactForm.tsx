'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', mobile: '', email: '', message: '' });
      } else {
        console.error('Submit failed');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-400 font-light text-xs uppercase tracking-wider mb-3" htmlFor="name">
          Full Name
        </label>
        <input 
          id="name"
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          className="w-full px-5 py-4 border border-gray-800 bg-black text-white focus:outline-none focus:border-green-500 transition-colors" 
          placeholder="Enter your name" 
        />
      </div>
      
      <div>
        <label className="block text-gray-400 font-light text-xs uppercase tracking-wider mb-3" htmlFor="mobile">
          Mobile Number
        </label>
        <input 
          id="mobile"
          name="mobile" 
          type="tel"
          value={formData.mobile} 
          onChange={handleChange} 
          required 
          className="w-full px-5 py-4 border border-gray-800 bg-black text-white focus:outline-none focus:border-green-500 transition-colors" 
          placeholder="Enter your mobile number" 
        />
      </div>
      
      <div>
        <label className="block text-gray-400 font-light text-xs uppercase tracking-wider mb-3" htmlFor="email">
          Email Address
        </label>
        <input 
          id="email"
          name="email"
          type="email"
          value={formData.email} 
          onChange={handleChange} 
          required 
          className="w-full px-5 py-4 border border-gray-800 bg-black text-white focus:outline-none focus:border-green-500 transition-colors" 
          placeholder="Enter your email" 
        />
      </div>

      <div>
        <label className="block text-gray-400 font-light text-xs uppercase tracking-wider mb-3" htmlFor="message">
          Message
        </label>
        <textarea 
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-5 py-4 border border-gray-800 bg-black text-white focus:outline-none focus:border-green-500 transition-colors resize-none" 
          placeholder="How can we help you?" 
        />
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-green-600 text-black py-4 font-bold hover:bg-green-500 disabled:opacity-50 uppercase tracking-wide text-sm shadow-lg shadow-green-600/30 transition-all"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
