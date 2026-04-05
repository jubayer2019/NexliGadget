import logoIcon from '../assets/logo.png';
import logo from '../assets/NexliGadgetLogoFooter.png';
import React from 'react';
import { Facebook, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#17174B] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#17174B] rounded-lg flex items-center justify-center text-white font-black italic">
                <img src={logoIcon} alt="Logo" className="w-full p-1 h-full object-contain" />
              </div>
              <span className="text-2xl font-bold">
                <img src={logo} alt="NexliGadget Logo" className="h-8 object-contain" />
              </span>
            </div>
            <p className="text-gray-400">
              Your premier destination for high-quality gadgets and accessories. 
              We bring the future to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/NexliGadget" target='blank' className="btn btn-ghost btn-circle btn-sm hover:bg-[#17174B] hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@NexliGadget" target='blank' className="btn btn-ghost btn-circle btn-sm hover:bg-[#17174B] hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/nexli_gadget?" target='blank' className="btn btn-ghost btn-circle btn-sm hover:bg-[#17174B] hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* <div>
            <h4 className="text-xl font-bold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#shop" className="hover:text-primary transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div> */}
          
          {/* <div>
            <h4 className="text-xl font-bold mb-6 text-primary">Support</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
            </ul>
          </div> */}
          
          <div>
            <h4 className="text-xl font-bold mb-6 text-[#FF5733]">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF5733]" />
                <span>+880 1935-615672</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF5733]" />
                <span>nexligadget@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="divider before:bg-[#FF5733] after:bg-[#FF5733]"></div>
        
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} NEXLI GADGET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
