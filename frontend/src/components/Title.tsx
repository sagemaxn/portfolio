import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import Image from 'next/image';

const Title = () => {
    return (
        <Flex
            alignItems="center"
            bgColor="#ff6961"
            justifyContent="space-around"
            p={6}
        >
            <Box>
                <Heading fontFamily="Dosis" fontSize="80px" mb={4} zIndex="5">
                    Sage Maxwell
                </Heading>
                <Heading fontFamily="Dosis" fontSize="80px" zIndex="5">
                    Full Stack Developer
                </Heading>
            </Box>
            <Box borderRadius="full" boxShadow="xl" overflow="hidden">
                <Image
                    alt="Sage Maxwell Portrait"
                    height={250}
                    objectFit="cover"
                    src="/path_to_your_portrait.jpg"
                    width={250} // adjust dimensions as required
                />
            </Box>
        </Flex>
    );
};

export default Title;
