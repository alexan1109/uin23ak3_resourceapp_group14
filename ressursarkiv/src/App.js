import { Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Header from './components/Header';
import Html from './components/Html';
import JavaScript from './components/JavaScript';
import Main from './components/Main';
import Navigation from './components/Navigation';
import React from './components/React';
import Resources from './components/Resources';
import Sanity from './components/Sanity';
import './css/sass/main.scss';
import { resources } from './data/ressurser';



function App() {
  return (
    <>
    <Header title={"Resussarkiv"} />
    <Navigation />
    <Routes>
      <Route index path='/html' element={<Html />} />
      <Route path='/javascript' element={<JavaScript />} />
      <Route path='/react' element={<React />} />
      <Route path='/headless-cms' element={<Sanity />}/>
      <Route path='*' element={<Error />} />
    </Routes>
    
    </>
    )
  }

export default App;
