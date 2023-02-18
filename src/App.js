import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Help from './Pages/Help'
import Not from './Pages/Not'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path='/Register' element={<Register/>}></Route>
                    <Route path='/Contact' element={<Contact />}></Route>
                    <Route path='/Help' element={<Help />}></Route>
                    <Route path="*" element={<Not />}></Route>
                </Routes>
            </BrowserRouter>
        </>


    )
}
