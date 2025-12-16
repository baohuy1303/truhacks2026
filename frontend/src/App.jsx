import { useState } from 'react'
import './App.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import MainPage from './MainPage'
function App() {

  return (  
     <ParallaxProvider>
        <main className="flex-1 text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-100">
          <MainPage />
        </main>
     </ParallaxProvider>
  )
}

export default App
