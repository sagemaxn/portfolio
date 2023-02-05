import React from 'react';

import {
    Box,
    Container,
    Heading,
    HStack,
    Icon,
    SimpleGrid,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const b = [
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
];

const features = b.map((x, i) => ({ id: i, skill: x }));

export default function About() {
    return (
        <Box p={4}>
            <Stack as={Container} maxW={'3xl'} spacing={4} textAlign={'center'}>
                <Heading fontSize={'3xl'}>About</Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                </Text>
            </Stack>

            <Container maxW={'6xl'} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    {features.map(feature => (
                        <HStack align={'top'} key={feature.id}>
                            <Box color={'green.400'} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={'start'}>
                                <Text fontWeight={600}>{feature.skill}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
