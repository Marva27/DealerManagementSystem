import Table from 'react-bootstrap/Table';
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import './ViewDealers.css';

const ViewDealers = ({dealers, handleDeleteDealer, apiError}) => {
  return (
    <main className='dealersTable'>
      {!apiError && <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Dealer Id</th>
          <th>Dealer Name</th>
          <th>Address Line1</th>
          <th>Address Line2</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {dealers.map((eachDealer) => (
          <tr key={eachDealer.id}>
            <td>{eachDealer.id}</td>
            <td>{eachDealer.dealerId}</td>
            <td>{eachDealer.dealerName}</td>
            <td>{eachDealer.addressLine1}</td>
            <td>{eachDealer.addressLine2}</td>
            <td>{eachDealer.city}</td>
            <td>{eachDealer.state}</td>
            <td>{eachDealer.zipCode}</td>
            <td className='actionButtons'>
              <button className='editDealer'><FaEdit /></button>
              <button className='deleteDealer' onClick={() => handleDeleteDealer(eachDealer.id)}><FaTrashAlt /></button>
            </td>
          </tr>
        ))}
      </tbody>
      </Table>}
      {apiError && <p className='apiError'>Error in loading dealers...</p>}
    </main>
    
  )
}

export default ViewDealers