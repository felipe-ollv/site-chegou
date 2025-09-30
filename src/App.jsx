import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import PrivacyPolitic from './PrivacyPolitic'


function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolitic />} />
    </Routes>
  )
}

export default App