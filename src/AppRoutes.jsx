import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppContext } from "./Appcontext";
import About from "./About";
import Home from "./Home";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Pixa from "./comps-pixas/Pixa";
import AppAtlas from "./comps-atlas/AppAtlas";
import VIP from "./comps-vips/VIP";
function AppRoutes() {
  const [number, setNumber] = useState(33);
  const [coins, setCoins] = useState(6);
  const [counter, setCounter] = useState(0);

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          val: "koko6",
          number,
          setNumber,
          coins,
          setCoins,
          counter,
          setCounter,
        }}
      >
     <header className="p-2 container bg-info d-flex justify-content-between align-items-center">
  <div className="h5 mb-0">Coins: {coins}</div>
  <nav>
    <Link to="/" className="mx-2 text-decoration-none text-dark">Home</Link>
    <Link to="/about" className="mx-2 text-decoration-none text-dark">About</Link>
    <Link to="/counter" className="mx-2 text-decoration-none text-dark">Counter</Link>
    <Link to="/counter2" className="mx-2 text-decoration-none text-dark">Counter2</Link>
    <Link to="/atlas" className="mx-2 text-decoration-none text-dark">Atlas</Link>
    <Link to="/pixa" className="mx-2 text-decoration-none text-dark">Pixa</Link>
    <Link to="/vip" className="mx-2 text-decoration-none text-dark">VIP</Link>
  </nav>
</header>

        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/counter" element={<Counter/>}></Route>
            <Route path="/counter2" element={<Counter2/>}></Route>
            <Route path="/atlas" element={<AppAtlas/>}></Route>
            <Route path="/pixa" element={<Pixa/>}></Route>
            <Route path="/vip" element={<VIP/>}></Route>


        </Routes>
      </AppContext.Provider>
     <footer className='p-2 container bg-danger'>footer</footer>

    </BrowserRouter>
   
  );
}

export default AppRoutes;
