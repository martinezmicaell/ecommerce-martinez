//styles
import './App.scss'
import './variables.module.scss'

//components
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import CartView from './components/CartView/CartView'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';

//Provider
import MyProvider from './context/CartContext'
//packages
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MyProvider>
                    <Navbar />
                    <ToastContainer limit={4} style={{}} />

                    <Routes>
                        <Route path="/" element={<ItemListContainer greetings="Bienvenidos a mi Tienda online!" />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        {/* <Route path="/detail" element={<ItemDetailContainer />} /> */}
                        <Route path="/cart" element={<CartView />} />
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                </MyProvider>

            </BrowserRouter>
        </div>
    );
}

export default App;
