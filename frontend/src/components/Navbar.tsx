import { Box, Flex, Icon, Link, Spacer } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa'; // First, make sure to install react-icons

const Navbar = () => {
    const handleScroll = sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Flex
            alignItems="center"
            bg={'white'}
            boxShadow="sm"
            padding="1rem"
            position="sticky"
            top="0"
            zIndex="100"
        >
            <Box fontSize="xl" fontWeight="bold">
                Sage Maxwell
            </Box>
            <Spacer />
            <Box
                cursor="pointer"
                marginLeft="1rem"
                onClick={() => handleScroll('about')}
            >
                About
            </Box>
            <Box
                cursor="pointer"
                marginLeft="1rem"
                onClick={() => handleScroll('skills')}
            >
                Skills
            </Box>
            <Box
                cursor="pointer"
                marginLeft="1rem"
                onClick={() => handleScroll('projects')}
            >
                Projects
            </Box>
            <Box
                cursor="pointer"
                marginLeft="1rem"
                onClick={() => handleScroll('contact')}
            >
                Contact
            </Box>
            <Link
                href="https://github.com/your_username_here"
                isExternal
                marginLeft="1rem"
            >
                <Icon as={FaGithub} boxSize={6} />
            </Link>
        </Flex>
    );
};

export default Navbar;
