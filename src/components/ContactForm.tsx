import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init('L9ZID44YufE4R7BtQ');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // The 'name' attribute in the HTML must match the keys in your formData state
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_h7oihwd',
        'template_tqwm4if',
        templateParams,
        'L9ZID44YufE4R7BtQ'
      );
      alert('Message sent successfully!');
      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      console.error('EMAIL ERROR:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <div className="bg-[#17174B] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-2 uppercase">Contact Us</h2>
          <p className="text-gray-400 mb-8">Have questions? We're here to help you find the perfect gadget.</p>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="form-control">
              <label className="label"><span className="label-text text-gray-300">Full Name</span></label>
              <input 
                type="text" 
                name="fullName" // Matches formData key
                value={formData.fullName}  
                onChange={handleChange} 
                placeholder="John Doe" 
                className="input input-bordered bg-white/5 border-white/10 text-white focus:border-[#FF5733]" 
                required 
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label"><span className="label-text text-gray-300">Email Address</span></label>
              <input 
                type="email" 
                name="email" // Matches formData key
                value={formData.email} 
                onChange={handleChange} 
                placeholder="john@example.com" 
                className="input input-bordered bg-white/5 border-white/10 text-white focus:border-[#FF5733]" 
                required 
              />
            </div>

            {/* Message */}
            <div className="form-control flex flex-col md:col-span-2">
              <label className="label"><span className="label-text text-gray-300">Message</span></label>
              <textarea 
                name="message" // Matches formData key
                placeholder="How can we help you?" 
                value={formData.message} 
                onChange={handleChange} 
                className="textarea textarea-bordered bg-white/5 border-white/10 text-white focus:border-[#FF5733] w-full h-32" 
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`btn bg-[#FF5733] hover:bg-[#e44d2d] border-none text-white w-full rounded-full mt-4 ${isSubmitting ? 'loading' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} 
                {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
              </button>
            </div>
          </form>
        </div>
        
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733]/20 rounded-full blur-3xl z-0 translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  );
};