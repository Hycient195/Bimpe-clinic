// import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import "@fontsource/poppins"; 

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
     </BrowserRouter>  
    </div>
  );
}

export default App;
