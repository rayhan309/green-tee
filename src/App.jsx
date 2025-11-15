import { Outlet } from 'react-router'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navber from './Components/Navber'
import SiteBer from './Components/SiteBer'

const dataPromiss = fetch("https://openapi.programming-hero.com/api/categories").then(res => res.json())

function App() {

  return (
    <>
      <Navber></Navber>
      <Banner></Banner>
      <div className='grid grid-cols-12 w-11/12 mx-auto mt-20 gap-5'>
        <div className='col-span-12 md:col-span-2 min-h-10 max-h-[540px] bg-gray-200 rounded-lg shadow-2xl p-2'><SiteBer dataPromiss={dataPromiss}></SiteBer></div>
        <div className='col-span-12 md:col-span-10'><Outlet></Outlet></div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
