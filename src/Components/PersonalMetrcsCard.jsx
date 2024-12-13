import {
            Box,
            Flex,
            VStack,
            Text
        } from '@chakra-ui/react'
import {ArrowUpIcon, ArrowDownIcon} from '@chakra-ui/icons'

function PersonalMetricsCard ({MetricsTitle, MetricsValue, PrevMetricsRate, CurMetricsRate, MetricLeftBadgeColor}) {
    return(
        <Flex
            minW='20%'
            h='80px'
            border='1px solid #E6E9EE'
            borderRadius='8px'
            paddingRight='20px'
            alignItems='center'
            gap='20px'
        >
            <Box
                w='10px'
                h='100%'
                bgColor={MetricLeftBadgeColor}
                borderTopLeftRadius='8px'
                borderBottomLeftRadius='8px'
            ></Box>

            <VStack marginRight='auto' alignItems='start' fontFamily='Montserrat' fontWeight='500' gap='1'>
                <Text color='msn.300' fontSize='17px'>{MetricsTitle}</Text>
                <Text fontSize='18px' fontWeight='bold'>${MetricsValue}</Text>
            </VStack>
            {CurMetricsRate !== '' &&

                <Flex paddingBlock='5px' paddingInline='15px' borderRadius='8px' alignItems='center' bgColor={PrevMetricsRate <= CurMetricsRate ? '#D8FFEC' : 'rgba(255, 71, 74, 0.2)'} color={PrevMetricsRate <= CurMetricsRate ? '#2DD683' : 'rgba(182, 0, 0, 1)'}>
                    {PrevMetricsRate <= CurMetricsRate ? <ArrowUpIcon color='#2DD683'/> : <ArrowDownIcon color='#rgba(255, 71, 74, 0.2)'/>}
                    <Text>{CurMetricsRate}</Text>
                </Flex>

            }
        </Flex>
    )
}

export default PersonalMetricsCard