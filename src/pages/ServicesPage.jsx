import React from 'react'
import { Footer, Navbar } from "../components"
import ServiceInfo from '../components/ServiceInfo.jsx'

const ServicesPage = () => {
  return (
    <>
    <div className='body'>
      <Navbar />
      <ServiceInfo/>
      <Footer /></div>
    </>
  )
}
export default ServicesPage