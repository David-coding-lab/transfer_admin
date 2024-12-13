import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Calendar, ChevronDown} from 'lucide-react'
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
            Text
        } from '@chakra-ui/react'
import { useState } from "react"


function Graph({GraphData,GraphTitle,IsMoneyRelatedGraph}) {
    const [grapMonth,setGraphMonth] = useState(6)
    return (

        <Box
        borderWidth="1px"
        borderRadius="lg"
        w="full"
        mr='20px'
        p={4}
        >
        <Flex mb={4} alignItems='center' paddingInline='10px' justifyContent='space-between'>
            <Heading fontSize='18px' color='msn.300' marginBlock='15px'>{GraphTitle}</Heading>
            <HStack gap='20px'>
                <Text border='1px solid #E6E9EE' p='10px 15px' color='#AFAFAF' borderRadius='8px'>Month</Text>
                <Menu>
                    <Button
                        as={MenuButton}
                        _hover={{bgColor: 'white', borderColor: 'inherit'}}
                        gap='5px'
                        bgColor='white'
                        border='1px solid #E6E9EE'
                        color='#AFAFAF'
                        borderRadius='8px'
                    >
                        <HStack>
                            <Calendar />
                            <Text>{grapMonth} Months</Text>
                            <ChevronDown />
                        </HStack>
                    </Button>
                <MenuList minW='150px' gap='10px' alignItems='center' display='flex' flexDir='column' color='msn.100' fontFamily='Montserrat'>
                    <MenuItem _hover={{bgColor: 'white', borderColor: 'inherit'}} w='130px' onClick={()=> setGraphMonth(3)}>3 Months</MenuItem>
                    <MenuItem _hover={{bgColor: 'white', borderColor: 'inherit'}} w='130px' onClick={()=> setGraphMonth(6)}>6 Months</MenuItem>
                    <MenuItem _hover={{bgColor: 'white', borderColor: 'inherit'}} w='130px' onClick={()=> setGraphMonth(9)}>9 Months</MenuItem>
                    <MenuItem _hover={{bgColor: 'white', borderColor: 'inherit'}} w='130px' onClick={()=> setGraphMonth(12)}>12 Months</MenuItem>
                </MenuList>
                </Menu>
            </HStack>
        </Flex>

        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={GraphData.slice(0,grapMonth)} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
            <defs>
                <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00B3FF" stopOpacity={1} />
                <stop offset="100%" stopColor="rgba(0, 179, 255, 0)" stopOpacity={0.1} />
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="12 12" horizontal={false} />
            <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={25}  // Adjusts space between XAxis labels and the graph
                tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={17}  // Adjusts space between YAxis labels and the graph
                tickFormatter={(value) => IsMoneyRelatedGraph ? `$${value / 1000}K` : `${value / 1000}K`}
            />
            <Tooltip />
            <Area
                dataKey="Transaction"
                type="basis"
                stroke="#00B3FF"
                fillOpacity={1}
                fill="url(#colorDesktop)"
            />
            </AreaChart>
        </ResponsiveContainer>

        </Box>

    )
}

export default Graph