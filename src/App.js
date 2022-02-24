// import Form from "./Components/Form";
// import Products from "./Components/Products";
// import Info from "./Components/Info";
import { useState } from "react";
import Form from "./Components/Form";
import useFetch from "./Hooks/useFetch";

function App() {
  // const [count, setCount] = useState(1);
  // const { loading, res } = useFetch(
  //   `https://jsonplaceholder.typicode.com/users/${count}`
  // );

  // console.log(loading, res);
  return (
    <div className="App">
      {/* {loading && (
        <img src="https://www.freeiconspng.com/thumbs/load-icon-png/load-icon-png-8.png" className="loading-image" />
      )}
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Oshirish
      </button> */}
      <Form />
    </div>
  );
}

export default App;
