import React from 'react';
import { Box, Heading, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
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
];

export default function About() {
    return (
        <Box p={8}>
            <Stack spacing={6} textAlign="center">
                <Heading fontSize={'3xl'}>About</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, p
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                </Text>
            </Stack>

            <Box mt={10}>
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    spacing={6}
                >
                    {skills.map((skill, index) => (
                        <Box
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
