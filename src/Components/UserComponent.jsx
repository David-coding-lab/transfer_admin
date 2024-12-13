import { Button, Flex, Text, VStack } from "@chakra-ui/react"

function UserComponent({
    UserName,
    UserEmail,
    UserPhone,
    UserBVN,
    userStatus,
    UserId,
    index,
    setFullDetails,
    setShowFullDetails,
    UserList
}) {
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        const trimmed = text.slice(0, maxLength).trim(); // Trim extra whitespace
        return `${trimmed}...`;
    }
    return (
        <Flex
            mt='20px'
            paddingLeft='20px'
            fontFamily='roboto'
            fontWeight='medium'
            letterSpacing='.5px'
            alignItems='center'
            justifyContent='space-between'
            onClick={()=>{
                setFullDetails(UserList[index])
                console.log(UserList[index])
                setShowFullDetails('CustomersFullDetails')
            }}
        >
            <VStack alignItems='start' gap='5px' mt='10px'>
                <Text w='140px'>{truncateText(UserName, 11)}</Text>
                <Text fontSize='14px' color='rgba(18, 27, 40, .5);'>ID: {UserId}</Text>
            </VStack>

                <Text w='230px' textAlign='center'>{UserEmail}</Text>
                <Text w='120px' textAlign='center'>{UserPhone}</Text>
                <Text w='270px' textAlign='center'>{UserBVN}</Text>
                <Button
                    w='80px'
                    h='35px'
                    borderRadius='12px'
                    color={
                        userStatus === 'Active'
                        ? '#009F00' : '#B60000'
                    }
                    bgColor={userStatus === 'Active' ? 'rgba(0, 159, 0, 0.2)' : 'rgba(182, 0, 0, 0.2)'}
                    fontFamily='poppins'
                    fontSize='14px'
                >
                    {userStatus === 'Active'? 'Active' : 'Inactive'}
                </Button>

        </Flex>
    )
}

export default UserComponent