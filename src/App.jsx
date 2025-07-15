import { Route, Routes } from 'react-router-dom'
import Home from './Home1'
import Hello from './Hello'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/he" element={<Hello />} />
    </Routes>
  )
}

export default App
