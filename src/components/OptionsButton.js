/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import SocialIcon from "../components/SocialIcon";

// Assets
import Dots from "../assets/options.svg";

const OptionsButton = () => {

    // Style
    const styles = css`
        button {
            padding: 0px 0px;

            /* Imports */
            .Social-icon {
                height: 32px;
            };
        };
    `;

    return (
        <div className="Options-button" css={styles}>
            <button className="Options-button__button">
                <SocialIcon img={Dots} alt="dots" />
            </button>
        </div>
    );
}
 
export default OptionsButton;