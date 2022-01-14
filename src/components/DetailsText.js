/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const DetailsText = (props) => {

    // Style
    const styles = css`
        font-size: 10px;
        font-weight: normal;
        color: #8E8E8E;
    `;

    return (
        <p className="Details-text" css={styles}>
            {props.text}
        </p>
    );
}
 
export default DetailsText;