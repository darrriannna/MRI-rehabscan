import { Navbar, Main, Footer, MRFullBodyScan, TopHome, HomePriceInfo, FeaturesOffer} from "../components";
import React, { useEffect, useState, useRef } from 'react'; 
import Loader from '../components/Loader'; 
import '../styles/index.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const scanRef = useRef(null);
  useEffect(() => {
    // Simulate loading data for the home page
    const loadContent = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));  // Simulate 3 seconds of loading
      setLoading(false);  // Hide the loader when done
    };

    loadContent();
  }, []);
  return (
    <>
     {loading && <Loader />}  {/* Show the loader when loading is true */}
      {!loading && (
        <div className="body">
      <Navbar />
      <div className="home-parent">
    <TopHome/> 
     <FeaturesOffer scrollToScan={scanRef}/>
    <HomePriceInfo/>
  
    
</div>
      <Main />
      <MRFullBodyScan ref={scanRef}/>
      <Footer /></div>
      )}
    </>
  )
}

export default Home