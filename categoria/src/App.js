import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Categorias} from './components/categoria';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Categorias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;