import './App.css';
import './components/HomePage.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/HomePage'
import ProductDescriptions from './components/ProductDescriptions';
import Formjs from './components/layout/Formjs';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>      
          <Route path='/productdescriptions' element={<ProductDescriptions  />} />
          <Route path='/Formjs' element={<Formjs  />} />
           
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
