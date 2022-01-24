import {
  Container,
} from "@chakra-ui/react";
import Title from "../components/Title";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects"
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Container maxW="container.lg" borderTop="black solid 10px" padding="0">
        <Title />
        <About />
        <Projects />
        <Contact />
      </Container>
    </>
  );
}
