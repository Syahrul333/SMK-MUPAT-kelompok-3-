import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './page/home'
import OmaheOpa from './page/content/omaheopa'
import RiverWalk from './page/content/riverwalk'
import HutanPinus from './page/content/hutanpinus'
import CurugSewu from './page/content/curugsewu'
import PantaiNgebum from './page/content/pantaingebum'
import NavigationBar from './components/navbar/navbar'

function App(){
  return (
    <div>
      <NavigationBar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/omaheopa' element={<OmaheOpa/>}/>
          <Route path='/riverwalk' element={<RiverWalk/>}/>
          <Route path='/hutanpinus' element={<HutanPinus/>}/>
          <Route path='/curugsewu' element={<CurugSewu/>}/>
          <Route path='/pantaingebum' element={<PantaiNgebum/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;