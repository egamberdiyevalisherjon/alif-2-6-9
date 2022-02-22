import React, { useEffect, useState } from "react";

const Users = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    let unmounted = false;

    async function a() {}
    fetch(`http://jsonplaceholder.typicode.com/users/${props.id}?_limit=5`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          if (!unmounted) setUsers(data);
        }, 2000);
      });

    a();

    return () => {
      unmounted = true;
    };
  }, [props.id]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  console.log(users);

  return <div>Users</div>;
};

export default Users;
