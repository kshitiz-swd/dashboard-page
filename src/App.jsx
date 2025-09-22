import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"


function App() {
  return (
    <Router>
      <Header />
      <main className="">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/transactions" element={<Transactions />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/split-bills" element={<SplitBills />} /> */}
        </Routes>
      </main>
    </Router>
  )
}

export default App
