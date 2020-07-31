import React from 'react';
import { Home, Bookmark, User } from "react-feather";
import IsMobile from './IsMobile';

/*Styled-Components*/
import { Navbar } from "./../Styled/Navbar";
import { Styles } from "./../Styled/Styles";
import { CSSReset } from "./../Styled/CSSReset";
import { MobileNavbar } from "./../Styled/MobileNavbar";

function NavMenu() {
    return (
        <Styles.Wrapper>
            <CSSReset />
            {IsMobile() ? (
                <MobileNavbar.Wrapper>
                    <MobileNavbar.Items>
                        <MobileNavbar.Item to="/">
                            <MobileNavbar.Icon>
                                <Home size={16} />
                            </MobileNavbar.Icon>
                            Home
                        </MobileNavbar.Item>
                        <MobileNavbar.Item to="/counter">
                            <MobileNavbar.Icon>
                                <Bookmark size={16} />
                            </MobileNavbar.Icon>
                            Counter
                        </MobileNavbar.Item>
                        <MobileNavbar.Item to="/">
                            <MobileNavbar.Icon>
                                <User size={16} />
                            </MobileNavbar.Icon>
                            About
                        </MobileNavbar.Item>
                    </MobileNavbar.Items>
                </MobileNavbar.Wrapper>
            ) : (
                    <Navbar.Wrapper>
                        <Navbar.Logo>Logo</Navbar.Logo>
                        <Navbar.Items>
                            <Navbar.Item to="/">Home</Navbar.Item>
                            <Navbar.Item to="/counter">Counter</Navbar.Item>
                            <Navbar.Item to="/">About</Navbar.Item>
                        </Navbar.Items>
                    </Navbar.Wrapper>
                )}
        </Styles.Wrapper>
    );
}

export default NavMenu;