import React, {useState} from 'react'
import GlobalStyles from './components/GlobalStyles'

//Components
import Nav from './components/Nav'
import Footer from './components/Footer';
import ContactUs from './components/ContactUs'

//Pages
import Home from './pages/Home'
import MyWork from './pages/MyWork'
import MovieDetail from './pages/MovieDetail'
import About from './pages/About'

//ScrollTop
import ScrollTop from './components/ScrollTop'



import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';




const App = () => {

const [toggle, setToggle] = useState(false);

 const RefreshTop = () => {
    window.scrollTo(0, 0)
}

window.addEventListener('beforeunload', RefreshTop)


  return (
  <>
  
  <BrowserRouter>
  <ScrollTop />
  <ContactUs setToggle={setToggle} toggle={toggle} />
  <GlobalStyles />
 
  <Nav setToggle={setToggle} toggle={toggle} />
  <AnimatePresence exitBeforeEnter>
  <Switch>
          <Route exact path='/' component={Home} />  
          <Route path='/home' component={Home} />
          <Route path='/work' exact>
            <MyWork />
          </Route>
          <Route path='/work/:id'>
            <MovieDetail />
          </Route>
          <Route path='/about' component={About} />
  </Switch>
  </AnimatePresence>
  
  <Footer setToggle={setToggle} toggle={toggle}/>
  </BrowserRouter>
  </>

  );
}

export default App;
