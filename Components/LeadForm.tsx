'use client';
import { useState } from 'react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: '',
    currentPartner: 'none'
  });

  const partners = ['ola', 'uber', 'rapido', 'jugnoo', 'other', 'none'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch("/api/send-email", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

const result = await response.json(); // <-- only after confirming the route exists

    if (result.success) {
      setFormData({ name: '', mobile: '', email: '', message: '', currentPartner: 'none' });
      alert("Message sent successfully!");
    } else {
      console.error("Submit failed", result.error);
      alert("Failed to send message: " + result.error);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Check console for details.");
  }
};


  return (
    <div className="flex items-center justify-center p-1">
      <form onSubmit={handleSubmit} className="bg-slate-950 p-10 rounded-lg shadow-2xl max-w-md w-full border border-slate-700">
       

      <div className="  p-8 max-w-full  text-justify space-y-1">
  <h2 className="text-2xl font-extrabold text-green-600 leading-tight">
    Become a Partner
  </h2>

  <p className="text-gray-600 text-sm font-white">
    Invest, attach your car, or become a driver — <span className="font-semibold text-green-500">Green Cars</span> gives you stable monthly income and complete operational support.
  </p>

</div>


        <div className="mb-5">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-3 bg-slate-800 border border-slate-600 rounded-md text-white text-sm focus:outline-none focus:border-green-500" 
          />
        </div>
        
        <div className="mb-5">
          <input 
            type="tel" 
            name="mobile" 
            placeholder="Mobile Number" 
            value={formData.mobile} 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-3 bg-slate-800 border border-slate-600 rounded-md text-white text-sm focus:outline-none focus:border-green-500" 
          />
        </div>
        
        <div className="mb-5">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-3 bg-slate-800 border border-slate-600 rounded-md text-white text-sm focus:outline-none focus:border-green-500" 
          />
        </div>
        
        <div className="mb-5">
          <select 
            name="currentPartner" 
            value={formData.currentPartner} 
            onChange={handleChange} 
            className="w-full px-3 py-3 bg-slate-800 border border-slate-600 rounded-md text-white text-sm focus:outline-none focus:border-green-500"
          >
            {partners.map(partner => (
              <option key={partner} value={partner}>
                {partner.charAt(0).toUpperCase() + partner.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-6">
          <textarea 
            name="message" 
            placeholder="Message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full px-3 py-3 bg-slate-800 border border-slate-600 rounded-md text-white text-sm focus:outline-none focus:border-green-500 min-h-24" 
          />
        </div>
        
        <button type="submit" className="w-full py-3 bg-green-500 text-black font-bold rounded-md text-base hover:bg-green-600 transition-all duration-300">
          Become a Partner
        </button>
      </form>
    </div>
  );
}
