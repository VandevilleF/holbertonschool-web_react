import React from 'react'
import './App.css'
import Notifications from '../Notifications/Notifications'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Login from '../Login/Login'

function App() {
  return (
    <React.Fragment>
      <div className='root-notifications'>
        <Notifications />
      </div>
        <Header />
        <Login />
        <Footer />
    </React.Fragment>
  )
}

export default App
