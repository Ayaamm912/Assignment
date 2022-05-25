import Navbar from './Component/Navbar/Navbar'
import Main from './Component/Main/Main'
import Learning from './Component/Learning/Learning';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import './App.css';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import NotFound from './Component/NotFound/NotFound';



function App() {
  return (
   <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path='/' element={<Main/>}></Route>
       <Route path='/$' element={<Learning/>}></Route>
       <Route path='/%' element={<Contact/>}></Route>
       <Route path='*' element={<NotFound/>}></Route>
     </Routes>
     </BrowserRouter>
  
    <Footer></Footer>
   </div>
  );
}

export default App;
