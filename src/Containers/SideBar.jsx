import AppLogo from '../assets/fintech-logo.png';
import {
    Container,
    Image,
    Tabs,
    TabList,
    Tab,
    HStack,
    Box
} from '@chakra-ui/react';
import { NavLink, useLocation } from 'react-router-dom';
import DashboardIcon from '../assets/Dashboard-icon.png';
import TransactionIcon from '../assets/transaction-icon.png';
import CardsIcon from '../assets/cards-icon.png';
import UtilityIcon from '../assets/Electr.png';
import CablesSubIcon from '../assets/image 17-1.png';
import CustomersIcon from '../assets/image 17-3.png';
import AdminManagementIcon from '../assets/image 17-4.png';
import SettingsIcon from '../assets/image 17-5.png';

function SideBar() {
    const location = useLocation();

    const menuItems = [
        { label: 'Dashboard', icon: DashboardIcon, path: '/Dashboard' },
        { label: 'Transaction', icon: TransactionIcon, path: '/Transaction' },
        { label: 'Cards', icon: CardsIcon, path: '/Cards' },
        { label: 'Utility', icon: UtilityIcon, path: '/Utility' },
        { label: 'Cable Subscription', icon: CablesSubIcon, path: '/CableSubscription' },
        { label: 'Customers', icon: CustomersIcon, path: '/Customers' },
        { label: 'Admin Management', icon: AdminManagementIcon, path: '/AdminManagement' },
        { label: 'Settings', icon: SettingsIcon, path: '/Settings' },
    ];

    return (
        <Box
            w="300px"
            h="100%"
            display="flex"
            flexDir="column"
            bgColor="#FCFCFC"
            p="0"
            pt="15px"
        >
            <Image w="150px" marginInline="auto" mb="14px" src={AppLogo} />

            <HStack>
                <Tabs orientation="vertical" variant="unstyled" as="nav">
                <TabList gap="10px" alignItems="start">
                    {menuItems.map((item) => (
                    <Tab
                        as={NavLink}
                        to={item.path}
                        key={item.label}
                        _hover={{ bgColor: '#fff' }}
                        gap="10px"
                        width="300px"
                        h="60px"
                        justifyContent="start"
                        _activeLink={{
                        bgColor: 'white'
                        }}
                    >
                        {location.pathname === item.path && (
                        <Box
                            w="10px"
                            borderTopLeftRadius="8px"
                            borderBottomLeftRadius="8px"
                            bgColor="#3182CE"
                            h="100%"
                        />
                        )}
                        <Image src={item.icon} alt={item.label} /> {item.label}
                    </Tab>
                    ))}
                </TabList>
                </Tabs>
            </HStack>
        </Box>
    );
}

export default SideBar;
