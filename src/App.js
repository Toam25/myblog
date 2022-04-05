import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'


function App() {
  return (
    <>
      <header className="App-header">
        <Navbar />
      </header>
      <Home />
    </>
  );
}

export default App;
