import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rohan Hasan",
    role: "",
    content: "A total lifesaver for study notes! It's super fast, ink-free, and fits right in my pocket for quick diagrams.",
    avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
  },
  {
    id: 2,
    name: "M H Hasan",
    role: "",
    content: "Perfect for professional receipts on the go. The Bluetooth is seamless and the battery life is impressive!",
    avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
  },
  {
    id: 3,
    name: "Aireen Maria",
    role: "",
    content: "Obsessed with this for my scrapbooking. The app is so easy to use and the sticker quality is surprisingly crisp!",
    avatar: "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">What Our <span className="text-[#FF5733]">Customers</span> Say</h2>
          <p className="text-gray-500">Don't just take our word for it, hear from our community.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="card bg-base-100 shadow-xl relative overflow-visible">
              <div className="absolute -top-4 -left-4 bg-[#FF5733] p-3 rounded-full text-white shadow-lg">
                <Quote className="w-6 h-6" />
              </div>
              <div className="card-body pt-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF5733] text-[#FF5733]" />
                  ))}
                </div>
                <p className="italic text-gray-600 mb-6">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="avatar">
                    <div className="w-12 rounded-full">
                      <img src={t.avatar} alt={t.name} referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
