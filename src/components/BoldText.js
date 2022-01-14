/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const BoldText = (props) => {

    const styles = css`
        font-size: 14px;
        font-weight: bolder;
    `;

    return (
        <p className="Bold-text" css={styles}>
            {props.text}
        </p>
    );
}
 
export default BoldText;