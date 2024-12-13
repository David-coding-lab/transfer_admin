import { Box, HStack, Checkbox, Flex, Text } from '@chakra-ui/react';

function AdminsComponent({ isChecked, onCheckboxChange }) {
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        }
        const trimmed = text.slice(0, maxLength).trim(); // Trim extra whitespace
        return `${trimmed}...`;
    }

    return (
        <Box>
            <Flex
                pl="30px"
                fontFamily="poppins"
                fontWeight="medium"
                letterSpacing=".5px"
                alignItems="center"
                justifyContent="space-between"
                marginBlock="30px"
            >
                <HStack>
                    <Checkbox
                        isChecked={isChecked}
                        onChange={(e) => onCheckboxChange(e.target.checked)}
                    ></Checkbox>
                    <Text w="300px">{truncateText('Eze ChukwuEmeka David', 17)}</Text>
                </HStack>
                <Text w="200px">{truncateText('emekad745@gmail.com', 12)}</Text>
                <Text w="200px">9091008340</Text>
                <Text w="200px">Super Admin</Text>
                <Text>Active</Text>
            </Flex>
        </Box>
    );
}

export default AdminsComponent;
