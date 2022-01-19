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
    `;

    return (
        <div className="Home" css={Styles}>
            <main className="Home__main">
                <CardContainer />
                <aside className="Home__aside">
                    <Suggestions />
                    <Footer />
                </aside>
                <Slider />
            </main>
        </div>
    );
}

export default Home;