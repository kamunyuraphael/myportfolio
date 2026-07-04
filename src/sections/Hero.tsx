import { Container, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../index.css';

const Hero = () => {
    return (
        <section id="home" className='hero vh-100 d-flex align-items-center'>
            <Container className='text-center'>
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="section-eyebrow">Full-Stack Developer · Kenya</span>
                    <h1 className="hero-text display-4 fw-bold mb-4">
                        Full-stack systems for predictive, environmental & AIoT applications
                    </h1>

                    <p className='hero-text lead mb-4 mx-auto' style={{ maxWidth: '700px' }}>
                        <strong>Raphael Kamau Kamunyu</strong> — I build MERN &amp; TypeScript applications that turn sensor, geospatial, and predictive data into tools people can actually act on.
                    </p>

                    {/* Social Icons */}
                    <div className="fs-2 mb-5 d-flex justify-content-center gap-4">
                        <a href="https://linkedin.com/in/raphael-kamau-kamunyu" target='_blank' rel='noreferrer' className='text-light'>
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/Raphael-Kamau" target='_blank' rel='noreferrer' className='text-light'>
                            <FaGithub />
                        </a>
                    </div>

                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <Button variant="primary" size='lg' href="#projects" className='px-5 shadow'>
                            See My Work
                        </Button>
                        <Button variant="outline-light" size='lg' href="#contact" className='px-5'>
                            Get In Touch
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
};

export default Hero;
