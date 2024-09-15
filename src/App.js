import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css';
import Add from './component/Add';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
