import { useEffect } from 'react';
import ReactGA from "react-ga4";

const useTrackTimeOnPage = () => {

  useEffect(()=>{
      const startTime = new Date().getTime(); //time in milliseconds
    
      const trackFunction = setInterval(() => {
        const timeSpent = Math.round((new Date().getTime() - startTime) / 1000); //to seconds
        ReactGA.set({ timeOnPage: timeSpent });
      }, 1000);

      return ()=>{
        clearInterval(trackFunction);
      }
  }, []);
};

export default useTrackTimeOnPage;