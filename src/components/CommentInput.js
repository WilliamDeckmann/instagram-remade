/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import CommentButton from "./CommentButton";
import EmojiButton from "./EmojiButton";

const CommentInput = () => {

    // Style
    const styles = css`
        display: flex;
        padding: 6px 16px;
        border-top: 1px solid lightgrey;

        .Comment-input__form {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 8px;
        };

        .Comment-input__input {
            flex: 1;
        };

        /* Imports */
        .post-button {
            opacity: .3;
        };

        .post-button:hover {
            opacity: 1;
        };
    `;

    return (
        <div className="Comment-input" css={styles}>
            <EmojiButton />
            <form className="Comment-input__form">
                <input className="Comment-input__input" placeholder="Tilføj en kommentar ..." />
                <CommentButton />
            </form>
        </div>
    );
}
 
export default CommentInput;