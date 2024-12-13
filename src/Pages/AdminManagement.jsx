import {
    Box,
    HStack,
    Button,
    Checkbox,
    Flex,
    Text,
    Input,
    useDisclosure,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Badge,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormControl,
    FormLabel,
    Select,
} from '@chakra-ui/react';
import { useState, useRef } from 'react';

function AdminManagement({adminInfo}) {
    const [selectedAdmins, setSelectedAdmins] = useState(new Set());
    const [allChecked, setAllChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [adminList, setAdminList] = useState([
        {
            id: 1,
            name: 'Eze ChukwuEmeka David',
            email: 'emekad745@gmail.com',
            phone: '7010885943',
            role: 'Super Admin',
            status: 'Active',
            isRestricted: false,
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'janedoe@gmail.com',
            phone: '7010885943',
            role: 'Admin',
            status: 'Active',
            isRestricted: false,
        },
        {
            id: 3,
            name: 'John Smith',
            email: 'johnsmith@gmail.com',
            phone: '7010885943',
            role: 'Admin',
            status: 'Active',
            isRestricted: false,
        },
    ]);

    const [currentAdminToRestrict, setCurrentAdminToRestrict] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAdminData, setNewAdminData] = useState({
        name: '',
        email: '',
        phone: '',
        role: 'Admin',
    });

    const truncateText = (text, maxLength) =>
        text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

    const handleCheckboxChange = (id, isChecked) => {
        const updatedSelection = new Set(selectedAdmins);
        isChecked ? updatedSelection.add(id) : updatedSelection.delete(id);
        setSelectedAdmins(updatedSelection);
        setAllChecked(updatedSelection.size === adminList.length);
    };

    const handleSelectAllChange = (isChecked) => {
        setSelectedAdmins(isChecked ? new Set(adminList.map((admin) => admin.id)) : new Set());
        setAllChecked(isChecked);
    };

    const toggleEditMode = () => {
        if (isEditing) {
            setAdminList((prevList) =>
                prevList.map((admin) =>
                    selectedAdmins.has(admin.id)
                        ? {
                            ...admin,
                            name: document.getElementById(`name-${admin.id}`).value,
                            email: document.getElementById(`email-${admin.id}`).value,
                            phone: document.getElementById(`phone-${admin.id}`).value,
                        }
                        : admin
                )
            );
        }
        setIsEditing(!isEditing);
    };

    const confirmRestrict = (adminId) => {
        setCurrentAdminToRestrict(adminList.find((admin) => admin.id === adminId));
        onOpen();
    };

    const restrictAdmin = () => {
        setAdminList((prevList) =>
            prevList.map((admin) =>
                admin.id === currentAdminToRestrict.id ? { ...admin, isRestricted: true } : admin
            )
        );
        setSelectedAdmins(new Set());
        onClose();
    };

    const handleAcquitAdmin = (adminId) => {
        setAdminList((prevList) =>
            prevList.map((admin) =>
                admin.id === adminId ? { ...admin, isRestricted: false } : admin
            )
        );
    };

    const openAddAdminModal = () => setIsModalOpen(true);

    const closeAddAdminModal = () => {
        setIsModalOpen(false);
        setNewAdminData({ name: '', email: '', phone: '', role: 'Admin' });
    };

    const handleAddAdmin = () => {
        if (!newAdminData.name || !newAdminData.email || !newAdminData.phone) {
            alert('Please fill out all fields.');
            return;
        }

        const newAdmin = {
            id: adminList.length + 1,
            ...newAdminData,
            status: 'Active',
            isRestricted: false,
        };

        setAdminList((prevList) => [...prevList, newAdmin]);
        closeAddAdminModal();
    };

    return (
        <Box px="20px">
            {/* Confirmation Dialog */}
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Restrict Admin
                        </AlertDialogHeader>
                        <AlertDialogBody>
                            Are you sure you want to restrict{' '}
                            <Text as="strong">{currentAdminToRestrict?.name}</Text>? This will prevent access to certain features.
                        </AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={restrictAdmin} ml={3}>
                                Restrict
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>

            {/* Add Admin Modal */}
            <Modal isOpen={isModalOpen} onClose={closeAddAdminModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add New Admin</ModalHeader>
                    <ModalBody>
                        <FormControl isRequired mb={4}>
                            <FormLabel>Name</FormLabel>
                            <Input
                                placeholder="Enter admin name"
                                value={newAdminData.name}
                                onChange={(e) =>
                                    setNewAdminData({ ...newAdminData, name: e.target.value })
                                }
                            />
                        </FormControl>
                        <FormControl isRequired mb={4}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                placeholder="Enter admin email"
                                value={newAdminData.email}
                                onChange={(e) =>
                                    setNewAdminData({ ...newAdminData, email: e.target.value })
                                }
                            />
                        </FormControl>
                        <FormControl isRequired mb={4}>
                            <FormLabel>Phone</FormLabel>
                            <Input
                                placeholder="Enter phone number"
                                value={newAdminData.phone}
                                onChange={(e) =>
                                    setNewAdminData({ ...newAdminData, phone: e.target.value })
                                }
                            />
                        </FormControl>
                        <FormControl isRequired mb={4}>
                            <FormLabel>Role</FormLabel>
                            <Select
                                value={newAdminData.role}
                                onChange={(e) =>
                                    setNewAdminData({ ...newAdminData, role: e.target.value })
                                }
                            >
                                <option value="Super Admin">Super Admin</option>
                                <option value="Admin">Admin</option>
                            </Select>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleAddAdmin}>
                            Add
                        </Button>
                        <Button variant="ghost" onClick={closeAddAdminModal}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* Action Buttons */}
            <Flex my="20px" gap="10px" justifyContent="flex-end">
                <Button
                    colorScheme="blue"
                    onClick={()=>{
                        adminInfo.role === 'Super Admin' ? openAddAdminModal : alert('Only Super Admin can perform such actions')
                    }}
                >
                    Add Admin
                </Button>
                {selectedAdmins.size > 0 && (
                    <>
                        <Button
                            w="100px"
                            bg="blue.400"
                            color="white"
                            fontSize="14px"
                            borderRadius="4px"
                            _hover={{ bg: 'white', border: '1px solid #3182CE', color: '#3182CE' }}
                            onClick={()=>{
                                adminInfo.role === 'Super Admin' ?
                                    toggleEditMode()
                                : alert('Only Super Admin can perform such actions')
                            }}
                        >
                            {isEditing ? 'Save' : 'Edit'}
                        </Button>
                    </>
                )}
            </Flex>

            {/* Header */}
            <Flex
                pl="30px"
                fontFamily="poppins"
                fontWeight="medium"
                letterSpacing=".5px"
                alignItems="center"
                justifyContent="space-between"
                color="gray.600"
                textAlign="center"
            >
                <HStack>
                    <Checkbox
                        isChecked={allChecked}
                        onChange={(e) => handleSelectAllChange(e.target.checked)}
                    />
                    <Text w="300px">Name</Text>
                </HStack>
                <Text w="200px">Email</Text>
                <Text w="200px">Phone</Text>
                <Text w="200px">Role</Text>
                <Text w="200px">Status</Text>
            </Flex>

            {/* Admin List */}
            {adminList.map((admin,index) => (
                <Flex
                    key={admin.id}
                    pl="30px"
                    fontFamily="poppins"
                    fontWeight="medium"
                    letterSpacing=".5px"
                    my="30px"
                    alignItems="center"
                    justifyContent="space-between"
                    textAlign="center"
                >
                    <HStack>
                        <Checkbox
                            isChecked={selectedAdmins.has(admin.id)}
                            onChange={(e) => handleCheckboxChange(admin.id, e.target.checked)}
                        />
                        {isEditing && selectedAdmins.has(admin.id) ? (
                            <Input id={`name-${admin.id}`} defaultValue={admin.name} w="300px" />
                        ) : (
                            <Text textAlign="start" w="300px">
                                {truncateText(admin.name, 17)}
                            </Text>
                        )}
                    </HStack>
                    {isEditing && selectedAdmins.has(admin.id) ? (
                        <Input id={`email-${admin.id}`} defaultValue={admin.email} w="200px" />
                    ) : (
                        <Text w="200px">{truncateText(admin.email, 15)}</Text>
                    )}
                    {isEditing && selectedAdmins.has(admin.id) ? (
                        <Input id={`phone-${admin.id}`} defaultValue={admin.phone} w="200px" />
                    ) : (
                        <Text w="200px">{admin.phone}</Text>
                    )}
                    <Text w="200px">{admin.role}</Text>
                    <Badge
                        h="30px"
                        w="70px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="4px"
                        color={admin.isRestricted === false ? '#009F00' : '#B60000'}
                        bgColor={admin.isRestricted === false ? 'rgba(0, 159, 0, 0.2)' : 'rgba(182, 0, 0, 0.2)'}
                        textTransform="capitalize"
                    >
                        {admin.isRestricted ? 'Restricted' : admin.status}
                    </Badge>

                    {/* Restrict/Acquit Button */}
                    <Button
                        id={index}
                        colorScheme={admin.isRestricted ? 'green' : 'red'}
                        onClick={(e) =>{
                            adminInfo.role === 'Super Admin' ?
                                admin.isRestricted ? handleAcquitAdmin(admin.id) : confirmRestrict(admin.id)
                            : alert('Only Super Admin can perform such actions')
                        }}
                        size="sm"
                        ml="10px"
                    >
                        {admin.isRestricted ? 'Acquit' : 'Restrict'}
                    </Button>
                </Flex>
            ))}
        </Box>
    );
}

export default AdminManagement;
