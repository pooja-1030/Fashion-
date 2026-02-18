import { motion } from 'framer-motion';

const collections = [
    {
        id: 1,
        title: 'Women',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 2,
        title: 'Men',
        image: 'https://images.unsplash.com/photo-1516257984-b1b4d8c9230c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 3,
        title: 'Accessories',
        image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
];

export const FeaturedCollections = () => {
    return (
        <section className="container">
            <h2 className="section-title">Featured Collections</h2>
            <div
                className="collections-grid"
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '30px',
                }}
            >
                {collections.map((collection, index) => (
                    <motion.div
                        key={collection.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            position: 'relative',
                            height: '400px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}
                    >
                        <motion.img
                            src={collection.image}
                            alt={collection.title}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0,0.2)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transition: 'background-color 0.3s',
                            }}
                            className="collection-overlay"
                        >
                            <h3
                                style={{
                                    color: 'white',
                                    fontSize: '2rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    borderBottom: '2px solid white',
                                    paddingBottom: '5px',
                                }}
                            >
                                {collection.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
            <style>{`
        .collections-grid > div:hover .collection-overlay {
          background-color: rgba(0,0,0,0.4);
        }
      `}</style>
        </section>
    );
};
