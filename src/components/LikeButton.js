/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import SocialIcon from "./SocialIcon";

const LikeButton = (props) => {

    // Style
    const styles = css`
        padding: 8px;
    `;

    return (
        <div className="Heart-button" css={styles}>
            <button className="Heart-button__button">
                <SocialIcon img={props.img} alt="heart" />
            </button>
        </div>
    );
}
 
export default LikeButton;