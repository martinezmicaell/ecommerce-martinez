//styles
import './App.scss'
import './variables.module.scss'

//components
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//packages
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <ToastContainer limit={4} style={{}} />

                <Routes>
                    <Route path="/" element={<ItemListContainer greetings="Bienvenidos a mi Tienda online!" />} />

                    <Route path='/detail' element={<ItemDetailContainer />} />

                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
