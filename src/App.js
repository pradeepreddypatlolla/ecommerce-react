
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <div >
      <Header/>
      <hr />
      <div className='main'>
      <Routes>
      <Route exact path='/' element ={<Home/>}  />
      </Routes>
      </div>
     
    </div>
  );
}

export default App;
