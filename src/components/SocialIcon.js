/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

const SocialIcon = (props) => {

    const styles = css`
        height: 24px;
    `;

    return (
        <img className="Social-icon" src={props.img} alt={props.alt} css={styles} />
    );
}
 
export default SocialIcon;