//styles
import './App.scss'
import './variables.module.scss'

//components
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import CartContainer from './components/CartContainer/CartContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Provider
import MyProvider from './context/CartContext'
//packages
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Firebase
import { firestore, analytics } from './services/firestore';

function App() {
    return (
        <div className="App">
            {console.log(firestore)}
            <BrowserRouter>
                <MyProvider>
                    <Navbar />
                    <ToastContainer limit={4} style={{}} />

                    <Routes>
                        <Route path="/" element={<ItemListContainer greetings="Bienvenidos a mi Tienda online!" />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        {/* <Route path="/detail" element={<ItemDetailContainer />} /> */}
                        <Route path="/cart" element={<CartContainer />} />
                        <Route path='*' element={<NotFound />}></Route>
                    </Routes>
                </MyProvider>

            </BrowserRouter>
        </div>
    );
}

export default App;
