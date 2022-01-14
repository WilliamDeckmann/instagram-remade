/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Navbar from "../components/Navbar";

const NavbarMain = () => {
    
    const styles = css`

    *{
        margin: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

        border-bottom: 1px solid #dbdbdb;
        padding: 11px;
        background-color: white;
        width: 100%;
        position: fixed;
        top: 0;
        overflow: hidden;
        z-index: 9999;
        
        
        img{
            object-fit: contain;
        }
    `;

    return (
    <nav css={styles}>
    <Navbar />
    </nav>
    );
}

export default NavbarMain;