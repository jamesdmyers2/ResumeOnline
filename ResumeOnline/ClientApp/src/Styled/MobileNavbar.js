import styled from "styled-components";
import { Navbar } from "./Navbar";

export const MobileNavbar = {
    Wrapper: styled(Navbar.Wrapper)`
    align-self: flex-end;

    justify-content: center;
  `,
    Items: styled(Navbar.Items)`
    flex: 1;
    padding: 0 2rem;

    justify-content: space-around;
  `,
    Item: styled(Navbar.Item)`
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 1.2rem;
  `,
    Icon: styled.span``,
};