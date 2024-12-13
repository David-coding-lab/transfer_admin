import {
    Box,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    Button,
    IconButton
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from '@chakra-ui/icons';
import MetricCard from '../Components/MetricCard';
import NetUsers from '../assets/image18.png';
import NewUsersIcon from '../assets/Vector.png';
import activeUserIcon from '../assets/check.png';
import inActiveUserIcon from '../assets/user.png';
import Graph from '../Components/Graph';
import { useState } from 'react';
import UserComponent from '../Components/UserComponent';
import { UserList } from '../Data/Transactoins';

function Customers({setFullDetails, setShowFullDetails}) {
    const [searchText, setSearchText] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 100;

    // Filtered user list based on search text
    const filteredUsers = UserList.filter(user =>
        user.PersonalInfo.Name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.PersonalInfo.EmailAddress.toLowerCase().includes(searchText.toLowerCase()) ||
        user.PersonalInfo.PhoneNumber.includes(searchText) ||
        user.PersonalInfo.BVN.includes(searchText)
    );

    // Calculate pagination slices
    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentUsers = filteredUsers.slice(startIndex, endIndex);

    // Display users
    const displayUsers = currentUsers.map((user, index) => (
        <UserComponent
            key={index}
            UserName={user.PersonalInfo.Name}
            UserEmail={user.PersonalInfo.EmailAddress}
            UserPhone={user.PersonalInfo.PhoneNumber}
            UserBVN={user.PersonalInfo.BVN}
            userStatus={user.PersonalInfo.Status}
            UserId={user.PersonalInfo.UserID}
            index={index}
            setFullDetails={setFullDetails}
            setShowFullDetails={setShowFullDetails}
            UserList={UserList}
        />
    ));

    const chartData = [
        { month: 'January', Transaction: 186 * 100 },
        { month: 'February', Transaction: 302 * 100 },
        { month: 'March', Transaction: 2370 * 100 },
        { month: 'April', Transaction: 733 * 100 },
        { month: 'May', Transaction: 2033 * 100 },
        { month: 'June', Transaction: 213 * 100 },
        { month: 'July', Transaction: 213 * 100 },
        { month: 'August', Transaction: 213 * 100 },
        { month: 'September', Transaction: 213 * 100 },
        { month: 'October', Transaction: 213 * 100 },
        { month: 'November', Transaction: 213 * 100 },
        { month: 'December', Transaction: 213 * 100 }
    ];

    return (
        <Box>
            <Flex paddingInline="20px" justifyContent="space-between" mt="20px">
                <MetricCard MetricsImg={NetUsers} MetricsValue="0" MerticsTitle="Net User" />
                <MetricCard MetricsImg={activeUserIcon} MetricsValue="0" MerticsTitle="Total Active" />
                <MetricCard MetricsImg={inActiveUserIcon} MetricsValue="0" MerticsTitle="Total Inactive" />
                <MetricCard MetricsImg={NewUsersIcon} MetricsValue="0" MerticsTitle="New Users" />
            </Flex>

            <Box marginBlock="20px" paddingInline="20px" justifyContent="space-between" w="flex">
                <Graph GraphData={chartData} GraphTitle="Customers Growth Rate" IsMoneyRelatedGraph={false} />
            </Box>

            <Box
                h="auto"
                borderRadius="lg"
                marginInline="20px"
                border="1px solid #E6E9EE"
                w="auto"
                p={4}
                boxSizing="border-box"
            >
                <Flex pl="20px" justifyContent="space-between">
                    <Heading fontSize="18px" color="msn.300" mt="15px">
                        User List
                    </Heading>

                    <InputGroup width="340px" height="45px">
                        <Input
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            borderRadius="28px"
                            placeholder="Search"
                            bg="#F5F5F5"
                            color="#49454F"
                            _placeholder={{ color: '#49454F' }}
                            border="none"
                            height="100%"
                            paddingRight="40px"
                        />
                        <InputRightElement
                            height="100%"
                            width="40px"
                            display="flex"
                            paddingRight="20px"
                            alignItems="center"
                            justifyContent="center"
                            cursor="pointer"
                        >
                            <SearchIcon color="#49454F" />
                        </InputRightElement>
                    </InputGroup>
                </Flex>

                <Flex paddingInline="20px" mt="20px" color="rgba(18, 27, 40, .5);" justifyContent="space-between">
                    <Text>Name</Text>
                    <Text>Email</Text>
                    <Text>Phone</Text>
                    <Text>BVN</Text>
                    <Text>Status</Text>
                </Flex>

                <Box overflowX="auto" h="500px" w="100%">
                    {displayUsers}
                </Box>

                <Flex justifyContent="center" mt="20px">
                    <IconButton
                        icon={<ChevronLeftIcon />}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        isDisabled={currentPage === 1}
                        aria-label="Previous page"
                    />
                    <Text mx="10px" alignSelf="center">
                        Page {currentPage} of {totalPages}
                    </Text>
                    <IconButton
                        icon={<ChevronRightIcon />}
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        isDisabled={currentPage === totalPages}
                        aria-label="Next page"
                    />
                </Flex>
            </Box>
        </Box>
    );
}

export default Customers;
