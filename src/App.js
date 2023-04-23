import { useEffect } from 'react';
import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import RootLayout from './layouts/route/RootLayout';
import Home from './pages/home/Home';
import ProjectDetails from './pages/projects/ProjectDetails';
import ReactGA from "react-ga4";
import useTrackTimeOnPage from './hooks/useTrackTimeOnPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/projects/:projectName' element={<ProjectDetails />} />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>
  )
);

ReactGA.initialize("G-9Z5MFQENZ8");

function App() {
  useTrackTimeOnPage();
  
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: window.location.search
    });
  }, []);

  return (
      <RouterProvider router={router} />
  );
};

export default App;
