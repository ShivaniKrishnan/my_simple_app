import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="App-navbar">
        <div className="App-logo-text">MyApp</div>
        <ul className="App-nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to MyApp</h1>
        <p>Your modern React application starts here.</p>
        <a className="App-cta" href="#get-started">Get Started</a>
      </header>
    </div>
  );
}

export default App;
