import {
        Box,
        Flex,
    } from '@chakra-ui/react'
import MetricCard from '../Components/MetricCard'
import TotalTransactionIcon from '../assets/flat-color-icons_sales-performance.png'
import TotalCardIssuedIcon from '../assets/image19.png'
import NetUsers from '../assets/image18.png'
import NewUsersIcon from '../assets/Vector.png'
import PersonalMetricsCard from '../Components/PersonalMetrcsCard'
import Graph from '../Components/Graph'
import Provider from '../Components/Provider'
import TransactionsContainer from '../Components/TransactionsContainer'
import {Transactions}  from '../Data/Transactoins'

"use client"

const chartData = [
    { month: "January", Transaction: 186*100 },
    { month: "February", Transaction: 302*100 },
    { month: "March", Transaction: 2370*100 },
    { month: "April", Transaction: 733*100 },
    { month: "May", Transaction: 2033*100 },
    { month: "June", Transaction: 213*100 },
    { month: "Jul", Transaction: 213*100 },
    { month: "Aug", Transaction: 213*100 },
    { month: "Sep", Transaction: 213*100 },
    { month: "Oct", Transaction: 213*100 },
    { month: "Nov", Transaction: 213*100 },
    { month: "Dec", Transaction: 213*100 },
]


function Dashboard({setFullDetails, setShowFullDetails}) {
    return (
        <Box paddingInline='20px' h='auto' w='100%' >
            {/* Overview Metric Cards: displaying app performance and data */}
            <Flex justifyContent='space-between' mt='20px' >
                <MetricCard MetricsImg={TotalTransactionIcon} MetricsValue='0' MerticsTitle='Total Transaction' />
                <MetricCard MetricsImg={TotalCardIssuedIcon} MetricsValue='0' MerticsTitle='Total Card Issued' />
                <MetricCard MetricsImg={NetUsers} MetricsValue='0' MerticsTitle='Net Users' />
                <MetricCard MetricsImg={NewUsersIcon} MetricsValue='0' MerticsTitle='New Users' />
            </Flex>

            {/* Personal Metric Cards: displaying account balance, expenses and other data  */}
            <Flex justifyContent='space-between' mt='20px' >
                <PersonalMetricsCard
                    MetricLeftBadgeColor='msn.300'
                    MetricsTitle='My Balance'
                    MetricsValue='0'
                    CurMetricsRate=''
                    PrevMetricsRate=''
                />
                <PersonalMetricsCard
                    MetricLeftBadgeColor='#2DD683'
                    MetricsTitle='Income'
                    MetricsValue='0'
                    CurMetricsRate={0}
                    PrevMetricsRate={0}
                />
                <PersonalMetricsCard
                    MetricLeftBadgeColor='#FED142'
                    MetricsTitle='Savings'
                    MetricsValue='0'
                    CurMetricsRate={0}
                    PrevMetricsRate={0}
                />
                <PersonalMetricsCard
                    MetricLeftBadgeColor='#FA8B3A'
                    MetricsTitle='Expense'
                    MetricsValue='0'
                    CurMetricsRate=''
                    PrevMetricsRate=''
                />
            </Flex>

            {/* Transaction Flow Graph and Providers*/}

            <Flex marginBlock='20px' justifyContent='space-between' w='flex'>
                <Graph GraphData={chartData} GraphTitle='Transaction Flows' IsMoneyRelatedGraph={true}/>
                <Provider />
            </Flex>

            {/*  Transaction Component */}

            <TransactionsContainer
                IsOnTransactionPage={false}
                Title='Transaction History'
                Transactions={Transactions}
                setFullDetails={setFullDetails}
                setShowFullDetails={setShowFullDetails} 
            />
        </Box>
    )
}

export default Dashboard