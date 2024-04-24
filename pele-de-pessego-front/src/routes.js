import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UserForm from './components/UserForm/UserForm';
import CustomerForm from './components/CustomerForm/CustomerForm';
import Login from './components/Login/Login';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<UserForm />}/>
                <Route path='/customerform' element={<CustomerForm />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
}