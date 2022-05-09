import { Heading, Box, Image, Link, Flex } from '@chakra-ui/react'

const Project = ({image, source, demo, alt}) => {
return <Box>
            <Image src={image} alt={alt} w="300px"/>
            <Flex justifyContent="space-evenly">
            <Link href={source} isExternal>Source</Link>
            <Link>Demo</Link>
            </Flex>
        </Box>
}


const Projects = () => {
    return (
        <>
            <Heading>Projects</Heading>
            <Flex justifyContent="space-between">
            <Project image='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' source='https://github.com/sagemaxn/socialmedia' demo='' alt=''/>
            <Project image='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' source='' demo='' alt=''/>
            <Project image='https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png' source='' demo='' alt=''/>
            </Flex>
        </>
    )
}

export default Projects
