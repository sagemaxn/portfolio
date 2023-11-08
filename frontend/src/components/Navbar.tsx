import React, { useRef } from 'react';
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
    const isWideVersion = useBreakpointValue({ base: false, md: true });
    const handleScroll = sectionId => {
        if (sectionId === 'about') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            const section = document.getElementById(sectionId);
            const navbarHeight = navbarRef.current?.offsetHeight || 0;

            if (section) {
                const offsetTop = section.offsetTop;
                window.scrollTo({
                    top: offsetTop - navbarHeight,
                    behavior: 'smooth',
                });
            }
        }
    };

    return (
        <Flex
            alignItems="center"
            bg={'white'}
            boxShadow="sm"
            padding="1rem"
            position="sticky"
            ref={navbarRef}
            top="0"
            zIndex="100"
        >
            <Box fontWeight={'bold'}>sagemaxn@gmail.com</Box>
            <Spacer />

            {isWideVersion ? (
                <>
                    <Box
                        cursor="pointer"
                        ml="1rem"
                        onClick={() => handleScroll('about')}
                    >
                        About
                    </Box>
                    <Box
                        cursor="pointer"
                        ml="1rem"
                        onClick={() => handleScroll('projects')}
                    >
                        Projects
                    </Box>
                    <Box
                        cursor="pointer"
                        ml="1rem"
                        onClick={() => handleScroll('contact')}
                    >
                        Contact
                    </Box>
                    <Link
                        href="https://github.com/sagemaxn"
                        isExternal
                        ml="1rem"
                    >
                        <Icon as={FaGithub} boxSize={6} />
                    </Link>
                </>
            ) : (
                <Menu>
                    <MenuButton
                        aria-label="Options"
                        as={IconButton}
                        borderColor={'black'}
                        color={'black'}
                        icon={<HamburgerIcon />}
                        variant="outline"
                    />
                    <MenuList>
                        <MenuItem onClick={() => handleScroll('about')}>
                            About
                        </MenuItem>
                        <MenuItem onClick={() => handleScroll('projects')}>
                            Projects
                        </MenuItem>
                        <MenuItem onClick={() => handleScroll('contact')}>
                            Contact
                        </MenuItem>
                        <MenuItem
                            as={Link}
                            href="https://github.com/sagemaxn"
                            isExternal
                        >
                            GitHub <Icon as={FaGithub} ml={2} />
                        </MenuItem>
                    </MenuList>
                </Menu>
            )}
        </Flex>
    );
};

export default Navbar;
