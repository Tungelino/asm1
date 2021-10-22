import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap'
import StaffList from './components/StaffListComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
        </div>
      </Navbar>
      <StaffList />
    </div>
  )
}

export default App;
