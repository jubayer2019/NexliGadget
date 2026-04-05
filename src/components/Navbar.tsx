import React from 'react';
import { ShoppingCart } from 'lucide-react';
import logoIcon from '../assets/logo.png';
import logo from '../assets/NexliGadgetLogo.png';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-4 md:px-8 sticky top-0 z-50">
      <div className="flex-1">
        <a className="text-2xl font-bold text-[#17174B] flex items-center gap-2 cursor-pointer">
          <div className="w-15 h-15 p-2 bg-[#17174B] rounded-lg flex items-center justify-center text-white font-black italic">
            <img src={logoIcon} alt="NexliGadget Logo" />
          </div>
          <span className="hidden sm:inline">
            <img src={logo} alt="NexliGadget Logo" className="h-10" />
          </span>
        </a>
      </div>
      <div className="flex-none">
        <button 
          onClick={onCartClick}
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="badge badge-sm bg-[#FF5733] text-white indicator-item">{cartCount}</span>
            )}
          </div>
        </button>
      </div>
    </div>
  );
};
