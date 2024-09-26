import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

const projectsData = [
    {
        title: 'Forum',
        description:
            'An internet forum for nothing in particular. Post about whatever you want to. Features user authentication, customizable avatars, and pagination amongst other things.',
        image: '/images/forum.png',
        alt: 'Screenshot of my forum project',
        source: 'https://github.com/sagemaxn/forum',
        demo: 'forum.sagemaxn.dev',
    },
    {
        title: 'Portfolio',
        description:
            'This website! A portfolio to introduce myself and show off a few projects. It allows the user to contact me through a form that will email me with nodemailer.',
        image: '/images/portfolio.png',
        alt: 'Screenshot of this website',
        source: 'https://github.com/sagemaxn/portfolio',
        demo: 'sagemaxn.dev',
    },
    {
        title: 'Wordle Clone',
        description:
            'This is a clone of Wordle. Each day at midnight EST a new word will be randomly selected for the game.',
        alt: 'Screenshot of my Wordle clone',
        image: '/images/wordle.png',
        source: 'https://github.com/sagemaxn/wordle-clone',
        demo: 'wordle.sagemaxn.dev',
    },
];

const Project = ({ source, description, image, title, alt, demo, bgColor }) => {
    return (
        <Center
            bg={bgColor}
            borderRadius="lg"
            boxShadow="lg"
            m={[4, 6]}
            p={[4, 6, 8]}
            w="full"
        >
            <Stack
                align="center"
                direction={['column', 'column', 'row']}
                maxW="1000px"
                spacing={[4, 6, 8]}
                w="full"
            >
                <Image
                    alt={alt}
                    borderRadius="md"
                    src={image}
                    w={['100%', '75%', '50%']}
                />
                <Box>
                    <Text fontSize={['lg', 'xl']} fontWeight="bold" mb={2}>
                        {title}
                    </Text>
                    <Text fontSize={['sm', 'md']} mb={4}>
                        {description}
                    </Text>
                    <Stack
                        direction={'row-reverse'}
                        justifyContent={{ base: 'center', sm: 'flex-start' }}
                        spacing={3}
                    >
                        <Link href={source} isExternal>
                            <Button variant="outline" w={'100px'}>
                                Source
                            </Button>
                        </Link>
                        {demo && (
                            <Link href={`https://${demo}`} isExternal>
                                <Button variant="outline" w={'100px'}>
                                    Demo
                                </Button>
                            </Link>
                        )}
                    </Stack>
                </Box>
            </Stack>
        </Center>
    );
};

const Projects = () => {
    const colors = ['#DAD0ED', '#F0F4C3', '#FFCDD2'];

    return (
        <Box id="projects" py={[8, 12]} textAlign="center" w="full">
            <Heading fontSize={['2xl', '3xl', '4xl']} mb={8}>
                Projects
            </Heading>
            <Flex align="center" direction="column">
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
