import About from '../components/About';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Background from '../components/Background';
import dynamic from 'next/dynamic';
//currently a hydration issue with this component
const Contact = dynamic(() => import('../components/Contact'), {
    ssr: false,
});
import { Container } from '@chakra-ui/react';

export default function Home() {
    return (
        <>
            <Background />
            <Navbar />
            <Container maxW={['6xl']}>
                <About />
                <Projects />
                <Contact />
            </Container>
        </>
    );
}
