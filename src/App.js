import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from "./Components/Home/Home"
import Feature from "./Components/Features/Feature"
import Navbar from './Components/Navbar/Navbar';
import Coin from './Components/Coin/Coin';
import Footer from './Components/Footer/Footer';
import Learning from './Components/Learning/Learning';
function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/news' element={<Feature />} />
      <Route path='/coin/:coinId' element={<Coin />} />
      <Route path="/learning-center" element={<Learning />} />
     </Routes>
     <Footer />

    </div>
  );
}

export default App;
