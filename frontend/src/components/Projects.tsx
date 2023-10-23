import { Box, Flex, Heading, Image, Link, Spacer, Button, Text, Center } from '@chakra-ui/react';

const projectsData = [
    {
        title: 'Forum',
        description: 'A forum built with NextJS, Apollo, TypeGraphQL and Chakra UI. Users can create an account and then login to browse. Change your avatar to preset options and make your own threads or posts!',
        image: '/forum.png',
        alt: 'picture of forum project',
        source: 'https://github.com/sagemaxn/forum',
        demo: 'https://demo-link-forum-here.com',
    },
    {
        title: 'Restaurant',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum',
        image: '/forum.png',
        alt: 'Project 2',
        source: '#',
        demo: '#',
    },
    {
        title: 'Wordle Clone',
        description: 'lorem ipsum lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum lorem',
        alt: 'Project 3',
        image: '/forum.png',
        source: '#',
        demo: '#',
    },
];

const Project = ({ source, description, image, title, alt, demo }) => {
    return (
        <Center borderWidth="1px" m={3} p={5} shadow="md" w="100%" >
            <Box w={'1000px'}>
            <Flex direction="row">
                <Image
                    w="500px"
                    src={image}
                    alt={alt}
                    mr={6}
                />
                <Box>
                    <Text fontSize="xl" fontWeight="bold">
                        {title}
                    </Text>
                    <Text mt={4}>{description}</Text>
                    <Spacer />
                    <Flex mt={4} direction="row">
                        <Link href={demo} isExternal>
                            <Button mr={3}>
                                Demo
                            </Button>
                        </Link>
                        <Link href={source} isExternal>
                            <Button>
                                Source
                            </Button>
                        </Link>
                    </Flex>
                </Box>
            </Flex>
            </Box>
        </Center>
    );
};


const Projects = () => {
    const colors = ['gray.200', 'white', 'gray.200'];

    return (
        <Box id={'projects'} mt={8} textAlign="center" w={'100%'}>
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
