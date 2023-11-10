import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='container'>
          <HeaderComponent />
          <div className='container'>
            <Routes>
              <Route path='/' element={<ListEmployeeComponent />}></Route>
              <Route path='/employees' element={<ListEmployeeComponent />}></Route>
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
