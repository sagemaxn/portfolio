import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';

const Title = () => {
    return (
        <Flex
            alignItems="center"
            bgColor="#0F172A"
            justifyContent="space-around"
            p={6}
        >
            <Box>
                <Heading fontFamily="Dosis" fontSize="80px" mb={4} zIndex="5" color={'white'}>
                    Sage Maxwell
                </Heading>
                <Heading fontFamily="Dosis" fontSize="50px" zIndex="5" color={'white'}>
                    Full Stack Developer
                </Heading>
            </Box>
            <Box borderRadius="full" boxShadow="xl" overflow="hidden">
                <Image
                    alt="Sage Maxwell Portrait"
                    height={250}
                    objectFit="cover"
                    src="/path_to_your_portrait.jpg"
                    width={250}
                />
            </Box>
        </Flex>
    );
};

export default Title;
