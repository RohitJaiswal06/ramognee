import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';

import ResetPassword from './components/ResetPassword';
import Displaycard from './components/Displaycard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/products' element={<Displaycard/>}/>
      </Routes>
    </div>
  );
}

export default App;
