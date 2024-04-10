import React from 'react'
import Hero from '../components/Hero'
import Homecards from '../components/Homecards'
import JobListings from '../components/JobListings'
import ViewAll from '../components/ViewAll'

const HomePage = () => {
  return (
    <>
    <Hero/>
    <Homecards/>
    <JobListings/>
    <ViewAll/>
    </>
  )
}

export default HomePage