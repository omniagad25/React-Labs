import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import AboutMe from './components/about-me/AboutMe';
import Skills from './components/skills/Skills';
import Footer from './components/footer/Footer';


function App() {
  const name = 'Omnia Gad';
  const info = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore assumenda quaerat sit asperiores voluptatibus id nobis iure ipsum, suscipit accusamus excepturi doloremque in. Atque culpa optio assumenda alias, ex accusantium.';

  return (
    <>
    <NavBar></NavBar>
    <Hero name ={name}></Hero>
    <AboutMe name={name} info={info}></AboutMe>
    <Skills></Skills>
    <Footer></Footer>
    </>
  );
}

export default App;
