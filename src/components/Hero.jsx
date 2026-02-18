import { motion } from 'framer-motion';

export const Hero = () => {
    return (
        <section
            style={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f0f0f0', // Fallback
                backgroundImage: 'url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                color: 'white',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0,0.3)', // Overlay
                }}
            ></div>

            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{
                        fontSize: '4rem',
                        marginBottom: '20px',
                        color: 'white',
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    }}
                >
                    Elegance Redefined
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    style={{
                        fontSize: '1.2rem',
                        marginBottom: '40px',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        textShadow: '0 1px 5px rgba(0,0,0,0.3)',
                    }}
                >
                    Discover the latest collection designed for the modern individual. Timeless style meets contemporary design.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                >
                    <button className="btn">Shop Collection</button>
                </motion.div>
            </div>
        </section>
    );
};
