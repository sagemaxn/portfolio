import {
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from '@chakra-ui/react';
import ChevronDownIcon from '@chakra-ui/icon';

const Navbar = () => {
    return (
        <Flex flexDir="row-reverse">
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Menu
                </MenuButton>
                <MenuList>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Projects</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};

export default Navbar;
