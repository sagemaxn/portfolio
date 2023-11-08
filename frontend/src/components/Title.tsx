import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Title = () => {
    return (
        <Flex
            alignItems="center"
            bgColor="blue"
            flexDirection={['column', 'row']}
            justifyContent={['center', 'space-around']}
            p={[4, 6]}
        >
            <Box mb={[4, 4, 0]} textAlign={['center', 'center', 'left']}>
                <Heading
                    color={'white'}
                    fontFamily="Dosis"
                    fontSize={['4xl', '6xl', '80px']}
                    mb={4}
                    zIndex="5"
                >
                    Sage Maxwell
                </Heading>
                <Heading
                    color={'white'}
                    fontFamily="Dosis"
                    fontSize={['2xl', '3xl', '50px']}
                    zIndex="5"
                >
                    Full Stack Developer
                </Heading>
            </Box>
            <Box
                height={['100px', '150px', 'auto']}
                position="relative"
                width={['200px', '200px', 'auto']}
            >
                <Box
                    bg="white"
                    borderRadius="full"
                    boxShadow="xl"
                    h={['100px', '150px', '200px']} // Smaller circle on smaller screens
                    left="50%"
                    position="absolute"
                    top="50%"
                    transform="translate(-50%, -50%)"
                    w={['100px', '150px', '200px']} // Smaller circle on smaller screens
                />
                <Box
                    bg="blue"
                    borderRadius="full"
                    h={['100px', '150px', '200px']} // Smaller circle on smaller screens
                    left={['60%']} // Adjust position for responsiveness
                    position="absolute"
                    top="50%"
                    transform={[
                        'translate(-50%, -50%)',
                        'translate(-50%, -50%)',
                        'translate(-30%, -50%)',
                    ]}
                    w={['100px', '150px', '200px']} // Smaller circle on smaller screens
                />
            </Box>
        </Flex>
    );
};

export default Title;
