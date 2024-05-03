import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserForm from './components/UserForm/UserForm';
import CustomerForm from './components/CustomerForm/CustomerForm';
import Login from './components/Login/Login';
import SearchBar from './components/SearchBar/SearchBar';
import Navbar from './components/Navbar/Navbar';
import CategoryBar from './components/CategoryBar/CategoryBar';

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<CategoryBar />}/>
                    <Route path='/signup' element={<UserForm />}/>
                    <Route path='/customerform' element={<CustomerForm />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}