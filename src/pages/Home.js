/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import CardContainer from "../templates/CardContainer";

const Home = () => {

    const Styles = css`
        /* Style goes here */
    `;

    return (
        <div className="Home" css={Styles}>
            "Home"

            <CardContainer />
        </div>
    );
}
 
export default Home;