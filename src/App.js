import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Checkout from "./Pages/Checkout/Checkout/Checkout";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Header from "./Pages/Shared/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./Pages/Home/Services/Services";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <div className="container-fluid bg-light">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
