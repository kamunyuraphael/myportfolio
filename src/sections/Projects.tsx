import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import type { Project } from '../types/project';

const projects: Project[] = [
    {
        id: 1,
        title: "Smart Energy Monitoring and Prediction System (SEMP)",
        description: "SEMP is a home energy monitoring platform: forecast energy demand, track usage, and visualize consumption patterns to reduce waste. If interested contact fro login details.",
        impact: "Forecasts household energy demand to help cut waste before it happens.",
        tags: ["React", "Type Script", "Node.js", "Python", "MongoDB"],
        link: "https://semp-nu.vercel.app/login",
        live: true,
        github: "https://github.com/kamunyuraphael/SEMP",
        image: "https://res.cloudinary.com/iprdnhzp/image/upload/dashboard_tmvsw1.png"
    },
    {
        id: 2,
        title: "RegenMapper",
        description: "An interactive geospatial tool for tracking reforestation efforts, built with mapping libraries to visualize planting progress and environmental impact.",
        impact: "Turns scattered planting logs into a live map of land under active regeneration.",
        tags: ["React", "Type Script", "Render", "Leaflet.JS"],
        link: "https://regen-mapper-2fbn.vercel.app/",
        live: true,
        github: "https://github.com/kamunyuraphael/regen-mapper",
        image: "https://res.cloudinary.com/duuwn3dzm/image/upload/regen-mapper_wjkyow.png"
    },
    {
        id: 3,
        title: "UIForge",
        description: "A developer-focused component library platform built with TypeScript to ensure strict type safety. Includes RESTful APIs and secure JWT authentication for user-contributed UI elements.",
        impact: "Gives dev teams a shared, type-safe component library instead of copy-pasted UI code.",
        tags: ["Node.js", "React", "TypeScript", "Express"],
        link: "https://ui-forge-pihg.vercel.app/",
        live: true,
        github: "https://github.com/kamunyuraphael/ui-forge",
        image: "https://res.cloudinary.com/duuwn3dzm/image/upload/ui-forge_qyvemj.png"
    },
    {
        id: 4,
        title: "WildSphere",
        description: 'A platform focused on wildlife research, education, and conservation campaigns.',
        impact: "Connects researchers and the public around active wildlife conservation campaigns.",
        tags: ["React", "TypeScript", "Bootstrap"],
        link: "https://wild-sphere.vercel.app/",
        live: true,
        github: "https://github.com/kamunyuraphael/WildSphere",
        image: "https://res.cloudinary.com/duuwn3dzm/image/upload/7adb3bbb-01bc-4bd8-9368-1c7172a97436.png"
    }
];

const Projects = () => {
    return (
        <section id='projects' className='py-5 bg-light'>
            <Container>
                <div className="text-center mb-5">
                    <span className="section-eyebrow">Selected Work</span>
                    <h2 className='fw-bold'>Featured Projects</h2>
                    <div className="section-rule mx-auto" />
                </div>
                <Row className='g-4'>
                    {projects.map((project, index) => (
                        <Col key={project.id} md={6} lg={4}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='h-100'
                            >
                                <Card className='h-100 border-0 shadow-sm overflow-hidden project-card'>
                                    {/* Project Image Wrapper with hover reveal */}
                                    <div className="position-relative overflow-hidden project-card-media">
                                        <Card.Img
                                            variant='top'
                                            src={project.image}
                                            alt={project.title}
                                            className='w-100 h-100 project-card-img'
                                        />
                                        <div className="project-card-overlay">
                                            <p className="mb-0">{project.impact}</p>
                                        </div>
                                        {!project.live && (
                                            <span className="project-status-badge">In Progress</span>
                                        )}
                                    </div>

                                    <Card.Body className='d-flex flex-column'>
                                        <Card.Title className='fw-bold h5 mb-2'>{project.title}</Card.Title>
                                        <Card.Text className='text-secondary flex-grow-1 small'>
                                            {project.description}
                                        </Card.Text>

                                        <div className='mb-3 flex-wrap d-flex gap-1'>
                                            {project.tags.map(tag => (
                                                <Badge key={tag} bg="secondary" className='fw-normal text-dark bg-opacity-10 bg-secondary px-2 py-1'>
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* Dynamic Action Buttons */}
                                        <div className='d-flex gap-2 mt-auto'>
                                            <Button
                                                variant='outline-dark'
                                                size='sm'
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="d-flex align-items-center gap-1"
                                            >
                                                <FaGithub /> Code
                                            </Button>
                                            {project.live && project.link ? (
                                                <Button
                                                    variant='primary'
                                                    size='sm'
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="d-flex align-items-center gap-1"
                                                >
                                                    <FaExternalLinkAlt size={12} /> Live Demo
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant='outline-secondary'
                                                    size='sm'
                                                    disabled
                                                    className="d-flex align-items-center gap-1"
                                                >
                                                    Demo coming soon
                                                </Button>
                                            )}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
