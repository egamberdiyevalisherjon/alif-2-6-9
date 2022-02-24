import React, { useEffect, useState } from "react";
import useDebounce from "../Hooks/useDebounce";

const Form = () => {
  // const searchRef = useRef();
  // const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    console.log(search);
  }, [search]);
  // console.log(search + 1);
  const onChange = useDebounce((e) => console.log(e.target.value), 1000);

  return (
    <div>
      <input
        onChange={onChange}
        // value={search}
        // ref={searchRef}
      />
      {/* <button
        onClick={() => {
          console.log(searchRef.current.value);
          searchRef.current.value = "123";
        }}
      >
        S
      </button> */}
      {/* <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Oshirish
      </button> */}
    </div>
  );
};

export default Form;
