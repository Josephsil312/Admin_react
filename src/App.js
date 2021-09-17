import Sidebar from "./components/sidebar/Sidebar";

import "./App.css";
import Home from "./pages/home/Home";


function App() {
  return (
    <div className="container">
      
      <Sidebar />

      <Home />
    </div>
  );
}

export default App;
