
import React, { useState } from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, Send } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: (name: string, address: string) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckout }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isOrdering, setIsOrdering] = useState(false);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = items.length > 0 ? 40 : 0; // Flat ₹40 delivery fee
  const total = subtotal + deliveryFee;

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !address) return;
    setIsOrdering(true);
    setTimeout(() => {
      onCheckout(name, address);
      setIsOrdering(false);
      setName('');
      setAddress('');
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-[#3E2723]/60 backdrop-blur-md transition-opacity" onClick={onClose} />
      
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-lg bg-[#FAF9F6] shadow-2xl flex flex-col animate-slide-left border-l-8 border-[#E67E22]">
        <div className="p-8 border-b border-orange-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#E67E22] p-2 rounded-xl text-white">
               <ShoppingBag size={24} />
            </div>
            <h2 className="text-3xl font-black text-[#3E2723] tracking-tighter">Your Order</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400">
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-6">
              <div className="bg-slate-100 p-12 rounded-[3rem]">
                 <ShoppingBag size={80} className="text-slate-200" />
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-black text-slate-800">Your basket is empty</p>
                <p className="text-slate-400 font-medium">Time to crave, eat, and repeat!</p>
              </div>
              <button 
                onClick={onClose}
                className="px-10 py-4 bg-[#E67E22] text-white rounded-[2rem] font-black uppercase tracking-widest text-xs hover:bg-[#D35400] transition-all"
              >
                Go to Menu
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map(item => (
                <div key={item.id} className="flex gap-6 group items-center">
                  <div className="relative">
                    <img src={item.image} className="w-24 h-24 rounded-[2rem] object-cover shadow-lg" />
                    <button 
                      onClick={() => onRemove(item.id)} 
                      className="absolute -top-2 -right-2 bg-rose-500 text-white p-1.5 rounded-full hover:bg-rose-600 transition-colors shadow-lg scale-0 group-hover:scale-100"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-black text-[#3E2723] text-xl mb-1 tracking-tight">{item.name}</h4>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl px-3 py-1.5 shadow-sm">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="p-1 hover:text-[#E67E22] transition-colors">
                          <Minus size={16} strokeWidth={3} />
                        </button>
                        <span className="font-black text-lg min-w-[20px] text-center">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="p-1 hover:text-[#E67E22] transition-colors">
                          <Plus size={16} strokeWidth={3} />
                        </button>
                      </div>
                      <span className="font-black text-[#E67E22] text-xl tracking-tighter">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-orange-50 bg-white">
            <div className="space-y-3 mb-8 text-sm font-bold text-slate-500 uppercase tracking-widest">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-[#3E2723]">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="text-[#3E2723]">₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between text-3xl font-black text-[#3E2723] pt-4 tracking-tighter">
                <span>Total</span>
                <span className="text-[#E67E22]">₹{total}</span>
              </div>
            </div>

            <form onSubmit={handleOrder} className="space-y-4">
              <div className="space-y-4 mb-6">
                <input 
                  required
                  type="text" 
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 focus:border-[#E67E22] outline-none transition-all font-bold text-slate-700 bg-slate-50/50"
                />
                <textarea 
                  required
                  placeholder="Delivery Address (Floor, Appt, Street, etc.)"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 focus:border-[#E67E22] outline-none transition-all font-bold text-slate-700 bg-slate-50/50 resize-none h-28"
                />
              </div>
              <button
                disabled={isOrdering}
                type="submit"
                className="w-full py-5 bg-[#3E2723] hover:bg-[#E67E22] text-white rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 shadow-2xl transition-all active:scale-95 disabled:opacity-50"
              >
                {isOrdering ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-4 border-white/20 border-t-white" />
                ) : (
                  <>
                    <Send size={24} />
                    Place Order
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
