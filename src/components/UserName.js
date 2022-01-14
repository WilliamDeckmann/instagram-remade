/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const UserName = (props) => {

    const styles = css`
        font-size: 28px;
        font-weight: 300;
    `;

    return (
        <p className="User-name" css={styles}>
            {props.text}
        </p>
    );
}
 
export default UserName;