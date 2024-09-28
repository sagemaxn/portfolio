import { useState } from 'react';
import { Box, Fade, Flex, Heading, Image, Text } from '@chakra-ui/react';

const info = {
    Developer:
        'a developer with a passion for computers. I owe what I know to great resources such as The Odin Project and Full Stack Open. Along the way, I decided to pursue a computer science degree, which has made me a better developer all around.',
    Plant: 'an aromatic plant with grayish-green leaves that are used as a culinary herb, native to southern Europe and the Mediterranean.\n\n-Oxford English Dictionary',
    Man: 'a profoundly wise man, especially one who features in ancient history or legend.\n\n-Oxford English Dictionary',
};

const About = () => {
    const [index, setIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);
    const infoKeys = Object.keys(info);

    const handleClick = () => {
        setFadeOut(true);
        setTimeout(() => {
            setIndex(prevIndex => (prevIndex + 1) % infoKeys.length);
            setFadeOut(false);
        }, 300);
    };

    return (
        <Flex
            alignItems="center"
            direction={['column', 'column', 'row']}
            height={['600px', '400px']}
            justifyContent="space-between"
            my={['md', 'lg', 'xl']}
        >
            <Flex direction="column" flex="1" height="100%">
                <Heading fontSize={['5xl', '6xl', '7xl']}>Sage is...</Heading>
                <Flex alignItems="center" flex="1" justifyContent="center">
                    <Fade in={!fadeOut} transition={{ enter: { duration: 2 } }}>
                        <Text
                            color="black"
                            cursor="pointer"
                            fontSize={['lg', 'xl', '2xl']}
                            onClick={handleClick}
                            whiteSpace="pre-wrap"
                        >
                            {info[infoKeys[index]]}
                        </Text>
                    </Fade>
                </Flex>
            </Flex>
            <Box>
                <Image
                    alt={
                        'simple drawing of a laptop with a sage plant on its screen'
                    }
                    height={['300px', '300px', '400px']}
                    objectFit="contain"
                    src="/images/laptop.svg"
                />
            </Box>
        </Flex>
    );
};

export default About;
