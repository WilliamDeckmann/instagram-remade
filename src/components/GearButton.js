/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import SocialIcon from "../components/SocialIcon";

// Assets
import Gear from "../assets/settings.svg"

const GearButton = () => {

    // Style
    const styles = css`
        button {
            height: 30px;
            padding: 8px;
        };
    `;

    return (
        <div className="Gear-button" css={styles}>
            <button className="Gear-button__button">
                <SocialIcon img={Gear} alt="gear" />
            </button>
        </div>
    );
}
 
export default GearButton;