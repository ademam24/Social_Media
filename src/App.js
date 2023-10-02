import { Routes ,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";




function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Profile" element={<Profile/>}/>
   </Routes>
    
    
    </>
  );
}

export default App;
