import { Avatar, Box, Flex, Heading, HStack, Switch, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import eversendIcon from '../assets/image.png'
import polarisIcon from '../assets/image-1.png'
import FirstBankIcon from '../assets/image-2.png'

function ProviderComponent({ providerName, providerImg, providerNetworkStatus, selectedProvider, onSelectProvider }) {
    const isActive = selectedProvider === providerName;

    return (
        <Flex gap='50px' justifyContent='space-between' alignItems='center' w='100%' pr='20px'>
            <HStack gap='20px'>
                <Avatar src={providerImg} />
                <VStack alignItems='start'>
                    <Text color='msn.100' fontFamily='Montserrat' fontWeight='500'>{providerName}</Text>
                    <Text color='msn.300' fontSize='15px'>
                        Network: <span style={{ color: providerNetworkStatus === 'Good' ? '#009F00' : providerNetworkStatus === 'Poor' ? '#B60000' : '#FFA000' }}>{providerNetworkStatus}</span>
                    </Text>
                </VStack>
            </HStack>

            <Switch
                colorScheme='green'
                isChecked={isActive}
                onChange={() => onSelectProvider(isActive ? '' : providerName)}
            />
        </Flex>
    );
}

function Provider() {
    const [selectedProvider, setSelectedProvider] = useState('');

    return (
        <Box
            w='400px'
            border='1px solid #E6E9EE'
            borderRadius="lg"
            p={4}
            paddingLeft='35px'
        >
            <Heading fontSize='18px' color='msn.300' marginBlock='15px'>Providers</Heading>

            <VStack alignItems='start' gap='40px'>
                <ProviderComponent
                    providerName='Eversend'
                    providerImg={eversendIcon}
                    providerNetworkStatus='Good'
                    selectedProvider={selectedProvider}
                    onSelectProvider={setSelectedProvider}
                />
                <ProviderComponent
                    providerName='Polaris'
                    providerImg={polarisIcon}
                    providerNetworkStatus='Poor'
                    selectedProvider={selectedProvider}
                    onSelectProvider={setSelectedProvider}
                />
                <ProviderComponent
                    providerName='First Bank'
                    providerImg={FirstBankIcon}
                    providerNetworkStatus='Weak'
                    selectedProvider={selectedProvider}
                    onSelectProvider={setSelectedProvider}
                />
            </VStack>
        </Box>
    );
}

export default Provider;
