import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react';

const Project = ({ image, source, alt }) => {
    return (
        <Box>
            <Image alt={alt} src={image} w="300px" />
            <Flex justifyContent="space-evenly">
                <Link href={source} isExternal>
                    Source
                </Link>
                <Link>Demo</Link>
            </Flex>
        </Box>
    );
};

const Projects = () => {
    return (
        <>
            <Heading>Projects</Heading>
            <Flex justifyContent="space-between">
                <Project
                    alt=""
                    image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"
                    source="https://github.com/sagemaxn/socialmedia"
                />
                <Project
                    alt=""
                    image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"
                    source=""
                />
                <Project
                    alt=""
                    image="https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png"
                    source=""
                />
            </Flex>
        </>
    );
};

export default Projects;
