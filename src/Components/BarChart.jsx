import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { Calendar, ChevronDown } from "lucide-react";
import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";

function BarGraph({ GraphData }) {
    const [graphMonth, setGraphMonth] = useState(6);

    return (
    <Box borderWidth="1px" borderRadius="lg" w="800px" mr="20px" p={4}>
        <Flex mb={4} alignItems="center" paddingInline="10px" justifyContent="space-between">
        <Heading fontSize="18px" color="msn.300" marginBlock="15px">
            Transaction Volume
        </Heading>
        <HStack gap="20px">
            <Text border="1px solid #E6E9EE" p="10px 15px" color="#AFAFAF" borderRadius="8px">
            Month
            </Text>
            <Menu>
            <Button
                as={MenuButton}
                _hover={{ bgColor: "white", borderColor: "inherit" }}
                gap="5px"
                bgColor="white"
                border="1px solid #E6E9EE"
                color="#AFAFAF"
                borderRadius="8px"
            >
                <HStack>
                <Calendar />
                <Text>{graphMonth} Months</Text>
                <ChevronDown />
                </HStack>
            </Button>
            <MenuList
                minW="150px"
                gap="10px"
                alignItems="center"
                display="flex"
                flexDir="column"
                color="msn.100"
                fontFamily="Montserrat"
            >
                <MenuItem
                _hover={{ bgColor: "white", borderColor: "inherit" }}
                w="130px"
                onClick={() => setGraphMonth(3)}
                >
                3 Months
                </MenuItem>
                <MenuItem
                _hover={{ bgColor: "white", borderColor: "inherit" }}
                w="130px"
                onClick={() => setGraphMonth(6)}
                >
                6 Months
                </MenuItem>
                <MenuItem
                _hover={{ bgColor: "white", borderColor: "inherit" }}
                w="130px"
                onClick={() => setGraphMonth(9)}
                >
                9 Months
                </MenuItem>
                <MenuItem
                _hover={{ bgColor: "white", borderColor: "inherit" }}
                w="130px"
                onClick={() => setGraphMonth(12)}
                >
                12 Months
                </MenuItem>
            </MenuList>
            </Menu>
        </HStack>
        </Flex>

        <ResponsiveContainer width="100%" height={300}>
        <BarChart
            data={GraphData.slice(0, graphMonth)}
            margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
            <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3354F4" />
                <stop offset="100%" stopColor="#E6EEF5" />
            </linearGradient>
            </defs>
            {/* CartesianGrid with horizontal dashed lines for Y-axis */}
            <CartesianGrid strokeDasharray="0" vertical={false} horizontal={true} />
            <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={25}
            tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={17}
            tickFormatter={(value) => `$${value / 1000}K`}
            />
            <Tooltip />
            <Bar
            dataKey="Transaction"
            fill="url(#colorGradient)"
            radius={[10, 10, 0, 0]} // Rounded top corners
            barSize={30}
            />
        </BarChart>
        </ResponsiveContainer>
    </Box>
    );
    }

export default BarGraph;
