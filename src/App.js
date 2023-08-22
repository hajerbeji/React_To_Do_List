import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import SignUp from './components/SignUp'
import Page from './components/Page'
import Timer from './components/Timer'
import Sidebar from './components/Sidebar';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/main' element={<Page />} />
      </Routes>
  );
}

export default App;
