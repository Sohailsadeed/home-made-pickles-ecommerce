import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-secondary text-brand-bg py-20 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-2xl font-bold font-serif mb-6 italic">HomeMade <span className="text-brand-accent">Pickles</span></h3>
                    <p className="text-sm text-brand-bg/70 leading-relaxed mb-6">
                        Preserving traditions and delivering authentic homemade flavors to your doorstep since 1995.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-brand-accent uppercase tracking-widest text-xs mb-6 px-1 border-l-2 border-brand-accent">Explore</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><a href="/" className="hover:text-brand-accent transition-colors">All Products</a></li>
                        <li><a href="/cart" className="hover:text-brand-accent transition-colors">Your Cart</a></li>
                        <li><a href="#" className="hover:text-brand-accent transition-colors">Snacks Collection</a></li>
                        <li><a href="#" className="hover:text-brand-accent transition-colors">Pickle Varieties</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-brand-accent uppercase tracking-widest text-xs mb-6 px-1 border-l-2 border-brand-accent">Help</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><a href="#" className="hover:text-brand-accent transition-colors">Shipping Policy</a></li>
                        <li><a href="#" className="hover:text-brand-accent transition-colors">Return Information</a></li>
                        <li><a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-brand-accent uppercase tracking-widest text-xs mb-6 px-1 border-l-2 border-brand-accent">Say Hello</h4>
                    <ul className="space-y-4 text-sm font-medium opacity-90">
                        <li className="flex items-center gap-3">
                            <span className="text-brand-accent">Email:</span> hello@homemadepickles.com
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-brand-accent">Phone:</span> +1 (555) 234-PICKLE
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-brand-bg/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-brand-bg/40">
                <p>&copy; {new Date().getFullYear()} HomeMade Pickles & Snacks Co.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-brand-bg transition-colors">Instagram</a>
                    <a href="#" className="hover:text-brand-bg transition-colors">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
