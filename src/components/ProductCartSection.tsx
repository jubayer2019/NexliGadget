import React, { useState } from 'react';
import { products } from '../constants';
import { Product, CartItem } from '../types';
import { ShoppingBag, Trash2, Plus, Minus, Package, X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductCartSectionProps {
  cart: CartItem[];
  activeTab: 'products' | 'cart';
  setActiveTab: (tab: 'products' | 'cart') => void;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: number) => void;
  onUpdateQuantity: (productId: number, delta: number) => void;
}

export const ProductCartSection: React.FC<ProductCartSectionProps> = ({ 
  cart, 
  activeTab,
  setActiveTab,
  onAddToCart, 
  onRemoveFromCart, 
  onUpdateQuantity 
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const deliveryCharge = 120;
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section id="shop" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-center mb-12">
        <div className="join bg-base-200 p-1 rounded-full">
          <button 
            className={`join-item btn btn-lg rounded-full px-8 border-none ${activeTab === 'products' ? 'btn bg-[#17174B] text-white' : 'btn-ghost'}`}
            onClick={() => setActiveTab('products')}
          >
            <Package className="w-5 h-5 mr-2" /> Products
          </button>
          <button 
            className={`join-item btn btn-lg rounded-full px-8 border-none ${activeTab === 'cart' ? 'btn bg-[#F16B14] text-white' : 'btn-ghost'}`}
            onClick={() => setActiveTab('cart')}
          >
            <ShoppingBag className="w-5 h-5 mr-2" /> Cart ({cart.length})
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'products' ? (
          <motion.div 
            key="products"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <div key={product.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200 group">
                <figure className="px-4 pt-4 overflow-hidden relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="rounded-2xl h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer" 
                    referrerPolicy="no-referrer"
                    onClick={() => setSelectedProduct(product)}
                  />
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="absolute top-6 right-6 btn btn-circle btn-sm  bg-[#17174B] text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-start">
                    <h2 className="card-title text-xl font-bold text-[#FF5733]">{product.name}</h2>
                    <span className="badge border-[#FF5733] text-[#FF5733] badge-outline">{product.category}</span>
                  </div>
                  <p className="text-gray-500 text-sm line-clamp-2">{product.description}</p>
                  <div className="card-actions justify-between items-center mt-4">
                    <span className="text-2xl font-black text-[#17174B]">{product.price} BDT</span>
                    <button 
                      onClick={() => onAddToCart(product)}
                      className="btn bg-[#FF5733] btn-sm rounded-full text-white font-bold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="cart"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-base-100 rounded-3xl shadow-xl p-6 md:p-10 border border-base-200"
          >
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <ShoppingBag className="w-20 h-20 mx-auto text-gray-300 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-[#17174B]">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Looks like you haven't added any gadgets yet.</p>
                <button 
                  onClick={() => setActiveTab('products')}
                  className="btn bg-[#FF5733] rounded-full px-8 text-white font-bold"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-grow space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 bg-base-200/50 p-4 rounded-2xl">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 rounded-xl object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-grow">
                        <h4 className="font-bold text-lg text-[#17174B]">{item.name}</h4>
                        <p className="text-[#17174B] font-bold">{item.price} BDT</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="join bg-base-100 border border-base-300">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="join-item btn btn-xs btn-ghost"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="join-item px-3 flex items-center font-bold text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="join-item btn btn-xs btn-ghost"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemoveFromCart(item.id)}
                          className="btn btn-ghost btn-circle btn-sm text-error"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="lg:w-80 bg-base-200 p-6 rounded-3xl h-fit">
                  <h3 className="text-xl font-bold mb-6 text-secondary">Order Summary</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="font-bold text-secondary">{cartTotal} BDT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Delivery Charge</span>
                      <span className="font-bold text-secondary">{deliveryCharge} BDT</span>
                    </div>
                    <div className="divider"></div>
                    <div className="flex justify-between text-xl">
                      <span className="font-bold text-secondary">Total</span>
                      <span className="font-black text-primary">{(cartTotal + deliveryCharge)} BDT</span>
                    </div>
                  </div>
                  <button className="btn btn-primary w-full rounded-full btn-lg text-secondary font-bold">
                    Checkout Now
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="modal modal-open">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="modal-box max-w-4xl p-0 overflow-hidden rounded-3xl"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="btn btn-sm btn-circle absolute right-4 top-4 z-50 bg-secondary text-white border-none"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover min-h-[300px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <span className="badge badge-primary badge-outline mb-4">{selectedProduct.category}</span>
                  <h3 className="text-3xl font-black text-secondary mb-4">{selectedProduct.name}</h3>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-primary">{selectedProduct.price} BDT</span>
                    <button 
                      onClick={() => {
                        onAddToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="btn btn-primary rounded-full px-8 text-secondary font-bold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="modal-backdrop bg-secondary/80" onClick={() => setSelectedProduct(null)}></div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
