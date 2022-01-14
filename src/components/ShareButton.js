/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import SocialIcon from "./SocialIcon";

const ShareButton = (props) => {

    // Style
    const styles = css`
        padding: 8px;
    `;

    return (
        <div className="Share-button" css={styles}>
            <button className="Share-button__button">
                <SocialIcon img={props.img} alt="share" /> 
            </button>
        </div>
    );
}
 
export default ShareButton;