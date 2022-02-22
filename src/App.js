import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Users from "./Users";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Routes>
        <Route path="users" element={<Users id={count} />}></Route>
      </Routes>
      <p>{count}</p>
      <Link to="about">About</Link>
      <Link to="users">Users</Link>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Oshirish
      </button>
    </div>
  );
}

export default App;
