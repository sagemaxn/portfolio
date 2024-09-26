import { useEffect, useState } from 'react';
import { Box, Fade, Flex, Heading, Image, Text } from '@chakra-ui/react';

const info = {
    Developer:
        'a developer with a passion for computers. I owe what I know to great resources such as The Odin Project and Full Stack Open. Along the way, I decided to pursue a computer science degree, which has made me a better developer all around.',
    Plant: 'a European perennial mint (Salvia officinalis) with grayish-green aromatic leaves used especially in flavoring meats.\n\n-Merriam Webster Dictionary',
};

const useTypingEffect = (text, delay, toggle) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setCurrentText('');
        setCurrentIndex(0);
    }, [text, toggle]);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return currentText;
};

const About = () => {
    const [toggle, setToggle] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const handleClick = () => {
        setFadeOut(true);
        setTimeout(() => {
            setToggle(prev => !prev);
            setFadeOut(false);
        }, 300);
    };

    const typingText = useTypingEffect(
        toggle ? info.Developer : info.Plant,
        15,
        toggle,
    );

    return (
        <Flex
            alignItems="center"
            direction={['column', 'column', 'row']}
            justifyContent="space-between"
            maxW="1200px"
            mx="auto"
            p={[4, 6, 8]}
        >
            <Box
                flex="1"
                mb={[4, 4, 0]}
                p={[2, 4, 6]}
                textAlign={['center', 'center', 'left']}
            >
                <Heading
                    fontSize={['2xl', '3xl', '4xl']}
                    lineHeight="shorter"
                    mb={4}
                >
                    Sage is...
                </Heading>
                <Fade in={!fadeOut}>
                    <Text
                        cursor="pointer"
                        fontSize={['md', 'lg', 'xl']}
                        lineHeight="tall"
                        onClick={handleClick}
                        whiteSpace="pre-wrap"
                    >
                        {typingText}
                    </Text>
                </Fade>
            </Box>
            <Box
                alignItems="center"
                display="flex"
                flex="1"
                justifyContent="center"
                maxW={['100%', '80%', '50%']}
                p={[2, 4, 6]}
            >
                <Image
                    boxSize={['150px', '250px', '400px']}
                    objectFit="contain"
                    src="/images/laptop.svg"
                />
            </Box>
        </Flex>
    );
};

export default About;
