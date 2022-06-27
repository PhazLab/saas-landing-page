import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Intro from './components/Hero/Intro'
import Content from './components/Content/Content'
import './App.css'

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
    </div>
}

export default App