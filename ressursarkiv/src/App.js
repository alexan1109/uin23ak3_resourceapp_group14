import Header from "./components/Header";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import "./css/sass/main.scss";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/:id" element={<Main/>} />
      </Routes>
      
    </>
  );
}

export default App;
