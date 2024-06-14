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
import MainProduct from './components/MainProduct/MainProduct';
import CartProducts from './components/Cart/CartProducts';
import CustomerProfile from './components/CustomerProfile/CustomerProfile';
import Purchase from './components/Purchase/Purchase';
import Success from './components/Success/Success';

export default function AppRouter() {

    const isAdmin = localStorage.getItem('isAdmin');
    return (
        <Router>
            <div>
                {isAdmin === 'true' ? <NavbarAdmin /> : <Navbar />}
                {isAdmin === 'true' && <AdminCategoryBar />}
                <Routes>
                    <Route path='/' element={<CategoryBar />}/>
                    <Route path='/signup' element={<UserForm />}/>
                    <Route path='/signup/edit' element={<UserForm />}/>
                    <Route path='/customerform' element={<CustomerForm />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/productform/:id?' element={<ProductForm />} />
                    <Route path='/productstock' element={<ProductStock />} />
                    <Route path='/product/:id' element={<MainProduct />} />
                    <Route path='/product/:id/edit/:quantity' element={<MainProduct />} />
                    <Route path='/cart' element={<CartProducts />} />
                    <Route path='/customerprofile' element={<CustomerProfile />} />
                    <Route path='/purchase' element={<Purchase />} />
                    <Route path='/success' element={<Success />} />

                </Routes>
            </div>
        </Router>
    );
}
