/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import BoldText from "./BoldText";

const MessageButton = () => {

    // Style
    const styles = css`
        button {
            height: 30px;
            padding: 5px 9px;
            border: 1px solid #dbdbdb;
            border-radius: 5px;
            display: flex;
            align-items: center;
        };
    `;

    return (
        <div className="Message-button" css={styles}>
            <button className="Message-button__button">
                <BoldText text="Besked" />
            </button>
        </div>
    );
}
 
export default MessageButton;