import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-5 bg-white">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10} xl={8} className="about-text">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-eyebrow">About</span>
                            <h2 className="display-5 fw-bold mb-3">Who I Am</h2>
                            <div className="section-rule" />

                            <p className="lead mb-4">
                                Hello and welcome to my portfolio. I'm <strong>Raphael Kamau Kamunyu</strong>,
                                a Computer Science Student at Mount Kenya University and a Full Stack Developer 
                                focused on building predictive, reliable, and user-centered web applications.
                            </p>

                            <p className='mb-4 text-secondary'>
                                I have specialized in TypeScript-driven full-stack architectures (MERN), integrating 
                                Python-based predictive logic and geospatial tools to deliver actionable insights. 
                                My work spans predictive energy monitoring, interactive mapping for environmental 
                                impact, and component-driven developer tooling.
                            </p>

                            <p className='mb-5 text-secondary'>
                                I enjoy turning data into clear actionable insights and building robust systems that 
                                scale. Explore my projects below or download my CV for a detailed overview.
                            </p>

                            <Button as="a" // This tells Bootstrap to render an <a> tag instead of a <button>
                                href='/my_resume.pdf' 
                                download="raphael_cv.pdf" 
                                variant="outline-dark" 
                                size='lg' 
                                className='px-4 py-2'
                            >
                                Download CV
                            </Button>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;