import Title from '../components/Title';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Container } from '@chakra-ui/react';

export default function Home() {
    return (
        <>
            <Navbar />
            <Container maxW={'6xl'}>
                <Title />
                <Projects />
                <Contact />
            </Container>
        </>
    );
}
