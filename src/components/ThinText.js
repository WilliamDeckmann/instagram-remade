/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const ThinText = (props) => {

    // Style
    const styles = css`
        font-size: 14px;
        font-weight: normal;
    `;

    return (
        <p className="Thin-text" css={styles}>
            {props.text}
        </p>
    );
}
 
export default ThinText;