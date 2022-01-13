/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const UserIcon = (props) => {
    
    const styles = css`
        object-fit: cover;
        object-position: center;
        border: 1px solid lightgrey;
        border-radius: 50%;
    `;

    return (
        <img className="User-icon" src={props.img} alt={props.alt} css={styles} />
    );
}
 
export default UserIcon;