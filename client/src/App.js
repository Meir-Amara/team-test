import logo from './logo.svg';
import './App.css';
import {auth} from '../firebase-config';
import { useState } from 'react';

function App() {
  const countrycode = "+972"
  const [phoneNumber ,setPhoneNumber] = useState(countrycode)
  const requestOTP = (e)=>{
    e.preventDefault;
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
