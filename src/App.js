import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Instructor from './components/Instructor/Instructor';
import Course from './components/Course/Course'
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/course">
            <Header></Header>
            <Course></Course>
            <Footer></Footer>
          </Route>
          <Route path="/instructor">
            <Header></Header>
            <Instructor></Instructor>
            <Footer></Footer>
          </Route>
          <Route path="/contact">
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path='/notfound'>
            <NotFound></NotFound>
          </Route>
          <Route path='/*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
