
import React, { useState, useEffect } from 'react';
import { CheckCircle, ChefHat, MapPin, Phone, Mail, Instagram, Facebook, Twitter, Utensils, ExternalLink } from 'lucide-react';
import Header from './components/Header';
import CustomerMenu from './components/CustomerMenu';
import Cart from './components/Cart';
import AdminDashboard from './components/AdminDashboard';
import { FoodItem, CartItem, Order, OrderStatus } from './types';
import { getKitchenSlogan } from './services/geminiService';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [slogan, setSlogan] = useState('Crave. Eat. Repeat.');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const savedOrders = localStorage.getItem('chavis_kitchen_orders');
    if (savedOrders) setOrders(JSON.parse(savedOrders));

    const fetchSlogan = async () => {
      const s = await getKitchenSlogan();
      setSlogan(s);
    };
    fetchSlogan();
  }, []);

  useEffect(() => {
    localStorage.setItem('chavis_kitchen_orders', JSON.stringify(orders));
  }, [orders]);

  const handleAddToCart = (item: FoodItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const handleCheckout = (name: string, address: string) => {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0) + 40; // ₹40 delivery
    const newOrder: Order = {
      id: `CK-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      customerName: name,
      address,
      items: [...cartItems],
      total,
      status: OrderStatus.PENDING,
      createdAt: Date.now()
    };

    setOrders(prev => [newOrder, ...prev]);
    setCartItems([]);
    setIsCartOpen(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  const handleUpdateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Header 
        isAdmin={isAdmin}
        onAdminToggle={() => setIsAdmin(!isAdmin)}
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main>
        {isAdmin ? (
          <AdminDashboard orders={orders} onUpdateStatus={handleUpdateOrderStatus} />
        ) : (
          <>
            {/* Hero Section */}
            <section className="relative pt-24 pb-32 overflow-hidden px-4">
               <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                  <div className="flex-1 text-center lg:text-left z-10">
                    <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-2xl text-orange-700 font-black text-sm mb-8 border border-orange-200">
                      <ChefHat size={18} /> HAND-PICKED FLAVORS
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black text-[#3E2723] mb-8 leading-[1.1] tracking-tight">
                      Where Passion <br /> Meets the <span className="text-[#E67E22]">Plate.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-xl mb-12 font-medium leading-relaxed">
                      {slogan} <br /> Authentic recipes passed through generations, delivered straight to your door.
                    </p>
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                      <button 
                        onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-5 bg-[#E67E22] text-white rounded-[2rem] font-black text-xl hover:bg-[#D35400] transition-all shadow-2xl shadow-orange-200 active:scale-95"
                      >
                        Explore Menu
                      </button>
                      <button 
                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-5 bg-white text-[#3E2723] rounded-[2rem] font-black text-xl border-4 border-[#3E2723] hover:bg-[#3E2723] hover:text-white transition-all"
                      >
                        Our Story
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex-1 relative">
                    <div className="w-full aspect-square bg-[#3E2723] rounded-[4rem] rotate-3 overflow-hidden shadow-2xl">
                      <img 
                        src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1200&q=80" 
                        className="w-full h-full object-cover -rotate-3 scale-110 opacity-90"
                        alt="Signature Dish"
                      />
                    </div>
                    {/* Floating Accent */}
                    <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[3rem] shadow-2xl border-t-8 border-[#E67E22] hidden md:block">
                       <p className="text-[#3E2723] font-black text-3xl italic">"Chef's Choice!"</p>
                       <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">Chavi's Kitchen</p>
                    </div>
                  </div>
               </div>
            </section>

            <CustomerMenu onAddToCart={handleAddToCart} />

            {/* About Section */}
            <section id="about" className="py-32 bg-[#3E2723] text-white overflow-hidden scroll-mt-20">
               <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div className="space-y-8">
                     <h2 className="text-5xl font-black leading-tight">Authentic Flavors, <br/><span className="text-[#E67E22]">Modern Kitchen.</span></h2>
                     <p className="text-lg text-slate-300 leading-relaxed font-medium">
                        At Chavi's Kitchen, we believe that food is more than just sustenance—it's an experience. Founded in 2024, our mission has been to bring high-quality, chef-curated meals to our community. From our Hyderabadi Dum Biryani to our Crispy Fried Chicken, every dish is crafted from scratch using locally sourced ingredients.
                     </p>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                           <p className="text-4xl font-black text-[#E67E22] mb-2">100%</p>
                           <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Fresh Ingredients</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                           <p className="text-4xl font-black text-[#E67E22] mb-2">24/7</p>
                           <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Love & Support</p>
                        </div>
                     </div>
                  </div>
                  <div className="relative">
                     <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80" className="rounded-[2rem] h-64 w-full object-cover" />
                        <img src="https://images.unsplash.com/photo-1556910602-3884ee022588?auto=format&fit=crop&w=600&q=80" className="rounded-[2rem] h-64 w-full object-cover mt-8" />
                     </div>
                  </div>
               </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 scroll-mt-20">
              <div className="max-w-4xl mx-auto px-4 text-center">
                 <h2 className="text-4xl font-black text-[#3E2723] mb-4">Get In Touch</h2>
                 <p className="text-slate-500 font-medium mb-16">Questions? Feedback? We're always hungry for a chat.</p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <a 
                      href="https://maps.app.goo.gl/pAguWfwu3S29XM569?g_st=aw" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-50 flex flex-col items-center group hover:-translate-y-2 transition-all cursor-pointer"
                    >
                       <div className="bg-orange-50 p-4 rounded-2xl text-[#E67E22] mb-6 group-hover:bg-[#E67E22] group-hover:text-white transition-colors">
                          <MapPin size={32} />
                       </div>
                       <h4 className="font-black text-[#3E2723] text-lg mb-2">Visit Us</h4>
                       <p className="text-slate-400 text-sm font-medium mb-4">Click to view location<br/>Bengaluru, Karnataka</p>
                       <span className="text-xs font-bold text-[#E67E22] flex items-center gap-1 uppercase tracking-widest">Open Maps <ExternalLink size={12} /></span>
                    </a>
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-50 flex flex-col items-center group hover:-translate-y-2 transition-transform">
                       <div className="bg-orange-50 p-4 rounded-2xl text-[#E67E22] mb-6 group-hover:bg-[#E67E22] group-hover:text-white transition-colors">
                          <Phone size={32} />
                       </div>
                       <h4 className="font-black text-[#3E2723] text-lg mb-2">Call Us</h4>
                       <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Vishwanath</p>
                       <a href="tel:+918150811420" className="text-[#3E2723] font-bold text-lg hover:text-[#E67E22] transition-colors">+91 81508 11420</a>
                       <p className="text-slate-400 text-[10px] mt-2 font-medium">Mon-Sun: 10am-11pm</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-50 flex flex-col items-center group hover:-translate-y-2 transition-transform">
                       <div className="bg-orange-50 p-4 rounded-2xl text-[#E67E22] mb-6 group-hover:bg-[#E67E22] group-hover:text-white transition-colors">
                          <Mail size={32} />
                       </div>
                       <h4 className="font-black text-[#3E2723] text-lg mb-2">Email Us</h4>
                       <p className="text-slate-400 text-sm font-medium">hello@chavis.kitchen<br/>support@chavis.kitchen</p>
                    </div>
                 </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Cart 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {showSuccess && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-emerald-600 text-white px-10 py-5 rounded-[2.5rem] shadow-2xl flex items-center gap-4 animate-bounce border-4 border-white">
          <CheckCircle size={32} />
          <div>
            <h4 className="font-black text-xl">Order Received!</h4>
            <p className="text-sm font-bold opacity-90 uppercase tracking-widest">Cooking up your craving...</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-20">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12">
               <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                     <Utensils size={24} className="text-[#E67E22]" />
                     <h3 className="text-2xl font-black text-[#3E2723]">Chavi's Kitchen</h3>
                  </div>
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Crave. Eat. Repeat.</p>
               </div>
               
               <div className="flex gap-10 font-bold text-slate-500 uppercase tracking-widest text-xs">
                  <a href="#" className="hover:text-[#E67E22]">Menu</a>
                  <a href="#" className="hover:text-[#E67E22]">About</a>
                  <a href="#" className="hover:text-[#E67E22]">Careers</a>
                  <a href="#" className="hover:text-[#E67E22]">Privacy</a>
               </div>

               <div className="flex gap-4">
                  <div className="bg-slate-50 p-3 rounded-2xl text-slate-400 hover:text-[#E67E22] transition-colors cursor-pointer"><Instagram size={20} /></div>
                  <div className="bg-slate-50 p-3 rounded-2xl text-slate-400 hover:text-[#E67E22] transition-colors cursor-pointer"><Facebook size={20} /></div>
                  <div className="bg-slate-50 p-3 rounded-2xl text-slate-400 hover:text-[#E67E22] transition-colors cursor-pointer"><Twitter size={20} /></div>
               </div>
            </div>
            <div className="mt-16 pt-8 border-t border-slate-50 text-center text-slate-300 text-[10px] font-bold tracking-[0.3em] uppercase">
               © 2024 Chavi's Kitchen • Designed for Flavor
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
