import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './login';
import RegisterForm from './signup';
import Navie from './Nav';
import About from './about';
import Contact from './contact';
import Plans from './plans';
import CarInsurancePlan from './carinsurance';
import HomeInsurancePlan from './homeinsurance';
import LifeInsurancePlan from './lifeinsurance';
import Home from './mainhomepage';
import QuoteForm from './quote';
import ClaimProcess from './claimprocess';
import InsuranceClaimStatusPage from './cliamstatus';
import ClaimIntimationPage from './claimintimation';

export default function Routing(){
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path='/nav' element={<Navie/>}></Route>
        <Route exact path='/signup' element={<RegisterForm/>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/nav' element={<Navie/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='plans' element={<Plans/>}></Route>
        <Route exact path='car' element={<CarInsurancePlan/>}></Route>
        <Route exact path='home' element={<HomeInsurancePlan/>}></Route>
        <Route exact path='life' element={<LifeInsurancePlan/>}></Route>
        <Route exact path='login' element={<Login/>}></Route>
        <Route exact path='quote' element={<QuoteForm/>}></Route>
        <Route exact path='claimprocess' element={<ClaimProcess/>}></Route>
        <Route exact path='claimstatus' element={<InsuranceClaimStatusPage/>}></Route>
        <Route exact path='claimintimation' element={<ClaimIntimationPage/>}></Route>
        
        </Routes>
        </BrowserRouter>
    )
}