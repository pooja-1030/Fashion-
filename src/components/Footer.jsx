import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--primary-color)', color: 'white', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>

                {/* Brand */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'white', letterSpacing: '2px' }}>LUXE.</h3>
                    <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.8' }}>
                        Redefining luxury for the modern era. Sustainable, ethical, and timeless fashion.
                    </p>
                </div>

                {/* Shop Links */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'white' }}>Shop</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><a href="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>Women</a></li>
                        <li><a href="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>Men</a></li>
                        <li><a href="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>Accessories</a></li>
                        <li><a href="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>New Arrivals</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'white' }}>Support</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><a href="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>Contact Us</a></li>
                        <li><a href="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>Shipping & Returns</a></li>
                        <li><a href="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>FAQ</a></li>
                        <li><a href="#" style={{ color: '#aaa', fontSize: '0.9rem' }}>Size Guide</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'white' }}>Newsletter</h4>
                    <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '15px' }}>Subscribe for the latest updates and exclusive offers.</p>
                    <form style={{ display: 'flex' }}>
                        <input
                            type="email"
                            placeholder="Your email"
                            style={{
                                padding: '10px',
                                border: 'none',
                                outline: 'none',
                                backgroundColor: '#333',
                                color: 'white',
                                flex: 1
                            }}
                        />
                        <button
                            type="button"
                            style={{
                                padding: '10px 20px',
                                backgroundColor: 'var(--accent-color)',
                                color: 'white',
                                border: 'none',
                                fontWeight: '600'
                            }}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="container" style={{ borderTop: '1px solid #333', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                <p style={{ color: '#777', fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} LUXE. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Facebook size={20} color="#777" style={{ cursor: 'pointer' }} />
                    <Instagram size={20} color="#777" style={{ cursor: 'pointer' }} />
                    <Twitter size={20} color="#777" style={{ cursor: 'pointer' }} />
                </div>
            </div>
        </footer>
    );
};
