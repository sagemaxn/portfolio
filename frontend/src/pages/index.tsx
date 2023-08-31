import { Container } from '@chakra-ui/react';
import Title from '../components/Title';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Navbar />
            <Container maxW={'1200px'}>
                <Title />
                <About />
                {/*<Skills id="skills" />{' '}*/}
                {/* Assuming you have a Skills component. */}
                <Projects />
                <Contact />
            </Container>
        </>
    );
}
