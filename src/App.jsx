import { Outlet } from 'react-router'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navber from './Components/Navber'
import SiteBer from './Components/SiteBer'
import About from './Components/About'
import Impact from './Components/Impact'
import { ToastContainer } from 'react-toastify';
import { createContext, useState } from 'react';
 
const dataPromiss = fetch("https://openapi.programming-hero.com/api/categories").then(res => res.json())

export const CardsData = createContext({})

function App() {

  const [addData, setAddData] = useState([])

  return (
    <>
      <CardsData.Provider value={{addData, setAddData}}>
        <Navber></Navber>
        <Banner></Banner>
        <div className='grid grid-cols-12 w-11/12 mx-auto mt-20 gap-5'>
          <div className='col-span-12 md:col-span-2 max-h-[580px] bg-white rounded-lg shadow-2xl p-2'><SiteBer dataPromiss={dataPromiss}></SiteBer></div>
          <div className='col-span-12 md:col-span-10'><Outlet></Outlet></div>
        </div>
        <About></About>
        <Impact></Impact>
        <Footer></Footer>
      </CardsData.Provider>
      <ToastContainer />
    </>
  )
}

export default App
