/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import SocialIcon from "../components/SocialIcon";

// Assets
import Cross from "../assets/crosswhite.svg";

const CloseButton = () => {

    // Style
    const styles = css`
        padding: 8px;

        .Social-icon {
            height: 24px;
        };
    `;

    return (
        <div className="Close-button" css={styles}>
            <SocialIcon img={Cross} alt="cross" />
        </div>
    );
}
 
export default CloseButton;