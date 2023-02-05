import React from 'react';
import { Box, Grid, Heading } from '@chakra-ui/react';

const Title = () => {
    return (
        <Grid
            background="linear-gradient(0deg, rgba(9,9,121,0) 50%, rgba(255,133,64,1) 50%)"
            fontFamily="Dosis"
            gridTemplate="repeat(12, minmax(0,1fr))/ repeat(12, minmax(0,1fr))"
            width="100%"
        >
            <Heading
                fontFamily="Dosis"
                fontSize="80px"
                fontWeight="bold"
                gridArea="4 / 1 / 20 / 20"
                zIndex="5"
            >
                Sage Maxwell
            </Heading>
            <Box
                style={{
                    borderRadius: '100%',
                    backgroundColor: '#ff6961',
                    gridArea: '2 / 7 / 12 / 7',
                    height: '300px',
                    width: '300px',
                    zIndex: 4,
                }}
            >
                {' '}
            </Box>
            <Heading
                fontFamily="Dosis"
                fontSize="80px"
                gridArea="7 / 1 / 20 / 20"
                zIndex="5"
            >
                Full Stack Developer
            </Heading>
        </Grid>
    );
};

export default Title;
