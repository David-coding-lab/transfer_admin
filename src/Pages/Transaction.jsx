import { Box, Flex } from '@chakra-ui/react'
import MetricCard from '../Components/MetricCard'
import CheckedSuccess from '../assets/checked-success.png'
import CheckedFail from '../assets/checked-fail.png'
import TotalTransactionIcon from '../assets/flat-color-icons_sales-performance.png'
import TotalRevenue from '../assets/total-Transaction.png'
import Graph from '../Components/Graph'
import TransactionsContainer from '../Components/TransactionsContainer'
import {PendingTransactions, Transactions} from '../Data/Transactoins'

function Transaction({setFullDetails, setShowFullDetails}) {
    const chartData = [
        { month: "January", Transaction: 186*100 },
        { month: "February", Transaction: 302*100 },
        { month: "March", Transaction: 2370*100 },
        { month: "April", Transaction: 733*100 },
        { month: "May", Transaction: 2033*100 },
        { month: "June", Transaction: 213*100 },
        { month: "Aug", Transaction: 213*100 },
        { month: "Sep", Transaction: 213*100 },
        { month: "Oct", Transaction: 1013*100 },
        { month: "Nov", Transaction: 1013*100 },
        { month: "Dec", Transaction: 1013*100 },
    ]
    return (
        <Box w='flex' paddingInline='20px'>
            {/* Overview Metric Cards: displaying app performance and data */}
            <Flex justifyContent='space-between' mt='20px' marginInline='20px' >
                <MetricCard  MetricsImg={CheckedSuccess} MetricsValue='0' MerticsTitle='Approved Transfers' />
                <MetricCard  MetricsImg={CheckedFail} MetricsValue='0' MerticsTitle='Declined Transfers' />
                <MetricCard  MetricsImg={TotalRevenue} MetricsValue='0' MerticsTitle='Total Revenue' />
                <MetricCard  MetricsImg={TotalTransactionIcon} MetricsValue='0' MerticsTitle='Total Transaction' />
            </Flex>

            {/* Graph Component */}
            <Box marginBlock='20px' marginInline='20px'>
                <Graph GraphData={chartData}/>
            </Box>

            {/* Pending Transactions Component */}
            <Box marginBlock='20px'>
                <TransactionsContainer IsOnPendingTransactions={true} Title='Pending Transaction' Transactions={PendingTransactions} setFullDetails={setFullDetails} setShowFullDetails={setShowFullDetails} />
            </Box>

            {/* Transaction Component */}
            <Box marginBlock='20px'>
                <TransactionsContainer IsOnTransactionPage={true} Title='Transaction History' Transactions={Transactions} setFullDetails={setFullDetails} setShowFullDetails={setShowFullDetails} />
            </Box>

        </Box>
    )
}

export default Transaction