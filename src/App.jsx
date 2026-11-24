// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/HomePage/Home';
import Login from './components/LoginPage/Login';
import Signup from './components/SignupPage/Signup';
import ForgotPassword from './components/ForgotPasswordPage/ForgotPassword';
import RoomList from './components/RoomList/RoomListFilter';
import LoginHeader from './components/LoginHeader';
import Registration from './components/SignupPage/Registration';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Guesthouse from './components/Guesthouse/GuesthouseList';
import GuesthouseDetails from './components/Guesthouse/GuesthouseDetails';
import FAQ from './components/CMS pages/FAQ';
import PrivacyPolicy from './components/CMS pages/PrivacyPolicy';
import TermAndConditions from './components/CMS pages/TermAndConditions';
import MyAccount from './components/UserProfile/MyAccount';

function App() {

  console.log("24-11-26, 11:15")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Registration />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          {/* <Route path='/guesthouse-list' element={<Guesthouse />} /> */}
          <Route path='/guesthouse-details' element={<GuesthouseDetails />} />
          <Route path='/room-list' element={<RoomList />} />
          <Route path='/room-list-filter' element={<RoomList />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/termandconditions' element={<TermAndConditions />} />
          <Route path='/my-account' element={<MyAccount />} />
          <Route path='/wallet' element={<MyAccount />} />
          <Route path='/booking-history' element={<MyAccount />} />
          <Route path='/reviews' element={<MyAccount />} />
          <Route path='/notifications' element={<MyAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;