import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCode } from 'react-icons/fa';

const Education = () => {
    return (
        <section id='education' className='py-5 bg-white'>
            <Container>
                {/* Section Header */}
                <div className="mb-5">
                    <span className="section-eyebrow">Background</span>
                    <h2 className='fw-bold mb-2 text-dark'>Education &amp; Certifications</h2>
                    <div className="section-rule" style={{ margin: 0 }} />
                </div>

                <Row className="g-5">
                    {/* Left Column: Formal & Professional Education */}
                    <Col lg={7}>
                        <div className="position-relative ps-4 border-start border-2 border-primary-subtle">
                            
                            {/* Item 1: Degree */}
                            <motion.div 
                                className="mb-5 position-relative"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                {/* Timeline Node Icon */}
                                <div className="position-absolute timeline-node bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
                                     style={{ width: '32px', height: '32px', left: '-41px', top: '2px' }}>
                                    <FaGraduationCap size={16} />
                                </div>
                                
                                <span className="badge bg-primary bg-opacity-10 text-primary mb-2 px-2 py-1 small fw-semibold">2024 — 2027</span>
                                <h3 className='h5 fw-bold text-dark mb-1'>Bachelor of Science in Computer Science</h3>
                                <p className='text-secondary mb-1 fw-medium'>Mount Kenya University <span className="text-muted text-opacity-70">| Thika, Kenya</span></p>
                                <p className="text-muted small">Expected Graduation: August 2027</p>
                            </motion.div>

                            {/* Item 2: Full-Stack Bootcamp */}
                            <motion.div 
                                className="position-relative"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                {/* Timeline Node Icon */}
                                <div className="position-absolute timeline-node bg-dark text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" 
                                     style={{ width: '32px', height: '32px', left: '-41px', top: '2px' }}>
                                    <FaCode size={14} />
                                </div>

                                <span className="badge bg-dark bg-opacity-10 text-dark mb-2 px-2 py-1 small fw-semibold">Jul 2025 — Nov 2025</span>
                                <h3 className='h5 fw-bold text-dark mb-1'>Professional Certificate in Full-Stack Software Development</h3>
                                <p className='text-secondary mb-1 fw-medium'>Power Learn Project (PLP) Africa <span className="text-muted text-opacity-70">| Remote</span></p>
                                <p className="text-muted small">Intensive technical training focused on local impact and comprehensive web architectures.</p>
                            </motion.div>

                        </div>
                    </Col>

                    {/* Right Column: Certifications Grid */}
                    <Col lg={5}>
                        <motion.div 
                            className="p-4 bg-light rounded-4 shadow-sm border border-light-subtle h-100"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="h5 fw-bold text-dark mb-4 d-flex align-items-center gap-2">
                                <FaCertificate className="text-primary" /> Professional Certifications
                            </h3>
                            
                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                <li className="pb-3 border-bottom border-light-subtle">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <p className="mb-0 fw-semibold text-dark small">Basics of Machine Learning</p>
                                            <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>UniAthena</p>
                                        </div>
                                        <Badge bg="secondary" className="bg-opacity-10 text-secondary fw-normal">Feb 2026</Badge>
                                    </div>
                                </li>
                                <li className="pb-3 border-bottom border-light-subtle">
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <p className="mb-0 fw-semibold text-dark small">Basics of Python</p>
                                            <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>UniAthena</p>
                                        </div>
                                        <Badge bg="secondary" className="bg-opacity-10 text-secondary fw-normal">Feb 2026</Badge>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                            <p className="mb-0 fw-semibold text-dark small">Basics of AI</p>
                                            <p className="text-muted mb-0" style={{ fontSize: '0.8rem' }}>UniAthena</p>
                                        </div>
                                        <Badge bg="warning" className="bg-opacity-10 text-warning fw-medium">Ongoing</Badge>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Education;