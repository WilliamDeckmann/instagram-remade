/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const CommentInput = () => {

    const styles = css`
        padding: 6px 16px;
        border-top: 1px solid lightgrey;
    `;

    return (
        <div className="CommentInput" css={styles}>
            "comment-input"
        </div>
    );
}
 
export default CommentInput;