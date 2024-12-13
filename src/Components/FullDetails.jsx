import ApprovedIcon from '../assets/checked-success.png'
import FailedIcon from '../assets/checked-fail.png'
import PendingIcon from '../assets/Spinner.png'
import {
    Avatar,
    Box,
    Button,
    CloseButton,
    Text,
    HStack,
    Flex,
    VStack,
    Divider,
    Image
} from "@chakra-ui/react";

import importIcon from '../assets/import.png'

function DetailComponent({Name, Value}){
    return(
        <HStack
            mt='15px'
            w='auto'
            justifyContent='space-between'
            display='flex'
        >
            <Text color='msn.100'>{Name}</Text> <span>{Value}</span>
        </HStack>
    )
}


// Transactions Full details Component
function TransactionFullDetails({
    setShowFullDetails,
    getFullDetails,
    setFullDetails
}) {

    return(

        <>
            <Box
                w='100vw'
                h='100vh'
                position='fixed'
                zIndex='1'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                bgColor='rgba(0, 0, 0, 0.5)'
            >

            </Box>
            <Box
                position='fixed'
                minWidth='800px'
                w='auto'
                height='auto'
                bgColor='white'
                boxShadow='0px 1px 5px rgba(18, 27, 40, 0.4)'
                top='50%'
                left='50%'
                borderRadius='15px'
                transform='translate(-50%, -50%)'
                zIndex='1'
                padding='20px'
            >
                <CloseButton
                    float='right'
                    border='none'
                    _hover={
                        {bgColor: 'transparent', border: 'none'}
                    }
                    onClick={()=>
                        {
                        setShowFullDetails(false)
                        setFullDetails('')
                        }
                    }
                />

                <Box>
                    <Flex gap='160px' justifyContent='space-between'>

                        {/* heading of the full details. this heading contains the name of the user getFullDetails.country and currency with a view profile button */}
                        <Box display='flex' pt='20px' gap='20px'>
                            {getFullDetails.transactorImg && <Avatar w='80px' src={getFullDetails.transactorImg} h='80px'/>}
                            <VStack alignItems='start' gap='2px'>
                                <Text
                                    fontSize='20px'
                                    color='msn.300'
                                    fontWeight='600'
                                >{getFullDetails.transactorName}</Text>
                                <Text
                                    color='msn.100'
                                    fontSize='15px'
                                >{getFullDetails.transactionLocation}</Text>
                                <Text
                                    color='msn.300'
                                    fontSize='15px'
                                >View profile</Text>
                            </VStack>
                        </Box>

                        <Box textAlign='center' mr='60px' >
                            <Box
                                m='auto'
                                mb='16px'
                                display='grid'
                                placeContent='center'
                                w='70px'
                                h='70px'
                                bgColor={'rgba(35, 162, 109, 0.12)'}
                                borderRadius='50%'
                            >
                                {/* transaction status icon goes here */}
                                {   getFullDetails.transactionStatus === 'Approved' ?
                                       <Image src={ApprovedIcon} /> :
                                    getFullDetails.transactionStatus === 'Decline' ?
                                        <Image src={FailedIcon} /> :
                                    getFullDetails.transactionStatus === 'Pending' &&
                                        <Image src={PendingIcon} />
                                }
                            </Box>
                            <Text mb='8px' fontSize='16px' color='#474747'>Payment {getFullDetails.transactionStatus}!</Text>
                            <Text fontSize='20px' color='#1A202C' fontWeight='medium'>{getFullDetails.transactionAmount}</Text>
                        </Box>

                    </Flex>

                    <Box mt='30px' paddingInline='10px' display='flex' justifyContent='space-between'>

                        <Box w='50%'>
                                <Text fontSize='17px' color='msn.300' fontWeight='medium' mb='10px'>User Details</Text>

                                    {<DetailComponent Name='Account Number' Value={getFullDetails.AccountNumber} />}

                                    {<DetailComponent Name='Country' Value={getFullDetails.transactionLocation} />}

                                    {<DetailComponent Name='Status' Value={getFullDetails.SenderStatus} />}

                                    {<DetailComponent Name='User ID' Value={getFullDetails.UserID} />}

                                <HStack mt='34px'>
                                    <Button
                                        w='200px'
                                        h='50px'
                                        bgColor='msn.300'
                                        color='white'
                                        fontWeight='normal'
                                        borderRadius='4px'
                                        m='auto'
                                        _hover={{
                                            bgColor: 'white',
                                            color: 'msn.300'
                                        }}
                                        leftIcon={<Image src={importIcon} />}
                                    >Get PDF Receipt</Button>

                                    {
                                        getFullDetails.transactionStatus === 'Pending' &&
                                            <Button
                                                w='150px'
                                                h='50px'
                                                bgColor='#FF8000'
                                                color='white'
                                                fontWeight='normal'
                                                borderRadius='4px'
                                                m='auto'
                                                _hover={{
                                                    bgColor: 'white',
                                                    color: '#FF8000',
                                                    borderColor: '#FF8000'
                                                }}
                                            >Resolve</Button>
                                    }
                                </HStack>
                        </Box>

                        <Box>
                                <Text fontSize='17px' color='msn.300' fontWeight='medium' mb='10px'>Transaction Receipt</Text>

                                {<DetailComponent Name='Payment Method' Value={getFullDetails.PaymentMethod} />}

                                {<DetailComponent Name='Transaction ID' Value={getFullDetails.transactionId} />}

                                {<DetailComponent Name='Transaction Type' Value={getFullDetails.transactionType} />}



                                { getFullDetails.transactionType === 'Fund Transfer' &&
                                    <HStack
                                        mt='15px'
                                        w='300px'
                                        justifyContent='space-between'
                                        display='flex'
                                    >
                                        {
                                            <>
                                                <Text color='msn.100'>Receiver's Name</Text>
                                                <span color="black">{getFullDetails.ReciverName && getFullDetails.ReciverName}</span>
                                            </>
                                        }
                                    </HStack>
                                }

                                {getFullDetails.issue && <DetailComponent Name='Issue' Value={getFullDetails.issue} />}

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                <Divider mt='20px' borderStyle='dashed' />
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                                {<DetailComponent Name='Amount' Value={getFullDetails.transactionAmount} />}

                                {<DetailComponent Name='Fee' Value='₦ 100' />}
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}


// Cards Full details Component
function OtherTransactionsFullDetails({
    setShowFullDetails,
    getFullDetails,
    setFullDetails
}) {

    return(

        <>
            <Box
                w='100vw'
                h='100vh'
                position='fixed'
                zIndex='1'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                bgColor='rgba(0, 0, 0, 0.5)'
            >

            </Box>
            <Box
                position='fixed'
                minWidth='800px'
                w='auto'
                height='auto'
                bgColor='white'
                boxShadow='0px 1px 5px rgba(18, 27, 40, 0.4)'
                top='50%'
                left='50%'
                borderRadius='15px'
                transform='translate(-50%, -50%)'
                zIndex='1'
                padding='20px'
            >
                <CloseButton
                    float='right'
                    border='none'
                    _hover={
                        {bgColor: 'transparent', border: 'none'}
                    }
                    onClick={()=>
                        {
                        setShowFullDetails(false)
                        setFullDetails('')
                        }
                    }
                />

                <Box>
                    <Flex gap='160px' justifyContent='space-between'>

                        {/* heading of the full details. this heading contains the name of the user getFullDetails.country and currency with a view profile button */}
                        <Box display='flex' pt='20px' gap='20px'>
                            {getFullDetails.transactorImg && <Avatar w='80px' src={getFullDetails.transactorImg} h='80px'/>}
                            <VStack alignItems='start' gap='2px'>
                                <Text
                                    fontSize='20px'
                                    color='msn.300'
                                    fontWeight='600'
                                >{getFullDetails.transactorName}</Text>
                                <Text
                                    color='msn.100'
                                    fontSize='15px'
                                >{getFullDetails.transactionLocation}</Text>
                                <Text
                                    color='msn.300'
                                    fontSize='15px'
                                >View profile</Text>
                            </VStack>
                        </Box>

                        <Box textAlign='center' mr='60px' >
                            <Box
                                m='auto'
                                mb='16px'
                                display='grid'
                                placeContent='center'
                                w='70px'
                                h='70px'
                                bgColor={'rgba(35, 162, 109, 0.12)'}
                                borderRadius='50%'
                            >
                                {/* transaction status icon goes here */}
                                {   getFullDetails.transactionStatus === 'Approved' ?
                                       <Image src={ApprovedIcon} /> :
                                    getFullDetails.transactionStatus === 'Decline' ?
                                        <Image src={FailedIcon} /> :
                                    getFullDetails.transactionStatus === 'Pending' &&
                                        <Image src={PendingIcon} />
                                }
                            </Box>
                            <Text mb='8px' fontSize='16px' color='#474747'>Payment {getFullDetails.transactionStatus}!</Text>
                            <Text fontSize='20px' color='#1A202C' fontWeight='medium'>{getFullDetails.transactionAmount}</Text>
                        </Box>

                    </Flex>

                    <Box mt='30px' paddingInline='10px' display='flex' justifyContent='space-between'>

                        <Box w='50%'>
                                <Text fontSize='17px' color='msn.300' fontWeight='medium' mb='10px'>User Details</Text>

                                    {<DetailComponent Name='Account Number' Value={getFullDetails.AccountNumber} />}

                                    {<DetailComponent Name='Country' Value={getFullDetails.transactionLocation} />}

                                    {<DetailComponent bgColr={getFullDetails.SenderStatus === 'Approved' ? '#009F00' : '#B60000'} Name='Status' Value={getFullDetails.SenderStatus} />}

                                    {<DetailComponent Name='User ID' Value={getFullDetails.UserID} />}

                                <HStack mt='34px'>
                                    <Button
                                        w='200px'
                                        h='50px'
                                        bgColor='msn.300'
                                        color='white'
                                        fontWeight='normal'
                                        borderRadius='4px'
                                        m='auto'
                                        _hover={{
                                            bgColor: 'white',
                                            color: 'msn.300'
                                        }}
                                        leftIcon={<Image src={importIcon} />}
                                    >Get PDF Receipt</Button>

                                    {
                                        getFullDetails.transactionStatus === 'Pending' &&
                                            <Button
                                                w='150px'
                                                h='50px'
                                                bgColor='#FF8000'
                                                color='white'
                                                fontWeight='normal'
                                                borderRadius='4px'
                                                m='auto'
                                                _hover={{
                                                    bgColor: 'white',
                                                    color: '#FF8000',
                                                    borderColor: '#FF8000'
                                                }}
                                            >Resolve</Button>
                                    }
                                </HStack>
                        </Box>

                        <Box>
                                <Text fontSize='17px' color='msn.300' fontWeight='medium' mb='10px'>Transaction Receipt</Text>

                                {<DetailComponent Name='Payment Method' Value={getFullDetails.PaymentMethod} />}

                                {<DetailComponent Name='Transaction ID' Value={getFullDetails.transactionId} />}

                                {<DetailComponent Name='Transaction Type' Value={getFullDetails.transactionType} />}

                                {<DetailComponent Name='Provider' Value={getFullDetails.Provider} />}

                                {<DetailComponent Name='Package' Value={getFullDetails.Package} />}

                                {getFullDetails.transactionType === 'Electricity bill' && <DetailComponent Name='Meter Number' Value={getFullDetails.MeterNumber} />}

                                {getFullDetails.transactionType === 'Electricity bill' && <DetailComponent Name='Tokens' Value={getFullDetails.Tokens} />}

                                {getFullDetails.issue && <DetailComponent Name='Issue' Value={getFullDetails.issue} />}

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                <Divider mt='20px' borderStyle='dashed' />
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                                {<DetailComponent Name='Amount' Value={getFullDetails.transactionAmount} />}

                                {<DetailComponent Name='Fee' Value='₦ 100' />}
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

// Cards Full details Component
function CustomersFullDetails({
    setShowFullDetails,
    getFullDetails,
    setFullDetails
}) {

    return(

        <>
            <Box
                w='100vw'
                h='100vh'
                position='fixed'
                zIndex='1'
                top='50%'
                left='50%'
                transform='translate(-50%, -50%)'
                bgColor='rgba(0, 0, 0, 0.5)'
            >

            </Box>
            <Box
                position='fixed'
                minWidth='800px'
                w='auto'
                height='auto'
                bgColor='white'
                boxShadow='0px 1px 5px rgba(18, 27, 40, 0.4)'
                top='50%'
                left='50%'
                borderRadius='15px'
                transform='translate(-50%, -50%)'
                zIndex='1'
                padding='20px'
            >
                <CloseButton
                    float='right'
                    border='none'
                    _hover={
                        {bgColor: 'transparent', border: 'none'}
                    }
                    onClick={()=>
                        {
                        setShowFullDetails(false)
                        setFullDetails('')
                        }
                    }
                />

                <Box justifyContent='center' display='flex' flexDirection='column'>
                        {/* heading of the full details. this heading contains the name of the user getFullDetails.country and currency with a view profile button */}
                        <Box alignItems='center' display='flex' flexDirection='column' m='auto' pt='20px' gap='20px'>
                            {getFullDetails.PersonalInfo.Name && <Avatar w='80px' name={getFullDetails.PersonalInfo.Name} h='80px'/>}
                            <VStack gap='2px'>
                                <Text
                                    fontSize='20px'
                                    color='msn.300'
                                    fontWeight='600'
                                >{getFullDetails.PersonalInfo.Name}</Text>
                                <Text
                                    color='msn.100'
                                    fontSize='15px'
                                >{getFullDetails.PersonalInfo.Country}</Text>
                            </VStack>
                        </Box>

                    <Box mt='30px' paddingInline='10px' display='flex' justifyContent='space-between'>

                        <Box w='50%'>
                                <Text fontSize='17px' color='msn.300' fontWeight='medium' mb='10px'>Personal Information</Text>

                                {<DetailComponent Name='Account Number' Value={getFullDetails.PersonalInfo.AccountNumber} />}

                                {<DetailComponent Name='Email Address' Value={getFullDetails.PersonalInfo.EmailAddress} />}

                                {<DetailComponent Name='Phone number' Value={getFullDetails.PersonalInfo.PhoneNumber} />}

                                {<DetailComponent Name='BVN' Value={getFullDetails.PersonalInfo.BVN} />}

                                {<DetailComponent Name='Country' Value={getFullDetails.PersonalInfo.Country} />}

                                {<DetailComponent Name='Last transaction time' Value={getFullDetails.PersonalInfo.LastTransactionTime} />}

                                {<DetailComponent Name='Status' Value={getFullDetails.PersonalInfo.Status} />}

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                    <Divider mt='20px' borderStyle='dashed' />
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                                    {<DetailComponent Name='User ID' Value={getFullDetails.PersonalInfo.UserID} />}

                                <Button
                                    w='200px'
                                    h='50px'
                                    bgColor='#B60000'
                                    color='white'
                                    fontWeight='normal'
                                    borderRadius='4px'
                                    mt='34px'
                                    _hover={{
                                        bgColor: 'white',
                                        color: '#B60000',
                                        borderColor: '#B60000'
                                    }}
                                >Deactivate</Button>
                        </Box>

                        <Box>
                                <Text fontSize='17px' color='msn.300' fontWeight='medium' mb='10px'>Account Information</Text>

                                {<DetailComponent Name='Account type' Value={getFullDetails.AccountInfo.AccountType} />}

                                {<DetailComponent Name='Account balance' Value={getFullDetails.AccountInfo.AccountBalance} />}

                                {<DetailComponent Name='Transaction limit' Value={getFullDetails.AccountInfo.TransactionLimit} />}

                                {<DetailComponent Name='Currency' Value={getFullDetails.AccountInfo.Currency} />}

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                                <Divider mt='20px' borderStyle='dashed' />
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

                                {<DetailComponent Name='Date Created' Value={getFullDetails.AccountInfo.DateCreated} />}

                                <Button
                                    w='200px'
                                    h='50px'
                                    bgColor='msn.300'
                                    color='white'
                                    fontWeight='normal'
                                    borderRadius='4px'
                                    m='auto'
                                    mt='40px'
                                    _hover={{
                                        bgColor: 'white',
                                        color: 'msn.300'
                                    }}
                                >Message</Button>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export {TransactionFullDetails, OtherTransactionsFullDetails,CustomersFullDetails}