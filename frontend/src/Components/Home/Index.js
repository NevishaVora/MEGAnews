import { useEffect, useState } from 'react';
import Loading from '../Loading/Index';
import Navbar from '../Navbar/Index';
import Slider from '../Slider/Index';
import Cards from '../Cards/Index';
import PPost from '../PPost/Index';
import Cricket from '../Cricket/Index';
import NPost from '../NPost/Index';
import Video from '../Video/Index';
import TrendyPost from '../TrendyPost/Index';
import Temprature from '../Temprature/Index';
import TopPost from '../TopPost/Index';
import Footer from '../Footer/Index';



const Home=() =>{
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading screen for 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Hide loading screen after 4 seconds
        }, 4000);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

  return (
    <>
        {isLoading ? (
           <Loading/>// Show Loading screen while loading
        ) : (
            <div>
                <Navbar/>
                <Slider/>
                <Cards/>
                <PPost/>
                <Cricket/>
                <NPost/>
                <Video/>
                {/* <TrendyPost/> */}
                <Temprature/>
                {/* <TopPost/> */}
                <Footer/>
            </div>
        )}
    </>
  );
}

export default Home;
