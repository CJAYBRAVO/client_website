import React from 'react'
import Hero from '../components/Hero'
import Shortquotes from '../components/Shortquotes'
import Billing from '../components/Billing'
import Voicing from '../components/Voicing'
import Reviews from '../components/Reviews'
import Service from '../components/Service'


const Home = () => {
  return (
    <div>
        <Hero />
      <Shortquotes />
      <Billing />
      <Voicing />
      <Reviews />
      <Service />
    </div>
  )
}

export default Home