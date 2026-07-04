import { Container } from 'react-bootstrap';

const Footer = () => {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    return (
        <footer className='py-4 bg-dark text-white text-center mt-auto'>
            <Container>
                <div className='footer-content'>
                    <p className='mb-0 text-secondary'>
                        &copy; {currentYear} Raphael Kamau Kamunyu — Built with React &amp; TypeScript.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;