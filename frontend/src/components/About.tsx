import React from 'react';
import {
    Box,
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
        <Box id={'about'} p={8}>
            <Stack spacing={6}>
                <Heading fontSize={'3xl'}>About Me</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    My name is Sage Maxwell. I am a self taught web developer
                    with a passion for computers and trying not to be too
                    hyperfixated on what I'm currently learning. When I was a
                    teenager I played around with Python but after some soul
                    searching and figuring out what I want to do, I made my way
                    back to programming. Were you ever told as a kid that you
                    could "do anything"? Talk about confusing. <br />
                    Originally I learned frontend work only with a focus on
                    React, but expanded to learning Node.js with Express and
                    Graphql. This has further cemented my understanding of how
                    to interact with APIs and made me a better frontend
                    developer for it. I owe what I know to great resources such
                    as{' '}
                    <Link href={'https://www.theodinproject.com/'}>
                        The Odin Project
                    </Link>{' '}
                    and{' '}
                    <Link href={'https://fullstackopen.com/en/'}>
                        Fullstackopen
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
                            }} // Hover effect added
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
        </Box>
    );
}
