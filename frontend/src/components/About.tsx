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
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const skills = [
    'Javascript',
    'HTML',
    'CSS',
    'React',
    'NextJS',
    'Node',
    'Express',
    'GraphQL',
    'Apollo',
    'Chakra-UI',
    'Bootstrap',
    'Linux',
    'Jest',
    'Cypress',
];

export default function About() {
    return (
        <Container id={'about'} maxWidth={'1200px'}>
            <Stack spacing={6}>
                <Heading fontSize={'3xl'}>About Me</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    My name is Sage Maxwell. I am a self taught web developer
                    with a passion for computers and trying not to be too
                    hyperfixated on what I'm currently learning. Over a decade ago I played around with coding but after some soul
                    searching and figuring out what I want to do, I made my way
                    back to it. Were you ever told as a kid that you
                    could "do anything"? Talk about confusing. <br />
                    Originally I learned frontend work only with a focus on
                    React, but expanded to learning Node.js with Express and
                    Graphql. This has further cemented my understanding of programming and made me a better
                    developer all around. I owe what I know to great resources such
                    as{' '}
                    <Link href={'https://www.theodinproject.com/'}>
                        <b>The Odin Project</b>
                    </Link>{' '}
                    and{' '}
                    <Link href={'https://fullstackopen.com/en/'}>
                        <b>Full Stack Open</b>
                    </Link>
                    .
                </Text>
            </Stack>

            <Box mt={10}>
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
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
                            key={index}
                            p={4}
                        >
                            <Icon
                                as={CheckIcon}
                                color="green.400"
                                h={6}
                                w={6}
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
