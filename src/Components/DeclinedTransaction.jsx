import { Avatar, Box, Flex, HStack, Text, VStack } from "@chakra-ui/react"

function DeclinedTransaction({TransactorsImg, TransactorsName, TransactionDate, TransactionType, Issue}) {
    return (
        <Box>
            <Flex justifyContent='space-between' mb='15px'>
                <HStack>
                    <Avatar src={TransactorsImg} w='30px' h='30px'/>
                    <VStack gap='0' w='100px' alignItems='start'>
                        <Text fontSize='14px' textAlign='start'>{TransactorsName}</Text>
                        <Text fontSize='10px' textAlign='start'>{TransactionDate}</Text>
                    </VStack>
                </HStack>

                <HStack w='100%' justifyContent='space-between'>
                    <Text color='rgba(18, 27, 40, 0.4)' textAlign='center' w='50%' fontSize='14px'>{TransactionType}</Text>
                    <Text  fontSize='14px'color={Issue === 'Bad request' ? '#FFC107' : '#B60000'}  textAlign='center' w='50%'>{Issue}</Text>
                </HStack>
            </Flex>
        </Box>
    )
}

export default DeclinedTransaction