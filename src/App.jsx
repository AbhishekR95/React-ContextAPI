import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
import Context from "./Context";

function App() {
  return (
    <>
      <BrowserRouter>
        <Context>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Context>
      </BrowserRouter>
    </>
  );
}

export default App;
