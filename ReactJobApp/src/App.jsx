import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Homecards from './components/Homecards';
import JobListings from './components/JobListings';
import ViewAll from './components/ViewAll';
import HomePage from './pages/homepage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  
  createRoutesFromElements(
  <Route path='/' element = {<MainLayout/>}>
  <Route index element = {<HomePage/>}/>
  <Route path='jobs' element = {<JobsPage/>}/>
  <Route path='*' element = {<NotFound/>}/>
  </Route>
)
)
const App = () => {
  return <RouterProvider router={router} />
};

export default App
