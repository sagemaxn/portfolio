import About from '../components/About';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Container } from '@chakra-ui/react';

export default function Home() {
    return (
        <>
            <Navbar />
            <Container maxW={'6xl'}>
                <About />
                <Projects />
                <Contact />
            </Container>
        </>
    );
}
