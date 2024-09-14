import React from 'react'
import { Button } from './components/ui/button'
import { SignInButton } from '@clerk/clerk-react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

function Home() {
  return (
    <div>
       {/*Header*/}
       <Header/>
       {/*Hero*/}
       <Hero/>
       {/* Footer */}
       <Footer/>
    </div>
  )
}

export default Home