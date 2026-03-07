import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, LogOut, Package } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const Navbar = () => {
    const { user, logout, cartCount } = useStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="glass-effect sticky top-0 z-50 border-b border-brand-secondary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="bg-brand-secondary p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                        <Package className="text-brand-bg" size={24} />
                    </div>
                    <span className="text-xl font-bold font-serif tracking-tight">
                        <span className="text-brand-secondary">HomeMade</span>
                        <span className="text-brand-primary ml-1">Pickles</span>
                    </span>
                </Link>

                <div className="flex items-center gap-4 md:gap-8">
                    <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-brand-secondary transition-colors hidden sm:block">
                        Shop
                    </Link>

                    <Link to="/cart" className="relative group p-2 text-gray-700 hover:text-brand-primary transition-all">
                        <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-brand-primary text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg animate-in zoom-in">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {user ? (
                        <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                            <span className="text-sm font-medium text-gray-600 hidden md:block">Hi, {user.name}</span>
                            <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 transition-colors p-1" title="Logout">
                                <LogOut size={20} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="flex items-center gap-2 bg-brand-secondary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-800 transition-all shadow-md shadow-brand-secondary/20 active:scale-95">
                            <User size={18} />
                            <span>Sign In</span>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
