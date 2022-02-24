import React, { useCallback, useEffect, useMemo, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Ism"
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Oshirish
      </button>
      <Box name={name} />
    </div>
  );
};

function Box({ name }) {
  let person = useMemo(() => {
    return (age) => ({
      name,
      age: 15,
      isStudent: false,
    });
  }, [name]);

  person(48);

  let a = useCallback(
    (b) => ({
      name,
      age: 18,
      isStudent: true,
    }),
    [name]
  );

  a("b");

  useEffect(() => {
    console.log(person);
  }, [person]);

  return <h1>{name}</h1>;
}

export default Info;
