import { Navbar, Main, Footer, StartHome, MainInfo, MRFullBodyScan} from "../components";
import React, { useEffect, useState, useRef } from 'react'; 
import Loader from '../components/Loader'; 
import Steps from '../components/Steps';
import { Link } from 'react-router-dom';
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
      <StartHome scanRef={scanRef}/>

      <div className='container'>
         <div className="steps-box" >
            <Steps />
            <div className="btn-center">
            <Link to="/bokanu" className="btn-navbar m-3 text-decoration-none">
              Boka undersökning
            </Link>
            </div>
            <p className="center-text">
              En erfaren röntgenläkare undersöker alltid röntgen bilderna
            </p>
            <div className='grid-deceases'>
          <div className='containers-deceases-info' >
          <h4 className='text-center-info'>För kontrastmedel i samband med MR maila oss innan bokning.  
       Vi har även Datortomografi (DT/CT), konventionell röntgen (tex skelett- och lungröntgen) samt ultraljud. 
       Vid intresse maila oss på info@rehabscan.se eller ring 010-210 22 31 </h4>
        </div></div>
            </div>
          </div>
          <MainInfo />
</div>
      <Main />
      <MRFullBodyScan ref={scanRef}/>
      <Footer /></div>
      )}
    </>
  )
}

export default Home