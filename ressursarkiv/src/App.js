import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Resources from './components/Resources';
import './css/sass/main.scss';
import { resources } from './data/ressurser';



function App() {
  return (
    <>
    <Header title={"Resussarkiv"} />
    {resources.map((resources, category) => 
    <Navigation name={resources.category}/> )}
    </>
    )
  }

export default App;
