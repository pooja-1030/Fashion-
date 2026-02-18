import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: 'Silk Evening Gown',
        price: '$1,200',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 2,
        name: 'Tailored Blazer',
        price: '$850',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 3,
        name: 'Cashmere Sweater',
        price: '$450',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
    {
        id: 4,
        name: 'Leather Handbag',
        price: '$950',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    },
];

export const NewArrivals = () => {
    return (
        <section className="container" style={{ paddingBottom: '120px' }}>
            <h2 className="section-title">New Arrivals</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                }}
            >
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{ cursor: 'pointer' }}
                    >
                        <div style={{ overflow: 'hidden', marginBottom: '15px' }}>
                            <motion.img
                                src={product.image}
                                alt={product.name}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                            />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '5px', fontWeight: '500' }}>{product.name}</h3>
                        <p style={{ color: 'var(--accent-color)', fontWeight: '600' }}>{product.price}</p>
                    </motion.div>
                ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <button className="btn btn-secondary">View All Products</button>
            </div>
        </section>
    );
};
