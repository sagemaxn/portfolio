import React from 'react'
import {Heading, Grid} from '@chakra-ui/react'

const Title = () => { 
    return (
        <Grid gridTemplate="repeat(12, minmax(0,1fr))/ repeat(12, minmax(0,1fr))" width="100%" fontFamily="Dosis" background="linear-gradient(0deg, rgba(9,9,121,0) 50%, rgba(255,133,64,1) 50%)">
            
            <Heading  zIndex="5" gridArea="4 / 1 / 20 / 20" fontSize="80px" fontFamily="Dosis" fontWeight="bold">Sage Maxwell
            </Heading>
            <div style={{borderRadius:"100%", backgroundColor:"#ff6961", gridArea:"2 / 7 / 12 / 7", height:"300px", width: "300px", zIndex:4}}> </div>
            <Heading  zIndex="5" gridArea="7 / 1 / 20 / 20" fontSize="80px" fontFamily="Dosis">Full Stack Developer</Heading>
      
      </Grid>
    )
}

export default Title
