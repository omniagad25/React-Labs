import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './Components/NavBar/NavBar';
import Router from "./router";


function App() {
  return (
    <div className="App">
        <NavbarComponent/>
        <Router/>
    </div>
  );
}

export default App;
