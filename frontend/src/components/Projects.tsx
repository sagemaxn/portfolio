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

const Project = ({ source, description, image, title, alt, demo }) => {
    return (
        <Center my={'sm'} p={[2, 4, 6]} w="full">
            <Stack
                align="stretch"
                direction={['column', 'column', 'row']}
                spacing={[2, 4, 6]}
                w="full"
            >
                <Image
                    alt={alt}
                    borderRadius="md"
                    objectFit="cover"
                    src={image}
                    w={['100%', '75%', '50%']}
                />
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="space-between"
                >
                    <Heading fontSize={['xl', '4xl']} fontWeight="bold" mb={2}>
                        {title}
                    </Heading>
                    <Text color={'black'} fontSize={['lg', 'xl']} mb={4}>
                        {description}
                    </Text>

                    <Stack direction={'row'} spacing={3}>
                        <Link href={source} isExternal>
                            <Button w={'100px'}>Source</Button>
                        </Link>
                        {demo && (
                            <Link href={`https://${demo}`} isExternal>
                                <Button w={'100px'}>Demo</Button>
                            </Link>
                        )}
                    </Stack>
                </Box>
            </Stack>
        </Center>
    );
};

const Projects = () => {
    return (
        <Box id="projects" my={['md', 'lg', 'xl']} w="full">
            <Heading fontSize={['4xl', '5xl', '6xl']}>Projects</Heading>
            <Flex align="center" direction="column">
                {projectsData.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </Flex>
        </Box>
    );
};

export default Projects;
