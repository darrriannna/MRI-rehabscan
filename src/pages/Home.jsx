import { Navbar, Main, Footer } from "../components";
import React, { useEffect, useState } from 'react'; 
import Loader from '../components/Loader'; 
function Home() {
  const [loading, setLoading] = useState(true);

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
      <Main />
      <Footer /></div>
      )}
    </>
  )
}

export default Home