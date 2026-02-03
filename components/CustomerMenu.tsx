
import React, { useState } from 'react';
import { Plus, Star, Sparkles } from 'lucide-react';
import { FoodItem } from '../types';
import { MENU_ITEMS } from '../constants';
import { getAIPun } from '../services/geminiService';

interface CustomerMenuProps {
  onAddToCart: (item: FoodItem) => void;
}

const CustomerMenu: React.FC<CustomerMenuProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [puns, setPuns] = useState<Record<string, string>>({});
  
  const categories = [
    'All', 
    'Rice items', 
    'Burger', 
    'Pizza', 
    'Sandwich', 
    'Momos', 
    'Chicken starters', 
    'Maggie', 
    'Veg starters', 
    'Egg items'
  ];

  const filteredItems = selectedCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  const fetchPun = async (item: FoodItem) => {
    if (puns[item.id]) return;
    const pun = await getAIPun(item.name);
    setPuns(prev => ({ ...prev, [item.id]: pun }));
  };

  return (
    <div id="menu" className="max-w-7xl mx-auto px-4 py-16 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-[#3E2723] mb-4">Chavi's Specialties</h2>
        <div className="w-20 h-1.5 bg-[#E67E22] mx-auto rounded-full mb-8"></div>
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-2xl whitespace-nowrap transition-all border-2 font-bold text-sm ${
                selectedCategory === cat
                  ? 'bg-[#E67E22] text-white border-[#E67E22] shadow-xl shadow-orange-100 scale-105'
                  : 'bg-white text-slate-500 border-slate-100 hover:border-orange-200 hover:text-orange-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <div 
            key={item.id} 
            className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {item.isPopular && (
                <div className="absolute top-4 left-4 bg-[#3E2723] text-white text-[10px] px-3 py-1 rounded-full flex items-center gap-1 font-black tracking-widest uppercase">
                  <Star size={10} fill="#E67E22" className="text-[#E67E22]" /> MUST TRY
                </div>
              )}
              <button 
                onClick={() => fetchPun(item)}
                className="absolute top-4 right-4 bg-white/90 text-orange-600 p-2 rounded-full hover:bg-[#E67E22] hover:text-white transition-all shadow-lg active:scale-90"
                title="Chef's Tip"
              >
                <Sparkles size={18} />
              </button>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-black text-[#3E2723] leading-tight">{item.name}</h3>
                <span className="text-xl font-bold text-[#E67E22]">₹{item.price}</span>
              </div>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                {item.description}
              </p>
              
              {puns[item.id] && (
                <div className="mb-6 text-sm font-medium text-orange-700 bg-orange-50/50 p-4 rounded-2xl border-l-4 border-orange-400 italic">
                  "{puns[item.id]}"
                </div>
              )}

              <div className="mt-auto">
                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full py-4 bg-slate-900 hover:bg-[#E67E22] text-white rounded-2xl flex items-center justify-center gap-3 transition-all font-black shadow-lg hover:shadow-orange-200"
                >
                  <Plus size={20} /> Add to Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerMenu;
