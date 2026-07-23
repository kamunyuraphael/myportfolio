import { Container, Row, Col, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { skills } from '../data/skillsData';

const Skills = () => {
    return (
        <section id='skills' className='py-5 bg-light'>
            <Container>
                <div className="text-center mb-5">
                    <span className="section-eyebrow">Stack</span>
                    <h2 className="fw-bold">Technical Skills</h2>
                    <div className="section-rule mx-auto" />
                </div>
                <Row className="g-4 justify-content-center">
                    {skills.map((skill, index) => (
                        <Col key={skill.name} xs={6} md={4} lg={2} className="text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                viewport={{ once: true }}
                                className="p-4 bg-white rounded shadow-sm hover-shadow transition h-100"
                            >
                                <skill.icon size={40} className='mb-3 text-primary' />
                                <h5 className='mb-2'>{skill.name}</h5>
                                <Badge bg={skill.category === 'Frontend' ? 'info' : 'dark'}>
                                    {skill.category}
                                </Badge>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;