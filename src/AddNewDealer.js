import React from 'react'
import './AddNewDealer.css';

const AddNewDealer = ({dealerId, setDealerId, dealerName, setDealerName, addressLine1, setAddressLine1, addressLine2, setAddressLine2, city, setCity, state, setState, zipCode, setZipCode, handleAddNewDealer}) => {

  return (
    <main className='addNewDealer'>
      <form className='addNewDealerForm' onSubmit={handleAddNewDealer}>
        <h1>New Dealer Info</h1>
        <div className='dealerInfo'>
          <label htmlFor='dealerId' className='fieldName'>Dealer ID</label>
          <input
            className='fieldInput' 
            type='text'
            id='dealerId'
            autoFocus
            required
            value={dealerId}
            onChange={(e) => setDealerId(e.target.value)}
          >
          </input>
        </div>

        <div className='dealerInfo'>
          <label htmlFor='dealerName' className='fieldName'>Dealer Name</label>
          <input
            className='fieldInput' 
            type='text'
            id='dealerName'
            required
            value={dealerName}
            onChange={(e) => setDealerName(e.target.value)}
          >
          </input>
        </div>

        <div className='dealerInfo'>
          <label htmlFor='dealerAddressLine1' className='fieldName'>Address Line 1</label>
          <input
            className='fieldInput' 
            type='text'
            id='dealerAddressLine1'
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
          >
          </input>
        </div>

        <div className='dealerInfo'>
          <label htmlFor='dealerAddressLine2' className='fieldName'>Address Line 2</label>
          <input
            className='fieldInput' 
            type='text'
            id='dealerAddressLine2'
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          >
          </input>
        </div>

        <div className='dealerInfo'>
          <label htmlFor='dealerCity' className='fieldName'>City</label>
          <input
            className='fieldInput' 
            type='text'
            id='dealerCity'
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
          </input>
        </div>

        <div className='dealerInfo'>
          <label htmlFor='dealerState' className='fieldName'>State</label>
          <input
            className='fieldInput' 
            type='text'
            id='dealerState'
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
          </input>
        </div>

        <div className='dealerInfo'>
          <label htmlFor='dealerZipCode' className='fieldName'>Zip Code</label>
          <input
            className='fieldInput' 
            type='text'
            id='dealerZipCode'
            required
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          >
          </input>
        </div>

        <div className='addDealerBtn'>
          <button>CLEAR</button>
          <button type='submit'>ADD DEALER</button>
        </div>

      </form>
    </main>
  )
}

export default AddNewDealer