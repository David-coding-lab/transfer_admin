import { Box, Flex } from "@chakra-ui/react"
import SideBar from "./Containers/SideBar"
import MainContentArea from "./Containers/MainContentArea"
import { BrowserRouter as Router } from "react-router-dom"

function App() {

  return (
    <Router>
      <Flex display='flex' width='98.9vw' h='200vh'>
          <SideBar />
          <MainContentArea />
      </Flex>
    </Router>
  )
}

export default App
