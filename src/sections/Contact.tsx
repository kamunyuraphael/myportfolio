import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '../types/form';
import type { ContactFormData } from '../types/form';

const Contact = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        console.log('Form Data:', data);
        alert("Thank you! Your message has been sent.");
        reset();
    };

    return (
        <section id="contact" className='py-5 bg-white'>
            <Container>
                <div className="text-center mb-5">
                    <span className="section-eyebrow">Contact</span>
                    <h2 className="fw-bold">Get In Touch</h2>
                    <div className="section-rule mx-auto" />
                </div>
                <Row className="g-4">
                    <Col lg={7}>
                        <Card className="p-4 shadow-sm border-0">
                            <h3>Send Me a Message</h3>
                            <Form onSubmit={handleSubmit(onSubmit)} className='mt-3'>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control {...register('name')} isInvalid={!!errors.name} placeholder="Enter your name" />
                                    <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback> 
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Your Email</Form.Label>
                                    <Form.Control {...register('email')} isInvalid={!!errors.email} placeholder='Enter your email' />
                                    <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control {...register('subject')} isInvalid={!!errors.subject} placeholder="Message subject" />
                                    <Form.Control.Feedback type="invalid">{errors.subject?.message}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className='mb-3'>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" rows={5} {...register('message')} isInvalid={!!errors.message} placeholder="Write your message here" />
                                    <Form.Control.Feedback type="invalid">{errors.message?.message}</Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : '📨 Send Message'}
                                </Button>
                            </Form>
                        </Card>
                    </Col>

                    <Col lg={5}>
                        <Card className='p-4 shadow-sm border-0 h-100 bg-light text-center'>
                            <h3>Professional Profiles</h3>
                            <p className="mt-4">I'm open to collaborations and freelance work.</p>
                            <div className='d-grid gap-3'>
                                <Button variant='outline-dark' href='https://linkedin.com/in/raphael-kamau-kamunyu' target="_blank" rel="noopener noreferrer">LinkedIn</Button>
                                <Button variant='outline-dark' href='https://github.com/kamunyuraphael' target="_blank">GitHub</Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
