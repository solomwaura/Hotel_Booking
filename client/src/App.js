
import {
  BrowserRouter as Router,
  Route,
  Routes
  

} from "react-router-dom";

import Home from "./pages/home/Home"
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from "./pages/login/Login";
import Reserve from "./components/reserve/Reserve";
import { Register } from "./pages/register/Register";
function App() {
  return (
    <Router>
      <Routes>
          
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotels" element={<List />}></Route>
          <Route path="/hotels/:id" element={<Hotel />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/register" element={<Register />}> </Route>
          <Route path="/reserve" element={<Reserve />}> </Route>
        </Routes>
    </Router>
  );
}

export default App;
