import { Heading,Box, Flex, Text } from '@chakra-ui/react'
import { UtilityTransactions} from '../Data/Transactoins'
import DeclinedTransaction from '../Components/DeclinedTransaction'
import TotalTransactionIcon from '../assets/flat-color-icons_sales-performance.png'
import MetricsImg3 from '../assets/avgTransactionValueImg.png'
import paymentSucRateIcon from '../assets/PaymentSuccessrateIcon.png'
import RevenueIcon from '../assets/RevenueIcon.png'
import SuspiciousTransaction from '../Components/SuspiciousTransaction'
import MetricCard from '../Components/MetricCard'
import BarGraph from '../Components/BarChart'
import OtherTransactionContainer from '../Components/OtherTransactionContainer'

function Utility({setFullDetails,setShowFullDetails}) {
    const filterTransactions = UtilityTransactions.filter(((transaction) => {
        const declinedTransaction = transaction.transactionStatus === 'Decline'
        return declinedTransaction
    }))
    const ShowDeclinedTransaction = filterTransactions.map((transaction,index)=>(
        <DeclinedTransaction
            TransactorsImg={transaction.transactorImg}
            TransactorsName={transaction.transactorName}
            TransactionDate={transaction.transactionDate}
            TransactionType={transaction.transactionType}
            Issue={transaction.issue}
            key={index}
        />
    ))
    const ShowSuspiciousTransaction = filterTransactions.map((transaction,index)=>(
        <SuspiciousTransaction
            key={index}
            TransactionId={transaction.transactionId}
            TransactionAmount={transaction.transactionAmount}
            TransactionLocation={transaction.transactionLocation}
            TransactionIssue={transaction.issue}
            TransactionDate={transaction.transactionDate}
        />
    ))

    const chartData = [
        { month: "January", Transaction: 1186*100 },
        { month: "February", Transaction: 1302*100 },
        { month: "March", Transaction: 710*100 },
        { month: "April", Transaction: 733*100 },
        { month: "May", Transaction: 2033*100 },
        { month: "June", Transaction: 213*100 },
        { month: "Jul", Transaction: 4213*100 },
        { month: "Aug", Transaction: 4213*100 },
        { month: "Sep", Transaction: 4213*100 },
        { month: "Oct", Transaction: 5213*100 },
        { month: "Nov", Transaction: 2513*100 },
        { month: "Dec", Transaction: 213*100 },
    ]
    return (
        <Box paddingLeft='20px' h='auto'>
            <Flex justifyContent='space-between' mt='20px'>
                <MetricCard MetricsImg={TotalTransactionIcon} MerticsTitle='Total transactions' MetricsValue='0' />
                <MetricCard MetricsImg={MetricsImg3} MerticsTitle='Avg Transaction Value' MetricsValue='0'/>
                <MetricCard MetricsImg={paymentSucRateIcon} MerticsTitle='Payment Success Rate' MetricsValue='0'/>
                <MetricCard MetricsImg={RevenueIcon}MerticsTitle='Revenue' MetricsValue='0'/>
            </Flex>

            <Flex mt='20px'>
                <BarGraph GraphData={chartData}/>

                <Box
                    h="auto"
                    borderRadius="lg"
                    border="1px solid #E6E9EE"
                    paddingLeft="35px"
                    w="420px"
                    p={4}
                    boxSizing="border-box"
                >
                    <Heading fontSize="18px" color="msn.300" mt="15px">Declined Transactions</Heading>

                    <Flex mt='10px' justifyContent='space-between' mb='10px'>
                        <Text w='100px'>Name</Text>
                        <Text textAlign='center' w='130px'>Type</Text>
                        <Text textAlign='center' w='100px'>Issue</Text>
                    </Flex>

                    <Box>
                        {ShowDeclinedTransaction}
                    </Box>
                </Box>
            </Flex>

            <Box
                h="auto"
                borderRadius="lg"
                border="1px solid #E6E9EE"
                paddingLeft="35px"
                w="1250px"
                mt='20px'
                p={4}
                boxSizing="border-box"
            >
                <Heading fontSize="18px" color="msn.300" mt="15px">Fraud Alerts</Heading>

                <Flex marginBlock='20px' paddingBlock='10px' borderTop='1px solid #E6E9EE' borderBottom='1px solid #E6E9EE'>
                    <Text w='220px' mr='auto'>Transaction ID</Text>
                    <Text w='140px' mr='auto'>Amount</Text>
                    <Text w='190px' mr='auto'>Location</Text>
                    <Text w='160px' mr='auto'>Risk Level</Text>
                    <Text w='320px'  mr='auto'>Timestamp</Text>
                    <Text w='320px' textAlign='center'>Actions</Text>
                </Flex>

                <Box>
                    {ShowSuspiciousTransaction}
                </Box>

            </Box>

                <Box mt='20px'>
                    <OtherTransactionContainer
                        IsOnTransactionPage={true}
                        Title='Transaction History'
                        Transactions={UtilityTransactions}
                        setFullDetails={setFullDetails}
                        setShowFullDetails={setShowFullDetails}
                    />
                </Box>
        </Box>
    )
}

export default Utility