import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  const [count, setCount] = useState(0);
  console.log(import.meta.env.VITE_ENVIRONMENT);
  return (
    <>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR lets try 123 hi
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more OH nice really</p>

      <Routes>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
