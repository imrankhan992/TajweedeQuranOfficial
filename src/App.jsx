import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { Button } from "./components/ui/button";
function App() {
  
  return (
    <div className="max-w-[1800px] mx-auto ">
      <Home/>
    </div>
  );
}
export default App;
