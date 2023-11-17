import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    StackDirection,
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
    const stackDirection = useBreakpointValue({
        base: 'column',
        md: 'row',
    }) as StackDirection;
    const imageSize = useBreakpointValue({ base: '100%', md: '500px' });

    return (
        <Center
            backgroundColor={bgColor}
            borderWidth="1px"
            m={3}
            p={5}
            shadow="md"
            w="full"
        >
            <Stack
                direction={stackDirection}
                maxW={'1000px'}
                spacing={6}
                w="full"
            >
                <Image alt={alt} src={image} w={imageSize} />
                <Box>
                    <Text fontSize="xl" fontWeight="bold">
                        {title}
                    </Text>
                    <Text mt={4}>{description}</Text>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        mt={4}
                        spacing={3}
                    >
                        <Link href={source} isExternal>
                            <Button>Source</Button>
                        </Link>
                        {demo && (
                            <Link href={`https://${demo}`} isExternal>
                                <Button>Demo</Button>
                            </Link>
                        )}
                    </Stack>
                </Box>
            </Stack>
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
