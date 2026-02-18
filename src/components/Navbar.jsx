import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Shop', href: '#' },
        { name: 'Collections', href: '#' },
        { name: 'About', href: '#' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                padding: isScrolled ? '15px 0' : '25px 0',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'var(--font-heading)', letterSpacing: '2px' }}>
                    LUXE.
                </a>

                {/* Desktop Menu */}
                <ul style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <li key={link.name} className="hide-mobile">
                            <a
                                href={link.href}
                                style={{
                                    fontSize: '0.9rem',
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    position: 'relative',
                                }}
                                className="nav-link"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Icons */}
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <Search size={20} style={{ cursor: 'pointer' }} />
                    <div style={{ position: 'relative', cursor: 'pointer' }}>
                        <ShoppingBag size={20} />
                        <span
                            style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-8px',
                                backgroundColor: 'var(--accent-color)',
                                color: 'white',
                                fontSize: '0.7rem',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            0
                        </span>
                    </div>
                    <Menu
                        size={24}
                        className="mobile-menu-btn"
                        style={{ cursor: 'pointer', display: 'none' }} // Hidden by default, shown in media query via CSS
                        onClick={() => setIsMobileMenuOpen(true)}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.4 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '100%',
                            height: '100vh',
                            backgroundColor: 'white',
                            zIndex: 1001,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <X
                            size={32}
                            style={{ position: 'absolute', top: '30px', right: '30px', cursor: 'pointer' }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center' }}>
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--primary-color)' }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu .hide-mobile {
            display: none;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
        </nav>
    );
};
