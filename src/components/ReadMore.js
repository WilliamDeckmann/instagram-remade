/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const ThinText = (props) => {

    // Style
    const styles = css`
        font-size: 14px;
        font-weight: normal;
        color: #8E8E8E;
    `;

    return (
        <button className="Thin-text" css={styles}>
            mere
        </button>
    );
}
 
export default ThinText;