import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Intro from './components/Hero/Intro'
import Content from './components/Content/Content'
import './App.css'
import Logos from './components/Logos/Logos'

const App = () => {
    return <div className='App'>
        {/* Header Navigation Bar  */}
        <header>
            <NavBar/>
        </header>
        {/* Hero banner with call to action  */}
        <Intro />
        {/* Content  */}
        <Content />
        {/* Logos section  */}
        <Logos />
    </div>
}

export default App