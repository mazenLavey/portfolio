import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom';
import RootLayout from './layouts/route/RootLayout';
import Home from './pages/home/Home';
import ProjectDetails from './pages/projects/ProjectDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/projects/:projectName' element={<ProjectDetails />} />

      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>
  )
)
function App() {

  return (
      <RouterProvider router={router} />
  );
};

export default App;
