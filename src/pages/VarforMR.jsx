import React from 'react'
import { Footer, MRFullBodyScan, Navbar } from "../components"
import WhyMR from '../components/WhyMR.jsx'

const VarforMR = () => {
  return (
    <>
    <div className='body'>
      <Navbar />
      <WhyMR/>
      <MRFullBodyScan/>
      <Footer />
      </div>
    </>
  )
}

export default VarforMR