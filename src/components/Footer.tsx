import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='py-4 bg-dark text-white mt-auto'>
            <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-center text-md-start">
                <p className='mb-0 text-secondary'>
                    &copy; {currentYear} Raphael Kamau Kamunyu — Built with React &amp; TypeScript.
                </p>

                <div className="d-flex align-items-center gap-3 footer-links">
                    <a href="https://linkedin.com/in/raphael-kamau-kamunyu" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={18} />
                    </a>
                    <a href="https://github.com/kamunyuraphael" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={18} />
                    </a>
                    <a href="#home" aria-label="Back to top" className="footer-to-top">
                        <FaArrowUp size={14} />
                    </a>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
