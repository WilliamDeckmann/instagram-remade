/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
const Home = () => {

    const Home = css`
        padding: 20px;
        color: red;

        .container {
          color: blue;
        }
    `;

    return (
        <div css={Home}>
            "Home"
            <div className="container">
              "container"
            </div>
        </div>
    );
}

export default Home;