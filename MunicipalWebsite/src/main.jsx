import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

import Layout from './Layout.jsx';
import Home from './Pages/Home.jsx'
import NoticesPage from './Pages/NoticesPage.jsx';
import ServicesPage from './Pages/ServicesPage.jsx';
import ComplainPage from './Pages/ComplainPage.Jsx';
import SuggestionPage from './Pages/SuggestionPage.jsx';
import Visit from './Pages/Visit.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/Notices" element={<NoticesPage/>} />
       <Route path="/Services" element={<ServicesPage/>} />
        <Route path="/Complaints" element={<ComplainPage/>} />
         <Route path="/Suggestions" element={<SuggestionPage/>} />
          <Route path="/Visit" element={<Visit/>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);