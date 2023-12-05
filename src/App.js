import AddNewDealer from './AddNewDealer';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import ViewDealers from './ViewDealers';
import {Routes, Route, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import apiRequest from './ApiRequest.js';

function App() {

  const [dealers, setDealers] = useState([]);
  const [dealerId, setDealerId] = useState('');
  const [dealerName, setDealerName] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [apiError, setApiError] = useState(null);

  const handleAddNewDealer = (e) => {
    e.preventDefault();
    const newId = dealers.length ? dealers[dealers.length - 1].id + 1 : 1;
    const newDealer = {
      id: newId,
      dealerId: dealerId,
      dealerName: dealerName,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      state: state,
      zipCode: zipCode
    };
    const updatedDalers = [...dealers, newDealer];
    setDealers(updatedDalers);
    setDealerId('');
    setDealerName('');
    setAddressLine1('');
    setAddressLine2('');
    setCity('');
    setState('');
    setZipCode('');
    const requestPayloadObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newDealer)
    };
    apiRequest("http://localhost:6767/dealers", requestPayloadObj);
  }

  const handleDeleteDealer = (id) => {
    const dealersLeft = dealers.filter((eachDealer) => eachDealer.id !== id);
    setDealers(dealersLeft);
  }

  useEffect(() => {
    const fetchDealers = async () => {
      try {
        const response = await fetch('http://localhost:6768/dealers');
        if(!response.ok) throw Error("Error in Fetching Dealers");
        const dealers = await response.json();
        setDealers(dealers);
      } catch(err) {
        setApiError(err.message);
      } 
    }
    setTimeout(() => {
      (() => fetchDealers())();
    }, 2000);
  }, [])

  return (
    <div className="App">
      <nav className='menu'>
        <ul className='menu-options'>
          <li><Link to ="/" className='link'>Home</Link></li>
          <p>|</p>
          <li><Link to ="/dashboard" className='link'>Dashboard</Link></li>
          <p>|</p>
          <li><Link to ="/viewDealers" className='link'>View Dealers</Link></li>
          <p>|</p>
          <li><Link to ="/addDealer" className='link'>Add Dealer</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/viewDealers" element={<ViewDealers 
          dealers={dealers}
          handleDeleteDealer={handleDeleteDealer}
          apiError={apiError}
        />} />
        <Route path="/addDealer" element={<AddNewDealer dealerId={dealerId}
          setDealerId={setDealerId}
          dealerName={dealerName}
          setDealerName={setDealerName}
          addressLine1={addressLine1}
          setAddressLine1={setAddressLine1}
          addressLine2={addressLine2}
          setAddressLine2={setAddressLine2}
          city={city}
          setCity={setCity}
          state={state}
          setState={setState}
          zipCode={zipCode}
          setZipCode={setZipCode}
          handleAddNewDealer={handleAddNewDealer} />} />
      </Routes>
    </div>
  );
}

export default App;
