import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './page/home'
import About from './page/about'
import OmaheOpa from './page/content/omaheopa'
import NavigationBar from './components/navbar/navbar'

function App(){
  return (
    <div>
      <NavigationBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/omaheopa' element={<OmaheOpa/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;