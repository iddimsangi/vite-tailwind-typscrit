import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddList from "./components/AddList";
import Header from "./components/Header";
import Home from "./components/Home";
import SingleList from "./components/SingleList";

function App() {
  return (
  <div className="bg-slate-100 h-screen">
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/SingleList" element={<SingleList/>}/>
          <Route path="/AddList" element={<AddList/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
