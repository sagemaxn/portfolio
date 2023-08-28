import { Box, Button, Flex, Heading, Image, Link } from '@chakra-ui/react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';

const projectsData = [
    {
        alt: 'picture of forum project',
        image: '/forum.png',
        source: 'https://github.com/sagemaxn/forum',
        title: 'Forum',
    },
    {
        alt: 'Project 2',
        image: '/',
        source: '#',
        title: 'Restaurant',
    },
    {
        alt: 'Project 3',
        image: '/',
        source: '#',
        title: 'Wordle Clone',
    },
];
const Project = ({ image, source, alt, title }) => (
    <Box borderRadius="md" p={4} textAlign="center" width={['90%', '80%']}>
        <Heading fontSize={['xl', '2xl']} mb={4}>
            {title}
        </Heading>
        <Image
            alt={alt}
            borderRadius="md"
            mb={4}
            objectFit="cover"
            src={image}
        />
        <Flex justifyContent="space-evenly" mt={4}>
            <Link href={source} isExternal>
                Source
            </Link>
            <Link>Demo</Link>
        </Flex>
    </Box>
);

const Projects = () => {
    const [current, setCurrent] = useState(0);

    const prevProject = () => {
        setCurrent(current === 0 ? projectsData.length - 1 : current - 1);
    };

    const nextProject = () => {
        setCurrent(current === projectsData.length - 1 ? 0 : current + 1);
    };

    return (
        <Box mt={8} textAlign="center">
            <Heading mb={4}>Projects</Heading>
            <Flex
                alignItems="center"
                justifyContent="center"
                position="relative"
            >
                <Button
                    left="0"
                    leftIcon={<FiArrowLeft />}
                    onClick={prevProject}
                    position="absolute"
                    zIndex="1"
                />
                <Project {...projectsData[current]} />
                <Button
                    onClick={nextProject}
                    position="absolute"
                    right="0"
                    rightIcon={<FiArrowRight />}
                    zIndex="1"
                />
            </Flex>
        </Box>
    );
};

export default Projects;
