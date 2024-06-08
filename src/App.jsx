import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Category from "./Pages/Category";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
