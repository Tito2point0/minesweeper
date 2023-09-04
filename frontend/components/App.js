
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Header from './Header';
import Board from './Board';
import Home from './Home';
import Highscores from './Highscores';
import About from './About'

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Header />
    //     <Switch>
    //       <Route path="/easy">
    //         <Board difficulty="easy" />
    //       </Route>
    //       <Route path="/normal">
    //         <Board difficulty="normal" />
    //       </Route>
    //       <Route path="/hard">
    //         <Board difficulty="hard" />
    //       </Route>
    //       {/* Add a default route or 404 page */}
    //       {/* I have added this in server.js in server.use('*'...). It will yield us our 404 */}
    //       <Route path="/">
    //         <p>Page not found!</p>
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <>
      <header>
        <nav className='navbar'>
          <div className="hamburger-menu navbar-container">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>

            <ul className="menu__box">
              <nav>
                <li><Link to='/' className='menu__item'>Home</Link></li>
                <li><Link to='highscores' className='menu__item'>High Scores</Link></li>
                <li><Link to='about' className='menu__item'>About</Link></li>
              </nav>
            </ul>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='highscores' element={<Highscores />} />
        <Route path='about' element={<About />} />
    </Routes>
  </>
  );
}

export default App;
