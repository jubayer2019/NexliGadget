import React from 'react';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <div className="bg-[#17174B] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-black mb-2 uppercase">Contact Us</h2>
          <p className="text-gray-400 mb-8">Have questions? We're here to help you find the perfect gadget.</p>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Row 1: Name and Email */}
            <div className="form-control">
              <label className="label"><span className="label-text text-gray-300">Full Name</span></label>
              <input type="text" placeholder="John Doe" className="input input-bordered bg-white/5 border-white/10 text-white focus:border-[#FF5733]" required />
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text text-gray-300">Email Address</span></label>
              <input type="email" placeholder="john@example.com" className="input input-bordered bg-white/5 border-white/10 text-white focus:border-[#FF5733]" required />
            </div>

            {/* Row 2: Message (Spans 2 columns) */}
            <div className="form-control flex flex-col md:col-span-1 md:col-span-2">
              <label className="label"><span className="label-text text-gray-300">Message</span></label>
              <textarea placeholder="How can we help you?" className="textarea textarea-bordered bg-white/5 border-white/10 text-white focus:border-[#FF5733] w-full h-30" required></textarea>
            </div>

            {/* Row 3: Button (Spans 2 columns) */}
            <div className="md:col-span-2">
              <button className="btn bg-[#FF5733] hover:bg-[#e44d2d] border-none text-white w-full rounded-full mt-4">
                Send Message <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </form>
        </div>
        
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5733]/20 rounded-full blur-3xl -z-0 translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  );
};
