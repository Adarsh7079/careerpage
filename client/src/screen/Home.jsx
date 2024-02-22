import React from 'react';
import {Navbar,Footer,Card} from "../index"
import Main from './Main';

const Home = () => {
  return (
    <div>
        <div><Navbar/></div>
        <div><Main/></div>
        <div><Footer/></div>
    </div>
  )
}

export default Home