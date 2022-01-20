/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import SocialIcon from "../components/SocialIcon";

// Assets
import Arrow from "../assets/arrow.svg";

const RecommendationButton = () => {

    // Style
    const styles = css`
        button {
            height: 30px;
            padding: 0px 12px;
            border: 1px solid #dbdbdb;
            border-radius: 5px;
            display: flex;
            align-items: center;

            .Recommendation-button__arrow-down {
                transform: rotate(180deg);
            };

            /* Imports */
            .Social-icon {
                height: 12px;
            };
        };
    `;

    return (
        <div className="Recommendation-button" css={styles}>
            <button className="Recommendation-button__button">
                {/* <SocialIcon className="Recommendation-button__arrow-up" img={Arrow} alt="arrow" /> */}
                <SocialIcon className="Recommendation-button__arrow-down" img={Arrow} alt="arrow" />
            </button>
        </div>
    );
}
 
export default RecommendationButton;