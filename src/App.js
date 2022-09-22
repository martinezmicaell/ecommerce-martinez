//styles
import './App.scss'
import './variables.module.scss'

import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

//packages
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
        <div className="App">
            <Navbar />

            <ToastContainer limit={4} style={{}} />

            <ItemListContainer greetings="Bienvenidos a mi Tienda online!" />
        </div>
    );
}

export default App;
