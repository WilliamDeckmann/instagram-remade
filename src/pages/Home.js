/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Slider from "../components/Slider";
import CardContainer from "../templates/CardContainer";

const Home = () => {

    const Styles = css`
        /* Style goes here */
    `;

    return (
        <div className="Home" css={Styles}>
            "Home"

            <CardContainer />
            <Slider />
        </div>
    );
}

export default Home;