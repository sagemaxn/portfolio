import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react';

const projectsData = [
    {
        alt: 'picture of forum project',
        image: '/forum.png',
        source: 'https://github.com/sagemaxn/forum',
        demo: 'https://demo-link-forum-here.com', // You can update this link with your demo's URL.
        title: 'Forum',
    },
    {
        alt: 'Project 2',
        image: '/',
        source: '#',
        demo: '#',
        title: 'Restaurant',
    },
    {
        alt: 'Project 3',
        image: '/',
        source: '#',
        demo: '#',
        title: 'Wordle Clone',
    },
];

const Project = ({ image, source, demo, alt, title, bgColor }) => (
    <Box
        bg={bgColor}
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        marginBottom="2rem"
        overflow="hidden"
        p={4}
        textAlign="center"
        width={'100%'}
    >
        <Heading fontSize={['xl', '2xl']} mb={4}>
            {title}
        </Heading>
        <Image
            alt={alt}
            borderRadius="md"
            height="250px"
            mb={4}
            objectFit="cover"
            src={image}
            width="100%"
        />
        <Flex justifyContent="space-evenly" mt={4}>
            <Link
                color="blue.600"
                href={source}
                isExternal
                textDecoration="none"
            >
                Source
            </Link>
            <Link color="blue.600" href={demo} isExternal textDecoration="none">
                Demo
            </Link>
        </Flex>
    </Box>
);

const Projects = () => {
    const colors = ['gray.100', 'white', 'gray.200'];

    return (
        <Box mt={8} textAlign="center" w={'100%'}>
            <Heading mb={4}>Projects</Heading>
            <Flex alignItems="center" flexDirection="column">
                {projectsData.map((project, index) => (
                    <Project
                        bgColor={colors[index % colors.length]}
                        key={index}
                        {...project}
                    />
                ))}
            </Flex>
        </Box>
    );
};

export default Projects;
