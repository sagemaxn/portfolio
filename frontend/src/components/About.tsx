import React from 'react';
import {
    Box,
    Container,
    Heading,
    Icon,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const skills = [
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'TypeScript',
    'NextJS',
    'Node',
    'Express',
    'GraphQL',
    'Apollo',
    'MongoDB',
    'Mongoose',
    'SQL',
    'PostgreSQL',
    'Chakra-UI',
    'Bootstrap',
    'Linux',
    'Jest',
    'Cypress',
];

export default function About() {
    const headingFontSize = useBreakpointValue({ base: '2xl', md: '3xl' });
    const textFontSize = useBreakpointValue({ base: 'md', md: 'xl' });

    return (
        <Container maxWidth={'1200px'} mt={6} px={{ base: 4, md: 8 }}>
            <Stack spacing={6}>
                <Heading fontSize={headingFontSize}>About Me</Heading>
                <Text color={'gray.600'} fontSize={textFontSize}>
                    My name is Sage Maxwell. I&apos;m a self-taught web
                    developer with a passion for computers. The reality of being
                    self taught is using the plethora of information that is
                    available to anyone, but having the commitment and
                    dedication to learn for yourself. Over a decade decade ago I
                    played around with coding but after some soul searching and
                    figuring out what I want to do, I made my way back to it.
                    Were you ever told as a kid that you could &quot;do
                    anything&quot;? Talk about confusing. <br />
                    Originally I learned frontend work only, but expanded to
                    learning the backend with Node.js, Express, and GraphQL.
                    This has further cemented my understanding of programming
                    and made me a better developer all around. I owe what I know
                    to great resources such as{' '}
                    <Link href={'https://www.theodinproject.com/'} isExternal>
                        <b>The Odin Project</b>
                    </Link>{' '}
                    and{' '}
                    <Link href={'https://fullstackopen.com/en/'} isExternal>
                        <b>Full Stack Open</b>
                    </Link>
                    .
                </Text>
            </Stack>

            <Box mt={10}>
                <SimpleGrid
                    columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
                    spacing={6}
                >
                    {skills.map((skill, index) => (
                        <Box
                            _hover={{
                                transform: 'scale(1.05)',
                                boxShadow: 'md',
                            }}
                            alignItems="center"
                            bg="gray.100"
                            borderRadius="md"
                            display="flex"
                            fontSize={[12, 15, 18]}
                            key={index}
                            p={4}
                        >
                            <Icon
                                as={CheckIcon}
                                color="green.400"
                                h={[4, 6]}
                                w={[4, 6]}
                            />
                            <Text fontWeight={600} ml={4}>
                                {skill}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>
            </Box>
        </Container>
    );
}
