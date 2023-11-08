import Title from '../components/Title';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Navbar />
            <Title />
            <About />
            <Projects />
            <Contact />
        </>
    );
}
