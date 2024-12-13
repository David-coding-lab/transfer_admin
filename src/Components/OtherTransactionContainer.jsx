import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    VStack,
} from "@chakra-ui/react";
import { ChevronDown, SearchIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import BillPaymentIcon from "../assets/electricityIcon.png";
import CableSubIcon from "../assets/shoppingBag.png";
import CardTransactionIcon from "../assets/shoppingBag.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TransactionComponent({
    TransactorName,
    TransactorImg,
    TransactionStatus,
    TransactionType,
    TransactionDate,
    TransactionAmount,
    setFullDetails,
    setShowFullDetails,
    Transactions,
    index,
}) {
    return (
        <Flex
            w="100%"
            h="50px"
            alignItems="center"
            mt="35px"
            cursor='pointer'
            onClick={()=>{
                setFullDetails(Transactions[index])
                setShowFullDetails('OtherTransactions')
            }}
        >
            <Flex>
                <Avatar src={TransactorImg} />
                <VStack ml="5px" w="400px" gap="5px" alignItems="start">
                    <Text fontWeight="medium" w="200px">{TransactorName}</Text>
                    <Text
                        fontSize="12px"
                        color={
                            TransactionStatus === "Approved"
                                ? "#009F00"
                                : TransactionStatus === "Decline"
                                ? "#B60000"
                                : TransactionStatus === "Pending" && "#FFC107"
                        }
                    >
                        {TransactionStatus}
                    </Text>
                </VStack>
            </Flex>
            <Flex justifyContent="space-between" w="100%">
                <HStack gap="80px">
                    {TransactionType === "Card Transaction" ? (
                        <Image w="30px" src={CardTransactionIcon} />
                    ) : TransactionType === "Electricity bill" ? (
                        <Image w="30px" src={BillPaymentIcon} />
                    ) : (
                        TransactionType === "Cable Subscription" && <Image w="30px" src={CableSubIcon} />
                    )}
                    <Text color="rgba(18, 27, 40, 0.4)">{TransactionType}</Text>
                </HStack>

                <Text color="rgba(18, 27, 40, 0.4)" textAlign="end">{TransactionDate}</Text>

                <Text
                    color={
                        TransactionStatus === "Approved"
                            ? "#009F00"
                            : TransactionStatus === "Decline"
                            ? "#B60000"
                            : TransactionStatus === "Pending" && "#FFC107"
                    }
                    fontWeight="medium"
                    textAlign="end"
                >
                    {TransactionAmount}
                </Text>
            </Flex>
        </Flex>
    );
}

function OtherTransactionContainer({ Title, Transactions, IsOnTransactionPage, IsOnPendingTransactions, setFullDetails, setShowFullDetails }) {
    const [searchText, setSearchText] = useState("");
    const currentDate = new Date();
    const [selectedDate, setSelectedDate] = useState(currentDate.toLocaleString());
    const [selectedStatus, setSelectedStatus] = useState("All Status");

    const formatDate = (date) => {
        if (!date) return ""; // Handle invalid dates
        const d = new Date(date);
        return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
    };

    const filteredTransactions = Transactions.filter((transaction) => {
        const statusMatch = selectedStatus === "All Status" || transaction.transactionStatus === selectedStatus;
        const dateMatch = selectedDate
            ? formatDate(new Date(transaction.transactionDate)) === formatDate(new Date(selectedDate))
            : true;
        const searchMatch =
            transaction.transactorName.toLowerCase().includes(searchText.toLowerCase()) ||
            transaction.transactionType.toLowerCase().includes(searchText.toLowerCase());
        return statusMatch && dateMatch && searchMatch;
    });

    const TransactionData = filteredTransactions.map((transaction, index) => (
        <TransactionComponent
            TransactorImg={transaction.transactorImg}
            TransactorName={transaction.transactorName}
            TransactionStatus={transaction.transactionStatus}
            TransactionType={transaction.transactionType}
            TransactionDate={transaction.transactionDate}
            TransactionAmount={transaction.transactionAmount}
            key={index}
            index={index}
            Transactions={Transactions}
            setFullDetails={setFullDetails}
            setShowFullDetails={setShowFullDetails}
        />
    ));

    return (
        <Box
            h="auto"
            borderRadius="lg"
            border="1px solid #E6E9EE"
            paddingLeft="35px"
            w="1250px"
            p={4}
            boxSizing="border-box"
        >
            <Flex paddingRight="10px" gap="220px" justifyContent="space-between">
                <VStack alignItems="start" gap="1px">
                    <Heading fontSize="18px" color="msn.300" mt="15px">{Title}</Heading>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="MM/dd/yyyy"
                        customInput={
                            <Button
                                fontSize="12px"
                                p="0"
                                h="fit-content"
                                bgColor="white"
                                _hover={{ bgColor: "white" }}
                                border="none"
                                borderRadius="0"
                                color="rgba(18, 27, 40, 0.4)"
                            >
                                {selectedDate ? formatDate(selectedDate) : "Select Date"}
                            </Button>
                        }
                        popperPlacement="bottom"
                    />
                </VStack>

                <InputGroup width="340px" height="45px">
                    <Input
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        borderRadius="28px"
                        placeholder="Search"
                        bg="#F5F5F5"
                        color="#49454F"
                        _placeholder={{ color: "#49454F" }}
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

                {IsOnPendingTransactions ? null : IsOnTransactionPage ? (
                    <Menu>
                        <MenuButton
                            as={Button}
                            ml="95px"
                            bgColor="white"
                            _hover={{ backgroundColor: "white" }}
                            border="none"
                            color="msn.300"
                            rightIcon={<ChevronDown />}
                        >
                            {selectedStatus}
                        </MenuButton>
                        <MenuList minW="150px" alignItems="center">
                            <MenuItem onClick={() => setSelectedStatus("All Status")}>All Status</MenuItem>
                            <MenuItem onClick={() => setSelectedStatus("Approved")} color="green">Approved</MenuItem>
                            <MenuItem onClick={() => setSelectedStatus("Decline")} color="red">Declined</MenuItem>
                            <MenuItem onClick={() => setSelectedStatus("Pending")} color="orange">Pending</MenuItem>
                        </MenuList>
                    </Menu>
                ) : (
                    <Link to="/Transaction"><Text w="200px" ml="50px" textAlign="end" color="blue">View all</Text></Link>
                )}
            </Flex>

            <Flex marginTop="20px" color="#1A202C" justifyContent="space-between">
                <Text w="500px">Name</Text>
                <Flex justifyContent="space-between" w="100%">
                    <Text w="270px" textAlign="end">Type</Text>
                    <Text w="100px" textAlign="end">Date</Text>
                    <Text>Amount</Text>
                </Flex>
            </Flex>

            <Box h="auto">
                {TransactionData}
            </Box>
        </Box>
    );
}

export default OtherTransactionContainer;
