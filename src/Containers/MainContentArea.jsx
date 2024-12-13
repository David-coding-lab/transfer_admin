// MainContentArea.js
import { Route, Routes } from 'react-router-dom';
import { Container,Box } from '@chakra-ui/react';
import Dashboard from '../Pages/Dashboard';
import Transaction from '../Pages/Transaction';
import CableSubscription from '../Pages/CableSubscription';
import Customers from '../Pages/Customers';
import AdminManagement from '../Pages/AdminManagement';
import Settings from '../Pages/Settings';
import Utility from '../Pages/Utility';
import Header from '../Components/Header';
import Cards from '../Pages/Cards';
import { useState } from 'react';
import { TransactionFullDetails,OtherTransactionsFullDetails, CustomersFullDetails} from '../Components/FullDetails';

function MainContentArea() {
    const [showFullDetails,setShowFullDetails] = useState('')
    const [getFullDetails,setFullDetails] = useState('')
    const [adminInfo] = useState({
        id: 1,
        name: 'Eze ChukwuEmeka David',
        email: 'emekad745@gmail.com',
        phone: '7010885943',
        role: 'Admin',
        status: 'Active',
        isRestricted: false,
    })

    return (
        <Box w="100%" h="100vh" p='0'>
            {showFullDetails === 'Transactions' && <TransactionFullDetails getFullDetails={getFullDetails} setFullDetails={setFullDetails} setShowFullDetails={setShowFullDetails} />}
            {showFullDetails === 'OtherTransactions' && <OtherTransactionsFullDetails getFullDetails={getFullDetails} setFullDetails={setFullDetails} setShowFullDetails={setShowFullDetails} />}
            {showFullDetails === 'CustomersFullDetails' && <CustomersFullDetails getFullDetails={getFullDetails} setFullDetails={setFullDetails} setShowFullDetails={setShowFullDetails} />}
            <Header adminInfo={adminInfo}/>
            <Routes>
                <Route path="/*" index element={<Dashboard setFullDetails={setFullDetails} setShowFullDetails={setShowFullDetails}/>} />
                <Route path="/Transaction" element={<Transaction setFullDetails={setFullDetails} setShowFullDetails={setShowFullDetails}/>} />
                <Route path="/Cards" element={<Cards setFullDetails={setFullDetails} setShowFullDetails={setShowFullDetails}/>} />
                <Route path="/Utility" element={<Utility setFullDetails={setFullDetails} setShowFullDetails={setShowFullDetails}/>} />
                <Route path="/CableSubscription" element={<CableSubscription setFullDetails={setFullDetails} setShowFullDetails={setShowFullDetails}/>} />
                <Route path="/Customers" element={<Customers setFullDetails={setFullDetails} setShowFullDetails={setShowFullDetails}/>} />
                <Route path="/AdminManagement" element={<AdminManagement adminInfo={adminInfo} />} />
                <Route path="/Settings" element={<Settings />} />
            </Routes>
        </Box>
    );
}

export default MainContentArea;
