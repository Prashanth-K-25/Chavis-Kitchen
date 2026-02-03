
import React from 'react';
import { Package, Search, ShoppingBag } from 'lucide-react';
import { Order, OrderStatus } from '../types';

interface AdminDashboardProps {
  orders: Order[];
  onUpdateStatus: (orderId: string, status: OrderStatus) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ orders, onUpdateStatus }) => {
  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PENDING: return 'bg-amber-100 text-amber-700 border-amber-200';
      case OrderStatus.PREPARING: return 'bg-blue-100 text-blue-700 border-blue-200';
      case OrderStatus.READY: return 'bg-orange-100 text-orange-700 border-orange-200';
      case OrderStatus.DELIVERED: return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case OrderStatus.CANCELLED: return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const sortedOrders = [...orders].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl font-black text-[#3E2723]">Incoming Orders</h2>
          <p className="text-slate-500 font-medium">Dashboard for Chavi's Kitchen Management</p>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder="Search orders..." 
            className="pl-12 pr-6 py-3.5 rounded-2xl border border-slate-200 w-full md:w-80 focus:ring-4 focus:ring-orange-100 outline-none transition-all font-medium"
          />
        </div>
      </div>

      <div className="space-y-6">
        {sortedOrders.length === 0 ? (
          <div className="bg-white rounded-[2.5rem] p-20 text-center border-4 border-dashed border-slate-100">
            <ShoppingBag className="mx-auto text-slate-100 mb-6" size={80} />
            <h3 className="text-2xl font-black text-slate-400 uppercase tracking-widest">No active orders</h3>
          </div>
        ) : (
          sortedOrders.map(order => (
            <div key={order.id} className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-100/50 overflow-hidden group hover:border-orange-200 transition-colors">
              <div className="p-8">
                <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">
                  <div className="flex items-start gap-5">
                    <div className="bg-slate-900 p-4 rounded-2xl text-white group-hover:bg-[#E67E22] transition-colors">
                      <Package size={28} />
                    </div>
                    <div>
                      <h4 className="font-black text-[#3E2723] text-2xl tracking-tight">Order {order.id}</h4>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">{new Date(order.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`px-5 py-2 rounded-full text-[10px] font-black border uppercase tracking-[0.2em] ${getStatusColor(order.status)}`}>
                      {order.status}
                    </div>
                    <select 
                      value={order.status}
                      onChange={(e) => onUpdateStatus(order.id, e.target.value as OrderStatus)}
                      className="bg-white border-2 border-slate-100 text-sm font-bold rounded-2xl px-4 py-2 focus:outline-none focus:ring-4 focus:ring-orange-50 active:scale-95 transition-all"
                    >
                      {Object.values(OrderStatus).map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Recipient Information</h5>
                    <p className="font-black text-[#3E2723] text-xl mb-2">{order.customerName}</p>
                    <p className="text-slate-500 font-medium leading-relaxed">{order.address}</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Order Summary</h5>
                    <div className="space-y-4">
                      {order.items.map(item => (
                        <div key={item.id} className="flex justify-between items-center text-sm">
                          <span className="text-slate-600 font-bold"><span className="text-[#E67E22] font-black pr-2">{item.quantity}x</span> {item.name}</span>
                          <span className="text-slate-400 font-bold tracking-tighter">₹{(item.price * item.quantity)}</span>
                        </div>
                      ))}
                      <div className="border-t-2 border-slate-50 mt-4 pt-4 flex justify-between items-center font-black text-2xl text-[#3E2723] tracking-tighter">
                        <span>Total Paid</span>
                        <span className="text-[#E67E22]">₹{order.total}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
