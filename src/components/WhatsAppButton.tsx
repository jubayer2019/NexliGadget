import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "8801935615672"; // Placeholder Bangladeshi number
  const message = "Hello! I'm interested in your gadgets.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-10 right-10 z-100 bg-[#FF5733] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#ce3d1c] transition-colors duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap font-bold">
        Chat with us
      </span>
    </motion.a>
  );
};
