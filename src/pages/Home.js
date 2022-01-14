/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import CardContainer from "../templates/CardContainer";

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

        .Test-container {
            width: 100%;
            height: 500px;
            border: 1px solid red;
            text-align: center;
        };
    `;

    return (
        <div className="Home" css={Styles}>
            <main className="Home__main">
                <CardContainer />
                <div className="Test-container">
                    "recommendations"
                </div>
            </main>
        </div>
    );
}

export default Home;