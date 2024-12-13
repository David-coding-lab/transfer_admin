import { Button, Flex, HStack, Text } from "@chakra-ui/react"

function SuspiciousTransaction({TransactionId,TransactionAmount,TransactionLocation,TransactionIssue,TransactionDate}) {
    return (
        <Flex justifyContent='space-between' gap='0'>
            <Text w='220px' mr='auto' mt>{TransactionId}</Text>
            <Text w='140px' mr='auto' color='rgba(18, 27, 40, 0.4)'>{TransactionAmount}</Text>
            <Text w='190px' mr='auto' color='rgba(18, 27, 40, 0.4)'>{TransactionLocation}</Text>
            <Text w='160px' mr='auto' color='rgba(18, 27, 40, 0.4)'>{TransactionIssue === 'Bad Request' ? 'Low' : TransactionIssue === 'Spam' ? 'High' : 'Critical'}</Text>
            <Text w='320px'  mr='auto' color='rgba(18, 27, 40, 0.4)'>{TransactionDate}</Text>
            <HStack>
                <Button bgColor='transparent' _hover={{bgColor: 'transparent'}} color='#009F00'>Mark as Safe ✔</Button>
                <Button bgColor='transparent' _hover={{bgColor: 'transparent'}} color='#B60000'>Investigate 🔍</Button>
            </HStack>
        </Flex>
    )
}

export default SuspiciousTransaction