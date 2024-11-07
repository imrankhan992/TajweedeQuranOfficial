import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { Button } from "./components/ui/button";
function App() {
  console.log(import.meta.env.BASE_URL);
  return (
    <div className="max-w-[1800px] mx-auto ">
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
