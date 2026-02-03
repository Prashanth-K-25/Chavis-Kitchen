
import React from 'react';
import { ShoppingBasket, User, LogIn, LayoutDashboard, UtensilsCrossed } from 'lucide-react';

interface HeaderProps {
  isAdmin: boolean;
  onAdminToggle: () => void;
  cartCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAdmin, onAdminToggle, cartCount, onCartClick }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 px-4 md:px-12 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="bg-[#3E2723] p-2 rounded-xl text-white shadow-lg shadow-orange-100 group-hover:scale-105 transition-transform">
           <UtensilsCrossed size={22} />
        </div>
        <div>
          <h1 className="text-xl font-extrabold text-[#3E2723] tracking-tight">
            Chavi's <span className="text-[#E67E22]">Kitchen</span>
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 -mt-1">Crave. Eat. Repeat.</p>
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600">
        <button onClick={() => scrollTo('menu')} className="hover:text-[#E67E22] transition-colors">Order/Shop</button>
        <button onClick={() => scrollTo('about')} className="hover:text-[#E67E22] transition-colors">About</button>
        <button onClick={() => scrollTo('contact')} className="hover:text-[#E67E22] transition-colors">Contact Us</button>
      </nav>

      <div className="flex items-center gap-3 md:gap-5">
        <button 
          onClick={onAdminToggle}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all border font-bold text-sm ${
            isAdmin 
              ? 'bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100' 
              : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
          }`}
        >
          {isAdmin ? <LayoutDashboard size={16} /> : <LogIn size={16} />}
          <span className="hidden sm:inline">{isAdmin ? 'Admin Panel' : 'Owner Login'}</span>
        </button>

        {!isAdmin && (
          <button 
            onClick={onCartClick}
            className="relative bg-[#E67E22] hover:bg-[#D35400] text-white p-2.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-orange-100 flex items-center gap-2"
          >
            <ShoppingBasket size={20} />
            <span className="font-bold pr-1">{cartCount}</span>
            <div className="absolute -top-1 -right-1 bg-[#3E2723] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white font-black animate-pulse">
              {cartCount > 0 ? '!' : '0'}
            </div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
