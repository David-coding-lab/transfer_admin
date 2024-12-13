import NotificationIcon from '../assets/carbon_notification-new.png'
import {
    Box,
    Button,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,
    Text,
    Divider,
    HStack,
        VStack
} from '@chakra-ui/react'

import { Link } from "react-router-dom"
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar"
import AdminAvatarIcon from '../assets/avatar.png'

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    const trimmed = text.slice(0, maxLength).trim(); // Trim extra whitespace
    return `${trimmed}...`;
}

function Header({adminInfo}) {
    const AdminAvatar = () =>{return <Avatar name={adminInfo.name} />}
    return (
        <Flex
            w='100%'
            h='80px'
            paddingBlock='20px'
            justifyContent='end'
            borderBottom='1px solid #F0F0F0'
            gap='25px'
        >
            <IconButton border='none' _hover={{bgColor: 'white',outline:'none'}} bgColor='white'><img src={NotificationIcon} /></IconButton>

            <Divider orientation='vertical'/>

            <Flex gap='10px'>
                <VStack alignItems='start' gap='0' fontFamily='Montserrat' fontWeight='600'>
                    <Text>{truncateText(adminInfo.name, 17)}</Text>
                    <Text color='msn.300' ml='auto'>{adminInfo.role}</Text>
                </VStack>

                <AdminAvatar />

                <Menu>
                    <MenuButton bg='white' color='msn.300' fontSize='30px' as={IconButton} _hover={{border: 'none', outline: 'none', bgColor: 'white'}}><ChevronDownIcon/></MenuButton>
                    <MenuList minW='150px' alignItems='center' display='flex' flexDir='column' color='msn.100' fontFamily='Montserrat'>
                        <MenuItem w='130px' as={Link} to="/AdminManagement">Add Admin</MenuItem>
                        <MenuItem w='130px' as={Link} to="/settings">Settings</MenuItem>
                        <MenuItem w='130px' as={Link} color='#B60000' to="/logout">Log Out</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    )
}

export default Header