/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import SocialIcon from "./SocialIcon";

const ChatButton = (props) => {
    
    // Style
    const styles = css`
        padding: 8px;
    `;

    return (
        <div className="Chat-button" css={styles}>
            <button className="Chat-button__button">
                <SocialIcon img={props.img} alt="comments" /> 
            </button>
        </div>
    );
}
 
export default ChatButton;