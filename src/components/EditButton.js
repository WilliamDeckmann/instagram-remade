/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

// Components
import BoldText from "./BoldText";

const EditButton = () => {

    // Style
    const styles = css`
        button {
            height: 30px;
            padding: 5px 9px;
            border: 1px solid #dbdbdb;
            border-radius: 5px;
            display: flex;
            align-items: center;
        };
    `;

    return (
        <div className="Edit-button" css={styles}>
            <button className="Edit-button__button">
                <BoldText text="Rediger profil" />
            </button>
        </div>
    );
}
 
export default EditButton;