import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { contactSchema } from '../types/form';
import type { ContactFormData } from '../types/form';

// Real contact details
const CONTACT_EMAIL = 'kamunyuraphael@yahoo.com';
const WHATSAPP_NUMBER = '254742250184'; // international format, no + or spaces

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

type SubmitStatus = 'idle' | 'success' | 'error' | 'not-configured';

const Contact = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });
    const [status, setStatus] = useState<SubmitStatus>('idle');

    useEffect(() => {
        if (status === 'idle') return;
        const timer = setTimeout(() => setStatus('idle'), 6000);
        return () => clearTimeout(timer);
    }, [status]);

    const onSubmit = async (data: ContactFormData) => {
        // Bots fill hidden fields; humans never see this one. Drop silently.
        if (data.honeypot) {
            reset();
            setStatus('success');
            return;
        }

        if (!WEB3FORMS_ACCESS_KEY) {
            setStatus('not-configured');
            return;
        }

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                    from_name: 'Portfolio Contact Form',
                }),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('success');
                reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
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

                            {status === 'success' && (
                                <Alert variant="success" onClose={() => setStatus('idle')} dismissible className="mt-3">
                                    Thanks for reaching out! Your message has been sent. I'll get back to you soon.
                                </Alert>
                            )}
                            {status === 'error' && (
                                <Alert variant="danger" onClose={() => setStatus('idle')} dismissible className="mt-3">
                                    Something went wrong sending your message. Please try again, or email me directly.
                                </Alert>
                            )}
                            {status === 'not-configured' && (
                                <Alert variant="warning" className="mt-3">
                                    Something went wrong.
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit(onSubmit)} className='mt-3'>
                                {/* Honeypot: hidden from real visitors via CSS, but bots will fill it in. */}
                                <Form.Control
                                    type="text"
                                    {...register('honeypot')}
                                    tabIndex={-1}
                                    autoComplete="off"
                                    style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                                    aria-hidden="true"
                                />

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
                        <Card className='p-4 shadow-sm border-0 h-100 bg-light text-center contact-links-card'>
                            <h3>Let's Connect</h3>
                            <p className="mt-3 mb-4">I'm open to collaborations and freelance work, reach out however's easiest for you.</p>
                            <div className='d-grid gap-3'>
                                <Button
                                    variant='primary'
                                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="d-flex align-items-center justify-content-center gap-2"
                                >
                                    <FaWhatsapp size={18} /> WhatsApp
                                </Button>
                                <Button
                                    variant='outline-dark'
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="d-flex align-items-center justify-content-center gap-2"
                                >
                                    <FaEnvelope size={16} /> Email
                                </Button>
                                <Button
                                    variant='outline-dark'
                                    href='https://linkedin.com/in/raphael-kamau-kamunyu'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="d-flex align-items-center justify-content-center gap-2"
                                >
                                    <FaLinkedin size={16} /> LinkedIn
                                </Button>
                                <Button
                                    variant='outline-dark'
                                    href='https://github.com/kamunyuraphael'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="d-flex align-items-center justify-content-center gap-2"
                                >
                                    <FaGithub size={16} /> GitHub
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
