import { useState } from 'react'
import './App.css'
import TableAxios from './tables/TableAxios'
import TableJason from './tables/TableJason'
import TablesBasic from './tables/TablesBasic'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
        {/* <TablesBasic/> */}
        {/* <TableJason/> */}
        <TableAxios/>
    </div>
  )
}

export default App
