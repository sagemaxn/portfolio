import { useState } from 'react';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

const info = {
    Developer:
        'a developer with a passion for computers. I owe what I know to great resources such as The Odin Project and Full Stack Open. Along the way, I decided to pursue a computer science degree, which has made me a better developer all around.',
    Plant: 'a European perennial mint (Salvia officinalis) with grayish-green aromatic leaves used especially in flavoring meats. Merriam Webster Dictionary',
};
const Title = () => {
    const [toggle, setToggle] = useState(true);
    const handleClick = () => {
        setToggle(!toggle);
    };

    return (
        <Flex
            flexDirection={['column', 'column', 'row']}
            justifyContent={['space-between']}
        >
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                padding={['50px 0', '100px 0', '200px 0']}
            >
                <Heading
                    fontFamily="Dosis"
                    fontSize={['4xl', '6xl', '80px']}
                    mb={4}
                    zIndex="1"
                >
                    Sage is...
                </Heading>
                <Box cursor="pointer" onClick={handleClick}>
                    <Text
                        fontFamily="Dosis"
                        fontSize={['1xl', '2xl', '3xl']}
                        zIndex="5"
                    >
                        {toggle ? info.Developer : info.Plant}
                    </Text>
                </Box>
            </Flex>
            <Image src={'/images/laptop.svg'}></Image>
        </Flex>
    );
};
export default Title;
