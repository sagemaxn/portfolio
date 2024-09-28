import { Box } from '@chakra-ui/react';
import React from 'react';

const Background = () => (
    <>
        {/* Mountain at bottom */}
        <Box
            bgImage="url('/images/mountain.svg')"
            bgPosition={'bottom'}
            bgRepeat="repeat-x"
            bgSize="contain"
            bottom={0}
            h={['200px', '250px', '400px']}
            left={0}
            position="absolute"
            w="100%"
            zIndex={-1}
        />
    </>
);

export default Background;
