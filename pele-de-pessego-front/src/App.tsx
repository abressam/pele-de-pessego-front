import './App.css';
import Router from './routes'

import CustomerForm from './components/CustomerForm/CustomerForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Router/><br/> */}
        <CustomerForm />
      </header>
    </div>
  );
}

export default App;

