import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserForm from './components/UserForm/UserForm';
import CustomerForm from './components/CustomerForm/CustomerForm';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import CategoryBar from './components/CategoryBar/CategoryBar';
import ProductForm from './components/ProductForm/ProductForm';
import NavbarAdmin from './components/NavbarAdmin/NavbarAdmin';
import AdminCategoryBar from './components/AdminCategoryBar/AdminCategoryBar';
import ProductStock from './components/ProductStock/ProductStock';

export default function AppRouter() {

    const isAdmin = localStorage.getItem('isAdmin');
    return (
        <Router>
            <div>
                 {isAdmin ==='true' ? <NavbarAdmin /> : <Navbar />}
                 {isAdmin && <AdminCategoryBar />}
                <Routes>
                    <Route path='/' element={<CategoryBar />}/>
                    <Route path='/signup' element={<UserForm />}/>
                    <Route path='/customerform' element={<CustomerForm />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/productform' element={<ProductForm />} />
                    <Route path='/productstock' element={<ProductStock />} />
                </Routes>
            </div>
        </Router>
    );
}
