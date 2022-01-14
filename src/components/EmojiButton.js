/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import SocialIcon from "./SocialIcon";

// Assets
import Smiley from "../assets/smiley.svg";


const EmojiButton = () => {

    // Style
    const styles = css`
        padding: 8px 16px 8px 0;
    `;

    return (
        <div className="Emoji-button" css={styles}>
            <button className="Emoji-button__button">
                <SocialIcon img={Smiley} alt="smiley" />
            </button>
        </div>
    );
}
 
export default EmojiButton;