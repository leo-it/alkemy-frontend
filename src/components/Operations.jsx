import React,{useState} from 'react';
import {Navbar} from "./Navbar"
import Form from './Form';
import GetItems from './GetItems';

const Operations = () => {
    return (
  <div>
  <Navbar/>
  <Form/>
  <GetItems large={100}/>
   </div>
);
}
export default Operations;

