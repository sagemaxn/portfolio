import { useCallback, useRef } from 'react';
import {
    Box,
    Flex,
    Icon,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spacer,
    useBreakpointValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const navbarRef = useRef(null);

    const handleScroll = useCallback(sectionId => {
        const navbarHeight = navbarRef.current?.offsetHeight || 0;
        if (sectionId === 'about') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                const offsetTop = section.offsetTop;
                window.scrollTo({
                    top: offsetTop - navbarHeight,
                    behavior: 'smooth',
                });
            }
        }
    }, []);

    // fallback needed or hydration issues occurs with ssr
    const displayFullBar = useBreakpointValue(
        { base: false, md: true },
        { fallback: 'md' },
    );

    return (
        <Flex
            alignItems="center"
            bg="#F5F5DC"
            padding="1rem"
            position="sticky"
            ref={navbarRef}
            top="0"
            zIndex="100"
        >
            <Box fontWeight={'bold'}>sagemaxn@gmail.com</Box>
            <Spacer />
            {displayFullBar ? (
                <FullBar handleScroll={handleScroll} />
            ) : (
                <Hamburger handleScroll={handleScroll} />
            )}
        </Flex>
    );
};

const FullBar = ({ handleScroll }) => (
    <>
        <Box cursor="pointer" ml="1rem" onClick={() => handleScroll('about')}>
            About
        </Box>
        <Box
            cursor="pointer"
            ml="1rem"
            onClick={() => handleScroll('projects')}
        >
            Projects
        </Box>
        <Box cursor="pointer" ml="1rem" onClick={() => handleScroll('contact')}>
            Contact
        </Box>
        <Link href="https://github.com/sagemaxn" isExternal ml="1rem">
            <Icon as={FaGithub} boxSize={6} />
        </Link>
    </>
);

const Hamburger = ({ handleScroll }) => (
    <Menu>
        <MenuButton
            aria-label="Options"
            as={IconButton}
            color={'black'}
            icon={<HamburgerIcon />}
            variant="outline"
        />
        <MenuList>
            <MenuItem onClick={() => handleScroll('about')}>About</MenuItem>
            <MenuItem onClick={() => handleScroll('projects')}>
                Projects
            </MenuItem>
            <MenuItem onClick={() => handleScroll('contact')}>Contact</MenuItem>
            <MenuItem as={Link} href="https://github.com/sagemaxn" isExternal>
                GitHub <Icon as={FaGithub} ml={2} />
            </MenuItem>
        </MenuList>
    </Menu>
);

export default Navbar;
