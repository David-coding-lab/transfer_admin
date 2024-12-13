import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"

function MetricCard({MetricsImg, MerticsTitle, MetricsValue}) {
    return (
        <Flex
            minW='23%'
            h='83px'
            boxShadow='0 2px 3px rgba(0, 0, 0, 0.25)'
            borderRadius='4px'
            justifyContent='center'
            alignItems='center'
            gap='20px'
        >
            <Image maxW='40px' src={MetricsImg} />

            <VStack alignItems='center' fontFamily='Montserrat' fontWeight='500' gap='0'>
                <Text color='msn.100'>{MerticsTitle}</Text>
                <Text color='msn.300'>{MetricsValue}</Text>
            </VStack>
        </Flex>
    )
}

export default MetricCard