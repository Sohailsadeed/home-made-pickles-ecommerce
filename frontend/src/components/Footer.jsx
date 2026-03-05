import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-secondary text-white py-12 mt-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-xl font-bold mb-4">HomeMade Pickles & Snacks</h3>
                    <p className="text-sm text-green-100 italic">"The taste of home, delivered to your doorstep."</p>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-green-100">
                        <li><a href="/" className="hover:text-brand-primary transition-colors">Home</a></li>
                        <li><a href="/cart" className="hover:text-brand-primary transition-colors">Shopping Cart</a></li>
                        <li><a href="#" className="hover:text-brand-primary transition-colors">Shipping Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Contact Us</h4>
                    <ul className="space-y-2 text-sm text-green-100">
                        <li>Email: support@homemadepickles.com</li>
                        <li>Phone: +1 234 567 890</li>
                        <li>Address: 123 Pickle Lane, Snack City</li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-green-700 text-center text-xs text-green-200">
                &copy; {new Date().getFullYear()} HomeMade Pickles & Snacks. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
