import holbertonLogo from './assets/holberton-logo.jpg'
import './App.css'

function App() {
  return (
    <>
      <div className='App-header'>
        <img src={holbertonLogo} className="logo" alt="holberton logo" />
        <h1 style={{ color: '#e1003c' }}>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>
        Login to access the full dashboard
        </p>
      </div>
      <p className="App-footer">
      Copyright 2025 - holberton School
      </p>
    </>
  )
}

export default App
