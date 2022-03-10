import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

const HeaderContainer = styled.div`
  font-size: 3rem;
  font-weight: 900;
  text-decoration: ${(props) => {
    return props.deleted ? "line-through" : "none";
  }};
  color: ${(props) => (props.danger ? "red" : "blue")};
  font-family: ${(props) => props.family};
  /* transform: translate(
    ${(props) => `calc(0}px - 50%), calc(${0}px - 50%)`}
  ); */
`;

const Lyuboy = styled.form`
  background: blue;
  padding: 3rem 7rem;
  & input {
    background: green;
    border: none;
  }
`;

const SLink = styled(Link)`
  color: yellow;
`;

export default function Header() {
  //   const [cords, setCords] = useState([0, 0]);
  //   useEffect(() => {
  //     window.addEventListener("mousemove", (e) => {
  //       setCords([e.clientX, e.clientY]);
  //     });

  //     return () => {
  //       window.removeEventListener("mousemove");
  //     };
  //   }, []);
  return (
    <HeaderContainer deleted danger family="sans-serif">
      Header
      <SLink to={"/"}>dhdfhf</SLink>
      <Lyuboy>
        <input type="text" name="" id="" />
      </Lyuboy>
    </HeaderContainer>
  );
}
