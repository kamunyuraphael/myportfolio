import { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import profileImg from '../assets/images/my_image.jpg';
import '../index.css';

const NAV_LINKS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
];

const Navigation = () => {
    const [activeId, setActiveId] = useState('home');

    useEffect(() => {
        const sectionIds = [...NAV_LINKS.map((l) => l.id), 'contact'];
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActiveId(visible[0].target.id);
                }
            },
            { rootMargin: '-84px 0px -55% 0px', threshold: [0.1, 0.25, 0.5] }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <Navbar collapseOnSelect expand='lg' bg='dark' variant="dark" fixed="top" className="py-3">
            <Container>
                {/* Brand with profile image */}
                <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
                    <img src={profileImg} alt="Profile" width="40" height="40" className="rounded-circle shadow-sm" />
                    <span className="fw-bold">Raphael Kamau</span>
                </Navbar.Brand>

                {/* Toggle ("Hamburger" Icon) */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                {/* Links (Collapse automatically on mobile) */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-lg-center">
                        {NAV_LINKS.map(({ id, label }) => (
                            <Nav.Link
                                key={id}
                                href={`#${id}`}
                                className={activeId === id ? 'active' : ''}
                                aria-current={activeId === id ? 'page' : undefined}
                            >
                                {label}
                            </Nav.Link>
                        ))}
                        <Nav.Link
                            href="#contact"
                            className={`nav-cta ${activeId === 'contact' ? 'active' : ''}`}
                            aria-current={activeId === 'contact' ? 'page' : undefined}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
