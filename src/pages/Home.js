/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import CardContainer from "../templates/CardContainer";
import Suggestions from '../templates/Suggestions';

const Home = () => {

    const Styles = css`
        display: flex;
        justify-content: center;
        .Home__main {
            max-width: 935px;
            width: 100%;
            margin-top: 30px;
            display: grid;
            grid-template-columns: auto 293px;
            gap: 28px;
        };

        // .Test-container {
        //     width: 100%;
        //     height: 500px;
        //     border: 1px solid red;
        //     text-align: center;
        // };

    `;

    return (
        <div className="Home" css={Styles}>
            <main className="Home__main">
                <CardContainer />
                <div className="Test-container">
                    <Suggestions />
                   <div style={{position:"fixed", maxWidth:"350px"}}><Footer /></div>
                </div>
                <Slider />
            </main>
        </div>
    );
}

export default Home;