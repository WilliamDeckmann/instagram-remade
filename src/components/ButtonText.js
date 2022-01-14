/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const ButtonText = (props) => {

    const styles = css`
        font-size: 14px;
        font-weight: bolder;
        color: #0095F6;
    `;

    return (
        <p className="Button-text" css={styles}>
            {props.text}
        </p>
    );
}
 
export default ButtonText;