/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import ButtonText from "./ButtonText";

const CommentButton = () => {

    // Style
    const styles = css`
        opacity: .3;
    `;

    // Style (active)
    const styles_buttonActive = css`
        opacity: 1;
    `;

    return (
        <div className="Comment-button" css={styles}>
            <button className="Comment-button__button">
                <ButtonText text="Slå op" />
            </button>
        </div>
    );
}
 
export default CommentButton;