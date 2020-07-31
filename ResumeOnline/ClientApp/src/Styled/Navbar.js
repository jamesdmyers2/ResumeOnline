import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Navbar = {
    Wrapper: styled.nav`
    flex: 1;

    align-self: flex-start;

    padding: 1rem 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: cornflowerblue;

  `,
    Logo: styled.h1`
    border: 1px solid gray;
    padding: 0.5rem 1rem;
  `,
    Items: styled.ul`
    /*display: flex;*/
    list-style: none;
  `,
    Item: styled(Link)`
    padding: 0 1rem;
    cursor: pointer;
&:hover {
        transform: scale(1.25);
    }
  `,
};